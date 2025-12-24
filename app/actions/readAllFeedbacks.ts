'use server'; // Marks this as a Server Action

import { google } from 'googleapis';
import { Review } from 'types/review'
import { unstable_cache } from "next/cache";

async function fetchFromGoogle(): Promise<Review[]> {
    let rawData: string[][];
    try {
        // Authenticate with Google
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });
        rawData = (await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
            range: 'Reviews!A:F',
        })).data.values || [];

    } catch (error) {
        console.error('Error reading from Google Sheets:', error);
        return [];
    }
    return convertToFeedbacks(rawData);
}

function convertToFeedbacks(values: string[][]): Review[] {
    if (!values.length) return [];
    return values.slice(1).map((row) => {
        const obj: Review = {
            id: (!!row[4] ? "string" : ""),
            tourProgramId: row[2],
            tourEventId: "string",
            tourDate: row[3],
            reviewer: row[0],
            link: "",
            image: "",
            text: row[5],
        }
        return obj;
    }).filter((review: Review) => review.id !== "" && review.reviewer !== "Имя" && review.reviewer !== "Name");
}

export const getAllReviews = unstable_cache(
    fetchFromGoogle,
    ['reviews-v3'],
    { revalidate: 10800 }
);