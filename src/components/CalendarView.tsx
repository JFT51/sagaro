import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, getDay } from 'date-fns';
import { CalendarEvent, Language } from '../types';
import { translations } from '../data/translations';
import { getEventsForDate } from '../utils/calendar';

interface CalendarViewProps {
  language: Language;
}

const CalendarView: React.FC<CalendarViewProps> = ({ language }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const t = translations[language];

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentDate(newDate);
  };

  const getEventsForDay = (date: Date): CalendarEvent[] => {
    return getEventsForDate(date);
  };

  const renderCalendarDay = (date: Date) => {
    const events = getEventsForDay(date);
    const hasEvents = events.length > 0;
    const isCurrentMonth = isSameMonth(date, currentDate);
    const isSelectedDay = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');

    return (
      <button
        key={date.toISOString()}
        onClick={() => setSelectedDate(date)}
        className={`
          relative min-h-[80px] p-2 border border-gray-700 hover:bg-gray-800 transition-colors rounded
          ${!isCurrentMonth ? 'text-gray-600 bg-gray-900' : 'bg-gray-800'}
          ${isToday(date) ? 'bg-red-900 border-red-600' : ''}
          ${isSelectedDay ? 'bg-red-800 border-red-500' : ''}
        `}
      >
        <div className="text-sm font-medium mb-1 text-white">{format(date, 'd')}</div>
        {hasEvents && (
          <div className="space-y-1">
            {events.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${
                  event.type === 'event' ? 'bg-green-600 text-white' :
                  event.type === 'market' ? 'bg-purple-600 text-white' :
                  'bg-blue-600 text-white'
                }`}
              >
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-gray-400">+{events.length - 2} more</div>
            )}
          </div>
        )}
      </button>
    );
  };

  const selectedDateEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {format(currentDate, 'MMMM yyyy', { locale: language === 'fr' ? undefined : undefined })}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-6">
        {/* Empty cells for days before month start */}
        {Array.from({ length: getDay(monthStart) }, (_, i) => (
          <div key={i} className="min-h-[80px] border border-gray-700 bg-gray-900 rounded"></div>
        ))}
        {days.map(renderCalendarDay)}
      </div>

      {selectedDate && (
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-lg font-semibold mb-4 text-white">
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </h3>
          {selectedDateEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedDateEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className={`p-2 rounded-full ${
                    event.type === 'event' ? 'bg-green-600 text-white' :
                    event.type === 'market' ? 'bg-purple-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {event.type === 'event' ? <Calendar className="h-4 w-4" /> :
                     event.type === 'market' ? <MapPin className="h-4 w-4" /> :
                     <Clock className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}, {event.village}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">{t.noEvents}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarView;