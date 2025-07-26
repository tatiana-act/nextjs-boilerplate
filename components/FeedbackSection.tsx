import { useState } from 'react';
import { Tour, FeedbackFormData } from '@/types';

interface FeedbackSectionProps {
    tours: Tour[];
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({ tours }) => {
    const [formData, setFormData] = useState<FeedbackFormData>({
        name: '',
        email: '',
        tour: '',
        rating: '',
        feedback: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your feedback! We appreciate your input.');
            setFormData({
                name: '',
                email: '',
                tour: '',
                rating: '',
                feedback: ''
            });
            setIsSubmitting(false);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const ratingOptions: Array<{ value: string; label: string }> = [
        { value: '', label: 'Rate your experience' },
        { value: '5', label: '⭐⭐⭐⭐⭐ Excellent' },
        { value: '4', label: '⭐⭐⭐⭐ Very Good' },
        { value: '3', label: '⭐⭐⭐ Good' },
        { value: '2', label: '⭐⭐ Fair' },
        { value: '1', label: '⭐ Poor' },
    ];

    return (
        <section id="feedback" className="py-16 px-4 bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Share Your Experience
                </h2>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="tour" className="block text-sm font-bold mb-2">
                                Which Tour Did You Take?
                            </label>
                            <select
                                id="tour"
                                name="tour"
                                value={formData.tour}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option value="">Select a tour</option>
                                {tours.map(tour => (
                                    <option key={tour.id} value={tour.id}>
                                        {tour.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="rating" className="block text-sm font-bold mb-2">
                                Overall Rating
                            </label>
                            <select
                                id="rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                {ratingOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="feedback" className="block text-sm font-bold mb-2">
                                Your Feedback
                            </label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Tell us about your experience..."
                                className="w-full p-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-vertical"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
