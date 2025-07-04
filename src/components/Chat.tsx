import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Users } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { translations } from '../data/translations';

interface ChatProps {
  language: Language;
}

const Chat: React.FC<ChatProps> = ({ language }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      user: 'Maria',
      message: language === 'nl' ? 'Hallo allemaal! Wie is er nog meer in S\'Agaro deze week?' : 'Salut tout le monde! Qui d\'autre est à S\'Agaro cette semaine?',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      avatar: '👩'
    },
    {
      id: '2',
      user: 'Carlos',
      message: language === 'nl' ? 'Wij zijn er! Heeft iemand tips voor de beste restaurants?' : 'Nous y sommes! Quelqu\'un a des conseils pour les meilleurs restaurants?',
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      avatar: '👨'
    },
    {
      id: '3',
      user: 'Sophie',
      message: language === 'nl' ? 'Probeer zeker La Gavina! Het uitzicht is fantastisch 🌊' : 'Essayez absolument La Gavina! La vue est fantastique 🌊',
      timestamp: new Date(Date.now() - 900000).toISOString(),
      avatar: '👱‍♀️'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser] = useState('Guest User');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user: currentUser,
        message: newMessage,
        timestamp: new Date().toISOString(),
        avatar: '👤'
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 h-[600px] flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{t.chat}</h2>
            <p className="text-sm text-gray-400">
              {language === 'nl' ? 'Chat met andere reizigers in S\'Agaro' : 'Chattez avec d\'autres voyageurs à S\'Agaro'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.user === currentUser ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
              {message.avatar}
            </div>
            <div className={`flex-1 ${message.user === currentUser ? 'text-right' : ''}`}>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-white">{message.user}</span>
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div
                className={`inline-block p-3 rounded-lg max-w-xs ${
                  message.user === currentUser
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                {message.message}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t.typingMessage}
            className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          <button
            onClick={sendMessage}
            className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;