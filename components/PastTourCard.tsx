import React, { useState } from 'react';
import { PastTour } from '@/types/tour';
import Image from 'next/image';
import { formatDateToUserLocale } from '@/lib/utils';

interface PastTourCardProps {
    tour: PastTour;
    tourName: string;
}

const PastTourCard: React.FC<PastTourCardProps> = ({ tour, tourName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDateClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="upcoming-tour-card p-4 bg-white rounded-lg shadow-md max-w-md mx-auto relative">
            <div className="upcoming-tour-content">
                <h4 className="upcoming-tour-name text-xl font-bold mb-2">{tourName}</h4>
                <div className="upcoming-tour-details">
                    <div className="tour-datetime flex items-center space-x-4">
                        📅 {formatDateToUserLocale(tour.date)}
                        {tour.eventUrl && tour.eventImage &&
                        <button
                        onClick={handleDateClick}
                        className="date text-blue-600 hover:underline cursor-pointer"
                    >
                            Об этой экскурсии
                        </button>
                        }
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative bg-white p-4 rounded-lg max-w-[90vw] max-h-[80vh] overflow-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-4 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 z-60"
                        >
                            ✕
                        </button>
                        <div className="relative">
                            <a
                                href={tour.eventUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline mt-2 block"
                            >
                                📬 Посмотреть на Facebook
                            </a>

                            <Image
                                src={tour.eventImage}
                                alt={`Tour ${tourName} Image`}
                                layout="intrinsic"
                                width={500}
                                height={300}
                                objectFit="contain"
                                className="rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PastTourCard;