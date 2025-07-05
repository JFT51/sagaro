import { Event } from '../types';

export const events: Event[] = [
  {
    id: 'habaneras-festival',
    name: 'Habaneras Festival',
    village: 'Calella de Palafrugell',
    villageId: 'calella-palafrugell',
    description: 'Traditional Cuban songs festival with performances by the sea.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    date: '2024-07-20',
    time: '21:00',
    location: 'Port Bo Beach',
    category: 'Music',
    price: 'Free',
    coordinates: { lat: 41.9167, lng: 3.1667 },
    website: 'https://habaneres.cat',
    recurring: true,
    eventHistory: 'The Habaneras Festival has been celebrated in Calella de Palafrugell since 1966, becoming one of the most important cultural events on the Costa Brava. It celebrates the maritime heritage and the connection with Cuba through traditional songs.',
    program: [
      {
        title: 'Opening Ceremony',
        time: '21:00',
        description: 'Traditional opening with local choir',
        artist: 'Coral de Calella'
      },
      {
        title: 'Habaneras Performance',
        time: '21:30',
        description: 'Classic Cuban songs by the sea',
        artist: 'Various Artists'
      },
      {
        title: 'Rum and Cremat Tasting',
        time: '22:30',
        description: 'Traditional drinks to accompany the music'
      }
    ],
    ticketPrices: [
      { type: 'General Admission', price: 'Free' }
    ],
    venue: {
      name: 'Port Bo Beach',
      capacity: '2000 people',
      facilities: 'Outdoor seating, bar, restrooms'
    },
    eventDuration: '3 hours',
    organizer: 'Ajuntament de Palafrugell',
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'music-festival-sagaro',
    name: 'S\'Agaro Music Festival',
    village: 'S\'Agaro',
    villageId: 'sagaro',
    description: 'Classical music concerts in beautiful seaside venues.',
    image: 'https://images.pexels.com/photos/1763076/pexels-photo-1763076.jpeg',
    date: '2024-07-25',
    time: '20:30',
    location: 'Hotel de La Gavina Gardens',
    category: 'Music',
    price: '€25-€50',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    recurring: false,
    eventHistory: 'The S\'Agaro Music Festival was established in 1995 to bring world-class classical music to the Costa Brava. The festival takes place in the elegant gardens of historic venues.',
    program: [
      {
        title: 'Chamber Music Concert',
        time: '20:30',
        description: 'String quartet performance',
        artist: 'Barcelona String Quartet'
      },
      {
        title: 'Piano Recital',
        time: '22:00',
        description: 'Solo piano works by Chopin and Debussy',
        artist: 'Maria Canals'
      }
    ],
    ticketPrices: [
      { type: 'Standard', price: '€25' },
      { type: 'Premium', price: '€50' }
    ],
    venue: {
      name: 'Hotel de La Gavina Gardens',
      capacity: '300 people',
      facilities: 'Garden setting, bar, valet parking'
    },
    eventDuration: '2.5 hours',
    organizer: 'Festival Internacional de Música',
    facilities: [
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Premium Bar', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'gastronomy-week',
    name: 'Gastronomy Week',
    village: 'Palamós',
    villageId: 'palamos',
    description: 'Celebration of local prawns and Mediterranean cuisine.',
    image: 'https://images.pexels.com/photos/1763077/pexels-photo-1763077.jpeg',
    date: '2024-07-15',
    time: '19:00',
    location: 'Fishing Port',
    category: 'Food',
    price: '€15-€30',
    coordinates: { lat: 41.8500, lng: 3.1333 },
    recurring: true,
    eventHistory: 'Palamós Gastronomy Week celebrates the famous red prawns of Palamós and the rich culinary tradition of the Costa Brava. Started in 1988, it has become a major gastronomic event.',
    program: [
      {
        title: 'Prawn Tasting',
        time: '19:00',
        description: 'Fresh Palamós prawns prepared by local chefs'
      },
      {
        title: 'Cooking Demonstration',
        time: '20:00',
        description: 'Traditional Catalan seafood recipes',
        artist: 'Chef Joan Roca'
      },
      {
        title: 'Wine Pairing',
        time: '21:00',
        description: 'Local wines paired with seafood dishes'
      }
    ],
    ticketPrices: [
      { type: 'Tasting Menu', price: '€15' },
      { type: 'Full Experience', price: '€30' }
    ],
    venue: {
      name: 'Palamós Fishing Port',
      capacity: '500 people',
      facilities: 'Outdoor tents, live cooking stations'
    },
    eventDuration: '4 hours',
    organizer: 'Confraria de Pescadors de Palamós',
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'medieval-fair',
    name: 'Medieval Fair',
    village: 'Pals',
    villageId: 'pals',
    description: 'Step back in time with medieval reenactments and crafts.',
    image: 'https://images.pexels.com/photos/1763078/pexels-photo-1763078.jpeg',
    date: '2024-07-28',
    time: '10:00',
    location: 'Historic Center',
    category: 'Culture',
    price: 'Free',
    coordinates: { lat: 41.9667, lng: 3.1500 },
    recurring: false,
    eventHistory: 'The Medieval Fair of Pals recreates the atmosphere of the Middle Ages in one of the best-preserved medieval villages of Catalonia. The event showcases traditional crafts and customs.',
    program: [
      {
        title: 'Medieval Market Opening',
        time: '10:00',
        description: 'Traditional crafts and medieval products'
      },
      {
        title: 'Knight Tournament',
        time: '12:00',
        description: 'Medieval combat demonstrations'
      },
      {
        title: 'Medieval Banquet',
        time: '14:00',
        description: 'Traditional medieval feast'
      },
      {
        title: 'Folk Dancing',
        time: '16:00',
        description: 'Traditional medieval dances'
      }
    ],
    ticketPrices: [
      { type: 'Free Entry', price: 'Free' }
    ],
    venue: {
      name: 'Pals Historic Center',
      capacity: '1000 people',
      facilities: 'Medieval setting, food stalls, craft workshops'
    },
    eventDuration: '8 hours',
    organizer: 'Ajuntament de Pals',
    facilities: [
      { name: 'Free Entry', icon: 'accessible' },
      { name: 'Food Stalls', icon: 'card' }
    ]
  },
  {
    id: 'beach-volleyball',
    name: 'Beach Volleyball Tournament',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    description: 'International beach volleyball competition.',
    image: 'https://images.pexels.com/photos/1763079/pexels-photo-1763079.jpeg',
    date: '2024-07-22',
    time: '09:00',
    location: 'Platja Gran',
    category: 'Sports',
    price: 'Free',
    coordinates: { lat: 41.8167, lng: 3.0667 },
    recurring: false,
    eventHistory: 'The Beach Volleyball Tournament has been held annually since 2010, attracting international teams and promoting beach sports on the Costa Brava.',
    program: [
      {
        title: 'Registration & Warm-up',
        time: '09:00',
        description: 'Team registration and practice sessions'
      },
      {
        title: 'Qualifying Rounds',
        time: '10:00',
        description: 'Initial tournament matches'
      },
      {
        title: 'Semi-finals',
        time: '15:00',
        description: 'Best teams compete for final spots'
      },
      {
        title: 'Finals & Awards',
        time: '17:00',
        description: 'Championship match and prize ceremony'
      }
    ],
    ticketPrices: [
      { type: 'Spectator', price: 'Free' },
      { type: 'Participant', price: '€25' }
    ],
    venue: {
      name: 'Platja Gran',
      capacity: '2000 spectators',
      facilities: 'Beach courts, changing rooms, refreshments'
    },
    eventDuration: '10 hours',
    organizer: 'Costa Brava Sports Federation',
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'art-exhibition',
    name: 'Contemporary Art Exhibition',
    village: 'Begur',
    villageId: 'begur',
    description: 'Local and international artists showcase their work.',
    image: 'https://images.pexels.com/photos/1763080/pexels-photo-1763080.jpeg',
    date: '2024-07-18',
    time: '18:00',
    location: 'Cultural Center',
    category: 'Art',
    price: '€8',
    coordinates: { lat: 41.9500, lng: 3.2167 },
    recurring: false,
    eventHistory: 'The Contemporary Art Exhibition in Begur showcases emerging and established artists, focusing on Mediterranean themes and modern interpretations of coastal life.',
    program: [
      {
        title: 'Exhibition Opening',
        time: '18:00',
        description: 'Welcome reception with artists'
      },
      {
        title: 'Artist Talks',
        time: '19:00',
        description: 'Artists discuss their work and inspiration'
      },
      {
        title: 'Wine & Art',
        time: '20:00',
        description: 'Informal networking with refreshments'
      }
    ],
    ticketPrices: [
      { type: 'General', price: '€8' },
      { type: 'Students', price: '€5' }
    ],
    venue: {
      name: 'Begur Cultural Center',
      capacity: '150 people',
      facilities: 'Gallery spaces, café, gift shop'
    },
    eventDuration: '3 hours',
    organizer: 'Begur Cultural Association',
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Café', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'night-market',
    name: 'Summer Night Market',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    description: 'Evening market with local crafts and food.',
    image: 'https://images.pexels.com/photos/1763081/pexels-photo-1763081.jpeg',
    date: '2024-07-26',
    time: '20:00',
    location: 'Platja d\'Aro Center',
    category: 'Market',
    price: 'Free',
    coordinates: { lat: 41.8167, lng: 3.0667 },
    recurring: true,
    eventHistory: 'The Summer Night Market brings together local artisans and food vendors in a festive evening atmosphere, celebrating local crafts and cuisine.',
    program: [
      {
        title: 'Market Opening',
        time: '20:00',
        description: 'Artisan stalls and food vendors open'
      },
      {
        title: 'Live Music',
        time: '21:00',
        description: 'Local musicians perform',
        artist: 'Various Local Artists'
      },
      {
        title: 'Food Tasting',
        time: '22:00',
        description: 'Sample local specialties'
      }
    ],
    ticketPrices: [
      { type: 'Free Entry', price: 'Free' }
    ],
    venue: {
      name: 'Platja d\'Aro Town Center',
      capacity: '1500 people',
      facilities: 'Street stalls, outdoor seating, live stage'
    },
    eventDuration: '4 hours',
    organizer: 'Ajuntament de Castell-Platja d\'Aro',
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Street Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'wine-tasting',
    name: 'Wine Tasting Evening',
    village: 'Girona',
    villageId: 'girona',
    description: 'Discover local wines from the Empordà region.',
    image: 'https://images.pexels.com/photos/1763082/pexels-photo-1763082.jpeg',
    date: '2024-07-30',
    time: '19:30',
    location: 'Historic Quarter',
    category: 'Food',
    price: '€20',
    coordinates: { lat: 41.9794, lng: 2.8214 },
    recurring: false,
    eventHistory: 'This wine tasting event showcases the best wines from the Empordà DO region, featuring both established wineries and emerging producers.',
    program: [
      {
        title: 'Welcome Reception',
        time: '19:30',
        description: 'Introduction to Empordà wines'
      },
      {
        title: 'Guided Tasting',
        time: '20:00',
        description: 'Professional sommelier-led tasting'
      },
      {
        title: 'Food Pairing',
        time: '21:00',
        description: 'Local cheeses and charcuterie'
      }
    ],
    ticketPrices: [
      { type: 'Standard Tasting', price: '€20' },
      { type: 'Premium Experience', price: '€35' }
    ],
    venue: {
      name: 'Girona Historic Quarter',
      capacity: '80 people',
      facilities: 'Historic courtyard, wine cellar, tasting room'
    },
    eventDuration: '2.5 hours',
    organizer: 'DO Empordà',
    facilities: [
      { name: 'Wine Shop', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'flamenco-night',
    name: 'Flamenco Night',
    village: 'Cadaqués',
    villageId: 'cadaques',
    description: 'Passionate flamenco performances under the stars.',
    image: 'https://images.pexels.com/photos/1763083/pexels-photo-1763083.jpeg',
    date: '2024-07-19',
    time: '22:00',
    location: 'Plaza Mayor',
    category: 'Music',
    price: '€15',
    coordinates: { lat: 42.2889, lng: 3.2794 },
    recurring: false,
    eventHistory: 'Flamenco Night in Cadaqués brings the passion of Andalusian culture to the Costa Brava, featuring authentic flamenco artists in an intimate setting.',
    program: [
      {
        title: 'Opening Performance',
        time: '22:00',
        description: 'Traditional flamenco guitar',
        artist: 'Paco Fernández'
      },
      {
        title: 'Dance Performance',
        time: '22:30',
        description: 'Passionate flamenco dancing',
        artist: 'Carmen Morales'
      },
      {
        title: 'Finale',
        time: '23:30',
        description: 'Collaborative performance with audience participation'
      }
    ],
    ticketPrices: [
      { type: 'General Admission', price: '€15' },
      { type: 'Front Row', price: '€25' }
    ],
    venue: {
      name: 'Cadaqués Plaza Mayor',
      capacity: '200 people',
      facilities: 'Outdoor stage, bar, traditional seating'
    },
    eventDuration: '2 hours',
    organizer: 'Cadaqués Cultural Center',
    facilities: [
      { name: 'Bar Service', icon: 'card' },
      { name: 'Limited Parking', icon: 'parking' }
    ]
  },
  {
    id: 'sailing-regatta',
    name: 'Costa Brava Sailing Regatta',
    village: 'Roses',
    villageId: 'roses',
    description: 'Annual sailing competition along the Costa Brava coast.',
    image: 'https://images.pexels.com/photos/1763084/pexels-photo-1763084.jpeg',
    date: '2024-07-21',
    time: '10:00',
    location: 'Port of Roses',
    category: 'Sports',
    price: 'Free',
    coordinates: { lat: 42.2667, lng: 3.1833 },
    recurring: true,
    eventHistory: 'The Costa Brava Sailing Regatta has been held annually since 1985, attracting sailors from across the Mediterranean for this prestigious competition.',
    program: [
      {
        title: 'Registration & Briefing',
        time: '10:00',
        description: 'Sailor registration and race briefing'
      },
      {
        title: 'Race Start',
        time: '12:00',
        description: 'Sailing competition begins'
      },
      {
        title: 'Finish & Awards',
        time: '16:00',
        description: 'Race finish and prize ceremony'
      }
    ],
    ticketPrices: [
      { type: 'Spectator', price: 'Free' },
      { type: 'Participant', price: '€50' }
    ],
    venue: {
      name: 'Port of Roses',
      capacity: '1000 spectators',
      facilities: 'Marina, viewing areas, restaurants'
    },
    eventDuration: '8 hours',
    organizer: 'Club Nàutic Roses',
    facilities: [
      { name: 'Marina Services', icon: 'card' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'jazz-festival',
    name: 'Peralada Jazz Festival',
    village: 'Peralada',
    villageId: 'peralada',
    description: 'International jazz artists perform in a castle setting.',
    image: 'https://images.pexels.com/photos/1763085/pexels-photo-1763085.jpeg',
    date: '2024-07-24',
    time: '21:30',
    location: 'Peralada Castle',
    category: 'Music',
    price: '€45-€80',
    coordinates: { lat: 42.3000, lng: 3.0167 },
    website: 'https://festivalperalada.com',
    recurring: true,
    eventHistory: 'The Peralada Jazz Festival, part of the larger Festival Castell de Peralada, has been bringing world-class jazz to Catalonia since 1987.',
    program: [
      {
        title: 'Opening Act',
        time: '21:30',
        description: 'Local jazz ensemble',
        artist: 'Barcelona Jazz Collective'
      },
      {
        title: 'Main Performance',
        time: '22:30',
        description: 'International jazz star',
        artist: 'Diana Krall'
      }
    ],
    ticketPrices: [
      { type: 'General', price: '€45' },
      { type: 'Premium', price: '€65' },
      { type: 'VIP', price: '€80' }
    ],
    venue: {
      name: 'Peralada Castle',
      capacity: '1800 people',
      facilities: 'Historic castle, wine bar, fine dining'
    },
    eventDuration: '3 hours',
    organizer: 'Festival Castell de Peralada',
    facilities: [
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Fine Dining', icon: 'card' },
      { name: 'Wine Bar', icon: 'card' }
    ]
  },
  {
    id: 'ceramic-workshop',
    name: 'Traditional Ceramic Workshop',
    village: 'La Bisbal d\'Empordà',
    villageId: 'la-bisbal-emporda',
    description: 'Learn traditional pottery techniques from master craftsmen.',
    image: 'https://images.pexels.com/photos/1763086/pexels-photo-1763086.jpeg',
    date: '2024-07-17',
    time: '10:00',
    location: 'Pottery Quarter',
    category: 'Culture',
    price: '€25',
    coordinates: { lat: 41.9667, lng: 3.0333 },
    recurring: false,
    eventHistory: 'La Bisbal d\'Empordà has been a center of ceramic production for centuries. This workshop celebrates the traditional techniques passed down through generations.',
    program: [
      {
        title: 'Introduction to Ceramics',
        time: '10:00',
        description: 'History and techniques overview'
      },
      {
        title: 'Hands-on Workshop',
        time: '10:30',
        description: 'Create your own ceramic piece'
      },
      {
        title: 'Glazing & Firing',
        time: '12:00',
        description: 'Learn finishing techniques'
      }
    ],
    ticketPrices: [
      { type: 'Workshop', price: '€25' },
      { type: 'Materials Included', price: '€35' }
    ],
    venue: {
      name: 'Traditional Pottery Workshop',
      capacity: '20 people',
      facilities: 'Pottery wheels, kilns, tools'
    },
    eventDuration: '3 hours',
    organizer: 'Artisans of La Bisbal',
    facilities: [
      { name: 'All Materials', icon: 'card' },
      { name: 'Take Home Piece', icon: 'accessible' }
    ]
  },
  {
    id: 'sardana-dance',
    name: 'Sardana Dance Festival',
    village: 'Girona',
    villageId: 'girona',
    description: 'Traditional Catalan circle dance celebration.',
    image: 'https://images.pexels.com/photos/1763087/pexels-photo-1763087.jpeg',
    date: '2024-07-23',
    time: '18:00',
    location: 'Cathedral Square',
    category: 'Culture',
    price: 'Free',
    coordinates: { lat: 41.9870, lng: 2.8250 },
    recurring: true,
    eventHistory: 'The Sardana is the traditional dance of Catalonia, symbolizing unity and community. This festival celebrates Catalan culture and brings people together.',
    program: [
      {
        title: 'Dance Instruction',
        time: '18:00',
        description: 'Learn basic Sardana steps'
      },
      {
        title: 'Community Dance',
        time: '19:00',
        description: 'Join the traditional circle dance'
      },
      {
        title: 'Cultural Exhibition',
        time: '20:00',
        description: 'Display of Catalan traditions'
      }
    ],
    ticketPrices: [
      { type: 'Free Participation', price: 'Free' }
    ],
    venue: {
      name: 'Girona Cathedral Square',
      capacity: '500 people',
      facilities: 'Historic square, traditional music'
    },
    eventDuration: '3 hours',
    organizer: 'Girona Cultural Department',
    facilities: [
      { name: 'Free Event', icon: 'accessible' },
      { name: 'Traditional Music', icon: 'card' }
    ]
  },
  {
    id: 'food-truck-festival',
    name: 'Food Truck Festival',
    village: 'Lloret de Mar',
    villageId: 'lloret-de-mar',
    description: 'International food trucks gather for a culinary celebration.',
    image: 'https://images.pexels.com/photos/1763088/pexels-photo-1763088.jpeg',
    date: '2024-07-27',
    time: '12:00',
    location: 'Fenals Beach',
    category: 'Food',
    price: 'Free entry',
    coordinates: { lat: 41.7000, lng: 2.8333 },
    recurring: false,
    eventHistory: 'The Food Truck Festival brings together diverse culinary traditions in a casual beachside setting, celebrating international cuisine.',
    program: [
      {
        title: 'Festival Opening',
        time: '12:00',
        description: 'Food trucks open for service'
      },
      {
        title: 'Cooking Demonstrations',
        time: '14:00',
        description: 'Chefs showcase their specialties'
      },
      {
        title: 'Live Music',
        time: '16:00',
        description: 'Local bands perform',
        artist: 'Various Artists'
      },
      {
        title: 'Best Dish Competition',
        time: '18:00',
        description: 'Visitors vote for their favorite'
      }
    ],
    ticketPrices: [
      { type: 'Free Entry', price: 'Free' }
    ],
    venue: {
      name: 'Fenals Beach',
      capacity: '2000 people',
      facilities: 'Beach setting, food trucks, seating areas'
    },
    eventDuration: '8 hours',
    organizer: 'Lloret Tourism Board',
    facilities: [
      { name: 'Beach Access', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'theater-festival',
    name: 'Street Theater Festival',
    village: 'Figueres',
    villageId: 'figueres',
    description: 'International street performers take over the city.',
    image: 'https://images.pexels.com/photos/1763089/pexels-photo-1763089.jpeg',
    date: '2024-07-16',
    time: '19:00',
    location: 'City Center',
    category: 'Culture',
    price: 'Free',
    coordinates: { lat: 42.2667, lng: 2.9667 },
    recurring: true,
    eventHistory: 'The Street Theater Festival transforms Figueres into an open-air stage, celebrating the art of street performance and bringing theater to the people.',
    program: [
      {
        title: 'Opening Parade',
        time: '19:00',
        description: 'Colorful parade through the streets'
      },
      {
        title: 'Street Performances',
        time: '20:00',
        description: 'Multiple acts throughout the city'
      },
      {
        title: 'Grand Finale',
        time: '22:00',
        description: 'All performers gather for closing show'
      }
    ],
    ticketPrices: [
      { type: 'Free Access', price: 'Free' }
    ],
    venue: {
      name: 'Figueres City Center',
      capacity: '3000 people',
      facilities: 'Multiple stages, street venues'
    },
    eventDuration: '4 hours',
    organizer: 'Figueres Cultural Council',
    facilities: [
      { name: 'Multiple Venues', icon: 'accessible' },
      { name: 'Street Parking', icon: 'parking' }
    ]
  },
  {
    id: 'triathlon',
    name: 'Costa Brava Triathlon',
    village: 'L\'Escala',
    villageId: 'lescala',
    description: 'Swimming, cycling, and running competition along the coast.',
    image: 'https://images.pexels.com/photos/1763090/pexels-photo-1763090.jpeg',
    date: '2024-07-14',
    time: '08:00',
    location: 'Riells Beach',
    category: 'Sports',
    price: '€35 registration',
    coordinates: { lat: 42.1167, lng: 3.1333 },
    recurring: true,
    eventHistory: 'The Costa Brava Triathlon has been challenging athletes since 1995, combining swimming in the Mediterranean with cycling and running through scenic coastal routes.',
    program: [
      {
        title: 'Registration & Check-in',
        time: '08:00',
        description: 'Athlete registration and equipment check'
      },
      {
        title: 'Swimming Start',
        time: '09:00',
        description: '1.5km swim in the Mediterranean'
      },
      {
        title: 'Cycling Stage',
        time: '09:45',
        description: '40km coastal cycling route'
      },
      {
        title: 'Running Finish',
        time: '11:30',
        description: '10km run and finish line celebration'
      }
    ],
    ticketPrices: [
      { type: 'Registration', price: '€35' },
      { type: 'Spectator', price: 'Free' }
    ],
    venue: {
      name: 'Riells Beach',
      capacity: '500 participants',
      facilities: 'Transition areas, medical support, timing'
    },
    eventDuration: '6 hours',
    organizer: 'Costa Brava Sports Club',
    facilities: [
      { name: 'Medical Support', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Refreshments', icon: 'card' }
    ]
  },
  {
    id: 'photography-exhibition',
    name: 'Costa Brava Photography Exhibition',
    village: 'Tossa de Mar',
    villageId: 'tossa-de-mar',
    description: 'Stunning photographs capturing the beauty of the Costa Brava.',
    image: 'https://images.pexels.com/photos/1763091/pexels-photo-1763091.jpeg',
    date: '2024-07-29',
    time: '17:00',
    location: 'Vila Vella',
    category: 'Art',
    price: '€5',
    coordinates: { lat: 41.7194, lng: 2.9306 },
    recurring: false,
    eventHistory: 'This photography exhibition showcases the natural beauty and cultural heritage of the Costa Brava through the lens of local and international photographers.',
    program: [
      {
        title: 'Exhibition Opening',
        time: '17:00',
        description: 'Welcome and exhibition tour'
      },
      {
        title: 'Photographer Meet & Greet',
        time: '18:00',
        description: 'Meet the featured photographers'
      },
      {
        title: 'Photography Workshop',
        time: '19:00',
        description: 'Tips for coastal photography'
      }
    ],
    ticketPrices: [
      { type: 'General Admission', price: '€5' },
      { type: 'Students', price: '€3' }
    ],
    venue: {
      name: 'Vila Vella Historic Center',
      capacity: '200 people',
      facilities: 'Historic walls, gallery spaces'
    },
    eventDuration: '3 hours',
    organizer: 'Tossa Photography Society',
    facilities: [
      { name: 'Historic Venue', icon: 'accessible' },
      { name: 'Limited Parking', icon: 'parking' }
    ]
  },
  {
    id: 'fireworks-show',
    name: 'Summer Fireworks Spectacular',
    village: 'Blanes',
    villageId: 'blanes',
    description: 'Magnificent fireworks display over the Mediterranean.',
    image: 'https://images.pexels.com/photos/1763092/pexels-photo-1763092.jpeg',
    date: '2024-07-31',
    time: '22:30',
    location: 'Blanes Beach',
    category: 'Entertainment',
    price: 'Free',
    coordinates: { lat: 41.6750, lng: 2.7917 },
    recurring: true,
    eventHistory: 'The Summer Fireworks Spectacular marks the end of July with a breathtaking display over the Mediterranean, visible from the entire Blanes coastline.',
    program: [
      {
        title: 'Pre-show Entertainment',
        time: '21:30',
        description: 'Live music and street performers'
      },
      {
        title: 'Fireworks Display',
        time: '22:30',
        description: '30-minute spectacular over the sea'
      },
      {
        title: 'After Party',
        time: '23:00',
        description: 'Beach bars and celebration'
      }
    ],
    ticketPrices: [
      { type: 'Free Viewing', price: 'Free' }
    ],
    venue: {
      name: 'Blanes Beach',
      capacity: '5000 people',
      facilities: 'Beach viewing, bars, restaurants'
    },
    eventDuration: '2 hours',
    organizer: 'Ajuntament de Blanes',
    facilities: [
      { name: 'Beach Access', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Beach Bars', icon: 'card' }
    ]
  },
  {
    id: 'opera-gala',
    name: 'Opera Gala at Cap Roig',
    village: 'Calella de Palafrugell',
    villageId: 'calella-palafrugell',
    description: 'World-class opera performances in botanical gardens.',
    image: 'https://images.pexels.com/photos/1763093/pexels-photo-1763093.jpeg',
    date: '2024-07-26',
    time: '21:00',
    location: 'Cap Roig Botanical Garden',
    category: 'Music',
    price: '€60-€120',
    coordinates: { lat: 41.9100, lng: 3.1750 },
    website: 'https://caproigfestival.com',
    recurring: true,
    eventHistory: 'The Cap Roig Festival has been presenting world-class performances in this unique botanical garden setting since 2006, combining nature with high culture.',
    program: [
      {
        title: 'Garden Reception',
        time: '20:00',
        description: 'Pre-show reception in the gardens'
      },
      {
        title: 'Opera Performance',
        time: '21:00',
        description: 'Full opera with international cast',
        artist: 'Metropolitan Opera Stars'
      },
      {
        title: 'Post-show Reception',
        time: '23:30',
        description: 'Meet the artists reception'
      }
    ],
    ticketPrices: [
      { type: 'Standard', price: '€60' },
      { type: 'Premium', price: '€90' },
      { type: 'VIP Experience', price: '€120' }
    ],
    venue: {
      name: 'Cap Roig Botanical Garden',
      capacity: '2000 people',
      facilities: 'Botanical gardens, fine dining, bars'
    },
    eventDuration: '4 hours',
    organizer: 'Cap Roig Festival',
    facilities: [
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Fine Dining', icon: 'card' },
      { name: 'Garden Setting', icon: 'accessible' }
    ]
  },
  {
    id: 'cycling-tour',
    name: 'Empordà Cycling Tour',
    village: 'Castelló d\'Empúries',
    villageId: 'castello-empuries',
    description: 'Guided cycling tour through medieval villages and countryside.',
    image: 'https://images.pexels.com/photos/1763094/pexels-photo-1763094.jpeg',
    date: '2024-07-20',
    time: '09:00',
    location: 'Town Square',
    category: 'Sports',
    price: '€30',
    coordinates: { lat: 42.2500, lng: 3.0833 },
    recurring: false,
    eventHistory: 'This cycling tour showcases the medieval heritage and natural beauty of the Empordà region, following ancient routes between historic villages.',
    program: [
      {
        title: 'Tour Briefing',
        time: '09:00',
        description: 'Safety briefing and route overview'
      },
      {
        title: 'Medieval Villages Tour',
        time: '09:30',
        description: '25km guided cycling tour'
      },
      {
        title: 'Traditional Lunch',
        time: '12:30',
        description: 'Local cuisine at historic inn'
      },
      {
        title: 'Return Journey',
        time: '14:00',
        description: 'Scenic route back to starting point'
      }
    ],
    ticketPrices: [
      { type: 'Tour & Lunch', price: '€30' },
      { type: 'Bike Rental', price: '€15' }
    ],
    venue: {
      name: 'Castelló d\'Empúries',
      capacity: '25 cyclists',
      facilities: 'Bike rental, guide, lunch included'
    },
    eventDuration: '6 hours',
    organizer: 'Empordà Cycling Tours',
    facilities: [
      { name: 'Bike Rental', icon: 'card' },
      { name: 'Guided Tour', icon: 'accessible' },
      { name: 'Lunch Included', icon: 'card' }
    ]
  },
  {
    id: 'monastery-festival',
    name: 'Monastery Music Festival',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Classical concerts in the historic Benedictine monastery.',
    image: 'https://images.pexels.com/photos/1763095/pexels-photo-1763095.jpeg',
    date: '2024-07-21',
    time: '21:00',
    location: 'Benedictine Monastery',
    category: 'Music',
    price: '€18-€35',
    coordinates: { lat: 41.7820, lng: 3.0320 },
    recurring: true,
    eventHistory: 'The Monastery Music Festival has been held since 1958, taking advantage of the exceptional acoustics of the 10th-century Benedictine monastery to present classical music concerts.',
    program: [
      {
        title: 'Monastery Tour',
        time: '20:00',
        description: 'Guided tour of the historic monastery'
      },
      {
        title: 'Chamber Music Concert',
        time: '21:00',
        description: 'String quartet in the monastery church',
        artist: 'Quartet Casals'
      },
      {
        title: 'Wine Reception',
        time: '22:30',
        description: 'Local wine tasting in the cloister'
      }
    ],
    ticketPrices: [
      { type: 'Concert Only', price: '€18' },
      { type: 'Concert + Tour', price: '€25' },
      { type: 'Full Experience', price: '€35' }
    ],
    venue: {
      name: 'Benedictine Monastery',
      capacity: '200 people',
      facilities: 'Historic monastery, exceptional acoustics, cloister'
    },
    eventDuration: '3 hours',
    organizer: 'Festival Internacional de Música de Sant Feliu',
    facilities: [
      { name: 'Historic Venue', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Wine Reception', icon: 'card' }
    ]
  },
  {
    id: 'cork-festival',
    name: 'Cork Heritage Festival',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Celebrating the town\'s cork industry heritage with demonstrations and crafts.',
    image: 'https://images.pexels.com/photos/1763096/pexels-photo-1763096.jpeg',
    date: '2024-07-28',
    time: '10:00',
    location: 'Historic Center',
    category: 'Culture',
    price: 'Free',
    coordinates: { lat: 41.7820, lng: 3.0320 },
    recurring: true,
    eventHistory: 'Sant Feliu de Guíxols was the cork capital of the Mediterranean in the 19th century. This festival celebrates that heritage with traditional cork-working demonstrations and exhibitions.',
    program: [
      {
        title: 'Cork Museum Opening',
        time: '10:00',
        description: 'Special exhibition on cork industry history'
      },
      {
        title: 'Traditional Cork Working',
        time: '11:00',
        description: 'Artisans demonstrate traditional cork crafts'
      },
      {
        title: 'Modernist Architecture Tour',
        time: '14:00',
        description: 'Tour of buildings from the cork boom era'
      },
      {
        title: 'Cork Products Market',
        time: '16:00',
        description: 'Local artisans sell cork products and crafts'
      }
    ],
    ticketPrices: [
      { type: 'Free Entry', price: 'Free' }
    ],
    venue: {
      name: 'Sant Feliu Historic Center',
      capacity: '800 people',
      facilities: 'Museum, historic buildings, market stalls'
    },
    eventDuration: '8 hours',
    organizer: 'Ajuntament de Sant Feliu de Guíxols',
    facilities: [
      { name: 'Free Entry', icon: 'accessible' },
      { name: 'Historic Tour', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' }
    ]
  },
  {
    id: 'seafood-festival',
    name: 'Seafood Festival',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Fresh seafood celebration with local fishermen and restaurants.',
    image: 'https://images.pexels.com/photos/1763097/pexels-photo-1763097.jpeg',
    date: '2024-07-25',
    time: '18:00',
    location: 'Port Area',
    category: 'Food',
    price: '€12-€25',
    coordinates: { lat: 41.7800, lng: 3.0300 },
    recurring: true,
    eventHistory: 'The Seafood Festival celebrates Sant Feliu\'s maritime heritage and the daily catch of local fishermen, featuring traditional seafood preparations and modern culinary interpretations.',
    program: [
      {
        title: 'Fish Market Tour',
        time: '18:00',
        description: 'Visit the local fish market with fishermen'
      },
      {
        title: 'Seafood Tasting',
        time: '19:00',
        description: 'Sample fresh seafood prepared by local restaurants'
      },
      {
        title: 'Cooking Demonstration',
        time: '20:00',
        description: 'Traditional seafood recipes',
        artist: 'Local Chefs'
      },
      {
        title: 'Live Music',
        time: '21:00',
        description: 'Traditional Catalan music by the sea',
        artist: 'Havaneres Group'
      }
    ],
    ticketPrices: [
      { type: 'Tasting Plate', price: '€12' },
      { type: 'Full Menu', price: '€25' }
    ],
    venue: {
      name: 'Sant Feliu Port',
      capacity: '600 people',
      facilities: 'Port setting, outdoor tents, live stage'
    },
    eventDuration: '4 hours',
    organizer: 'Confraria de Pescadors de Sant Feliu',
    facilities: [
      { name: 'Port Location', icon: 'accessible' },
      { name: 'Fresh Seafood', icon: 'card' },
      { name: 'Live Music', icon: 'accessible' }
    ]
  }
];