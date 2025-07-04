import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Utensils, 
  Calendar, 
  ShoppingBag, 
  Activity, 
  CalendarDays,
  Info,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = translations[language];

  const tabs = [
    { id: 'dashboard', icon: Home, label: t.dashboard },
    { id: 'villages', icon: MapPin, label: t.villages },
    { id: 'restaurants', icon: Utensils, label: t.restaurants },
    { id: 'events', icon: Calendar, label: t.events },
    { id: 'markets', icon: ShoppingBag, label: t.markets },
    { id: 'activities', icon: Activity, label: t.activities },
    { id: 'calendar', icon: CalendarDays, label: t.calendar },
    { id: 'useful', icon: Info, label: t.useful },
    { id: 'chat', icon: MessageCircle, label: t.chat }
  ];

  return (
    <nav 
      className={`bg-black border-r border-gray-800 transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64' : 'w-16'
      } flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-lg font-bold text-white whitespace-nowrap">S'Agaro Guide</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 py-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white border-r-2 border-red-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;