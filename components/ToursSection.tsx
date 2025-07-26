import { Tour } from '../types';

interface ToursSectionProps {
    tours: Tour[];
}

const ToursSection: React.FC<ToursSectionProps> = ({ tours }) => {
    const handleBookTour = (tour: Tour): void => {
        alert(`Booking system would open here for: ${tour.title}`);
    };

    return (
        <section id="tours" className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Our Featured Tours
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
                        >
                            <div className="h-64 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-5xl">
                                <i className={tour.icon}></i>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                                    {tour.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {tour.description}
                                </p>
                                <div className="text-sm text-gray-500 mb-6 space-y-1">
                                    <div>Duration: {tour.duration}</div>
                                    <div>Max participants: {tour.maxParticipants}</div>
                                    <div>Difficulty: {tour.difficulty}</div>
                                    <div>Meeting point: {tour.meetingPoint}</div>
                                </div>
                                <div className="text-2xl font-bold text-indigo-600 mb-6">
                                    ${tour.price}/person
                                </div>
                                <button
                                    onClick={() => handleBookTour(tour)}
                                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ToursSection;
