import { Market } from '../types';

export const markets: Market[] = [
  {
    id: 'sagaro-market',
    name: 'S\'Agaro Weekly Market',
    village: 'S\'Agaro',
    villageId: 'sagaro',
    description: 'Traditional market with local produce and crafts.',
    image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg',
    days: ['Saturday'],
    time: '08:00-14:00',
    location: 'Plaça de la Vila',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    products: ['Fresh fruits', 'Local vegetables', 'Artisan breads', 'Handmade crafts'],
    vendorCount: 25,
    established: '1952',
    marketHistory: 'The S\'Agaro Weekly Market has been serving the community since 1952, originally starting as a small farmers\' market and growing into a beloved weekly tradition that brings together local producers and artisans.',
    vendors: [
      {
        name: 'Can Tomàs',
        specialty: 'Organic vegetables',
        description: 'Family farm producing organic vegetables for three generations'
      },
      {
        name: 'Forn de Pa Artesà',
        specialty: 'Traditional breads',
        description: 'Wood-fired oven bakery specializing in traditional Catalan breads'
      },
      {
        name: 'Mel de l\'Empordà',
        specialty: 'Local honey',
        description: 'Artisan honey producer with hives throughout the region'
      }
    ],
    tips: [
      'Arrive early for the best selection of fresh produce',
      'Bring cash as not all vendors accept cards',
      'Try the local honey - it\'s exceptional',
      'The bread from Forn de Pa Artesà sells out quickly'
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking Available', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'platja-daro-market',
    name: 'Platja d\'Aro Market',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    description: 'Large market with everything from food to clothing.',
    image: 'https://images.pexels.com/photos/1458672/pexels-photo-1458672.jpeg',
    days: ['Monday', 'Thursday'],
    time: '08:00-14:00',
    location: 'Carrer Barbastre',
    coordinates: { lat: 41.8167, lng: 3.0667 },
    products: ['Clothing', 'Fresh produce', 'Souvenirs', 'Local specialties'],
    vendorCount: 80,
    established: '1965',
    marketHistory: 'Platja d\'Aro Market is one of the largest markets on the Costa Brava, established in 1965 to serve the growing tourist population. It combines traditional local products with international goods.',
    vendors: [
      {
        name: 'Roba de Platja',
        specialty: 'Beach clothing',
        description: 'Trendy beachwear and summer fashion'
      },
      {
        name: 'Fruites del Mar',
        specialty: 'Fresh fruits',
        description: 'Seasonal fruits from local orchards'
      },
      {
        name: 'Souvenirs Costa Brava',
        specialty: 'Local souvenirs',
        description: 'Authentic Costa Brava memorabilia and gifts'
      },
      {
        name: 'Formatges Catalans',
        specialty: 'Catalan cheeses',
        description: 'Traditional cheeses from across Catalonia'
      }
    ],
    tips: [
      'The market is quite large, allow plenty of time to explore',
      'Bargaining is acceptable for clothing and souvenirs',
      'Try the local cheese selection - excellent quality',
      'Parking can be challenging, arrive early or use public transport'
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Limited Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'palamos-fish-market',
    name: 'Palamós Fish Market',
    village: 'Palamós',
    villageId: 'palamos',
    description: 'Famous fish market with the freshest catch daily.',
    image: 'https://images.pexels.com/photos/1458673/pexels-photo-1458673.jpeg',
    days: ['Tuesday', 'Wednesday', 'Friday'],
    time: '17:00-19:00',
    location: 'Fishing Port',
    coordinates: { lat: 41.8500, lng: 3.1333 },
    products: ['Fresh fish', 'Palamós prawns', 'Seafood', 'Local specialties'],
    vendorCount: 15,
    established: '1920',
    marketHistory: 'The Palamós Fish Market has been operating since 1920, famous worldwide for its red prawns. The market operates in the afternoon when the fishing boats return with their daily catch.',
    vendors: [
      {
        name: 'Pescadors de Palamós',
        specialty: 'Fresh daily catch',
        description: 'Local fishermen selling their own catch'
      },
      {
        name: 'Gambes Roges',
        specialty: 'Palamós red prawns',
        description: 'Specialists in the famous Palamós prawns'
      },
      {
        name: 'Mariscos del Port',
        specialty: 'Mixed seafood',
        description: 'Wide variety of Mediterranean seafood'
      }
    ],
    tips: [
      'The famous red prawns are expensive but worth trying',
      'Arrive early as the best fish sells quickly',
      'Ask vendors for cooking recommendations',
      'Bring a cooler if buying for later consumption'
    ],
    facilities: [
      { name: 'Fresh Storage', icon: 'accessible' },
      { name: 'Port Parking', icon: 'parking' },
      { name: 'Cash Only', icon: 'card' }
    ]
  },
  {
    id: 'palafrugell-market',
    name: 'Palafrugell Market',
    village: 'Calella de Palafrugell',
    villageId: 'calella-palafrugell',
    description: 'Traditional market in the heart of the old town.',
    image: 'https://images.pexels.com/photos/1458674/pexels-photo-1458674.jpeg',
    days: ['Sunday'],
    time: '08:00-14:00',
    location: 'Plaça Nova',
    coordinates: { lat: 41.9167, lng: 3.1667 },
    products: ['Local produce', 'Artisan products', 'Flowers', 'Traditional foods'],
    vendorCount: 35,
    established: '1943',
    marketHistory: 'The Palafrugell Market has been a Sunday tradition since 1943, bringing together local farmers and artisans in the charming town square.',
    vendors: [
      {
        name: 'Hortalisses de l\'Empordà',
        specialty: 'Seasonal vegetables',
        description: 'Organic vegetables grown in the Empordà plains'
      },
      {
        name: 'Flors del Jardí',
        specialty: 'Fresh flowers',
        description: 'Beautiful seasonal flowers and plants'
      },
      {
        name: 'Embotits Tradicionals',
        specialty: 'Cured meats',
        description: 'Traditional Catalan sausages and cured meats'
      }
    ],
    tips: [
      'Perfect for a Sunday morning stroll',
      'The flower selection is particularly beautiful',
      'Try the local cured meats and cheeses',
      'Combine with a visit to the nearby beaches'
    ],
    facilities: [
      { name: 'Historic Setting', icon: 'accessible' },
      { name: 'Street Parking', icon: 'parking' },
      { name: 'Mixed Payments', icon: 'card' }
    ]
  },
  {
    id: 'begur-market',
    name: 'Begur Market',
    village: 'Begur',
    villageId: 'begur',
    description: 'Small but charming market with local specialties.',
    image: 'https://images.pexels.com/photos/1458675/pexels-photo-1458675.jpeg',
    days: ['Wednesday'],
    time: '08:00-13:00',
    location: 'Plaça de l\'Església',
    coordinates: { lat: 41.9500, lng: 3.2167 },
    products: ['Fresh vegetables', 'Local honey', 'Artisan cheese', 'Handmade crafts'],
    vendorCount: 18,
    established: '1958',
    marketHistory: 'Begur\'s small market reflects the intimate character of this hilltop village, focusing on quality local products and maintaining strong relationships between vendors and customers.',
    vendors: [
      {
        name: 'Mel de Begur',
        specialty: 'Artisan honey',
        description: 'Local honey from hives in the surrounding hills'
      },
      {
        name: 'Formatge de Cabra',
        specialty: 'Goat cheese',
        description: 'Handmade goat cheese from local farms'
      },
      {
        name: 'Ceràmica Artesana',
        specialty: 'Handmade ceramics',
        description: 'Traditional pottery and decorative items'
      }
    ],
    tips: [
      'Small but high quality selection',
      'The local honey is exceptional',
      'Great views from the market square',
      'Perfect size for a quick visit'
    ],
    facilities: [
      { name: 'Village Square', icon: 'accessible' },
      { name: 'Limited Parking', icon: 'parking' },
      { name: 'Cash Preferred', icon: 'card' }
    ]
  },
  {
    id: 'girona-market',
    name: 'Girona Market',
    village: 'Girona',
    villageId: 'girona',
    description: 'Large covered market with exceptional variety.',
    image: 'https://images.pexels.com/photos/1458676/pexels-photo-1458676.jpeg',
    days: ['Tuesday', 'Thursday', 'Saturday'],
    time: '08:00-14:00',
    location: 'Plaça del Mercadal',
    coordinates: { lat: 41.9794, lng: 2.8214 },
    products: ['Gourmet products', 'Regional specialties', 'Fresh produce', 'Local wines'],
    vendorCount: 120,
    established: '1885',
    marketHistory: 'The Girona Market, housed in a beautiful 19th-century building, has been the heart of the city\'s food culture since 1885. It\'s considered one of the best markets in Catalonia.',
    vendors: [
      {
        name: 'Vins de l\'Empordà',
        specialty: 'Local wines',
        description: 'Extensive selection of Empordà DO wines'
      },
      {
        name: 'Delicatessen Girona',
        specialty: 'Gourmet products',
        description: 'High-end local and international delicacies'
      },
      {
        name: 'Peix Fresc',
        specialty: 'Fresh fish',
        description: 'Daily fresh fish from the Costa Brava'
      },
      {
        name: 'Fruites i Verdures',
        specialty: 'Organic produce',
        description: 'Certified organic fruits and vegetables'
      }
    ],
    tips: [
      'One of the best markets in Catalonia',
      'Excellent wine selection from local vineyards',
      'The covered setting makes it comfortable year-round',
      'Allow plenty of time to explore all sections'
    ],
    facilities: [
      { name: 'Covered Market', icon: 'accessible' },
      { name: 'Public Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Free WiFi', icon: 'wifi' }
    ]
  },
  {
    id: 'roses-market',
    name: 'Roses Weekly Market',
    village: 'Roses',
    villageId: 'roses',
    description: 'Bustling market near the port with fresh seafood.',
    image: 'https://images.pexels.com/photos/1458677/pexels-photo-1458677.jpeg',
    days: ['Sunday'],
    time: '08:00-14:00',
    location: 'Avinguda de Rhode',
    coordinates: { lat: 42.2667, lng: 3.1833 },
    products: ['Fresh fish', 'Local fruits', 'Clothing', 'Souvenirs'],
    vendorCount: 60,
    established: '1962',
    marketHistory: 'The Roses Market has grown alongside the town\'s development as a major tourist destination, combining traditional fishing village products with modern tourist needs.',
    vendors: [
      {
        name: 'Pescadors de Roses',
        specialty: 'Fresh seafood',
        description: 'Local fishermen selling their daily catch'
      },
      {
        name: 'Fruites de Temporada',
        specialty: 'Seasonal fruits',
        description: 'Fresh fruits from the fertile Empordà plains'
      },
      {
        name: 'Moda Estiu',
        specialty: 'Summer fashion',
        description: 'Trendy summer clothing and accessories'
      }
    ],
    tips: [
      'Great location near the port and beaches',
      'Fresh fish selection is excellent',
      'Good variety of tourist items',
      'Can get crowded during summer months'
    ],
    facilities: [
      { name: 'Near Port', icon: 'accessible' },
      { name: 'Ample Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'cadaques-market',
    name: 'Cadaqués Market',
    village: 'Cadaqués',
    villageId: 'cadaques',
    description: 'Picturesque market in the white village by the sea.',
    image: 'https://images.pexels.com/photos/1458678/pexels-photo-1458678.jpeg',
    days: ['Monday'],
    time: '08:00-13:00',
    location: 'Plaça Frederic Rahola',
    coordinates: { lat: 42.2889, lng: 3.2794 },
    products: ['Local art', 'Handmade jewelry', 'Fresh produce', 'Postcards'],
    vendorCount: 22,
    established: '1954',
    marketHistory: 'The Cadaqués Market reflects the artistic spirit of this famous white village, where Dalí lived and worked. It combines traditional products with local art and crafts.',
    vendors: [
      {
        name: 'Art Local',
        specialty: 'Local artwork',
        description: 'Paintings and prints by local artists'
      },
      {
        name: 'Joies Artesanes',
        specialty: 'Handmade jewelry',
        description: 'Unique jewelry pieces inspired by the sea'
      },
      {
        name: 'Productes del Mar',
        specialty: 'Sea products',
        description: 'Local fish and sea-inspired delicacies'
      }
    ],
    tips: [
      'Beautiful setting in the white village',
      'Unique art and craft selection',
      'Perfect for finding special souvenirs',
      'Limited parking - walk from town center'
    ],
    facilities: [
      { name: 'Artistic Setting', icon: 'accessible' },
      { name: 'Limited Parking', icon: 'parking' },
      { name: 'Cash Preferred', icon: 'card' }
    ]
  },
  {
    id: 'figueres-market',
    name: 'Figueres Market',
    village: 'Figueres',
    villageId: 'figueres',
    description: 'Large market in Dalí\'s hometown with diverse offerings.',
    image: 'https://images.pexels.com/photos/1458679/pexels-photo-1458679.jpeg',
    days: ['Thursday', 'Saturday'],
    time: '08:00-14:00',
    location: 'Plaça del Gra',
    coordinates: { lat: 42.2667, lng: 2.9667 },
    products: ['Regional products', 'Clothing', 'Books', 'Local delicacies'],
    vendorCount: 95,
    established: '1876',
    marketHistory: 'The Figueres Market has been serving this important regional center since 1876. As Dalí\'s hometown, it has a special character that blends traditional Catalan culture with artistic flair.',
    vendors: [
      {
        name: 'Llibres i Més',
        specialty: 'Books and magazines',
        description: 'Wide selection including Dalí and art books'
      },
      {
        name: 'Productes Empordà',
        specialty: 'Regional specialties',
        description: 'Traditional products from across the Empordà region'
      },
      {
        name: 'Roba de Qualitat',
        specialty: 'Quality clothing',
        description: 'Good selection of clothing for all ages'
      },
      {
        name: 'Dolços Tradicionals',
        specialty: 'Traditional sweets',
        description: 'Local pastries and traditional Catalan sweets'
      }
    ],
    tips: [
      'Large market with great variety',
      'Good selection of books about Dalí and local history',
      'Traditional sweets are worth trying',
      'Combine with a visit to the Dalí Museum'
    ],
    facilities: [
      { name: 'Large Square', icon: 'accessible' },
      { name: 'Public Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Near Museum', icon: 'accessible' }
    ]
  },
  {
    id: 'lescala-market',
    name: 'L\'Escala Market',
    village: 'L\'Escala',
    villageId: 'lescala',
    description: 'Coastal market famous for anchovies and seafood.',
    image: 'https://images.pexels.com/photos/1458680/pexels-photo-1458680.jpeg',
    days: ['Sunday'],
    time: '08:00-14:00',
    location: 'Plaça de les Escoles',
    coordinates: { lat: 42.1167, lng: 3.1333 },
    products: ['Anchovies', 'Fresh fish', 'Local vegetables', 'Crafts'],
    vendorCount: 40,
    established: '1948',
    marketHistory: 'L\'Escala Market is famous throughout Catalonia for its anchovies, a local specialty that has been produced here for centuries. The market celebrates this maritime heritage.',
    vendors: [
      {
        name: 'Anxoves de l\'Escala',
        specialty: 'Traditional anchovies',
        description: 'World-famous L\'Escala anchovies, salt-cured'
      },
      {
        name: 'Peix del Dia',
        specialty: 'Daily fresh fish',
        description: 'Fresh catch from local fishing boats'
      },
      {
        name: 'Verdures de l\'Horta',
        specialty: 'Garden vegetables',
        description: 'Fresh vegetables from local gardens'
      }
    ],
    tips: [
      'Don\'t miss the famous L\'Escala anchovies',
      'Fresh fish selection is excellent',
      'Good location near the archaeological site',
      'Try the local olive oil and vinegar'
    ],
    facilities: [
      { name: 'Near Beach', icon: 'accessible' },
      { name: 'Street Parking', icon: 'parking' },
      { name: 'Mixed Payments', icon: 'card' }
    ]
  },
  {
    id: 'tossa-market',
    name: 'Tossa de Mar Market',
    village: 'Tossa de Mar',
    villageId: 'tossa-de-mar',
    description: 'Medieval town market with traditional products.',
    image: 'https://images.pexels.com/photos/1458681/pexels-photo-1458681.jpeg',
    days: ['Thursday'],
    time: '08:00-14:00',
    location: 'Plaça de l\'Església',
    coordinates: { lat: 41.7194, lng: 2.9306 },
    products: ['Local honey', 'Handmade soaps', 'Fresh produce', 'Textiles'],
    vendorCount: 28,
    established: '1951',
    marketHistory: 'The Tossa de Mar Market takes place in the shadow of the medieval walls, maintaining the traditional character of this historic fishing village.',
    vendors: [
      {
        name: 'Mel de la Costa',
        specialty: 'Coastal honey',
        description: 'Honey from hives near the Mediterranean coast'
      },
      {
        name: 'Sabons Naturals',
        specialty: 'Natural soaps',
        description: 'Handmade soaps with local herbs and oils'
      },
      {
        name: 'Teixits Tradicionals',
        specialty: 'Traditional textiles',
        description: 'Handwoven textiles and traditional fabrics'
      }
    ],
    tips: [
      'Beautiful medieval setting',
      'Excellent local honey and natural products',
      'Combine with a visit to the castle',
      'Small but high-quality selection'
    ],
    facilities: [
      { name: 'Medieval Setting', icon: 'accessible' },
      { name: 'Limited Parking', icon: 'parking' },
      { name: 'Cash Preferred', icon: 'card' }
    ]
  },
  {
    id: 'blanes-market',
    name: 'Blanes Market',
    village: 'Blanes',
    villageId: 'blanes',
    description: 'Large market at the beginning of the Costa Brava.',
    image: 'https://images.pexels.com/photos/1458682/pexels-photo-1458682.jpeg',
    days: ['Monday', 'Saturday'],
    time: '08:00-14:00',
    location: 'Passeig de Dintre',
    coordinates: { lat: 41.6750, lng: 2.7917 },
    products: ['Fresh produce', 'Flowers', 'Clothing', 'Household items'],
    vendorCount: 85,
    established: '1932',
    marketHistory: 'Blanes Market serves as the gateway market to the Costa Brava, established in 1932. It\'s known for its flower section, reflecting the town\'s botanical garden heritage.',
    vendors: [
      {
        name: 'Flors de Blanes',
        specialty: 'Fresh flowers',
        description: 'Beautiful flowers reflecting Blanes\' garden heritage'
      },
      {
        name: 'Fruites Fresques',
        specialty: 'Fresh fruits',
        description: 'Seasonal fruits from local and regional producers'
      },
      {
        name: 'Roba per a Tota la Família',
        specialty: 'Family clothing',
        description: 'Affordable clothing for all family members'
      },
      {
        name: 'Casa i Llar',
        specialty: 'Household items',
        description: 'Practical items for home and garden'
      }
    ],
    tips: [
      'Excellent flower selection',
      'Good variety of household items',
      'Affordable prices',
      'Easy access from Barcelona'
    ],
    facilities: [
      { name: 'Large Market', icon: 'accessible' },
      { name: 'Ample Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Near Station', icon: 'accessible' }
    ]
  },
  {
    id: 'lloret-market',
    name: 'Lloret de Mar Market',
    village: 'Lloret de Mar',
    villageId: 'lloret-de-mar',
    description: 'Tourist market with souvenirs and local products.',
    image: 'https://images.pexels.com/photos/1458683/pexels-photo-1458683.jpeg',
    days: ['Tuesday', 'Friday'],
    time: '08:00-14:00',
    location: 'Plaça de l\'Església',
    coordinates: { lat: 41.7000, lng: 2.8333 },
    products: ['Souvenirs', 'Beach items', 'Local food', 'Clothing'],
    vendorCount: 55,
    established: '1960',
    marketHistory: 'Lloret de Mar Market developed with the town\'s growth as a major tourist destination, balancing tourist needs with traditional local products.',
    vendors: [
      {
        name: 'Souvenirs Costa Brava',
        specialty: 'Tourist souvenirs',
        description: 'Wide selection of Costa Brava memorabilia'
      },
      {
        name: 'Platja i Sol',
        specialty: 'Beach accessories',
        description: 'Everything needed for a perfect beach day'
      },
      {
        name: 'Menjar Local',
        specialty: 'Local food products',
        description: 'Traditional Catalan food specialties'
      }
    ],
    tips: [
      'Good for tourist souvenirs and beach items',
      'Prices can be higher due to tourist location',
      'Try the local food specialties',
      'Busy during summer season'
    ],
    facilities: [
      { name: 'Tourist Friendly', icon: 'accessible' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' }
    ]
  },
  {
    id: 'bisbal-pottery-market',
    name: 'La Bisbal Pottery Market',
    village: 'La Bisbal d\'Empordà',
    villageId: 'la-bisbal-emporda',
    description: 'Specialized market for ceramics and pottery.',
    image: 'https://images.pexels.com/photos/1458684/pexels-photo-1458684.jpeg',
    days: ['Friday'],
    time: '08:00-14:00',
    location: 'Carrer de l\'Aigüeta',
    coordinates: { lat: 41.9667, lng: 3.0333 },
    products: ['Handmade ceramics', 'Pottery', 'Decorative items', 'Art pieces'],
    vendorCount: 30,
    established: '1925',
    marketHistory: 'La Bisbal has been the ceramic capital of Catalonia for centuries. This specialized market showcases the finest pottery and ceramic work from local artisans.',
    vendors: [
      {
        name: 'Ceràmica Tradicional',
        specialty: 'Traditional pottery',
        description: 'Classic Catalan pottery designs and techniques'
      },
      {
        name: 'Art Ceràmic Modern',
        specialty: 'Modern ceramics',
        description: 'Contemporary ceramic art and design'
      },
      {
        name: 'Terrissa Funcional',
        specialty: 'Functional pottery',
        description: 'Practical pottery for kitchen and home use'
      }
    ],
    tips: [
      'Unique opportunity to buy authentic Catalan ceramics',
      'Prices range from affordable to high-end art pieces',
      'Many pieces are one-of-a-kind',
      'Perfect for special gifts or home decoration'
    ],
    facilities: [
      { name: 'Ceramic Quarter', icon: 'accessible' },
      { name: 'Street Parking', icon: 'parking' },
      { name: 'Cash Preferred', icon: 'card' }
    ]
  },
  {
    id: 'peralada-market',
    name: 'Peralada Market',
    village: 'Peralada',
    villageId: 'peralada',
    description: 'Small market in the castle town with local wines.',
    image: 'https://images.pexels.com/photos/1458685/pexels-photo-1458685.jpeg',
    days: ['Saturday'],
    time: '08:00-13:00',
    location: 'Plaça del Carme',
    coordinates: { lat: 42.3000, lng: 3.0167 },
    products: ['Local wines', 'Cheese', 'Olive oil', 'Regional specialties'],
    vendorCount: 16,
    established: '1963',
    marketHistory: 'Peralada Market reflects the sophisticated character of this castle town, known for its wine production and cultural events.',
    vendors: [
      {
        name: 'Vins de Peralada',
        specialty: 'Local wines',
        description: 'Wines from the famous Peralada vineyards'
      },
      {
        name: 'Formatges Artesans',
        specialty: 'Artisan cheeses',
        description: 'High-quality cheeses from local producers'
      },
      {
        name: 'Oli d\'Oliva Verge',
        specialty: 'Virgin olive oil',
        description: 'Premium olive oil from regional groves'
      }
    ],
    tips: [
      'Excellent wine selection from local vineyards',
      'High-quality gourmet products',
      'Small but sophisticated market',
      'Combine with castle and museum visit'
    ],
    facilities: [
      { name: 'Castle Town', icon: 'accessible' },
      { name: 'Castle Parking', icon: 'parking' },
      { name: 'Premium Products', icon: 'card' }
    ]
  },
  {
    id: 'castello-empuries-market',
    name: 'Castelló d\'Empúries Market',
    village: 'Castelló d\'Empúries',
    villageId: 'castello-empuries',
    description: 'Historic market in the medieval capital of Empúries.',
    image: 'https://images.pexels.com/photos/1458686/pexels-photo-1458686.jpeg',
    days: ['Monday'],
    time: '08:00-14:00',
    location: 'Plaça dels Homes',
    coordinates: { lat: 42.2500, lng: 3.0833 },
    products: ['Traditional foods', 'Local crafts', 'Fresh produce', 'Antiques'],
    vendorCount: 45,
    established: '1889',
    marketHistory: 'As the former capital of the County of Empúries, Castelló d\'Empúries has maintained its market tradition since 1889, reflecting its important historical role.',
    vendors: [
      {
        name: 'Antiguitats del Comte',
        specialty: 'Antiques',
        description: 'Historical items and vintage collectibles'
      },
      {
        name: 'Artesania Local',
        specialty: 'Local crafts',
        description: 'Traditional crafts from the Empordà region'
      },
      {
        name: 'Productes de la Terra',
        specialty: 'Local produce',
        description: 'Fresh products from the fertile Empordà plains'
      }
    ],
    tips: [
      'Rich historical atmosphere',
      'Good selection of antiques and crafts',
      'Combine with visit to the Gothic cathedral',
      'Authentic local products'
    ],
    facilities: [
      { name: 'Historic Square', icon: 'accessible' },
      { name: 'Street Parking', icon: 'parking' },
      { name: 'Mixed Payments', icon: 'card' }
    ]
  },
  {
    id: 'empuriabrava-market',
    name: 'Empuriabrava Market',
    village: 'Empuriabrava',
    villageId: 'empuriabrava',
    description: 'Modern market in the Venice of Spain.',
    image: 'https://images.pexels.com/photos/1458687/pexels-photo-1458687.jpeg',
    days: ['Wednesday', 'Sunday'],
    time: '08:00-14:00',
    location: 'Centre Comercial',
    coordinates: { lat: 42.2500, lng: 3.1167 },
    products: ['International foods', 'Beach accessories', 'Clothing', 'Electronics'],
    vendorCount: 70,
    established: '1975',
    marketHistory: 'Empuriabrava Market developed with this unique residential marina, catering to an international community with diverse needs and tastes.',
    vendors: [
      {
        name: 'Menjar Internacional',
        specialty: 'International foods',
        description: 'Foods from around the world for diverse community'
      },
      {
        name: 'Nàutica i Platja',
        specialty: 'Marine and beach items',
        description: 'Everything for boating and beach activities'
      },
      {
        name: 'Tecnologia i Més',
        specialty: 'Electronics',
        description: 'Modern electronics and gadgets'
      }
    ],
    tips: [
      'International atmosphere reflecting diverse community',
      'Good for marine and beach equipment',
      'Modern facilities and services',
      'Unique canal-side location'
    ],
    facilities: [
      { name: 'Marina Location', icon: 'accessible' },
      { name: 'Ample Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Free WiFi', icon: 'wifi' }
    ]
  },
  {
    id: 'sant-pere-pescador-market',
    name: 'Sant Pere Pescador Market',
    village: 'Sant Pere Pescador',
    villageId: 'sant-pere-pescador',
    description: 'Small fishing village market with fresh catch.',
    image: 'https://images.pexels.com/photos/1458688/pexels-photo-1458688.jpeg',
    days: ['Friday'],
    time: '08:00-13:00',
    location: 'Plaça de l\'Església',
    coordinates: { lat: 42.1833, lng: 3.0833 },
    products: ['Fresh fish', 'Local vegetables', 'Handmade items', 'Regional products'],
    vendorCount: 12,
    established: '1955',
    marketHistory: 'This small fishing village market maintains the authentic character of traditional coastal life, focusing on fresh local products.',
    vendors: [
      {
        name: 'Pescadors del Poble',
        specialty: 'Fresh daily catch',
        description: 'Local fishermen selling their own catch'
      },
      {
        name: 'Hort del Poble',
        specialty: 'Village vegetables',
        description: 'Vegetables grown in local gardens'
      },
      {
        name: 'Fets a Mà',
        specialty: 'Handmade crafts',
        description: 'Local artisan products and crafts'
      }
    ],
    tips: [
      'Authentic fishing village atmosphere',
      'Very fresh fish from local boats',
      'Small but genuine selection',
      'Support local fishing community'
    ],
    facilities: [
      { name: 'Village Square', icon: 'accessible' },
      { name: 'Limited Parking', icon: 'parking' },
      { name: 'Cash Only', icon: 'card' }
    ]
  },
  {
    id: 'torroella-montgri-market',
    name: 'Torroella de Montgrí Market',
    village: 'Torroella de Montgrí',
    villageId: 'torroella-montgri',
    description: 'Traditional market beneath the Montgrí castle.',
    image: 'https://images.pexels.com/photos/1458689/pexels-photo-1458689.jpeg',
    days: ['Monday'],
    time: '08:00-14:00',
    location: 'Plaça de la Vila',
    coordinates: { lat: 42.0333, lng: 3.1167 },
    products: ['Organic produce', 'Local cheese', 'Handmade crafts', 'Seasonal fruits'],
    vendorCount: 32,
    established: '1947',
    marketHistory: 'Torroella de Montgrí Market operates in the shadow of the impressive Montgrí castle, maintaining traditional market customs in this historic setting.',
    vendors: [
      {
        name: 'Ecològics del Montgrí',
        specialty: 'Organic products',
        description: 'Certified organic produce from local farms'
      },
      {
        name: 'Formatges de Muntanya',
        specialty: 'Mountain cheeses',
        description: 'Traditional cheeses from the Montgrí area'
      },
      {
        name: 'Artesans del Castell',
        specialty: 'Local crafts',
        description: 'Handmade items inspired by local heritage'
      }
    ],
    tips: [
      'Beautiful setting beneath the castle',
      'Good organic and local product selection',
      'Combine with castle hike',
      'Traditional market atmosphere'
    ],
    facilities: [
      { name: 'Castle Views', icon: 'accessible' },
      { name: 'Town Parking', icon: 'parking' },
      { name: 'Mixed Payments', icon: 'card' }
    ]
  },
  {
    id: 'sant-feliu-guixols-market',
    name: 'Sant Feliu de Guíxols Market',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Coastal market with fresh seafood and local products.',
    image: 'https://images.pexels.com/photos/1458690/pexels-photo-1458690.jpeg',
    days: ['Sunday'],
    time: '08:00-14:00',
    location: 'Plaça del Mercat',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    products: ['Fresh seafood', 'Local wines', 'Artisan products', 'Seasonal vegetables'],
    vendorCount: 50,
    established: '1934',
    marketHistory: 'Sant Feliu de Guíxols Market has served this important coastal town since 1934, reflecting both its maritime heritage and modern tourist appeal.',
    vendors: [
      {
        name: 'Mariscos de la Costa',
        specialty: 'Fresh seafood',
        description: 'Daily fresh seafood from local fishing boats'
      },
      {
        name: 'Vins de la Comarca',
        specialty: 'Regional wines',
        description: 'Wines from the best local vineyards'
      },
      {
        name: 'Artesans de Sant Feliu',
        specialty: 'Local crafts',
        description: 'Handmade products by local artisans'
      },
      {
        name: 'Verdures de l\'Horta',
        specialty: 'Fresh vegetables',
        description: 'Seasonal vegetables from nearby farms'
      }
    ],
    tips: [
      'Excellent seafood selection',
      'Good local wine variety',
      'Pleasant coastal town setting',
      'Combine with beach visit'
    ],
    facilities: [
      { name: 'Coastal Location', icon: 'accessible' },
      { name: 'Public Parking', icon: 'parking' },
      { name: 'Card Payments', icon: 'card' },
      { name: 'Near Beach', icon: 'accessible' }
    ]
  }
];