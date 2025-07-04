import React from 'react';
import { MapPin, Calendar, Clock, Tag, Euro, Play } from 'lucide-react';
import { Event, Language } from '../types';
import { translations } from '../data/translations';
import { generateWazeUrl } from '../utils/calendar';

interface EventCardProps {
  event: Event;
  language: Language;
  onViewDetails: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, language, onViewDetails }) => {
  const t = translations[language];

  const handleWazeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateWazeUrl(event.coordinates.lat, event.coordinates.lng), '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language, { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={() => onViewDetails(event.id)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-3"
            >
              <Play className="h-5 w-5" />
              <span>{t.viewDetails}</span>
            </button>
            <button
              onClick={handleWazeClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>{t.openWaze}</span>
            </button>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {event.category}
        </div>

        {/* Date badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {formatDate(event.date)}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
          {event.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-green-400 font-medium">{event.village}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">{event.time}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{event.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Euro className="h-4 w-4" />
            <span>{event.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;