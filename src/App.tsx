import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WeatherCard from './components/WeatherCard';
import VillageCard from './components/VillageCard';
import RestaurantCard from './components/RestaurantCard';
import EventCard from './components/EventCard';
import MarketCard from './components/MarketCard';
import ActivityCard from './components/ActivityCard';
import CalendarView from './components/CalendarView';
import UsefulInfo from './components/UsefulInfo';
import Chat from './components/Chat';
import { useLanguage } from './hooks/useLanguage';
import { villages } from './data/villages';
import { restaurants } from './data/restaurants';
import { events } from './data/events';
import { markets } from './data/markets';
import { activities } from './data/activities';
import { translations } from './data/translations';
import { Weather, WeatherForecast } from './types';
import { MapPin, ArrowLeft, Phone, ExternalLink, Navigation as NavigationIcon, Play, Info, Star, Clock, Users, Calendar, Euro, Award, Camera, Utensils, Music, ShoppingBag, Activity as ActivityIcon, Globe, Wifi, CreditCard, Car, Accessibility, Home, CalendarDays, MessageCircle } from 'lucide-react';
import { generateWazeUrl, formatPhoneNumber } from './utils/calendar';

function App() {
  const { language, changeLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedVillage, setSelectedVillage] = useState<string | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const t = translations[language];

  // Mock weather data
  const currentWeather: Weather = {
    temperature: 26,
    condition: 'sunny',
    humidity: 65,
    windSpeed: 12,
    icon: 'sunny'
  };

  const weatherForecast: WeatherForecast[] = [
    { date: '2024-07-14', temperature: { min: 20, max: 28 }, condition: 'sunny', icon: 'sunny' },
    { date: '2024-07-15', temperature: { min: 22, max: 30 }, condition: 'cloudy', icon: 'cloudy' },
    { date: '2024-07-16', temperature: { min: 19, max: 25 }, condition: 'rainy', icon: 'rainy' },
    { date: '2024-07-17', temperature: { min: 21, max: 27 }, condition: 'sunny', icon: 'sunny' }
  ];

  const handleVillageSelect = (villageId: string) => {
    setSelectedVillage(villageId);
  };

  const handleRestaurantSelect = (restaurantId: string) => {
    setSelectedRestaurant(restaurantId);
  };

  const handleEventSelect = (eventId: string) => {
    setSelectedEvent(eventId);
  };

  const handleMarketSelect = (marketId: string) => {
    setSelectedMarket(marketId);
  };

  const handleActivitySelect = (activityId: string) => {
    setSelectedActivity(activityId);
  };

  const resetSelection = () => {
    setSelectedVillage(null);
    setSelectedRestaurant(null);
    setSelectedEvent(null);
    setSelectedMarket(null);
    setSelectedActivity(null);
  };

  const handleTabChange = (tab: string) => {
    // Reset all selections when changing tabs
    resetSelection();
    setActiveTab(tab);
  };

  const renderDetailView = (item: any, type: 'village' | 'restaurant' | 'event' | 'market' | 'activity') => {
    if (!item) return null;

    return (
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-end h-full p-8 max-w-7xl mx-auto">
            <button
              onClick={resetSelection}
              className="absolute top-8 left-8 lg:left-8 flex items-center space-x-2 text-white/80 hover:text-white transition-colors bg-black/50 px-4 py-2 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{t.backToList}</span>
            </button>

            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-4">{item.name}</h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">{item.description}</p>
              
              {/* Rating and key info */}
              <div className="flex items-center space-x-6 mb-6">
                {type === 'restaurant' && (
                  <div className="flex items-center space-x-2 bg-yellow-600 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-white" />
                    <span className="font-semibold">{item.rating}/5</span>
                  </div>
                )}
                {type === 'village' && (
                  <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full">
                    <Users className="h-4 w-4 text-white" />
                    <span className="font-semibold">{item.population.toLocaleString()}</span>
                  </div>
                )}
                {type === 'event' && (
                  <div className="flex items-center space-x-2 bg-green-600 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 text-white" />
                    <span className="font-semibold">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                )}
                {type === 'activity' && (
                  <div className="flex items-center space-x-2 bg-purple-600 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 text-white" />
                    <span className="font-semibold">{item.duration}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4 text-white" />
                  <span className="font-semibold">{item.village || item.location}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.open(generateWazeUrl(item.coordinates.lat, item.coordinates.lng), '_blank')}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  title={t.openWaze}
                >
                  <NavigationIcon className="h-5 w-5" />
                </button>
                
                {item.phone && (
                  <button
                    onClick={() => window.open(`tel:${formatPhoneNumber(item.phone)}`, '_self')}
                    className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    title={t.callPhone}
                  >
                    <Phone className="h-5 w-5" />
                  </button>
                )}
                
                {item.website && (
                  <button
                    onClick={() => window.open(item.website, '_blank')}
                    className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                    title={t.visitWebsite}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 py-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Main Content */}
              {type === 'village' && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.highlights}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
                          <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.funFacts}</h3>
                    <div className="space-y-4">
                      {item.funFacts.map((fact: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-6 bg-gray-900 rounded-lg border border-gray-800">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300 text-lg leading-relaxed">{fact}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.history}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.history}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.architecture}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.architecture.map((arch: any, index: number) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                          <h4 className="text-xl font-semibold text-white mb-3">{arch.name}</h4>
                          <p className="text-gray-300 mb-3">{arch.description}</p>
                          <span className="text-sm text-blue-400">{arch.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.localTraditions}</h3>
                    <div className="space-y-4">
                      {item.traditions.map((tradition: any, index: number) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                          <h4 className="text-xl font-semibold text-white mb-3">{tradition.name}</h4>
                          <p className="text-gray-300 mb-3">{tradition.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-purple-400">
                            <Calendar className="h-4 w-4" />
                            <span>{tradition.when}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {type === 'restaurant' && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.specialties}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.specialties.map((specialty: string, index: number) => (
                        <div
                          key={index}
                          className="bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-3 rounded-lg text-center font-medium"
                        >
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.chefStory}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.chefStory}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.signature}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.signatureDishes.map((dish: any, index: number) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                          <h4 className="text-xl font-semibold text-white mb-3">{dish.name}</h4>
                          <p className="text-gray-300 mb-3">{dish.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-orange-400 font-semibold">{dish.price}</span>
                            <span className="text-sm text-gray-500">{dish.ingredients}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.atmosphere}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.atmosphere}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.awards}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.awards.map((award: any, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
                          <Award className="h-6 w-6 text-yellow-500" />
                          <div>
                            <span className="text-white font-semibold">{award.name}</span>
                            <p className="text-gray-400 text-sm">{award.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {type === 'event' && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.eventHistory}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.eventHistory}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.program}</h3>
                    <div className="space-y-4">
                      {item.program.map((prog: any, index: number) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-white">{prog.title}</h4>
                            <span className="text-green-400 font-semibold">{prog.time}</span>
                          </div>
                          <p className="text-gray-300">{prog.description}</p>
                          {prog.artist && (
                            <p className="text-blue-400 mt-2">Artist: {prog.artist}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.ticketInfo}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">{t.prices}</h4>
                          {item.ticketPrices.map((ticket: any, index: number) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                              <span className="text-gray-300">{ticket.type}</span>
                              <span className="text-white font-semibold">{ticket.price}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">{t.venue}</h4>
                          <p className="text-gray-300 mb-2">{item.venue.name}</p>
                          <p className="text-gray-400 text-sm">{item.venue.capacity} {t.capacity}</p>
                          <p className="text-gray-400 text-sm">{item.venue.facilities}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {type === 'activity' && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.equipment}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.equipment.map((eq: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
                          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                          <span className="text-gray-300">{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.detailedDescription}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.detailedDescription}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.safetyInfo}</h3>
                    <div className="space-y-4">
                      {item.safetyInfo.map((safety: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-red-900/20 rounded-lg border border-red-600/30">
                          <Info className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-red-300">{safety}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.whatToExpect}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.whatToExpect}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.instructor}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <h4 className="text-xl font-semibold text-white mb-3">{item.instructor.name}</h4>
                      <p className="text-gray-300 mb-3">{item.instructor.bio}</p>
                      <div className="flex items-center space-x-4 text-sm text-blue-400">
                        <span>{item.instructor.experience} {t.experience}</span>
                        <span>{item.instructor.certifications}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {type === 'market' && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.products}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {item.products.map((product: string, index: number) => (
                        <div
                          key={index}
                          className="bg-purple-600/20 border border-purple-600/30 text-purple-400 px-4 py-3 rounded-lg text-center font-medium"
                        >
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.marketHistory}</h3>
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <p className="text-gray-300 text-lg leading-relaxed">{item.marketHistory}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.vendors}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {item.vendors.map((vendor: any, index: number) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                          <h4 className="text-xl font-semibold text-white mb-3">{vendor.name}</h4>
                          <p className="text-gray-300 mb-3">{vendor.specialty}</p>
                          <p className="text-purple-400 text-sm">{vendor.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{t.tips}</h3>
                    <div className="space-y-4">
                      {item.tips.map((tip: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
                          <Info className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-yellow-300">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">{t.information}</h3>
                <div className="space-y-4">
                  {type === 'village' && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.population}:</span>
                        <span className="font-medium text-white">{item.population.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.distance}:</span>
                        <span className="font-medium text-white">{item.distance}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.founded}:</span>
                        <span className="font-medium text-white">{item.founded}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">{t.elevation}:</span>
                        <span className="font-medium text-white">{item.elevation}</span>
                      </div>
                    </>
                  )}

                  {type === 'restaurant' && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.cuisine}:</span>
                        <span className="font-medium text-white">{item.cuisine}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.rating}:</span>
                        <span className="font-medium text-white">{item.rating}/5</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.priceRange}:</span>
                        <span className="font-medium text-white">{item.priceRange}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.openingHours}:</span>
                        <span className="font-medium text-white">{item.openingHours}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.capacity}:</span>
                        <span className="font-medium text-white">{item.capacity} {t.seats}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">{t.established}:</span>
                        <span className="font-medium text-white">{item.established}</span>
                      </div>
                    </>
                  )}

                  {type === 'event' && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.date}:</span>
                        <span className="font-medium text-white">{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.time}:</span>
                        <span className="font-medium text-white">{item.time}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.category}:</span>
                        <span className="font-medium text-white">{item.category}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.duration}:</span>
                        <span className="font-medium text-white">{item.eventDuration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">{t.organizer}:</span>
                        <span className="font-medium text-white">{item.organizer}</span>
                      </div>
                    </>
                  )}

                  {type === 'market' && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.days}:</span>
                        <span className="font-medium text-white">{item.days.join(', ')}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.time}:</span>
                        <span className="font-medium text-white">{item.time}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.vendors}:</span>
                        <span className="font-medium text-white">{item.vendorCount}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">{t.established}:</span>
                        <span className="font-medium text-white">{item.established}</span>
                      </div>
                    </>
                  )}

                  {type === 'activity' && (
                    <>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.duration}:</span>
                        <span className="font-medium text-white">{item.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.difficulty}:</span>
                        <span className="font-medium text-white">{item.difficulty}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.price}:</span>
                        <span className="font-medium text-white">{item.price}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.bestTime}:</span>
                        <span className="font-medium text-white">{item.bestTime}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span className="text-gray-400">{t.groupSize}:</span>
                        <span className="font-medium text-white">{item.groupSize}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-400">{t.ageLimit}:</span>
                        <span className="font-medium text-white">{item.ageLimit}</span>
                      </div>
                    </>
                  )}

                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">{t.location}:</span>
                    <span className="font-medium text-white">{item.village || item.location}</span>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">{t.facilities}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {item.facilities && item.facilities.map((facility: any, index: number) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      {facility.icon === 'wifi' && <Wifi className="h-4 w-4 text-blue-400" />}
                      {facility.icon === 'parking' && <Car className="h-4 w-4 text-green-400" />}
                      {facility.icon === 'card' && <CreditCard className="h-4 w-4 text-purple-400" />}
                      {facility.icon === 'accessible' && <Accessibility className="h-4 w-4 text-orange-400" />}
                      <span className="text-gray-300">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Info */}
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">{t.currentWeather}</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{currentWeather.temperature}°C</div>
                  <div className="text-gray-400">{currentWeather.condition}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    // Handle detail views
    if (selectedVillage) {
      const village = villages.find(v => v.id === selectedVillage);
      return renderDetailView(village, 'village');
    }
    if (selectedRestaurant) {
      const restaurant = restaurants.find(r => r.id === selectedRestaurant);
      return renderDetailView(restaurant, 'restaurant');
    }
    if (selectedEvent) {
      const event = events.find(e => e.id === selectedEvent);
      return renderDetailView(event, 'event');
    }
    if (selectedMarket) {
      const market = markets.find(m => m.id === selectedMarket);
      return renderDetailView(market, 'market');
    }
    if (selectedActivity) {
      const activity = activities.find(a => a.id === selectedActivity);
      return renderDetailView(activity, 'activity');
    }

    // Handle main views
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative h-[80vh] overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
                  alt="S'Agaro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <div className="max-w-2xl">
                  <h1 className="text-6xl font-bold text-white mb-4">S'Agaro Guide</h1>
                  <p className="text-xl text-gray-300 mb-6">
                    {language === 'nl' ? 
                      'Ontdek de prachtige Costa Brava en haar verborgen schatten' :
                      'Découvrez la magnifique Costa Brava et ses trésors cachés'
                    }
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors">
                      <Play className="h-5 w-5" />
                      <span>{language === 'nl' ? 'Start Verkennen' : 'Commencer l\'Exploration'}</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded font-semibold hover:bg-gray-500 transition-colors">
                      <Info className="h-5 w-5" />
                      <span>{language === 'nl' ? 'Meer Info' : 'Plus d\'Infos'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <WeatherCard 
                  weather={currentWeather} 
                  forecast={weatherForecast} 
                  language={language}
                />
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">S'Agaro Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>Costa Brava, Spain</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {language === 'nl' ? 
                      'Welkom in S\'Agaro! Ontdek de prachtige kust, lokale restaurants en authentieke Catalaanse cultuur.' :
                      'Bienvenue à S\'Agaro! Découvrez la magnifique côte, les restaurants locaux et la culture catalane authentique.'
                    }
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Cards Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <button
                onClick={() => handleTabChange('villages')}
                className="group bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <MapPin className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.villages}</h3>
                    <p className="text-red-100 text-sm">{villages.length} {language === 'nl' ? 'prachtige dorpen' : 'beaux villages'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('restaurants')}
                className="group bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Utensils className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.restaurants}</h3>
                    <p className="text-orange-100 text-sm">{restaurants.length} {language === 'nl' ? 'lokale restaurants' : 'restaurants locaux'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('events')}
                className="group bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Calendar className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.events}</h3>
                    <p className="text-green-100 text-sm">{events.length} {language === 'nl' ? 'spannende evenementen' : 'événements passionnants'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('markets')}
                className="group bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <ShoppingBag className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.markets}</h3>
                    <p className="text-purple-100 text-sm">{markets.length} {language === 'nl' ? 'lokale markten' : 'marchés locaux'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('activities')}
                className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <ActivityIcon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.activities}</h3>
                    <p className="text-blue-100 text-sm">{activities.length} {language === 'nl' ? 'avontuurlijke activiteiten' : 'activités aventureuses'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('calendar')}
                className="group bg-gradient-to-br from-indigo-600 to-indigo-700 text-white p-8 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <CalendarDays className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.calendar}</h3>
                    <p className="text-indigo-100 text-sm">{language === 'nl' ? 'evenementen kalender' : 'calendrier événements'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('useful')}
                className="group bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <Info className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.useful}</h3>
                    <p className="text-teal-100 text-sm">{language === 'nl' ? 'nuttige informatie' : 'infos utiles'}</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTabChange('chat')}
                className="group bg-gradient-to-br from-pink-600 to-pink-700 text-white p-8 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center space-y-4">
                  <MessageCircle className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{t.chat}</h3>
                    <p className="text-pink-100 text-sm">{language === 'nl' ? 'chat met reizigers' : 'chat avec voyageurs'}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      case 'villages':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.villages}</h2>
              <p className="text-gray-400 text-lg">
                {language === 'nl' ? 
                  'Ontdek de mooiste dorpen van de Costa Brava' :
                  'Découvrez les plus beaux villages de la Costa Brava'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {villages.map(village => (
                <VillageCard
                  key={village.id}
                  village={village}
                  language={language}
                  onViewDetails={handleVillageSelect}
                />
              ))}
            </div>
          </div>
        );

      case 'restaurants':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.restaurants}</h2>
              <p className="text-gray-400 text-lg">
                {language === 'nl' ? 
                  'Proef de authentieke smaken van de Costa Brava' :
                  'Goûtez aux saveurs authentiques de la Costa Brava'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {restaurants.map(restaurant => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  language={language}
                  onViewDetails={handleRestaurantSelect}
                />
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.events}</h2>
              <p className="text-gray-400 text-lg">
                {language === 'nl' ? 
                  'Beleef de lokale cultuur en tradities' :
                  'Vivez la culture et les traditions locales'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {events.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  language={language}
                  onViewDetails={handleEventSelect}
                />
              ))}
            </div>
          </div>
        );

      case 'markets':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.markets}</h2>
              <p className="text-gray-400 text-lg">
                {language === 'nl' ? 
                  'Ontdek lokale producten en ambachten' :
                  'Découvrez les produits et artisanats locaux'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {markets.map(market => (
                <MarketCard
                  key={market.id}
                  market={market}
                  language={language}
                  onViewDetails={handleMarketSelect}
                />
              ))}
            </div>
          </div>
        );

      case 'activities':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.activities}</h2>
              <p className="text-gray-400 text-lg">
                {language === 'nl' ? 
                  'Avontuurlijke ervaringen voor iedereen' :
                  'Expériences aventureuses pour tous'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activities.map(activity => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  language={language}
                  onViewDetails={handleActivitySelect}
                />
              ))}
            </div>
          </div>
        );

      case 'calendar':
        return <CalendarView language={language} />;

      case 'useful':
        return <UsefulInfo language={language} />;

      case 'chat':
        return <Chat language={language} />;

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} language={language} />
      
      <div className="flex-1 flex flex-col lg:ml-0 ml-20">
        <Header language={language} onLanguageChange={changeLanguage} />
        
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;