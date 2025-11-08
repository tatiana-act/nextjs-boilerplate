'use server'; // Marks this as a Server Action

import { google } from 'googleapis';
import {FeedbackFormData, feedbackFormSchema} from "@/app/zfdschema";
import sendTelegramMessage from "@/app/tgmessage";

export async function submitFeedbackForm(_prevState: FeedbackFormData, formData: FormData): Promise<FeedbackFormData> {

    const data = {
        name: formData.get('name') as string,
        text: formData.get('text') as string,
        tour: formData.get('tour') as string,
        tourId: formData.get('tourId') as string,
        date: formData.get('date') as string,
    };

    const validated = feedbackFormSchema.safeParse(data);
    let msg = '';
    let success = validated.success;
    if (!validated.success) {
        msg = validated.error.issues[0].message
    } else {
        try {
            // Authenticate with Google
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                },
                scopes: ['https://www.googleapis.com/auth/spreadsheets'],
            });

            const sheets = google.sheets({version: 'v4', auth});
            const tgMessage = `Received new contact: ${validated.data?.name}`;
            sendTelegramMessage(tgMessage).catch((error) => {
                console.error('Unhandled error in sendTelegramMessageInternal:', error);
            });
            // Append data (adjust range to your sheet, e.g., Sheet1!A:E for 5 columns)
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
                range: 'Reviews!A:F',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        validated.data?.name || '',
                        validated.data?.tour || '',
                        validated.data?.tourId || '',
                        validated.data?.date || '',
                        '',
                        validated.data?.text || '',

                    ]],
                },
            })

        } catch (error) {
            success = false;
            msg = String(error?.toString() || 'unknown error');
            console.error('Error submitting to Google Sheets:', error);
        }
    }
    return {
        name: data.name,
        text: data.text || '',
        tour: data.tour || '',
        tourId: data.tourId,
        date : data.date || '',
        success: success,
        errMessage: msg
    };
}