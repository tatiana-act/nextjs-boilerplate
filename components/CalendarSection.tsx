import React  from 'react';
import { TourProgram, UpcomingTourEvent } from '@/types/tour';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import MyConstants from "@/lib/MyConstants";

interface CalendarSectionProps {
  allTours: ReadonlyMap<string, TourProgram>;
  upcomingTours: UpcomingTourEvent[];
  onEventClick: (tourId: string) => void;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  allTours,
  upcomingTours,
  onEventClick
}) => {
  const handleEventClick = (info: any) => {
      onEventClick(info.event.extendedProps.programId);
  }

  const events = upcomingTours.map((ut)=> {
      return {
          title: allTours.get(ut.tourProgramId)?.title || '',
          date: ut.date,
          allDay: true,
          extendedProps: {
              programId: ut.tourProgramId,
          }
      }
  })
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
