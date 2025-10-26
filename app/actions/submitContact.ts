'use server'; // Marks this as a Server Action

import { google } from 'googleapis';
import { ContactFormData, contactFormSchema } from '../zschema'
import sendTelegramMessage from "@/app/tgmessage";


export async function submitContactForm(_prevState: ContactFormData, formData: FormData): Promise<ContactFormData> {
    // Parse and validate data on server (for security)
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string | undefined,
        phone: formData.get('phone') as string | undefined,
        whatsapp: formData.get('whatsapp') === 'on',
        telegram: formData.get('telegram') as string | undefined,
        tour: formData.get('tour') as string | undefined,
    };

    const validated = contactFormSchema.safeParse(data);
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
            const fmtPhone = validated.data?.phone ? '"' + validated.data.phone + '"' : '';
            let fmtTelegram = validated.data?.telegram || '';
            if (fmtTelegram.length > 0 && !fmtTelegram.startsWith('@')) {
                fmtTelegram = '@' + fmtTelegram;
            }
            const tgMessage = `Received new contact: ${validated.data?.name} -- ${fmtPhone} ${fmtTelegram})`;
            sendTelegramMessage(tgMessage).catch((error) => {
                console.error('Unhandled error in sendTelegramMessageInternal:', error);
            });
            // Append data (adjust range to your sheet, e.g., Sheet1!A:E for 5 columns)
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
                range: 'Contacts!A:F', // Update if your sheet name or columns differ
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[
                        validated.data?.name || '',
                        validated.data?.email || '',
                        fmtPhone,
                        fmtTelegram,
                        validated.data?.whatsapp ? 'Yes' : 'No',
                        validated.data?.tour || '',
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
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsapp,
        telegram: data.telegram,
        tour: data.tour,
        success: success,
        errMessage: msg
    };
}