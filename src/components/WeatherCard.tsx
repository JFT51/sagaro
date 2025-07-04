import React from 'react';
import { Cloud, Sun, CloudRain, Zap, Thermometer, Droplets, Wind } from 'lucide-react';
import { Weather, WeatherForecast, Language } from '../types';
import { translations } from '../data/translations';

interface WeatherCardProps {
  weather: Weather;
  forecast: WeatherForecast[];
  language: Language;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, forecast, language }) => {
  const t = translations[language];

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-12 w-12 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-12 w-12 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'stormy':
        return <Zap className="h-12 w-12 text-purple-500" />;
      default:
        return <Sun className="h-12 w-12 text-yellow-500" />;
    }
  };

  const getWeatherCondition = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return t.sunny;
      case 'cloudy':
        return t.cloudy;
      case 'rainy':
        return t.rainy;
      case 'stormy':
        return t.stormy;
      default:
        return condition;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-white border border-gray-700">
      <h3 className="text-xl font-bold mb-4">{t.todayWeather}</h3>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {getWeatherIcon(weather.condition)}
          <div>
            <div className="text-3xl font-bold">{weather.temperature}°C</div>
            <div className="text-gray-400">{getWeatherCondition(weather.condition)}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Droplets className="h-5 w-5 text-blue-400" />
          <div>
            <div className="text-sm text-gray-400">{t.humidity}</div>
            <div className="font-semibold">{weather.humidity}%</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="h-5 w-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-400">{t.windSpeed}</div>
            <div className="font-semibold">{weather.windSpeed} km/h</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">{t.forecast}</h4>
        <div className="grid grid-cols-4 gap-2">
          {forecast.map((day, index) => (
            <div key={index} className="text-center bg-gray-800 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">
                {new Date(day.date).toLocaleDateString(language, { weekday: 'short' })}
              </div>
              <div className="flex justify-center mb-1 scale-75">
                {getWeatherIcon(day.condition)}
              </div>
              <div className="text-sm font-semibold">
                {day.temperature.max}°/{day.temperature.min}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;