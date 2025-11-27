import React  from 'react';
import { TourProgram, UpcomingTourEvent } from '@/types/tour';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import MyConstants from "@/lib/MyConstants";

interface CalendarSectionProps {
  allTours: ReadonlyMap<string, TourProgram>;
  upcomingTours: UpcomingTourEvent[];
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  allTours,
  upcomingTours
}) => {
  const handleEventClick = (info: any) => {
      //onEventClick(info.event.extendedProps.programId);
      document.getElementById(info.event.extendedProps.programId + "tour-card")?.scrollIntoView({ behavior: 'smooth' });
  }

  const events = upcomingTours.map((ut)=> {
      return {
          title: allTours.get(ut.tourProgramId)?.shortTitle || '',
          date: ut.date,
          allDay: true,
          extendedProps: {
              programId: ut.tourProgramId,
          }
      }
  })
  const initDate = upcomingTours.length === 0 ? new Date() : new Date(upcomingTours[0].date);

  return (
      <section className="section upcoming-tours-section" id={MyConstants.idCalendar}>
         <div className="container">
              <h2 className="section-title">Календарь событий</h2>
             <div className="tours-grid">
              <FullCalendar
        plugins={[
        dayGridPlugin,
        ]}
        headerToolbar={{
            left: 'prev,next',
            center: 'title'
        }}
        locale={'ru-RU'}
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
