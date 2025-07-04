import React from 'react';
import { Calendar, ShoppingBag, Play } from 'lucide-react';
import { Market, Language } from '../types';
import { translations } from '../data/translations';

interface MarketCardProps {
  market: Market;
  language: Language;
  onViewDetails: (marketId: string) => void;
}

const MarketCard: React.FC<MarketCardProps> = ({ market, language, onViewDetails }) => {
  const t = translations[language];

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={market.image}
          alt={market.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button
              onClick={() => onViewDetails(market.id)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>{t.viewDetails}</span>
            </button>
          </div>
        </div>

        {/* Days badge */}
        <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {market.days.length} {language === 'nl' ? 'dagen' : 'jours'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
          {market.name}
        </h3>
        
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-purple-400 font-medium">{market.village}</span>
          <span className="text-gray-500">•</span>
          <span className="text-sm text-gray-400">{market.time}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{market.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{market.days.slice(0, 2).join(', ')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ShoppingBag className="h-4 w-4" />
            <span>{market.products.length} {language === 'nl' ? 'producten' : 'produits'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;