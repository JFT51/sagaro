import { Village } from '../types';

export const villages: Village[] = [
  {
    id: 'sagaro',
    name: 'S\'Agaro',
    description: 'A beautiful coastal town on the Costa Brava, known for its stunning beaches and historic architecture.',
    image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg',
    highlights: ['Platja de Sa Conca', 'Camí de Ronda', 'Hotel de La Gavina', 'Vila Vella'],
    coordinates: { lat: 41.7833, lng: 3.0333 },
    population: 3200,
    distance: '0 km',
    founded: '1924',
    elevation: '15m above sea level',
    history: 'S\'Agaro was conceived in the 1920s by Josep Ensesa as an exclusive garden city resort. Designed by architect Rafael Masó, it represents one of the finest examples of Mediterranean resort planning, combining modernist architecture with natural beauty.',
    architecture: [
      {
        name: 'Hotel de La Gavina',
        description: 'Iconic luxury hotel designed in Mediterranean style',
        period: '1932'
      },
      {
        name: 'Villa Seraphina',
        description: 'Modernist villa showcasing Noucentisme architecture',
        period: '1920s'
      }
    ],
    traditions: [
      {
        name: 'Festa Major',
        description: 'Annual summer festival celebrating local culture',
        when: 'August'
      },
      {
        name: 'Camí de Ronda Walk',
        description: 'Traditional coastal path walking tradition',
        when: 'Year-round'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'S\'Agaro was designed as a garden city in the 1920s',
      'The town has hosted many celebrities and royalty',
      'It features one of the most beautiful coastal walks in Spain'
    ]
  },
  {
    id: 'castell-platja-daro',
    name: 'Castell-Platja d\'Aro',
    description: 'A vibrant seaside resort with excellent beaches, shopping, and nightlife.',
    image: 'https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg',
    highlights: ['Platja Gran', 'Aquadiver', 'Shopping Boulevard', 'Nightlife'],
    coordinates: { lat: 41.8167, lng: 3.0667 },
    population: 11000,
    distance: '3 km',
    founded: '1962',
    elevation: '8m above sea level',
    history: 'Originally a small fishing village, Castell-Platja d\'Aro transformed into a major tourist destination in the 1960s. The town successfully balances modern tourism infrastructure with preservation of its coastal natural beauty.',
    architecture: [
      {
        name: 'Medieval Castle Ruins',
        description: 'Remains of 11th-century fortification',
        period: '11th century'
      },
      {
        name: 'Modern Promenade',
        description: 'Contemporary seafront development',
        period: '1980s-present'
      }
    ],
    traditions: [
      {
        name: 'Carnival',
        description: 'Colorful carnival celebration with parades',
        when: 'February/March'
      },
      {
        name: 'Beach Volleyball Tournament',
        description: 'International beach sports competition',
        when: 'July'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'Home to one of the longest beaches on the Costa Brava',
      'Famous for its summer festivals and events',
      'Features the largest shopping center in the region'
    ]
  },
  {
    id: 'sant-antoni-calonge',
    name: 'Sant Antoni de Calonge',
    description: 'A charming fishing village with authentic Catalan culture and beautiful beaches.',
    image: 'https://images.pexels.com/photos/1450362/pexels-photo-1450362.jpeg',
    highlights: ['Torre Valentina', 'Platja de Treumal', 'Historic Center', 'Fishing Port'],
    coordinates: { lat: 41.8333, lng: 3.0833 },
    population: 8500,
    distance: '5 km',
    founded: '13th century',
    elevation: '12m above sea level',
    history: 'Sant Antoni de Calonge has been a fishing community for over 700 years. The village maintains its maritime traditions while adapting to modern tourism, creating a perfect balance between authenticity and visitor amenities.',
    architecture: [
      {
        name: 'Torre Valentina',
        description: '16th-century coastal watchtower',
        period: '16th century'
      },
      {
        name: 'Traditional Fishermen Houses',
        description: 'Whitewashed houses typical of coastal Catalonia',
        period: '18th-19th century'
      }
    ],
    traditions: [
      {
        name: 'Festa del Pescador',
        description: 'Fisherman\'s festival celebrating maritime heritage',
        when: 'July'
      },
      {
        name: 'Sardana Dancing',
        description: 'Traditional Catalan circle dance',
        when: 'Sundays'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'The tower of Torre Valentina is a 16th-century watchtower',
      'Known for its traditional fishing boats called "llaüts"',
      'Home to several Blue Flag beaches'
    ]
  },
  {
    id: 'palamos',
    name: 'Palamós',
    description: 'A historic port town famous for its prawns and Mediterranean charm.',
    image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg',
    highlights: ['Fishing Port', 'Prawns Market', 'Platja de Castell', 'Historic Quarter'],
    coordinates: { lat: 41.8500, lng: 3.1333 },
    population: 17500,
    distance: '8 km',
    founded: '1277',
    elevation: '5m above sea level',
    history: 'Founded in 1277 by King Peter III of Aragon, Palamós has been an important Mediterranean port for over 700 years. The town is renowned for its fishing industry, particularly the famous Palamós prawns, considered among the finest in the Mediterranean.',
    architecture: [
      {
        name: 'Santa Maria Church',
        description: 'Gothic church with baroque additions',
        period: '14th-18th century'
      },
      {
        name: 'Fishing Museum',
        description: 'Modern museum showcasing maritime heritage',
        period: '2002'
      }
    ],
    traditions: [
      {
        name: 'Prawn Festival',
        description: 'Celebration of the famous Palamós prawns',
        when: 'June'
      },
      {
        name: 'Cork Festival',
        description: 'Honoring the traditional cork industry',
        when: 'September'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'Famous for the sweetest prawns in the Mediterranean',
      'Has one of the most important fishing ports in Catalonia',
      'The cork industry was historically very important here'
    ]
  },
  {
    id: 'calella-palafrugell',
    name: 'Calella de Palafrugell',
    description: 'A picturesque fishing village with white houses and crystal-clear waters.',
    image: 'https://images.pexels.com/photos/1450364/pexels-photo-1450364.jpeg',
    highlights: ['Platja del Canadell', 'Cap Roig', 'Habaneras Festival', 'Fishing Port'],
    coordinates: { lat: 41.9167, lng: 3.1667 },
    population: 4500,
    distance: '15 km',
    founded: '14th century',
    elevation: '20m above sea level',
    history: 'Calella de Palafrugell evolved from a small fishing settlement into one of the Costa Brava\'s most photographed destinations. The village has preserved its traditional character while becoming famous for the annual Habaneras Festival.',
    architecture: [
      {
        name: 'Traditional Fishermen Houses',
        description: 'Iconic white houses with blue shutters',
        period: '19th century'
      },
      {
        name: 'Cap Roig Castle',
        description: 'Early 20th-century castle with botanical gardens',
        period: '1927'
      }
    ],
    traditions: [
      {
        name: 'Habaneras Festival',
        description: 'Famous Cuban song festival by the sea',
        when: 'July'
      },
      {
        name: 'Cantada d\'Havaneres',
        description: 'Traditional evening habanera singing',
        when: 'Summer evenings'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'Hosts the famous Habaneras Festival every summer',
      'Features some of the most photographed spots on the Costa Brava',
      'Traditional fishing boats are still used today'
    ]
  },
  {
    id: 'llafranc',
    name: 'Llafranc',
    description: 'An elegant coastal resort with a beautiful bay and lighthouse.',
    image: 'https://images.pexels.com/photos/1450365/pexels-photo-1450365.jpeg',
    highlights: ['Lighthouse', 'Platja de Llafranc', 'Coastal Path', 'Restaurants'],
    coordinates: { lat: 41.9000, lng: 3.1833 },
    population: 800,
    distance: '12 km',
    founded: '19th century',
    elevation: '25m above sea level',
    history: 'Llafranc developed as an elegant resort destination in the early 20th century. The village has maintained its sophisticated atmosphere, attracting artists, writers, and discerning travelers seeking tranquility and natural beauty.',
    architecture: [
      {
        name: 'Sant Sebastià Lighthouse',
        description: 'Historic lighthouse with panoramic views',
        period: '1857'
      },
      {
        name: 'Modernist Villas',
        description: 'Early 20th-century summer residences',
        period: '1900-1930'
      }
    ],
    traditions: [
      {
        name: 'Far de Sant Sebastià Festival',
        description: 'Lighthouse festival with cultural events',
        when: 'August'
      },
      {
        name: 'Sunset Concerts',
        description: 'Classical music concerts at sunset',
        when: 'Summer'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'One of the smallest villages but most elegant on the Costa Brava',
      'The lighthouse offers spectacular views of the coastline',
      'Popular with artists and writers for its inspiring scenery'
    ]
  },
  {
    id: 'tamariu',
    name: 'Tamariu',
    description: 'A small, intimate cove with a perfect beach and charming atmosphere.',
    image: 'https://images.pexels.com/photos/1450366/pexels-photo-1450366.jpeg',
    highlights: ['Platja de Tamariu', 'Coastal Walking', 'Traditional Houses', 'Sunset Views'],
    coordinates: { lat: 41.9333, lng: 3.2000 },
    population: 600,
    distance: '18 km',
    founded: '18th century',
    elevation: '10m above sea level',
    history: 'Tamariu began as a small fishing settlement and has carefully preserved its intimate character. The village represents the quintessential Costa Brava experience with its perfect crescent beach and traditional Mediterranean architecture.',
    architecture: [
      {
        name: 'Traditional Stone Houses',
        description: 'Local stone construction typical of the region',
        period: '18th-19th century'
      },
      {
        name: 'Fishing Huts',
        description: 'Original fishermen\'s storage buildings',
        period: '19th century'
      }
    ],
    traditions: [
      {
        name: 'Festa de Sant Pere',
        description: 'Patron saint festival of fishermen',
        when: 'June 29'
      },
      {
        name: 'Traditional Fishing',
        description: 'Maintaining traditional fishing methods',
        when: 'Year-round'
      }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'Considered one of the most beautiful small beaches in Spain',
      'The village has maintained its traditional fishing character',
      'Popular spot for snorkeling and diving'
    ]
  },
  {
    id: 'begur',
    name: 'Begur',
    description: 'A medieval hilltop town with a historic castle and stunning coastal views.',
    image: 'https://images.pexels.com/photos/1450367/pexels-photo-1450367.jpeg',
    highlights: ['Castle Ruins', 'Historic Center', 'Coastal Views', 'Indian Houses'],
    coordinates: { lat: 41.9500, lng: 3.2167 },
    population: 4200,
    distance: '20 km',
    founded: '11th century',
    elevation: '200m above sea level',
    history: 'Begur\'s history spans over 1000 years, with its castle serving as a strategic defensive position. The town is unique for its "Indian Houses" - mansions built by locals who emigrated to Cuba and returned wealthy in the 19th century.',
    architecture: [
      {
        name: 'Begur Castle',
        description: 'Medieval castle ruins with panoramic views',
        period: '11th-16th century'
      },
      {
        name: 'Indian Houses',
        description: 'Colonial-style mansions built by Cuban emigrants',
        period: '19th century'
      }
    ],
    traditions: [
      {
        name: 'Fira d\'Indians',
        description: 'Festival celebrating Cuban heritage',
        when: 'September'
      },
      {
        name: 'Medieval Festival',
        description: 'Historical reenactment in the castle',
        when: 'August'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'The castle dates back to the 16th century',
      'Features unique "Indian Houses" built by returning emigrants',
      'Offers panoramic views of the entire Costa Brava'
    ]
  },
  {
    id: 'pals',
    name: 'Pals',
    description: 'A perfectly preserved medieval village with cobblestone streets.',
    image: 'https://images.pexels.com/photos/1450368/pexels-photo-1450368.jpeg',
    highlights: ['Medieval Center', 'Clock Tower', 'Gothic Quarter', 'Rice Fields'],
    coordinates: { lat: 41.9667, lng: 3.1500 },
    population: 2800,
    distance: '25 km',
    founded: '9th century',
    elevation: '65m above sea level',
    history: 'Pals is one of Catalonia\'s best-preserved medieval villages. Carefully restored in the 1960s, it maintains its authentic medieval character while being surrounded by important rice fields that have been cultivated for centuries.',
    architecture: [
      {
        name: 'Torre de les Hores',
        description: 'Romanesque clock tower',
        period: '11th-15th century'
      },
      {
        name: 'Gothic Quarter',
        description: 'Medieval stone houses and narrow streets',
        period: '13th-15th century'
      }
    ],
    traditions: [
      {
        name: 'Medieval Fair',
        description: 'Annual medieval market and festivities',
        when: 'October'
      },
      {
        name: 'Rice Harvest Festival',
        description: 'Celebrating the local rice cultivation',
        when: 'September'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'One of the best-preserved medieval villages in Catalonia',
      'The surrounding rice fields are a protected natural area',
      'Features a 15th-century clock tower'
    ]
  },
  {
    id: 'peratallada',
    name: 'Peratallada',
    description: 'A medieval fortress village carved from stone, truly magical.',
    image: 'https://images.pexels.com/photos/1450369/pexels-photo-1450369.jpeg',
    highlights: ['Castle', 'Stone Streets', 'Medieval Walls', 'Artisan Shops'],
    coordinates: { lat: 41.9833, lng: 3.1167 },
    population: 500,
    distance: '28 km',
    founded: '10th century',
    elevation: '45m above sea level',
    history: 'Peratallada, meaning "carved stone," is literally carved from rock. This extraordinary medieval village has been declared a Historic-Artistic Site and represents one of the finest examples of medieval architecture in Catalonia.',
    architecture: [
      {
        name: 'Fortified Castle',
        description: 'Medieval castle carved from living rock',
        period: '10th-14th century'
      },
      {
        name: 'Stone Streets',
        description: 'Entire village carved from single stone formation',
        period: '10th-15th century'
      }
    ],
    traditions: [
      {
        name: 'Medieval Festival',
        description: 'Historical reenactment with period costumes',
        when: 'August'
      },
      {
        name: 'Artisan Fair',
        description: 'Traditional crafts and local products',
        when: 'Summer'
      }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'The name means "carved stone" in Catalan',
      'Declared a Historic-Artistic Site in 1975',
      'Many scenes from movies have been filmed here'
    ]
  },
  {
    id: 'ullastret',
    name: 'Ullastret',
    description: 'Home to the most important Iberian archaeological site in Catalonia.',
    image: 'https://images.pexels.com/photos/1450370/pexels-photo-1450370.jpeg',
    highlights: ['Iberian Ruins', 'Archaeological Museum', 'Historic Center', 'Views'],
    coordinates: { lat: 42.0000, lng: 3.1000 },
    population: 280,
    distance: '30 km',
    founded: '6th century BC',
    elevation: '75m above sea level',
    history: 'Ullastret contains the largest Iberian settlement in Catalonia, dating from the 6th century BC. The archaeological site provides crucial insights into pre-Roman Iberian civilization and their interactions with Greek and Phoenician traders.',
    architecture: [
      {
        name: 'Iberian Settlement',
        description: 'Pre-Roman fortified city ruins',
        period: '6th-2nd century BC'
      },
      {
        name: 'Medieval Church',
        description: 'Romanesque church built over ancient ruins',
        period: '12th century'
      }
    ],
    traditions: [
      {
        name: 'Iberian Festival',
        description: 'Reenactment of ancient Iberian life',
        when: 'May'
      },
      {
        name: 'Archaeological Days',
        description: 'Educational events about ancient history',
        when: 'Summer'
      }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'The Iberian settlement dates back to the 6th century BC',
      'Features the largest Iberian archaeological site in Catalonia',
      'The museum houses important pre-Roman artifacts'
    ]
  },
  {
    id: 'mont-ras',
    name: 'Mont-ras',
    description: 'A quiet inland village with beautiful countryside and traditional architecture.',
    image: 'https://images.pexels.com/photos/1450371/pexels-photo-1450371.jpeg',
    highlights: ['Church of Sant Esteve', 'Countryside', 'Traditional Houses', 'Hiking Trails'],
    coordinates: { lat: 41.9500, lng: 3.0667 },
    population: 1200,
    distance: '22 km',
    founded: '12th century',
    elevation: '85m above sea level',
    history: 'Mont-ras represents authentic rural Catalonia, maintaining its agricultural traditions and peaceful way of life. The village serves as a perfect example of inland Costa Brava communities that have preserved their traditional character.',
    architecture: [
      {
        name: 'Sant Esteve Church',
        description: 'Romanesque church with Gothic additions',
        period: '12th-16th century'
      },
      {
        name: 'Traditional Farmhouses',
        description: 'Catalan masías with characteristic architecture',
        period: '17th-19th century'
      }
    ],
    traditions: [
      {
        name: 'Festa Major',
        description: 'Annual village festival with traditional activities',
        when: 'August'
      },
      {
        name: 'Harvest Festival',
        description: 'Celebrating agricultural traditions',
        when: 'October'
      }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' }
    ],
    funFacts: [
      'Known for its peaceful rural atmosphere',
      'Features beautiful examples of traditional Catalan architecture',
      'Popular starting point for hiking in the region'
    ]
  },
  {
    id: 'calonge',
    name: 'Calonge',
    description: 'A historic inland town with a medieval castle and charming old quarter.',
    image: 'https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg',
    highlights: ['Medieval Castle', 'Old Quarter', 'Church of Sant Martí', 'Market Square'],
    coordinates: { lat: 41.8667, lng: 3.0500 },
    population: 8200,
    distance: '7 km',
    founded: '11th century',
    elevation: '65m above sea level',
    history: 'Calonge has been an important inland settlement since medieval times. The town\'s castle and old quarter showcase centuries of Catalan history, while the weekly market continues a tradition dating back to the Middle Ages.',
    architecture: [
      {
        name: 'Calonge Castle',
        description: 'Medieval fortress with defensive walls',
        period: '13th-15th century'
      },
      {
        name: 'Sant Martí Church',
        description: 'Romanesque church with baroque elements',
        period: '12th-18th century'
      }
    ],
    traditions: [
      {
        name: 'Medieval Market',
        description: 'Weekly traditional market',
        when: 'Thursdays'
      },
      {
        name: 'Castle Festival',
        description: 'Historical celebration in the castle grounds',
        when: 'July'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ],
    funFacts: [
      'The castle was built in the 13th century',
      'Features a beautiful Romanesque church',
      'Known for its traditional weekly market'
    ]
  },
  {
    id: 'la-bisbal-emporda',
    name: 'La Bisbal d\'Empordà',
    description: 'The pottery capital of Catalonia with a rich ceramic tradition.',
    image: 'https://images.pexels.com/photos/1450373/pexels-photo-1450373.jpeg',
    highlights: ['Pottery Quarter', 'Bishop\'s Palace', 'Ceramic Museum', 'Old Bridge'],
    coordinates: { lat: 41.9667, lng: 3.0333 },
    population: 10500,
    distance: '32 km',
    founded: '12th century',
    elevation: '35m above sea level',
    history: 'La Bisbal d\'Empordà has been the center of Catalan ceramics since the 17th century. The town\'s pottery tradition continues today with over 30 workshops and shops, making it the pottery capital of Catalonia.',
    architecture: [
      {
        name: 'Bishop\'s Palace',
        description: 'Gothic palace with impressive architecture',
        period: '14th-15th century'
      },
      {
        name: 'Pottery Workshops',
        description: 'Traditional ceramic workshops and kilns',
        period: '17th century-present'
      }
    ],
    traditions: [
      {
        name: 'Pottery Fair',
        description: 'Annual celebration of ceramic arts',
        when: 'August'
      },
      {
        name: 'Traditional Firing',
        description: 'Demonstration of traditional pottery techniques',
        when: 'Year-round'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'Famous for its ceramics and pottery since the 17th century',
      'The Bishop\'s Palace is a stunning example of Gothic architecture',
      'Over 30 pottery shops in the historic center'
    ]
  },
  {
    id: 'girona',
    name: 'Girona',
    description: 'A magnificent city with a stunning cathedral and well-preserved Jewish quarter.',
    image: 'https://images.pexels.com/photos/1450374/pexels-photo-1450374.jpeg',
    highlights: ['Cathedral', 'Jewish Quarter', 'City Walls', 'Colorful Houses'],
    coordinates: { lat: 41.9794, lng: 2.8214 },
    population: 103000,
    distance: '35 km',
    founded: '79 BC',
    elevation: '70m above sea level',
    history: 'Girona is one of Catalonia\'s most important historical cities, founded by Romans in 79 BC. The city has preserved its medieval character while serving as a major cultural and educational center, famous for its cathedral and Jewish quarter.',
    architecture: [
      {
        name: 'Girona Cathedral',
        description: 'Gothic cathedral with the world\'s widest nave',
        period: '11th-18th century'
      },
      {
        name: 'Jewish Quarter',
        description: 'Best-preserved Jewish quarter in Europe',
        period: '12th-15th century'
      }
    ],
    traditions: [
      {
        name: 'Temps de Flors',
        description: 'Flower festival decorating the old city',
        when: 'May'
      },
      {
        name: 'Sant Narcís Festival',
        description: 'Patron saint celebration',
        when: 'October'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'The cathedral has the widest Gothic nave in the world',
      'Features one of the best-preserved Jewish quarters in Europe',
      'The colorful houses along the river are iconic'
    ]
  },
  {
    id: 'tossa-de-mar',
    name: 'Tossa de Mar',
    description: 'A fortified medieval town by the sea with beautiful beaches and history.',
    image: 'https://images.pexels.com/photos/1450375/pexels-photo-1450375.jpeg',
    highlights: ['Medieval Walls', 'Villa Vella', 'Gran Beach', 'Castle'],
    coordinates: { lat: 41.7194, lng: 2.9306 },
    population: 5700,
    distance: '25 km',
    founded: '12th century',
    elevation: '45m above sea level',
    history: 'Tossa de Mar is the only fortified medieval town still standing on the Catalan coast. The town has inspired many artists, including Marc Chagall, who called it "Blue Paradise" and featured in classic Hollywood films.',
    architecture: [
      {
        name: 'Vila Vella',
        description: 'Fortified medieval old town',
        period: '12th-14th century'
      },
      {
        name: 'Defensive Walls',
        description: 'Medieval fortifications overlooking the sea',
        period: '13th-14th century'
      }
    ],
    traditions: [
      {
        name: 'Medieval Festival',
        description: 'Historical reenactment in the old town',
        when: 'September'
      },
      {
        name: 'Film Festival',
        description: 'Celebrating the town\'s cinematic history',
        when: 'Summer'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'Only fortified medieval town still standing on the Catalan coast',
      'Inspired many artists including Marc Chagall',
      'Features in the movie "Pandora and the Flying Dutchman"'
    ]
  },
  {
    id: 'sant-feliu-guixols',
    name: 'Sant Feliu de Guíxols',
    description: 'A historic coastal town with a magnificent monastery and beautiful beaches.',
    image: 'https://images.pexels.com/photos/1450376/pexels-photo-1450376.jpeg',
    highlights: ['Benedictine Monastery', 'Platja de Sant Pol', 'Modernist Architecture', 'Coastal Path'],
    coordinates: { lat: 41.7833, lng: 3.0333 },
    population: 21500,
    distance: '2 km',
    founded: '10th century',
    elevation: '20m above sea level',
    history: 'Sant Feliu de Guíxols grew around its Benedictine monastery founded in the 10th century. The town became an important cork-producing center in the 19th century, which brought prosperity and beautiful modernist architecture. Today it combines historical heritage with modern tourism.',
    architecture: [
      {
        name: 'Benedictine Monastery',
        description: 'Pre-Romanesque and Romanesque monastery complex',
        period: '10th-12th century'
      },
      {
        name: 'Modernist Houses',
        description: 'Beautiful examples of Catalan modernism',
        period: '1890-1920'
      },
      {
        name: 'Casino La Constància',
        description: 'Modernist cultural center and casino',
        period: '1888'
      }
    ],
    traditions: [
      {
        name: 'Festa Major',
        description: 'Annual summer festival with traditional activities',
        when: 'August'
      },
      {
        name: 'International Music Festival',
        description: 'Classical music festival in historic venues',
        when: 'July-August'
      },
      {
        name: 'Cork Festival',
        description: 'Celebrating the town\'s cork industry heritage',
        when: 'September'
      }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ],
    funFacts: [
      'Home to one of the oldest monasteries in Catalonia',
      'Was the cork capital of the Mediterranean in the 19th century',
      'Features beautiful modernist architecture from the cork boom era',
      'The monastery houses an important museum of local history'
    ]
  }
];