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
  MessageCircle,
  Menu,
  X
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true); // Default open on mobile
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

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    // Don't close mobile menu when tab is selected - keep icons visible
  };

  return (
    <>
      {/* Mobile Hamburger Button - Fixed Position */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-red-600 border border-red-500 text-white p-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu - Show icons by default */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 top-0 h-full w-20 bg-black border-r border-gray-800 shadow-xl z-40">
          <div className="p-4 pt-20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full flex items-center justify-center p-3 transition-all duration-200 rounded-lg ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900'
                    }`}
                    title={tab.label}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation - Hidden on Mobile */}
      <nav 
        className={`hidden lg:flex bg-black border-r border-gray-800 transition-all duration-300 ease-in-out ${
          isHovered ? 'w-64' : 'w-16'
        } flex-col`}
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
    </>
  );
};

export default Navigation;