import React from 'react';
import { Clock, Activity, Euro, Play } from 'lucide-react';
import { Activity as ActivityType, Language } from '../types';
import { translations } from '../data/translations';

interface ActivityCardProps {
  activity: ActivityType;
  language: Language;
  onViewDetails: (activityId: string) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, language, onViewDetails }) => {
  const t = translations[language];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-600';
      case 'moderate':
        return 'bg-yellow-600';
      case 'hard':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={() => onViewDetails(activity.id)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>{t.viewDetails}</span>
            </button>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {activity.category}
        </div>

        {/* Difficulty badge */}
        <div className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(activity.difficulty)}`}>
          {activity.difficulty}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
          {activity.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-blue-400 font-medium">{activity.village}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">{activity.duration}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{activity.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{activity.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Euro className="h-4 w-4" />
            <span>{activity.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;