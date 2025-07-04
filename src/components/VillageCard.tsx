import React from 'react';
import { MapPin, Users, Navigation, Play, Info } from 'lucide-react';
import { Village, Language } from '../types';
import { translations } from '../data/translations';
import { generateWazeUrl } from '../utils/calendar';

interface VillageCardProps {
  village: Village;
  language: Language;
  onViewDetails: (villageId: string) => void;
}

const VillageCard: React.FC<VillageCardProps> = ({ village, language, onViewDetails }) => {
  const t = translations[language];

  const handleWazeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(generateWazeUrl(village.coordinates.lat, village.coordinates.lng), '_blank');
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={village.image}
          alt={village.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={() => onViewDetails(village.id)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-3"
            >
              <Play className="h-5 w-5" />
              <span>{t.viewDetails}</span>
            </button>
            <button
              onClick={handleWazeClick}
              className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              <Navigation className="h-4 w-4" />
              <span>{t.openWaze}</span>
            </button>
          </div>
        </div>

        {/* Distance badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {village.distance}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
          {village.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{village.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{village.population.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{village.distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageCard;