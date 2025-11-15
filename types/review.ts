export interface Review {
    id: string; // review id
    tourProgramId: string;
    tourEventId: string;
    tourDate: string; // for tours that are not listed as public events
    reviewer: string;
    reviewLink: string;
    reviewImage: string;
}