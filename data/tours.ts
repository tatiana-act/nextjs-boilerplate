import { Tour } from '@/types/tour';

export const tours: Tour[] = [
    {
        id: '1',
        title: 'Historic Downtown Walking Tour',
        description: 'Discover the rich history and architectural marvels of our city center. This comprehensive walking tour takes you through centuries of urban development, from colonial foundations to modern skyscrapers. You\'ll explore hidden alleyways, visit historic landmarks, and hear fascinating stories about the people who shaped our city.',
        duration: '2.5 hours',
        price: 25,
        imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop',
        highlights: [
            'Visit the original city hall built in 1847',
            'Explore the historic financial district',
            'See beautiful Victorian architecture',
            'Learn about local legends and ghost stories',
            'Stop at the famous central market'
        ],
        included: [
            'Professional tour guide',
            'Historical maps and materials',
            'Entry to public buildings',
            'Small group experience (max 15 people)'
        ],
        meetingPoint: 'Main Street Plaza, by the bronze statue',
        difficulty: 'Easy'
    },
    {
        id: '2',
        title: 'Culinary Food & Market Tour',
        description: 'Embark on a delicious journey through our city\'s vibrant food scene. This tour combines visits to traditional markets, local eateries, and hidden culinary gems. You\'ll taste authentic local dishes, meet passionate food vendors, and learn about the cultural influences that shaped our unique cuisine.',
        duration: '3 hours',
        price: 45,
        imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        highlights: [
            'Visit 3 different local markets',
            'Taste 8+ local specialties',
            'Meet artisan food producers',
            'Learn cooking techniques from locals',
            'Explore ethnic neighborhoods'
        ],
        included: [
            'Expert food guide',
            'All food tastings',
            'Recipe cards to take home',
            'Market shopping tips',
            'Dietary restrictions accommodated'
        ],
        meetingPoint: 'Central Market main entrance',
        difficulty: 'Easy'
    },
    {
        id: '3',
        title: 'Sunset Photography & Scenic Views',
        description: 'Capture the city\'s most breathtaking views during the golden hour. This photography-focused tour takes you to the best vantage points and hidden scenic spots that most tourists never see. Perfect for photography enthusiasts and anyone wanting to see the city from unique perspectives.',
        duration: '2 hours',
        price: 35,
        imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
        highlights: [
            'Visit 5 stunning viewpoints',
            'Professional photography tips',
            'Best sunset viewing locations',
            'Hidden rooftop gardens',
            'Perfect Instagram spots'
        ],
        included: [
            'Photography guide',
            'Tripod rental available',
            'Photo editing tips',
            'Location map for future visits',
            'Small group (max 10 people)'
        ],
        meetingPoint: 'Hilltop Park visitor center',
        difficulty: 'Moderate'
    }
];
