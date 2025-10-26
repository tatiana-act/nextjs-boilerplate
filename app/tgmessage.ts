'use server';

interface ActionResponse {
    success: boolean;
    error?: string;
}

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_BOT_CHATID = process.env.TELEGRAM_BOT_CHATID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function sendTelegramMessage(message: string): Promise<ActionResponse> {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_BOT_CHATID) {
        return {
            success: false,
            error: 'Telegram bot token or chat ID is not configured.',
        };
    }
    const payload = JSON.stringify({
        chat_id: TELEGRAM_BOT_CHATID,
        text: message,
    });
    try {
        const response = await fetch(TELEGRAM_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload,
        });

        const data = await response.json();
        if (data.ok) {
            return { success: true };
        } else {
            return {
                success: false,
                error: `Telegram API error: ${data.description}`,
            };
        }
    } catch (error) {
        console.error('Error sending Telegram message:', error);
        return {
            success: false,
            error: 'Failed to send Telegram message.',
        };
    }
}

export default sendTelegramMessage;