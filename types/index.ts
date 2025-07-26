export interface Tour {
    id: string;
    title: string;
    description: string;
    price: number;
    icon: string;
    duration: string;
    maxParticipants: number;
    difficulty: 'Easy' | 'Moderate' | 'Hard';
    includes: string[];
    meetingPoint: string;
    ageRecommendation: string;
    ageRestriction?: string;
}

export interface Event {
    [key: string]: string;
}

export interface UpcomingEvent {
    id: string;
    title: string;
    date: string;
    spotsAvailable: number;
    totalSpots: number;
    tourId: string;
    price: number;
    guide: string;
    weather: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface FeedbackFormData {
    name: string;
    email: string;
    tour: string;
    rating: string;
    feedback: string;
}

export interface HomePageProps {
    tours: Tour[];
    events: Event;
    upcomingEvents: UpcomingEvent[];
    faq: FAQ[];
}
