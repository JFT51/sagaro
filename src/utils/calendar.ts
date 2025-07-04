import { format, isSameDay, parseISO } from 'date-fns';
import { CalendarEvent } from '../types';
import { events } from '../data/events';
import { markets } from '../data/markets';

export const getEventsForDate = (date: Date): CalendarEvent[] => {
  const dateStr = format(date, 'yyyy-MM-dd');
  const calendarEvents: CalendarEvent[] = [];

  // Add events
  events.forEach(event => {
    if (event.date === dateStr) {
      calendarEvents.push({
        id: event.id,
        title: event.name,
        date: event.date,
        time: event.time,
        type: 'event',
        location: event.location,
        village: event.village
      });
    }
  });

  // Add markets
  markets.forEach(market => {
    const dayOfWeek = format(date, 'EEEE');
    if (market.days.includes(dayOfWeek)) {
      calendarEvents.push({
        id: market.id,
        title: market.name,
        date: dateStr,
        time: market.time,
        type: 'market',
        location: market.location,
        village: market.village
      });
    }
  });

  return calendarEvents;
};

export const generateWazeUrl = (lat: number, lng: number) => {
  return `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\s+/g, '').replace(/[^\d+]/g, '');
};