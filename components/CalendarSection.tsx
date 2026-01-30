'use client';

import React  from 'react';
import {PastTourEvent, TourProgram, UpcomingTourEvent} from '@/types/tour';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import MyConstants from "@/lib/MyConstants";
import {useTranslations} from "next-intl";

interface CalendarSectionProps {
  allTours: ReadonlyMap<string, TourProgram>;
  upcomingTours: UpcomingTourEvent[];
  recentTours: PastTourEvent[];
  locale: string;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  allTours,
  upcomingTours,
  recentTours,
  locale
}) => {
  const handleEventClick = (info: any) => {
      document.getElementById('tour-card-' + info.event.extendedProps.eventId)?.scrollIntoView({ behavior: 'smooth' });
      //document.getElementById(info.event.extendedProps.programId + "tour-card")?.scrollIntoView({ behavior: 'smooth' });
  }

  const futureEvents = upcomingTours.map((ut)=> {
      return {
          title: allTours.get(ut.tourProgramId)?.shortTitle || '',
          date: ut.date,
          allDay: true,
          extendedProps: {
              programId: ut.tourProgramId,
              eventId: ut.id,
          }
      }
  })

  const pastEvents = recentTours.map((rt)=> {
      return {
          title: allTours.get(rt.tourProgramId)?.shortTitle || '',
          date: rt.date,
          allDay: true,
          extendedProps: {
            programId: rt.tourProgramId,
            eventId: rt.id,
          }
        }
    })
  const events = pastEvents.concat(futureEvents);
  const initDate = upcomingTours.length === 0 ? new Date() : new Date(upcomingTours[0].date);
  const t = useTranslations('Calendar');

  return (
      <section className="section upcoming-tours-section" id={MyConstants.idCalendar}>
         <div className="container">
              <h2 className="section-title">{t('title')}</h2>
             <div className="tours-grid">
              <FullCalendar
        plugins={[
        dayGridPlugin,
        ]}
        firstDay={locale == 'ru' ? 1 : 7}
        headerToolbar={{
            left: 'prev,next',
            center: 'title'
        }}
        locale={locale}
        initialView='dayGridMonth'
        initialDate={initDate}
        nowIndicator={true}
        editable={false}
        selectable={true}
        selectMirror={true}
        eventClick={handleEventClick}
        events={events}
    />
             </div>
         </div>
      </section>
  );
};

export default CalendarSection;
