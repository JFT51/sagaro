import React, { useState } from 'react';
import { Book, MessageSquare, Users, Clock, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface UsefulInfoProps {
  language: Language;
}

const UsefulInfo: React.FC<UsefulInfoProps> = ({ language }) => {
  const [persons, setPersons] = useState(2);
  const [time, setTime] = useState('20:00');
  const [seating, setSeating] = useState<'inside' | 'outside'>('inside');
  const [generatedSentence, setGeneratedSentence] = useState<{spanish: string, catalan: string} | null>(null);
  
  const t = translations[language];

  const commonWords = {
    spanish: {
      'Hello': 'Hola',
      'Thank you': 'Gracias',
      'Please': 'Por favor',
      'Excuse me': 'Disculpe',
      'I don\'t speak Spanish': 'No hablo español',
      'Do you speak English?': '¿Habla inglés?',
      'Where is...?': '¿Dónde está...?',
      'How much?': '¿Cuánto cuesta?',
      'The bill, please': 'La cuenta, por favor',
      'Water': 'Agua',
      'Beer': 'Cerveza',
      'Wine': 'Vino',
      'Coffee': 'Café',
      'Restaurant': 'Restaurante',
      'Hotel': 'Hotel',
      'Beach': 'Playa',
      'Bathroom': 'Baño',
      'Help': 'Ayuda',
      'Good morning': 'Buenos días',
      'Good evening': 'Buenas tardes',
      'Good night': 'Buenas noches',
      'Goodbye': 'Adiós'
    },
    catalan: {
      'Hello': 'Hola',
      'Thank you': 'Gràcies',
      'Please': 'Si us plau',
      'Excuse me': 'Disculpi',
      'I don\'t speak Catalan': 'No parlo català',
      'Do you speak English?': 'Parla anglès?',
      'Where is...?': 'On és...?',
      'How much?': 'Quant costa?',
      'The bill, please': 'El compte, si us plau',
      'Water': 'Aigua',
      'Beer': 'Cervesa',
      'Wine': 'Vi',
      'Coffee': 'Cafè',
      'Restaurant': 'Restaurant',
      'Hotel': 'Hotel',
      'Beach': 'Platja',
      'Bathroom': 'Bany',
      'Help': 'Ajuda',
      'Good morning': 'Bon dia',
      'Good evening': 'Bona tarda',
      'Good night': 'Bona nit',
      'Goodbye': 'Adéu'
    }
  };

  const generateReservationSentence = () => {
    const seatingText = seating === 'inside' ? 'dentro' : 'fuera';
    const seatingTextCat = seating === 'inside' ? 'dins' : 'fora';
    
    const spanish = `Buenos días/tardes. Querría reservar una mesa para ${persons} personas a las ${time}, ${seatingText} si es posible. Gracias.`;
    const catalan = `Bon dia/tarda. Voldria reservar una taula per ${persons} persones a les ${time}, ${seatingTextCat} si és possible. Gràcies.`;
    
    setGeneratedSentence({ spanish, catalan });
  };

  return (
    <div className="space-y-8">
      {/* Common Words Section */}
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Book className="h-6 w-6 text-red-600" />
          <h2 className="text-2xl font-bold text-white">{t.commonWords}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span>{t.spanish}</span>
            </h3>
            <div className="space-y-2">
              {Object.entries(commonWords.spanish).map(([english, spanish]) => (
                <div key={english} className="flex justify-between items-center p-3 bg-gray-800 rounded border border-gray-700">
                  <span className="text-gray-300">{english}</span>
                  <span className="font-semibold text-white">{spanish}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
              <span>{t.catalan}</span>
            </h3>
            <div className="space-y-2">
              {Object.entries(commonWords.catalan).map(([english, catalan]) => (
                <div key={english} className="flex justify-between items-center p-3 bg-gray-800 rounded border border-gray-700">
                  <span className="text-gray-300">{english}</span>
                  <span className="font-semibold text-white">{catalan}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table Reservation Tool */}
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <MessageSquare className="h-6 w-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-white">{t.tableReservation}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <Users className="inline h-4 w-4 mr-1" />
              {t.numberOfPersons}
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={persons}
              onChange={(e) => setPersons(parseInt(e.target.value))}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              {t.preferredTime}
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Seating
            </label>
            <select
              value={seating}
              onChange={(e) => setSeating(e.target.value as 'inside' | 'outside')}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="inside">{t.inside}</option>
              <option value="outside">{t.outside}</option>
            </select>
          </div>
        </div>
        
        <button
          onClick={generateReservationSentence}
          className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium"
        >
          {t.generateSentence}
        </button>
        
        {generatedSentence && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-red-900/30 border border-red-600/30 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">{t.spanish}:</h4>
              <p className="text-red-300">{generatedSentence.spanish}</p>
            </div>
            <div className="p-4 bg-yellow-900/30 border border-yellow-600/30 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">{t.catalan}:</h4>
              <p className="text-yellow-300">{generatedSentence.catalan}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsefulInfo;