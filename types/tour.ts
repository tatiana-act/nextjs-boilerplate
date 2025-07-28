export interface Tour {
    id: string;
    title: string;
    description: string;
    duration: string;
    price: number;
    imageUrl: string;
    highlights: string[];
    included: string[];
    meetingPoint: string;
    meetingPointLink: string;
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface UpcomingTour {
    id: string;
    tourId: string;
    date: string;
    time: string;
}
