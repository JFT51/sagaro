import React from 'react';
import { Star, Clock, Play } from 'lucide-react';
import { Restaurant, Language } from '../types';
import { translations } from '../data/translations';

interface RestaurantCardProps {
  restaurant: Restaurant;
  language: Language;
  onViewDetails: (restaurantId: string) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, language, onViewDetails }) => {
  const t = translations[language];

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={() => onViewDetails(restaurant.id)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>{t.viewDetails}</span>
            </button>
          </div>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-500" />
          <span>{restaurant.rating}</span>
        </div>

        {/* Price badge */}
        <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {restaurant.priceRange}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
          {restaurant.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-orange-400 font-medium">{restaurant.cuisine}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">{restaurant.village}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{restaurant.description}</p>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{restaurant.openingHours}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;