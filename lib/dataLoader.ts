import fs from 'fs';
import path from 'path';
import { Tour, Event, UpcomingEvent, FAQ } from '@/types';

export async function loadJSONData<T>(filename: string): Promise<T | null> {
    try {
        const filePath = path.join(process.cwd(), 'data', filename);
        const fileContent = await fs.promises.readFile(filePath, 'utf8');
        return JSON.parse(fileContent) as T;
    } catch (error) {
        console.error(`Error loading ${filename}:`, (error as Error).message);
        return null;
    }
}

export async function loadAllTourData(): Promise<{
    tours: Tour[];
    events: Event;
    upcomingEvents: UpcomingEvent[];
    faq: FAQ[];
}> {
    const [tours, events, upcomingEvents, faq] = await Promise.all([
        loadJSONData<Tour[]>('tours.json'),
        loadJSONData<Event>('events.json'),
        loadJSONData<UpcomingEvent[]>('upcoming-events.json'),
        loadJSONData<FAQ[]>('faq.json'),
    ]);

    return {
        tours: tours || [],
        events: events || {},
        upcomingEvents: upcomingEvents || [],
        faq: faq || [],
    };
}
