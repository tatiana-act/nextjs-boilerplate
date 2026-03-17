'use server'; // Marks this as a Server Action

import { google } from 'googleapis';
import {BookingFormData, getBookingFormSchema} from "@/app/zbkschema";
import sendTelegramMessage from "@/app/tgmessage";

export async function submitBookingForm(_prevState: BookingFormData, formData: FormData): Promise<BookingFormData> {
    const data = {
        tourId: formData.get('tourId') as string,
        date: formData.get('date') as string,
        name: formData.get('name') as string,
        contact: formData.get('contact') as string,
        groupSize: Number(formData.get('groupSize')) || 0,
        created: formData.get('created') as string,
        tour: formData.get('tour') as string,
        extra: formData.get('extra') as string
    };

    const validated = getBookingFormSchema(null).safeParse(data);
    let msg = '';
    let success = validated.success;
    if (!validated.success) {
        msg = validated.error.issues[0].message
        console.log(JSON.stringify(validated.error.issues[0]))
        console.log(JSON.stringify(formData))
        console.log(JSON.stringify(data))
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
            const tgMessage = `New book tour request from ${validated.data?.name} / ${validated.data?.contact}: ${validated.data?.tour} for group of ${validated.data?.groupSize} on ${validated.data?.date}`;
            sendTelegramMessage(tgMessage).catch((error) => {
                console.error('Unhandled error in sendTelegramMessageInternal:', error);
            });

            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
                range: 'Bookings!A:H',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        validated.data?.tourId || '',
                        validated.data?.date || '',
                        validated.data?.name || '',
                        validated.data?.contact || '',
                        validated.data?.groupSize || '',
                        validated.data?.created || '',
                        validated.data?.tour || '',
                        validated.data?.extra || ''
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
        tourId: data.tourId,
        date : data.date || '',
        name: data.name || '',
        contact: data.contact || '',
        groupSize: data.groupSize || 0,
        created: data.created || '',
        tour: data.tour || '',
        extra: data.extra || '',
        success: success,
        errMessage: msg
    };
}