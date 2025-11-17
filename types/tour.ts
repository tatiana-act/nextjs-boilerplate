export interface TourProgram {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  duration: string;
  price: number;
  imageUrl: string;
  highlights: string[];
  included: string[];
  extra?: string;
  meetingPoint: string;
  meetingPointLink: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UpcomingTourEvent {
  id: string;
  tourProgramId: string;
  date: string;
  time: string;
  price?: number;
  bonus?: string;
}

export interface PastTourEvent extends UpcomingTourEvent {
  eventUrl: string;
  eventImage: string;
  feedbacks: string[];
}
