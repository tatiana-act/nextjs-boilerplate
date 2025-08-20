import React, { JSX, useState } from 'react';
import { Tour, UpcomingTour } from '@/types/tour';

interface CalendarSectionProps {
  allTours: ReadonlyMap<string, Tour>;
  upcomingTours: UpcomingTour[];
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  allTours,
  upcomingTours,
}) => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );

  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendar = (): JSX.Element[] => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const days: JSX.Element[] = [];

    // map upcomingEvents
    const mapTours: Map<string, UpcomingTour> = new Map();
    // upcomingTours.map(tour => [`${tour.date.getFullYear()}-${tour.date.getMonth() + 1}-${tour.date.getDate()}`, tour] as const));

    // Add day headers
    dayNames.forEach(day => {
      days.push(
        <div
          key={`header-${day}`}
          className="aspect-square flex items-center justify-center font-bold text-indigo-600"
        >
          {day}
        </div>,
      );
    });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
      const hasEvent = mapTours.has(dateKey);

      days.push(
        <div
          key={day}
          className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
            hasEvent
              ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:shadow-lg'
              : 'hover:bg-gray-100'
          }`}
          title={
            hasEvent
              ? allTours.get(mapTours.get(dateKey)?.tourId || '')?.title
              : ''
          }
        >
          {day}
        </div>,
      );
    }

    return days;
  };

  const changeMonth = (direction: number): void => {
    if (direction === 1) {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  return (
    <section id="calendar" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Tour Calendar
        </h2>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => changeMonth(-1)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              ‹ Previous
            </button>
            <h3 className="text-2xl font-bold text-gray-800">
              {months[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={() => changeMonth(1)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Next ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-8">
            {generateCalendar()}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4 text-gray-800">
              Upcoming Events
            </h4>
            <div className="space-y-4">
              {upcomingTours.map(tour => (
                <div
                  key={tour.id}
                  className="flex justify-between items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="font-bold text-gray-800">
                      {allTours.get(tour.tourId)?.title || ''}
                    </div>
                    {/*<div className="text-sm text-gray-600">
                                            {event.spotsAvailable} spots available • Guide: {event.guide}
                                        </div>
                                        <div className="text-xs text-gray-500">{event.weather}</div>*/}
                  </div>
                  <div className="text-right">
                    <div className="text-gray-700">{tour.date}</div>
                    {/* <div className="text-sm text-indigo-600 font-semibold">${event.price}</div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
