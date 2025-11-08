import React, { useState } from 'react';
import { PastTour } from '@/types/tour';
import { formatDateToUserLocale } from '@/lib/utils';
import Popup from "reactjs-popup";
import FeedbackForm from "@/components/FeedbackForm";
import AboutTour from "@/components/AboutTour";

interface PastTourCardProps {
    tour: PastTour;
    tourName: string;
}

const PastTourCard: React.FC<PastTourCardProps> = ({ tour, tourName }) => {
    const [openPopupIndex, setOpenPopupIndex] = useState(0);

    const handleDetailsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setOpenPopupIndex(1);
    };
    const handleFeedbackClick = () => {
        setOpenPopupIndex(2);
    };
    const closePopup = () => {
        setOpenPopupIndex(0);
    };

    return (

    <div className="upcoming-tour-card p-2 bg-white rounded-lg shadow-md max-w-md mx-auto relative">
        {openPopupIndex === 2 && (
        <div>
            <Popup open={openPopupIndex === 2} closeOnDocumentClick onClose={closePopup}>
                <div className="modal">
                    <button className="close" onClick={closePopup}>
                        &times;
                    </button>
                    <FeedbackForm tourName={tourName} tourId={tour.tourId} date={tour.date} onClose={closePopup} />
                </div>
            </Popup>
        </div>
        )
        }
        {openPopupIndex === 1 && (
                    <div>
                        <Popup open={openPopupIndex === 1} closeOnDocumentClick onClose={closePopup}
                               contentStyle={{ padding: 0, border: "none", background: "transparent" }}>
                            <div className="modalfit">
                                <button className="close" onClick={closePopup}>
                                    &times;
                                </button>
                                <AboutTour eventUrl={tour.eventUrl} eventImage={tour.eventImage} tourName={tourName}/>
                            </div>
                        </Popup>
                    </div>
                )
            }

        <div className="upcoming-tour-content">
            <h4 className="upcoming-tour-name">{tourName}</h4>
                <div className="upcoming-tour-details tour-datetime">
                        📅 {formatDateToUserLocale(tour.date)}
            {tour.eventUrl && tour.eventImage &&
                <a
                    href="#"                     // required for accessibility (or use #! for no-scroll)
                    role="button"                // tells screen readers it’s a button
                    tabIndex={0}                 // make it focusable with keyboard
                    onClick={handleDetailsClick}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleDetailsClick(e as any);
                        }
                    }}
                >Об этой экскурсии</a>
            }
                </div>

            { isRecentTour(tour) && <button className="book-button" onClick={handleFeedbackClick}>
                Оставить свой отзыв
            </button>
            }
            </div>

    </div>
    );
};

function isRecentTour(tour: PastTour) {
    const date = tour.date.split('-')
    const old = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]))
    return (Date.now() - old.getTime()) < 45* 24 * 60 * 60 * 1000;
}

export default PastTourCard;