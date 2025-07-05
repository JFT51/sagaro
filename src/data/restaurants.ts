import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: 'la-gavina',
    name: 'Hotel de La Gavina Restaurant',
    village: 'S\'Agaro',
    villageId: 'sagaro',
    cuisine: 'Mediterranean',
    description: 'Elegant fine dining with sea views and exquisite Mediterranean cuisine.',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
    rating: 4.8,
    priceRange: '€€€€',
    address: 'Plaça de la Rosaleda, 17248 S\'Agaro',
    phone: '+34 972 32 11 00',
    website: 'https://lagavina.com',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    openingHours: '19:00-23:00',
    specialties: ['Fresh seafood', 'Rice dishes', 'Wine selection'],
    capacity: 120,
    established: '1932',
    chefStory: 'Chef Maria Soler brings 20 years of Michelin-starred experience to create innovative Mediterranean dishes using the finest local ingredients from the Costa Brava.',
    signatureDishes: [
      {
        name: 'Palamós Prawn Carpaccio',
        description: 'Thinly sliced local prawns with citrus and herbs',
        price: '€28',
        ingredients: 'Palamós prawns, lemon, olive oil, herbs'
      },
      {
        name: 'Sea Bass in Salt Crust',
        description: 'Whole sea bass baked in Mediterranean salt',
        price: '€45',
        ingredients: 'Fresh sea bass, sea salt, herbs, vegetables'
      }
    ],
    atmosphere: 'Elegant and sophisticated with panoramic sea views, perfect for romantic dinners and special occasions.',
    awards: [
      { name: 'Michelin Recommended', year: '2023' },
      { name: 'Best Sea View Restaurant', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'villa-mas',
    name: 'Villa Mas',
    village: 'S\'Agaro',
    villageId: 'sagaro',
    cuisine: 'Catalan',
    description: 'Traditional Catalan cuisine in a beautiful villa setting.',
    image: 'https://images.pexels.com/photos/1581385/pexels-photo-1581385.jpeg',
    rating: 4.6,
    priceRange: '€€€',
    address: 'Carrer de la Gavina 12, 17248 S\'Agaro',
    phone: '+34 972 32 15 78',
    coordinates: { lat: 41.7840, lng: 3.0340 },
    openingHours: '12:00-15:00, 19:00-23:00',
    specialties: ['Paella', 'Escalivada', 'Crema catalana'],
    capacity: 80,
    established: '1965',
    chefStory: 'Family-owned for three generations, Villa Mas preserves authentic Catalan recipes passed down through the family while incorporating modern presentation techniques.',
    signatureDishes: [
      {
        name: 'Traditional Paella Valenciana',
        description: 'Classic rice dish with rabbit, chicken, and vegetables',
        price: '€22',
        ingredients: 'Bomba rice, rabbit, chicken, green beans, saffron'
      },
      {
        name: 'Escalivada with Anchovies',
        description: 'Roasted vegetables with local anchovies',
        price: '€16',
        ingredients: 'Eggplant, peppers, onions, L\'Escala anchovies'
      }
    ],
    atmosphere: 'Warm and welcoming family atmosphere in a traditional Catalan villa with garden terrace.',
    awards: [
      { name: 'Traditional Cuisine Award', year: '2021' },
      { name: 'Family Restaurant Excellence', year: '2020' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'big-rock',
    name: 'Big Rock',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    cuisine: 'International',
    description: 'Beachfront dining with international cuisine and cocktails.',
    image: 'https://images.pexels.com/photos/1581386/pexels-photo-1581386.jpeg',
    rating: 4.4,
    priceRange: '€€',
    address: 'Platja Gran, 17250 Castell-Platja d\'Aro',
    phone: '+34 972 81 80 12',
    coordinates: { lat: 41.8167, lng: 3.0667 },
    openingHours: '10:00-02:00',
    specialties: ['Burgers', 'Cocktails', 'Fresh salads'],
    capacity: 150,
    established: '1998',
    chefStory: 'International team of chefs brings global flavors to the Costa Brava, specializing in fusion cuisine that combines Mediterranean ingredients with international techniques.',
    signatureDishes: [
      {
        name: 'Big Rock Burger',
        description: 'Gourmet burger with local beef and Mediterranean toppings',
        price: '€18',
        ingredients: 'Local beef, manchego cheese, tomato, arugula'
      },
      {
        name: 'Mediterranean Poke Bowl',
        description: 'Fresh tuna with local vegetables and quinoa',
        price: '€16',
        ingredients: 'Fresh tuna, quinoa, vegetables, olive oil'
      }
    ],
    atmosphere: 'Casual beachfront setting with modern decor, perfect for lunch, dinner, or late-night drinks.',
    awards: [
      { name: 'Best Beach Restaurant', year: '2022' },
      { name: 'Cocktail Excellence Award', year: '2021' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'la-gamba',
    name: 'La Gamba',
    village: 'Palamós',
    villageId: 'palamos',
    cuisine: 'Seafood',
    description: 'Famous for the best prawns in the Mediterranean.',
    image: 'https://images.pexels.com/photos/1581387/pexels-photo-1581387.jpeg',
    rating: 4.7,
    priceRange: '€€€',
    address: 'Port de Palamós, 17230 Palamós',
    phone: '+34 972 31 41 33',
    coordinates: { lat: 41.8500, lng: 3.1333 },
    openingHours: '12:00-16:00, 19:00-23:00',
    specialties: ['Palamós prawns', 'Fish stew', 'Seafood rice'],
    capacity: 90,
    established: '1952',
    chefStory: 'Third-generation fisherman-turned-chef Josep Martínez sources the finest seafood directly from Palamós port, ensuring the freshest ingredients for traditional recipes.',
    signatureDishes: [
      {
        name: 'Palamós Prawns a la Plancha',
        description: 'Grilled local prawns with sea salt and olive oil',
        price: '€35',
        ingredients: 'Fresh Palamós prawns, sea salt, olive oil, lemon'
      },
      {
        name: 'Suquet de Peix',
        description: 'Traditional Catalan fish stew',
        price: '€28',
        ingredients: 'Mixed local fish, potatoes, tomato, saffron'
      }
    ],
    atmosphere: 'Authentic fishing port atmosphere with views of working boats and the Mediterranean.',
    awards: [
      { name: 'Best Seafood Restaurant Costa Brava', year: '2023' },
      { name: 'Palamós Prawn Excellence', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Port Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'tragamar',
    name: 'Tragamar',
    village: 'Calella de Palafrugell',
    villageId: 'calella-palafrugell',
    cuisine: 'Mediterranean',
    description: 'Beachfront restaurant with stunning views and fresh seafood.',
    image: 'https://images.pexels.com/photos/1581388/pexels-photo-1581388.jpeg',
    rating: 4.5,
    priceRange: '€€€',
    address: 'Platja del Canadell, 17210 Calella de Palafrugell',
    phone: '+34 972 61 43 56',
    coordinates: { lat: 41.9167, lng: 3.1667 },
    openingHours: '12:00-23:00',
    specialties: ['Grilled fish', 'Seafood paella', 'Local wines'],
    capacity: 100,
    established: '1978',
    chefStory: 'Chef Anna Puig combines traditional Costa Brava recipes with contemporary techniques, emphasizing the natural flavors of the Mediterranean.',
    signatureDishes: [
      {
        name: 'Grilled Turbot',
        description: 'Fresh turbot with Mediterranean herbs',
        price: '€32',
        ingredients: 'Fresh turbot, herbs, olive oil, lemon'
      },
      {
        name: 'Seafood Paella',
        description: 'Traditional paella with local seafood',
        price: '€26',
        ingredients: 'Bomba rice, mixed seafood, saffron, vegetables'
      }
    ],
    atmosphere: 'Romantic beachfront setting with panoramic sea views and traditional Mediterranean decor.',
    awards: [
      { name: 'Romantic Restaurant Award', year: '2022' },
      { name: 'Best Paella Costa Brava', year: '2021' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'far-niente',
    name: 'Far Niente',
    village: 'Llafranc',
    villageId: 'llafranc',
    cuisine: 'Mediterranean',
    description: 'Romantic dining with lighthouse views and creative cuisine.',
    image: 'https://images.pexels.com/photos/1581389/pexels-photo-1581389.jpeg',
    rating: 4.6,
    priceRange: '€€€',
    address: 'Passeig de Llafranc 1, 17211 Llafranc',
    phone: '+34 972 30 19 00',
    coordinates: { lat: 41.9000, lng: 3.1833 },
    openingHours: '19:00-23:00',
    specialties: ['Tuna tartare', 'Lobster rice', 'Sunset cocktails'],
    capacity: 70,
    established: '1985',
    chefStory: 'Chef Laurent Dubois brings French culinary techniques to Mediterranean ingredients, creating an innovative menu that changes with the seasons.',
    signatureDishes: [
      {
        name: 'Bluefin Tuna Tartare',
        description: 'Fresh tuna with avocado and citrus',
        price: '€24',
        ingredients: 'Bluefin tuna, avocado, citrus, olive oil'
      },
      {
        name: 'Lobster Rice',
        description: 'Creamy rice with fresh lobster',
        price: '€42',
        ingredients: 'Fresh lobster, Calasparra rice, saffron, herbs'
      }
    ],
    atmosphere: 'Elegant and intimate with spectacular lighthouse views, perfect for romantic dinners and sunset cocktails.',
    awards: [
      { name: 'Most Romantic Restaurant', year: '2023' },
      { name: 'Creative Cuisine Award', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'es-barco',
    name: 'Es Barco',
    village: 'Tamariu',
    villageId: 'tamariu',
    cuisine: 'Seafood',
    description: 'Traditional seafood restaurant right on the beach.',
    image: 'https://images.pexels.com/photos/1581390/pexels-photo-1581390.jpeg',
    rating: 4.3,
    priceRange: '€€',
    address: 'Platja de Tamariu, 17212 Tamariu',
    phone: '+34 972 62 00 03',
    coordinates: { lat: 41.9333, lng: 3.2000 },
    openingHours: '12:00-22:00',
    specialties: ['Grilled sardines', 'Fish soup', 'Seafood fideuà'],
    capacity: 60,
    established: '1963',
    chefStory: 'Family restaurant run by the Martí family for three generations, maintaining traditional fishing village recipes and cooking methods.',
    signatureDishes: [
      {
        name: 'Grilled Sardines',
        description: 'Fresh sardines grilled over charcoal',
        price: '€14',
        ingredients: 'Fresh sardines, olive oil, sea salt, lemon'
      },
      {
        name: 'Seafood Fideuà',
        description: 'Traditional noodle paella with seafood',
        price: '€20',
        ingredients: 'Fideuà noodles, mixed seafood, saffron, aioli'
      }
    ],
    atmosphere: 'Casual beachfront setting with traditional fishing village charm and authentic local atmosphere.',
    awards: [
      { name: 'Traditional Cooking Award', year: '2021' },
      { name: 'Best Beach Chiringuito', year: '2020' }
    ],
    facilities: [
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'fonda-caner',
    name: 'Fonda Caner',
    village: 'Begur',
    villageId: 'begur',
    cuisine: 'Traditional',
    description: 'Historic inn serving traditional Catalan dishes since 1880.',
    image: 'https://images.pexels.com/photos/1581391/pexels-photo-1581391.jpeg',
    rating: 4.4,
    priceRange: '€€',
    address: 'Carrer Pi i Ralló 4, 17255 Begur',
    phone: '+34 972 62 30 33',
    coordinates: { lat: 41.9500, lng: 3.2167 },
    openingHours: '12:00-15:00, 19:00-22:00',
    specialties: ['Rabbit stew', 'Cannelloni', 'Homemade desserts'],
    capacity: 50,
    established: '1880',
    chefStory: 'Historic inn preserving 19th-century Catalan recipes, with dishes prepared using traditional methods and local ingredients sourced from the Empordà region.',
    signatureDishes: [
      {
        name: 'Conill amb Cargols',
        description: 'Traditional rabbit stew with snails',
        price: '€18',
        ingredients: 'Rabbit, snails, herbs, local wine, vegetables'
      },
      {
        name: 'Cannelloni de la Iaia',
        description: 'Grandmother\'s recipe cannelloni',
        price: '€15',
        ingredients: 'Pasta, meat filling, béchamel, cheese'
      }
    ],
    atmosphere: 'Historic inn atmosphere with traditional Catalan decor and family-friendly environment.',
    awards: [
      { name: 'Heritage Restaurant Award', year: '2022' },
      { name: 'Traditional Cuisine Excellence', year: '2021' }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'el-celler-platja-daro',
    name: 'El Celler de Platja d\'Aro',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    cuisine: 'Wine Bar',
    description: 'Cozy wine bar with excellent tapas and local wines.',
    image: 'https://images.pexels.com/photos/1581392/pexels-photo-1581392.jpeg',
    rating: 4.5,
    priceRange: '€€',
    address: 'Carrer Anselm Clavé 28, 17250 Platja d\'Aro',
    phone: '+34 972 81 73 26',
    coordinates: { lat: 41.8180, lng: 3.0680 },
    openingHours: '18:00-01:00',
    specialties: ['Iberian ham', 'Cheese selection', 'Local wines'],
    capacity: 40,
    established: '2005',
    chefStory: 'Sommelier and chef duo specializing in wine pairings with carefully selected tapas, featuring the best products from Catalonia and Spain.',
    signatureDishes: [
      {
        name: 'Iberian Ham Selection',
        description: 'Premium selection of Spanish hams',
        price: '€22',
        ingredients: 'Bellota ham, Serrano ham, bread, tomato'
      },
      {
        name: 'Catalan Cheese Board',
        description: 'Local cheeses with honey and nuts',
        price: '€18',
        ingredients: 'Local cheeses, honey, nuts, crackers'
      }
    ],
    atmosphere: 'Intimate wine cellar atmosphere with exposed stone walls and cozy lighting, perfect for wine lovers.',
    awards: [
      { name: 'Best Wine Selection', year: '2023' },
      { name: 'Tapas Excellence Award', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'restaurant-sa-punta',
    name: 'Restaurant Sa Punta',
    village: 'Palafrugell',
    villageId: 'calella-palafrugell',
    cuisine: 'Mediterranean',
    description: 'Clifftop restaurant with panoramic sea views.',
    image: 'https://images.pexels.com/photos/1581393/pexels-photo-1581393.jpeg',
    rating: 4.7,
    priceRange: '€€€€',
    address: 'Camí de Sa Punta, 17210 Palafrugell',
    phone: '+34 972 61 41 28',
    coordinates: { lat: 41.9200, lng: 3.1700 },
    openingHours: '13:00-16:00, 20:00-23:30',
    specialties: ['Sea bass', 'Lobster', 'Sunset dining'],
    capacity: 80,
    established: '1992',
    chefStory: 'Chef Miquel Roig creates sophisticated Mediterranean cuisine with emphasis on fresh seafood and seasonal ingredients, taking advantage of the spectacular clifftop location.',
    signatureDishes: [
      {
        name: 'Sea Bass in Salt Crust',
        description: 'Whole sea bass baked in aromatic salt',
        price: '€38',
        ingredients: 'Fresh sea bass, aromatic salt, herbs, vegetables'
      },
      {
        name: 'Lobster Thermidor',
        description: 'Classic French preparation with local lobster',
        price: '€55',
        ingredients: 'Fresh lobster, cream, cheese, cognac, herbs'
      }
    ],
    atmosphere: 'Spectacular clifftop location with panoramic sea views, elegant decor, and romantic sunset dining.',
    awards: [
      { name: 'Best Sea View Restaurant', year: '2023' },
      { name: 'Romantic Dining Excellence', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'mas-pou',
    name: 'Mas Pou',
    village: 'Begur',
    villageId: 'begur',
    cuisine: 'Farm-to-table',
    description: 'Rustic restaurant serving organic local produce.',
    image: 'https://images.pexels.com/photos/1581394/pexels-photo-1581394.jpeg',
    rating: 4.6,
    priceRange: '€€€',
    address: 'Carretera Begur-Pals Km 2, 17255 Begur',
    phone: '+34 972 62 31 76',
    coordinates: { lat: 41.9520, lng: 3.2100 },
    openingHours: '19:30-23:00',
    specialties: ['Organic vegetables', 'Free-range meat', 'Homemade bread'],
    capacity: 45,
    established: '2010',
    chefStory: 'Chef Carles Tejedor champions sustainable cuisine using only organic ingredients from local farms, creating a true farm-to-table experience in rural Empordà.',
    signatureDishes: [
      {
        name: 'Organic Vegetable Tasting',
        description: 'Seasonal vegetables from local organic farms',
        price: '€26',
        ingredients: 'Seasonal organic vegetables, herbs, olive oil'
      },
      {
        name: 'Free-Range Beef',
        description: 'Local grass-fed beef with seasonal garnish',
        price: '€32',
        ingredients: 'Free-range beef, seasonal vegetables, herbs'
      }
    ],
    atmosphere: 'Rustic farmhouse setting surrounded by organic gardens, emphasizing connection with nature and sustainable dining.',
    awards: [
      { name: 'Sustainable Restaurant Award', year: '2023' },
      { name: 'Organic Cuisine Excellence', year: '2022' }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'restaurant-aigua-blava',
    name: 'Restaurant Aigua Blava',
    village: 'Begur',
    villageId: 'begur',
    cuisine: 'Mediterranean',
    description: 'Elegant restaurant overlooking the beautiful Aigua Blava cove.',
    image: 'https://images.pexels.com/photos/1581395/pexels-photo-1581395.jpeg',
    rating: 4.8,
    priceRange: '€€€€',
    address: 'Platja de Fornells, 17255 Begur',
    phone: '+34 972 62 20 58',
    website: 'https://aiguablava.com',
    coordinates: { lat: 41.9450, lng: 3.2200 },
    openingHours: '13:00-16:00, 20:00-23:00',
    specialties: ['Fresh fish', 'Seafood rice', 'Terrace dining'],
    capacity: 90,
    established: '1967',
    chefStory: 'Chef Jordi Artal combines traditional Mediterranean techniques with modern presentation, taking full advantage of the spectacular cove location and fresh local ingredients.',
    signatureDishes: [
      {
        name: 'Rockfish Suquet',
        description: 'Traditional Catalan fish stew',
        price: '€29',
        ingredients: 'Mixed rockfish, potatoes, saffron, garlic'
      },
      {
        name: 'Lobster Rice',
        description: 'Creamy rice with fresh local lobster',
        price: '€48',
        ingredients: 'Fresh lobster, Calasparra rice, saffron, herbs'
      }
    ],
    atmosphere: 'Spectacular terrace overlooking the turquoise waters of Aigua Blava cove, elegant Mediterranean decor.',
    awards: [
      { name: 'Best Location Restaurant', year: '2023' },
      { name: 'Mediterranean Cuisine Excellence', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'can-rafa',
    name: 'Can Rafa',
    village: 'Cadaqués',
    villageId: 'cadaques',
    cuisine: 'Seafood',
    description: 'Traditional fisherman\'s restaurant with authentic local dishes.',
    image: 'https://images.pexels.com/photos/1581396/pexels-photo-1581396.jpeg',
    rating: 4.4,
    priceRange: '€€',
    address: 'Carrer Nou 11, 17488 Cadaqués',
    phone: '+34 972 25 81 01',
    coordinates: { lat: 42.2889, lng: 3.2794 },
    openingHours: '12:00-15:30, 19:00-22:30',
    specialties: ['Suquet de peix', 'Anchovies', 'Sea urchins'],
    capacity: 55,
    established: '1958',
    chefStory: 'Family restaurant preserving traditional Cadaqués fishing recipes, with fresh seafood sourced daily from local fishermen in this historic Mediterranean village.',
    signatureDishes: [
      {
        name: 'Suquet de Peix',
        description: 'Traditional Cadaqués fish stew',
        price: '€24',
        ingredients: 'Mixed local fish, potatoes, saffron, garlic'
      },
      {
        name: 'Sea Urchin Tasting',
        description: 'Fresh sea urchins from local waters',
        price: '€18',
        ingredients: 'Fresh sea urchins, lemon, bread'
      }
    ],
    atmosphere: 'Authentic fishing village atmosphere in the heart of Dalí\'s Cadaqués, traditional decor with maritime touches.',
    awards: [
      { name: 'Authentic Cuisine Award', year: '2022' },
      { name: 'Traditional Fishing Restaurant', year: '2021' }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'restaurant-miramar',
    name: 'Restaurant Miramar',
    village: 'Llançà',
    villageId: 'llanca',
    cuisine: 'Creative',
    description: 'Michelin-starred restaurant with innovative Mediterranean cuisine.',
    image: 'https://images.pexels.com/photos/1581397/pexels-photo-1581397.jpeg',
    rating: 4.9,
    priceRange: '€€€€€',
    address: 'Passeig Marítim 7, 17490 Llançà',
    phone: '+34 972 38 01 32',
    website: 'https://restaurantmiramar.com',
    coordinates: { lat: 42.3667, lng: 3.1500 },
    openingHours: '20:00-23:00',
    specialties: ['Tasting menu', 'Molecular gastronomy', 'Wine pairing'],
    capacity: 35,
    established: '2000',
    chefStory: 'Chef Paco Pérez holds two Michelin stars and creates avant-garde cuisine that reinterprets Mediterranean traditions through modern techniques and artistic presentation.',
    signatureDishes: [
      {
        name: 'Sea and Mountain Tasting Menu',
        description: '12-course journey through Costa Brava flavors',
        price: '€180',
        ingredients: 'Seasonal local ingredients, innovative techniques'
      },
      {
        name: 'Deconstructed Paella',
        description: 'Modern interpretation of traditional paella',
        price: '€45',
        ingredients: 'Rice essence, seafood, saffron, vegetables'
      }
    ],
    atmosphere: 'Sophisticated and intimate Michelin-starred dining room with sea views and impeccable service.',
    awards: [
      { name: 'Two Michelin Stars', year: '2023' },
      { name: 'Best Creative Cuisine', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'la-llagosta',
    name: 'La Llagosta',
    village: 'Roses',
    villageId: 'roses',
    cuisine: 'Seafood',
    description: 'Beachfront restaurant specializing in lobster and fresh seafood.',
    image: 'https://images.pexels.com/photos/1581398/pexels-photo-1581398.jpeg',
    rating: 4.5,
    priceRange: '€€€',
    address: 'Platja de Roses, 17480 Roses',
    phone: '+34 972 25 64 19',
    coordinates: { lat: 42.2667, lng: 3.1833 },
    openingHours: '12:00-16:00, 19:00-23:00',
    specialties: ['Lobster rice', 'Grilled prawns', 'Fish stew'],
    capacity: 85,
    established: '1975',
    chefStory: 'Specializing in lobster dishes for nearly 50 years, Chef Ramon Puig sources the finest crustaceans from the Bay of Roses and prepares them using time-tested recipes.',
    signatureDishes: [
      {
        name: 'Lobster Rice for Two',
        description: 'Traditional rice dish with whole lobster',
        price: '€85',
        ingredients: 'Fresh lobster, Bomba rice, saffron, vegetables'
      },
      {
        name: 'Grilled Roses Prawns',
        description: 'Local prawns grilled to perfection',
        price: '€28',
        ingredients: 'Fresh Roses prawns, olive oil, sea salt, lemon'
      }
    ],
    atmosphere: 'Beachfront location with panoramic views of the Bay of Roses, casual elegant atmosphere perfect for seafood lovers.',
    awards: [
      { name: 'Best Lobster Restaurant', year: '2023' },
      { name: 'Seafood Excellence Award', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'restaurant-emporda',
    name: 'Restaurant Empordà',
    village: 'Figueres',
    villageId: 'figueres',
    cuisine: 'Traditional',
    description: 'Historic restaurant serving traditional Empordà cuisine since 1961.',
    image: 'https://images.pexels.com/photos/1581399/pexels-photo-1581399.jpeg',
    rating: 4.3,
    priceRange: '€€€',
    address: 'Avinguda Salvador Dalí 170, 17600 Figueres',
    phone: '+34 972 50 05 62',
    coordinates: { lat: 42.2667, lng: 2.9667 },
    openingHours: '13:00-15:30, 20:00-22:30',
    specialties: ['Duck with turnips', 'Catalan sausage', 'Traditional desserts'],
    capacity: 75,
    established: '1961',
    chefStory: 'Historic restaurant that has preserved traditional Empordà recipes for over 60 years, serving authentic regional cuisine in the heart of Dalí\'s hometown.',
    signatureDishes: [
      {
        name: 'Ànec amb Naps',
        description: 'Traditional duck with turnips',
        price: '€26',
        ingredients: 'Duck, turnips, local wine, herbs, vegetables'
      },
      {
        name: 'Botifarra amb Mongetes',
        description: 'Catalan sausage with white beans',
        price: '€18',
        ingredients: 'Catalan sausage, white beans, herbs, olive oil'
      }
    ],
    atmosphere: 'Traditional Catalan restaurant atmosphere with regional decor and family-friendly environment in historic Figueres.',
    awards: [
      { name: 'Traditional Cuisine Heritage', year: '2022' },
      { name: 'Regional Cooking Excellence', year: '2021' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'el-bulli-1846',
    name: 'El Bulli 1846',
    village: 'Roses',
    villageId: 'roses',
    cuisine: 'Experimental',
    description: 'Museum and culinary experience at the legendary El Bulli location.',
    image: 'https://images.pexels.com/photos/1581400/pexels-photo-1581400.jpeg',
    rating: 4.8,
    priceRange: '€€€€€',
    address: 'Cala Montjoi, 17480 Roses',
    phone: '+34 972 15 04 57',
    website: 'https://elbulli1846.com',
    coordinates: { lat: 42.2833, lng: 3.2167 },
    openingHours: 'By reservation only',
    specialties: ['Culinary experience', 'Innovation', 'History'],
    capacity: 25,
    established: '2019',
    chefStory: 'Located at the legendary El Bulli site, this unique culinary experience celebrates the innovation and creativity that made El Bulli the world\'s most influential restaurant.',
    signatureDishes: [
      {
        name: 'Innovation Experience',
        description: 'Multi-sensory culinary journey',
        price: '€350',
        ingredients: 'Innovative techniques, local ingredients, creativity'
      },
      {
        name: 'Historical Tasting',
        description: 'Recreation of classic El Bulli dishes',
        price: '€250',
        ingredients: 'Historical recipes, modern techniques'
      }
    ],
    atmosphere: 'Unique museum and dining experience in the legendary Cala Montjoi location, celebrating culinary innovation and history.',
    awards: [
      { name: 'Culinary Innovation Award', year: '2023' },
      { name: 'Unique Dining Experience', year: '2022' }
    ],
    facilities: [
      { name: 'Valet Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'restaurant-bahia',
    name: 'Restaurant Bahía',
    village: 'Roses',
    villageId: 'roses',
    cuisine: 'Mediterranean',
    description: 'Family-run restaurant with traditional recipes and sea views.',
    image: 'https://images.pexels.com/photos/1581401/pexels-photo-1581401.jpeg',
    rating: 4.4,
    priceRange: '€€',
    address: 'Carrer Díaz Pacheco 15, 17480 Roses',
    phone: '+34 972 25 61 03',
    coordinates: { lat: 42.2650, lng: 3.1820 },
    openingHours: '12:00-15:00, 19:00-22:30',
    specialties: ['Paella', 'Grilled fish', 'Sangria'],
    capacity: 70,
    established: '1982',
    chefStory: 'Family restaurant run by three generations, maintaining traditional Mediterranean recipes with emphasis on fresh local ingredients and warm hospitality.',
    signatureDishes: [
      {
        name: 'Mixed Paella',
        description: 'Traditional paella with meat and seafood',
        price: '€22',
        ingredients: 'Rice, chicken, seafood, vegetables, saffron'
      },
      {
        name: 'Grilled Dorada',
        description: 'Fresh sea bream grilled with herbs',
        price: '€19',
        ingredients: 'Fresh sea bream, herbs, olive oil, lemon'
      }
    ],
    atmosphere: 'Warm family atmosphere with traditional Mediterranean decor and views of Roses bay, perfect for families and groups.',
    awards: [
      { name: 'Family Restaurant Excellence', year: '2022' },
      { name: 'Traditional Hospitality Award', year: '2021' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'ca-lavi',
    name: 'Ca l\'Avi',
    village: 'Girona',
    villageId: 'girona',
    cuisine: 'Traditional',
    description: 'Cozy restaurant in Girona\'s old town serving hearty Catalan dishes.',
    image: 'https://images.pexels.com/photos/1581402/pexels-photo-1581402.jpeg',
    rating: 4.5,
    priceRange: '€€',
    address: 'Carrer Pou Rodó 12, 17004 Girona',
    phone: '+34 972 20 90 73',
    coordinates: { lat: 41.9850, lng: 2.8250 },
    openingHours: '13:00-15:30, 20:00-23:00',
    specialties: ['Escudella', 'Botifarra', 'Mel i mató'],
    capacity: 45,
    established: '1978',
    chefStory: 'Traditional Catalan restaurant in Girona\'s historic quarter, preserving grandmother\'s recipes and serving authentic regional cuisine for over 40 years.',
    signatureDishes: [
      {
        name: 'Escudella i Carn d\'Olla',
        description: 'Traditional Catalan stew with meat and vegetables',
        price: '€16',
        ingredients: 'Mixed meats, vegetables, chickpeas, pasta'
      },
      {
        name: 'Mel i Mató',
        description: 'Traditional dessert with fresh cheese and honey',
        price: '€8',
        ingredients: 'Fresh cheese, local honey, nuts'
      }
    ],
    atmosphere: 'Cozy traditional atmosphere in medieval Girona, family-friendly with authentic Catalan decor and warm hospitality.',
    awards: [
      { name: 'Traditional Catalan Cuisine', year: '2022' },
      { name: 'Historic Quarter Restaurant', year: '2021' }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'massana',
    name: 'Massana',
    village: 'Girona',
    villageId: 'girona',
    cuisine: 'Contemporary',
    description: 'Modern restaurant with creative interpretations of Catalan cuisine.',
    image: 'https://images.pexels.com/photos/1581403/pexels-photo-1581403.jpeg',
    rating: 4.7,
    priceRange: '€€€€',
    address: 'Carrer Bonastruc de Porta 10, 17004 Girona',
    phone: '+34 972 21 38 20',
    website: 'https://restaurantmassana.com',
    coordinates: { lat: 41.9870, lng: 2.8270 },
    openingHours: '20:00-23:00',
    specialties: ['Tasting menu', 'Local ingredients', 'Wine selection'],
    capacity: 30,
    established: '2015',
    chefStory: 'Chef Pere Massana creates contemporary Catalan cuisine using traditional techniques with modern presentation, emphasizing local Girona ingredients and seasonal products.',
    signatureDishes: [
      {
        name: 'Girona Tasting Menu',
        description: '8-course journey through local flavors',
        price: '€95',
        ingredients: 'Seasonal local ingredients, innovative techniques'
      },
      {
        name: 'Deconstructed Esqueixada',
        description: 'Modern take on traditional Catalan salad',
        price: '€18',
        ingredients: 'Salt cod, tomatoes, peppers, olives, modern presentation'
      }
    ],
    atmosphere: 'Contemporary elegant dining room in Girona\'s Jewish quarter, sophisticated atmosphere with focus on culinary artistry.',
    awards: [
      { name: 'Contemporary Cuisine Award', year: '2023' },
      { name: 'Best Modern Catalan Restaurant', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' }
    ]
  },
  {
    id: 'restaurant-sant-pol',
    name: 'Restaurant Sant Pol',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    cuisine: 'Mediterranean',
    description: 'Beachfront restaurant with fresh seafood and traditional Catalan dishes.',
    image: 'https://images.pexels.com/photos/1581404/pexels-photo-1581404.jpeg',
    rating: 4.6,
    priceRange: '€€€',
    address: 'Platja de Sant Pol, 17220 Sant Feliu de Guíxols',
    phone: '+34 972 32 50 25',
    coordinates: { lat: 41.7850, lng: 3.0350 },
    openingHours: '12:00-16:00, 19:00-23:00',
    specialties: ['Rice dishes', 'Fresh fish', 'Local wines'],
    capacity: 95,
    established: '1985',
    chefStory: 'Chef Montse Ribas combines traditional Costa Brava recipes with contemporary techniques, specializing in rice dishes and fresh seafood from the local fishing fleet.',
    signatureDishes: [
      {
        name: 'Arroz con Bogavante',
        description: 'Traditional rice with lobster',
        price: '€42',
        ingredients: 'Fresh lobster, Bomba rice, saffron, vegetables'
      },
      {
        name: 'Suquet de Peix Sant Feliu',
        description: 'Local fish stew with traditional recipe',
        price: '€26',
        ingredients: 'Mixed local fish, potatoes, saffron, garlic, herbs'
      }
    ],
    atmosphere: 'Relaxed beachfront setting with panoramic sea views, perfect for enjoying fresh seafood while watching the Mediterranean.',
    awards: [
      { name: 'Best Rice Restaurant Costa Brava', year: '2023' },
      { name: 'Fresh Seafood Excellence', year: '2022' }
    ],
    facilities: [
      { name: 'Free WiFi', icon: 'wifi' },
      { name: 'Beach Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Accessible', icon: 'accessible' }
    ]
  },
  {
    id: 'villa-mas-sant-feliu',
    name: 'Villa Mas Sant Feliu',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    cuisine: 'Traditional',
    description: 'Historic villa restaurant serving authentic Catalan cuisine since 1920.',
    image: 'https://images.pexels.com/photos/1581405/pexels-photo-1581405.jpeg',
    rating: 4.4,
    priceRange: '€€',
    address: 'Carrer de la Rambla 24, 17220 Sant Feliu de Guíxols',
    phone: '+34 972 32 18 95',
    coordinates: { lat: 41.7820, lng: 3.0320 },
    openingHours: '13:00-15:30, 19:30-22:30',
    specialties: ['Catalan stews', 'Grilled meats', 'Traditional desserts'],
    capacity: 65,
    established: '1920',
    chefStory: 'Family restaurant preserving century-old Catalan recipes, with dishes prepared using traditional methods passed down through four generations of the Mas family.',
    signatureDishes: [
      {
        name: 'Estofat de Bou',
        description: 'Traditional Catalan beef stew',
        price: '€19',
        ingredients: 'Beef, vegetables, red wine, herbs, traditional spices'
      },
      {
        name: 'Crema Catalana de la Casa',
        description: 'House-made traditional Catalan cream',
        price: '€7',
        ingredients: 'Milk, eggs, sugar, cinnamon, lemon zest'
      }
    ],
    atmosphere: 'Historic villa atmosphere with traditional Catalan decor, family-friendly environment in the heart of Sant Feliu.',
    awards: [
      { name: 'Traditional Family Restaurant', year: '2022' },
      { name: 'Catalan Heritage Cuisine', year: '2021' }
    ],
    facilities: [
      { name: 'Parking', icon: 'parking' },
      { name: 'Card Payment', icon: 'card' },
      { name: 'Family Friendly', icon: 'accessible' }
    ]
  },
  {
    id: 'cau-del-pescador',
    name: 'Cau del Pescador',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    cuisine: 'Seafood',
    description: 'Authentic fisherman\'s tavern serving the catch of the day.',
    image: 'https://images.pexels.com/photos/1581406/pexels-photo-1581406.jpeg',
    rating: 4.3,
    priceRange: '€€',
    address: 'Port de Sant Feliu, 17220 Sant Feliu de Guíxols',
    phone: '+34 972 32 10 52',
    coordinates: { lat: 41.7800, lng: 3.0300 },
    openingHours: '12:00-15:00, 19:00-22:00',
    specialties: ['Daily catch', 'Grilled fish', 'Seafood tapas'],
    capacity: 50,
    established: '1965',
    chefStory: 'Traditional fisherman\'s restaurant run by local fishing families, serving the freshest catch directly from Sant Feliu\'s fishing boats using simple, authentic preparations.',
    signatureDishes: [
      {
        name: 'Pescado del Día',
        description: 'Daily fresh fish grilled with sea salt',
        price: '€Market Price',
        ingredients: 'Fresh daily catch, sea salt, olive oil, lemon'
      },
      {
        name: 'Tapas de Mariscos',
        description: 'Mixed seafood tapas selection',
        price: '€16',
        ingredients: 'Mussels, clams, prawns, squid, garlic, parsley'
      }
    ],
    atmosphere: 'Authentic fishing port atmosphere with maritime decor, popular with locals and visitors seeking genuine seafood experience.',
    awards: [
      { name: 'Authentic Seafood Restaurant', year: '2022' },
      { name: 'Local Fishermen\'s Choice', year: '2021' }
    ],
    facilities: [
      { name: 'Port Parking', icon: 'parking' },
      { name: 'Cash Preferred', icon: 'card' }
    ]
  }
];