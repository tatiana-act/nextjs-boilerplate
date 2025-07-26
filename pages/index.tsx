import Head from 'next/head';
import { HomePageProps } from '@/types';
import Script from 'next/script'
import '../styles/globals.css';
// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import ToursSection from '../components/ToursSection';
import CalendarSection from '../components/CalendarSection';
import FAQSection from '../components/FAQSection';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';

const Home: React.FC<HomePageProps> = ({ tours, events, upcomingEvents, faq }) => {
    return (
        <>
            <Head>
                <title>Discover City Tours - Explore Like Never Before</title>
                <meta name="description" content="Discover hidden gems and iconic landmarks with our expert guides" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" />

            <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <Header />
                <Hero />

                <main className="bg-white relative z-10 mt-screen">
                    <ToursSection tours={tours} />
                    <CalendarSection events={events} upcomingEvents={upcomingEvents} />
                    <FAQSection faq={faq} />
                    <FeedbackSection tours={tours} />
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;

export async function getStaticProps() {
    // In production, these would be API calls or database queries
    const tours = [
        {
            "id": "historic-downtown",
            "title": "Historic Downtown Walking Tour",
            "description": "Explore the rich history and architecture of our city's downtown core. Visit century-old buildings, learn about local legends, and discover the stories that shaped our community.",
            "price": 25,
            "icon": "fas fa-building",
            "duration": "2 hours",
            "maxParticipants": 15,
            "difficulty": "Easy"
        },
        {
            "id": "culinary-adventure",
            "title": "Culinary Adventure Tour",
            "description": "Taste your way through the city's best local eateries and hidden food gems. Sample authentic dishes, meet local chefs, and learn about our diverse culinary heritage.",
            "price": 45,
            "icon": "fas fa-utensils",
            "duration": "3 hours",
            "maxParticipants": 12,
            "difficulty": "Easy"
        },
        {
            "id": "photography-tour",
            "title": "Photography Hotspots Tour",
            "description": "Capture the city's most Instagram-worthy locations with professional photography tips. Perfect for both beginners and experienced photographers looking for unique perspectives.",
            "price": 35,
            "icon": "fas fa-camera",
            "duration": "2.5 hours",
            "maxParticipants": 10,
            "difficulty": "Moderate"
        },
        {
            "id": "haunted-night",
            "title": "Haunted City Night Tour",
            "description": "Brave the darkness and explore the city's most haunted locations. Hear spine-chilling tales of ghosts, mysteries, and unexplained phenomena that will give you goosebumps.",
            "price": 30,
            "icon": "fas fa-ghost",
            "duration": "2 hours",
            "maxParticipants": 20,
            "difficulty": "Easy"
        }
    ];

    const events = {
        "2025-7-26": "Historic Downtown Tour",
        "2025-7-27": "Culinary Adventure",
        "2025-7-28": "Photography Tour",
        "2025-7-30": "Haunted Night Tour",
        "2025-8-2": "Historic Downtown Tour",
        "2025-8-5": "Photography Tour"
    };

    const upcomingEvents = [
        {
            "id": "idue1",
            "title": "Historic Downtown Tour",
            "date": "July 26, 10:00 AM",
            "spotsAvailable": 2
        },
        {
            "id": "idue2",
            "title": "Culinary Adventure",
            "date": "July 27, 6:00 PM",
            "spotsAvailable": 5
        },
        {
            "id": "idue3",
            "title": "Photography Tour",
            "date": "July 28, 9:00 AM",
            "spotsAvailable": 3
        },
        {
            "id": "idue4",
            "title": "Haunted Night Tour",
            "date": "July 30, 8:00 PM",
            "spotsAvailable": 8
        }
    ];

    const faq = [
        {
            "id": "faq1",
            "category": "Booking",
            "question": "How long do the tours typically last?",
            "answer": "Most of our tours last between 2-3 hours, depending on the specific tour type. Walking tours are typically 2 hours, while our culinary tours can extend to 3 hours to allow time for tastings and interactions with local vendors."
        },
        {
            "id": "faq2",
            "category": "Booking",
            "question": "What should I wear on the tours?",
            "answer": "We recommend comfortable walking shoes and weather-appropriate clothing. For night tours, bring a light jacket. Photography tours may involve some walking on uneven surfaces, so sturdy footwear is essential."
        },
        {
            "id": "faq3",
            "category": "Booking",
            "question": "Can I cancel or reschedule my booking?",
            "answer": "Yes! You can cancel up to 24 hours before your tour for a full refund. Rescheduling is available up to 4 hours before the tour start time, subject to availability."
        },
        {
            "id": "faq4",
            "category": "category",
            "question": "Are the tours suitable for children?",
            "answer": "Most tours are family-friendly, with children under 12 receiving a 50% discount. However, our Haunted Night Tour is recommended for ages 13+ due to scary content. Please contact us for specific age recommendations."
        },
        {
            "id": "faq5",
            "category": "category",
            "question": "What happens if it rains?",
            "answer": "Light rain doesn't stop us! We provide umbrellas and continue with modified routes that include more indoor stops. In case of severe weather, we'll contact you to reschedule at no extra cost."
        }
    ];

    return {
        props: {
            tours,
            events,
            upcomingEvents,
            faq,
        },
    };
}

/*
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const fs = require('fs');
    const path = require('path');

    // Helper function to load JSON data
    const loadJSONFile = async <T>(filename: string): Promise<T | null> => {
        try {
            const filePath = path.join(process.cwd(), 'data', filename);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContent) as T;
        } catch (error) {
            console.error(`Error loading ${filename}:`, (error as Error).message);
            return null;
        }
    };

    try {
        // Load all data files
        const [tours, events, upcomingEvents, faq] = await Promise.all([
            loadJSONFile<Tour[]>('tours.json'),
            loadJSONFile<Event>('events.json'),
            loadJSONFile<UpcomingEvent[]>('upcoming-events.json'),
            loadJSONFile<FAQ[]>('faq.json'),
        ]);

        // Fallback data with proper typing
        const fallbackData: HomePageProps = {
            tours: tours || [
                {
                    id: "historic-downtown",
                    title: "Historic Downtown Walking Tour",
                    description: "Explore the rich history and architecture of our city's downtown core.",
                    price: 25,
                    icon: "fas fa-building",
                    duration: "2 hours",
                    maxParticipants: 15,
                    difficulty: "Easy",
                    includes: ["Professional guide"],
                    meetingPoint: "City Hall",
                    ageRecommendation: "All ages"
                }
            ],
            events: events || {
                "2025-7-26": "Historic Downtown Tour",
                "2025-7-27": "Culinary Adventure"
            },
            upcomingEvents: upcomingEvents || [
                {
                    id: "historic-july-26",
                    title: "Historic Downtown Tour",
                    date: "July 26, 10:00 AM",
                    spotsAvailable: 2,
                    totalSpots: 15,
                    tourId: "historic-downtown",
                    price: 25,
                    guide: "Sarah Mitchell",
                    weather: "Sunny, 75°F"
                }
            ],
            faq: faq || [
                {
                    id: "duration",
                    question: "How long do the tours typically last?",
                    answer: "Most tours last 2-3 hours depending on the type.",
                    category: "General"
                }
            ],
        };

        return {
            props: fallbackData,
            revalidate: 3600,
        };
    } catch (error) {
        console.error('Critical error loading data:', error);

        // Return minimal fallback data if everything fails
        return {
            props: {
                tours: [],
                events: {},
                upcomingEvents: [],
                faq: [],
            },
            revalidate: 60,
        };
    }
};

 */
