export interface Village {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  population: number;
  distance: string;
  founded: string;
  elevation: string;
  history: string;
  architecture: Array<{
    name: string;
    description: string;
    period: string;
  }>;
  traditions: Array<{
    name: string;
    description: string;
    when: string;
  }>;
  facilities: Array<{
    name: string;
    icon: string;
  }>;
  funFacts: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  village: string;
  villageId: string;
  cuisine: string;
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  address: string;
  phone: string;
  website?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: string;
  specialties: string[];
  capacity: number;
  established: string;
  chefStory: string;
  signatureDishes: Array<{
    name: string;
    description: string;
    price: string;
    ingredients: string;
  }>;
  atmosphere: string;
  awards: Array<{
    name: string;
    year: string;
  }>;
  facilities: Array<{
    name: string;
    icon: string;
  }>;
}

export interface Event {
  id: string;
  name: string;
  village: string;
  villageId: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  website?: string;
  recurring: boolean;
  eventHistory: string;
  program: Array<{
    title: string;
    time: string;
    description: string;
    artist?: string;
  }>;
  ticketPrices: Array<{
    type: string;
    price: string;
  }>;
  venue: {
    name: string;
    capacity: string;
    facilities: string;
  };
  eventDuration: string;
  organizer: string;
  facilities: Array<{
    name: string;
    icon: string;
  }>;
}

export interface Market {
  id: string;
  name: string;
  village: string;
  villageId: string;
  description: string;
  image: string;
  days: string[];
  time: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  products: string[];
  marketHistory: string;
  vendors: Array<{
    name: string;
    specialty: string;
    description: string;
  }>;
  tips: string[];
  vendorCount: number;
  established: string;
  facilities: Array<{
    name: string;
    icon: string;
  }>;
}

export interface Activity {
  id: string;
  name: string;
  village: string;
  villageId: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  difficulty: string;
  price: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone?: string;
  website?: string;
  bestTime: string;
  equipment: string[];
  detailedDescription: string;
  safetyInfo: string[];
  whatToExpect: string;
  instructor: {
    name: string;
    bio: string;
    experience: string;
    certifications: string;
  };
  groupSize: string;
  ageLimit: string;
  facilities: Array<{
    name: string;
    icon: string;
  }>;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'event' | 'market' | 'activity';
  location: string;
  village: string;
}

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  avatar: string;
}

export interface Weather {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

export interface WeatherForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: string;
  icon: string;
}

export type Language = 'nl' | 'fr';