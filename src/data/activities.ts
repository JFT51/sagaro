import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'coastal-walk',
    name: 'Camí de Ronda Coastal Walk',
    village: 'S\'Agaro',
    villageId: 'sagaro',
    description: 'Spectacular coastal path with stunning sea views.',
    image: 'https://images.pexels.com/photos/1562/pexels-photo-1562.jpeg',
    category: 'Hiking',
    duration: '2-3 hours',
    difficulty: 'Easy',
    price: 'Free',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    bestTime: 'Morning or evening',
    equipment: ['Comfortable shoes', 'Water', 'Camera', 'Sun protection'],
    detailedDescription: 'The Camí de Ronda is a historic coastal path that follows the rugged coastline of the Costa Brava. Originally used by guards to patrol the coast, this trail now offers hikers spectacular views of hidden coves, dramatic cliffs, and the sparkling Mediterranean Sea. The path winds through pine forests and along rocky shores, providing numerous photo opportunities and peaceful spots to rest.',
    safetyInfo: [
      'Stay on marked paths to avoid cliff edges',
      'Bring plenty of water, especially in summer',
      'Wear appropriate footwear with good grip',
      'Check weather conditions before starting',
      'Inform someone of your planned route'
    ],
    whatToExpect: 'Expect breathtaking coastal views, peaceful pine forests, and the sound of waves crashing against the rocks. The trail is well-marked but can be rocky in places. You\'ll encounter several viewpoints perfect for photography and small coves where you can take a break.',
    instructor: {
      name: 'Local Guide Available',
      bio: 'Experienced local guides available for group tours',
      experience: '10+ years',
      certifications: 'Certified Nature Guide'
    },
    groupSize: '1-15 people',
    ageLimit: 'All ages (children must be supervised)',
    facilities: [
      { name: 'Trail Markers', icon: 'accessible' },
      { name: 'Scenic Viewpoints', icon: 'accessible' },
      { name: 'Free Access', icon: 'accessible' }
    ]
  },
  {
    id: 'scuba-diving',
    name: 'Scuba Diving Experience',
    village: 'Castell-Platja d\'Aro',
    villageId: 'castell-platja-daro',
    description: 'Explore the underwater world of the Costa Brava.',
    image: 'https://images.pexels.com/photos/1563/pexels-photo-1563.jpeg',
    category: 'Water Sports',
    duration: '4 hours',
    difficulty: 'Beginner',
    price: '€45-€75',
    coordinates: { lat: 41.8167, lng: 3.0667 },
    phone: '+34 972 81 71 79',
    website: 'https://aquadiver.com',
    bestTime: 'Morning',
    equipment: ['All equipment provided', 'Swimsuit', 'Towel'],
    detailedDescription: 'Discover the rich marine life of the Costa Brava\'s crystal-clear waters. This beginner-friendly diving experience includes a comprehensive safety briefing, equipment fitting, and guided underwater exploration. You\'ll explore rocky reefs, underwater caves, and encounter colorful Mediterranean fish species in depths of 6-12 meters.',
    safetyInfo: [
      'Medical questionnaire required before diving',
      'No diving if you have respiratory or heart conditions',
      'Maximum depth of 12 meters for beginners',
      'Always dive with certified instructor',
      'No flying for 18 hours after diving'
    ],
    whatToExpect: 'After a thorough briefing and equipment check, you\'ll enter the water from the beach or boat. Expect to see grouper, sea bream, octopus, and various Mediterranean fish species. The underwater visibility is typically excellent, ranging from 15-25 meters.',
    instructor: {
      name: 'PADI Certified Instructors',
      bio: 'Professional diving instructors with extensive Mediterranean experience',
      experience: '15+ years',
      certifications: 'PADI Open Water Instructor'
    },
    groupSize: '2-6 people per instructor',
    ageLimit: '10+ years (with parental consent)',
    facilities: [
      { name: 'Equipment Rental', icon: 'card' },
      { name: 'Changing Rooms', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' }
    ]
  },
  {
    id: 'kayaking',
    name: 'Sea Kayaking Adventure',
    village: 'Calella de Palafrugell',
    villageId: 'calella-palafrugell',
    description: 'Paddle along the beautiful Costa Brava coastline.',
    image: 'https://images.pexels.com/photos/1564/pexels-photo-1564.jpeg',
    category: 'Water Sports',
    duration: '3 hours',
    difficulty: 'Easy',
    price: '€35-€50',
    coordinates: { lat: 41.9167, lng: 3.1667 },
    phone: '+34 972 61 41 75',
    bestTime: 'Morning or afternoon',
    equipment: ['Kayak provided', 'Life jacket', 'Waterproof bag'],
    detailedDescription: 'Explore the stunning coastline of Calella de Palafrugell by sea kayak. This guided tour takes you along dramatic cliffs, into hidden coves, and past charming fishing villages. No previous kayaking experience is required as the route is suitable for beginners and the sea conditions are typically calm.',
    safetyInfo: [
      'Life jackets must be worn at all times',
      'Stay close to the guide and group',
      'Inform guide of any swimming difficulties',
      'Sun protection is essential',
      'Tours may be cancelled in bad weather'
    ],
    whatToExpect: 'You\'ll paddle along the scenic coastline, stopping at secluded beaches and coves for swimming and snorkeling. The guide will share information about local marine life and coastal geology. Expect to see crystal-clear waters, dramatic rock formations, and possibly dolphins.',
    instructor: {
      name: 'Certified Kayak Guides',
      bio: 'Experienced sea kayaking guides with local coastal knowledge',
      experience: '8+ years',
      certifications: 'Sea Kayak Guide Certification'
    },
    groupSize: '4-12 people',
    ageLimit: '12+ years',
    facilities: [
      { name: 'Equipment Included', icon: 'accessible' },
      { name: 'Beach Launch', icon: 'accessible' },
      { name: 'Snorkel Gear', icon: 'card' }
    ]
  },
  {
    id: 'cycling-tour',
    name: 'Cycling Tour of Medieval Villages',
    village: 'Pals',
    villageId: 'pals',
    description: 'Bike through picturesque medieval villages and countryside.',
    image: 'https://images.pexels.com/photos/1565/pexels-photo-1565.jpeg',
    category: 'Cycling',
    duration: '5 hours',
    difficulty: 'Moderate',
    price: '€30-€45',
    coordinates: { lat: 41.9667, lng: 3.1500 },
    phone: '+34 972 63 69 28',
    bestTime: 'Morning',
    equipment: ['Bike rental available', 'Helmet', 'Water bottle'],
    detailedDescription: 'This guided cycling tour takes you through the heart of the Empordà region, visiting beautifully preserved medieval villages including Pals, Peratallada, and Ullastret. The route follows quiet country roads and cycling paths through rice fields, vineyards, and olive groves.',
    safetyInfo: [
      'Helmets are mandatory and provided',
      'Stay in single file on narrow roads',
      'Follow traffic rules and guide instructions',
      'Bring sun protection and water',
      'Basic cycling fitness required'
    ],
    whatToExpect: 'Cycle through stunning countryside landscapes, visit medieval stone villages, and enjoy local refreshments. The route includes gentle hills and flat sections through agricultural areas. You\'ll have time to explore each village and learn about their history.',
    instructor: {
      name: 'Local Cycling Guides',
      bio: 'Knowledgeable local guides passionate about cycling and regional history',
      experience: '12+ years',
      certifications: 'Cycling Tour Guide License'
    },
    groupSize: '6-15 people',
    ageLimit: '14+ years',
    facilities: [
      { name: 'Bike Rental', icon: 'card' },
      { name: 'Helmet Included', icon: 'accessible' },
      { name: 'Support Vehicle', icon: 'accessible' }
    ]
  },
  {
    id: 'fishing-trip',
    name: 'Traditional Fishing Experience',
    village: 'Palamós',
    villageId: 'palamos',
    description: 'Join local fishermen on a traditional fishing trip.',
    image: 'https://images.pexels.com/photos/1566/pexels-photo-1566.jpeg',
    category: 'Cultural',
    duration: '4 hours',
    difficulty: 'Easy',
    price: '€55-€70',
    coordinates: { lat: 41.8500, lng: 3.1333 },
    phone: '+34 972 31 41 55',
    bestTime: 'Early morning',
    equipment: ['All equipment provided', 'Sun protection', 'Comfortable clothes'],
    detailedDescription: 'Experience traditional Mediterranean fishing methods with local fishermen from Palamós. Learn about sustainable fishing practices, try your hand at different fishing techniques, and understand the importance of the sea to local communities. The trip includes fishing for various Mediterranean species.',
    safetyInfo: [
      'Life jackets provided and must be worn',
      'Follow all safety instructions from crew',
      'Inform crew of any seasickness susceptibility',
      'Stay seated when boat is moving',
      'No swimming from the boat'
    ],
    whatToExpect: 'Early morning departure from Palamós port, fishing in traditional grounds, learning about local fishing techniques, and possibly catching sea bream, mackerel, or other Mediterranean fish. Includes traditional fisherman\'s breakfast.',
    instructor: {
      name: 'Local Fishermen',
      bio: 'Experienced local fishermen sharing traditional knowledge',
      experience: '20+ years',
      certifications: 'Professional Fishing License'
    },
    groupSize: '4-8 people',
    ageLimit: '8+ years (with adult supervision)',
    facilities: [
      { name: 'Traditional Boat', icon: 'accessible' },
      { name: 'Fishing Equipment', icon: 'accessible' },
      { name: 'Breakfast Included', icon: 'card' }
    ]
  },
  {
    id: 'wine-tour',
    name: 'Empordà Wine Tour',
    village: 'Girona',
    villageId: 'girona',
    description: 'Visit local wineries and taste regional wines.',
    image: 'https://images.pexels.com/photos/1567/pexels-photo-1567.jpeg',
    category: 'Food & Wine',
    duration: '6 hours',
    difficulty: 'Easy',
    price: '€65-€85',
    coordinates: { lat: 41.9794, lng: 2.8214 },
    phone: '+34 972 20 91 56',
    website: 'https://empordawines.com',
    bestTime: 'Afternoon',
    equipment: ['Transportation included', 'Comfortable shoes'],
    detailedDescription: 'Discover the wines of the Empordà DO region on this comprehensive wine tour. Visit 2-3 carefully selected wineries, learn about local grape varieties, winemaking processes, and taste a variety of wines paired with local products. The tour includes transportation and a traditional lunch.',
    safetyInfo: [
      'Responsible drinking - designated driver provided',
      'Inform guide of any allergies',
      'Comfortable walking shoes recommended',
      'Stay with the group at all times',
      'Minimum age 18 for wine tasting'
    ],
    whatToExpect: 'Visit family-owned wineries, walk through vineyards, learn about wine production, taste 8-12 different wines, enjoy local cheese and charcuterie pairings, and experience the passion of local winemakers.',
    instructor: {
      name: 'Wine Tourism Specialist',
      bio: 'Certified sommelier and wine tourism expert',
      experience: '10+ years',
      certifications:  'Certified Sommelier, Wine Tourism Guide'
    },
    groupSize: '8-16 people',
    ageLimit: '18+ years',
    facilities: [
      { name: 'Transportation', icon: 'accessible' },
      { name: 'Wine Tastings', icon: 'card' },
      { name: 'Lunch Included', icon: 'card' }
    ]
  },
  {
    id: 'snorkeling',
    name: 'Snorkeling at Tamariu',
    village: 'Tamariu',
    villageId: 'tamariu',
    description: 'Discover marine life in crystal clear waters.',
    image: 'https://images.pexels.com/photos/1568/pexels-photo-1568.jpeg',
    category: 'Water Sports',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '€25-€35',
    coordinates: { lat: 41.9333, lng: 3.2000 },
    phone: '+34 972 62 21 31',
    bestTime: 'Morning',
    equipment: ['Snorkel gear available', 'Swimsuit', 'Towel'],
    detailedDescription: 'Explore the underwater world of Tamariu\'s protected marine area. This guided snorkeling experience is perfect for beginners and families. The calm, clear waters provide excellent visibility to observe Mediterranean marine life including colorful fish, sea urchins, and underwater rock formations.',
    safetyInfo: [
      'Basic swimming ability required',
      'Stay close to the guide',
      'Don\'t touch marine life or coral',
      'Use reef-safe sunscreen only',
      'Exit water if feeling uncomfortable'
    ],
    whatToExpect: 'Crystal clear waters with 15-20 meter visibility, diverse marine life including wrasse, sea bream, and octopus, underwater rock formations, and possibly sea turtles. The guide will point out interesting species and explain the marine ecosystem.',
    instructor: {
      name: 'Marine Biology Guide',
      bio: 'Marine biologist specializing in Mediterranean ecosystems',
      experience: '7+ years',
      certifications: 'Marine Biology Degree, Snorkel Guide'
    },
    groupSize: '4-10 people',
    ageLimit: '8+ years (swimming ability required)',
    facilities: [
      { name: 'Equipment Rental', icon: 'card' },
      { name: 'Beach Access', icon: 'accessible' },
      { name: 'Changing Areas', icon: 'accessible' }
    ]
  },
  {
    id: 'pottery-workshop',
    name: 'Traditional Pottery Workshop',
    village: 'La Bisbal d\'Empordà',
    villageId: 'la-bisbal-emporda',
    description: 'Learn traditional ceramic techniques from local artisans.',
    image: 'https://images.pexels.com/photos/1569/pexels-photo-1569.jpeg',
    category: 'Cultural',
    duration: '3 hours',
    difficulty: 'Easy',
    price: '€40-€55',
    coordinates: { lat: 41.9667, lng: 3.0333 },
    phone: '+34 972 64 20 67',
    bestTime: 'Morning or afternoon',
    equipment: ['All materials provided', 'Apron recommended'],
    detailedDescription: 'Learn the ancient art of pottery in La Bisbal d\'Empordà, the ceramic capital of Catalonia. Work with local master potters to create your own ceramic piece using traditional techniques passed down through generations. The workshop includes clay preparation, shaping, and glazing.',
    safetyInfo: [
      'Wear old clothes or bring apron',
      'Wash hands thoroughly after working with clay',
      'Be careful around pottery wheels',
      'Follow instructor\'s guidance with tools',
      'Clay dust - inform of respiratory issues'
    ],
    whatToExpect: 'Hands-on pottery experience, learning traditional Catalan ceramic techniques, creating your own piece to take home (after firing), understanding the history of local ceramics, and visiting the pottery quarter.',
    instructor: {
      name: 'Master Potter',
      bio: 'Third-generation potter specializing in traditional Catalan ceramics',
      experience: '25+ years',
      certifications: 'Master Artisan Certification'
    },
    groupSize: '6-12 people',
    ageLimit: '10+ years',
    facilities: [
      { name: 'Pottery Studio', icon: 'accessible' },
      { name: 'All Materials', icon: 'card' },
      { name: 'Take Home Piece', icon: 'accessible' }
    ]
  },
  {
    id: 'rock-climbing',
    name: 'Rock Climbing at Montgrí',
    village: 'Torroella de Montgrí',
    villageId: 'torroella-montgri',
    description: 'Scale the limestone cliffs of the Montgrí massif.',
    image: 'https://images.pexels.com/photos/1570/pexels-photo-1570.jpeg',
    category: 'Adventure',
    duration: '4 hours',
    difficulty: 'Moderate',
    price: '€60-€80',
    coordinates: { lat: 42.0333, lng: 3.1167 },
    phone: '+34 972 75 81 91',
    bestTime: 'Morning',
    equipment: ['Climbing gear provided', 'Athletic wear', 'Closed shoes'],
    detailedDescription: 'Experience rock climbing on the spectacular limestone cliffs of the Montgrí Natural Park. This guided climbing experience offers routes suitable for beginners to intermediate climbers, with stunning views over the Costa Brava and the Medes Islands.',
    safetyInfo: [
      'All safety equipment provided and checked',
      'Helmets mandatory at all times',
      'Follow guide instructions precisely',
      'Inform guide of any medical conditions',
      'Weather dependent activity'
    ],
    whatToExpect: 'Technical instruction on climbing techniques, multiple climbing routes of varying difficulty, spectacular panoramic views, and the thrill of scaling natural rock faces. Equipment instruction and safety briefing included.',
    instructor: {
      name: 'Certified Climbing Guide',
      bio: 'Professional climbing instructor with extensive experience in the Montgrí area',
      experience: '15+ years',
      certifications: 'UIAGM Mountain Guide'
    },
    groupSize: '3-6 people',
    ageLimit: '14+ years',
    facilities: [
      { name: 'Safety Equipment', icon: 'accessible' },
      { name: 'Multiple Routes', icon: 'accessible' },
      { name: 'Scenic Views', icon: 'accessible' }
    ]
  },
  {
    id: 'sailing-lesson',
    name: 'Sailing Lessons',
    village: 'Roses',
    villageId: 'roses',
    description: 'Learn to sail in the beautiful Bay of Roses.',
    image: 'https://images.pexels.com/photos/1571/pexels-photo-1571.jpeg',
    category: 'Water Sports',
    duration: '3 hours',
    difficulty: 'Beginner',
    price: '€50-€70',
    coordinates: { lat: 42.2667, lng: 3.1833 },
    phone: '+34 972 25 73 84',
    bestTime: 'Afternoon',
    equipment: ['Boat provided', 'Life jacket', 'Sun protection'],
    detailedDescription: 'Learn the basics of sailing in the protected waters of the Bay of Roses. This beginner-friendly course covers sail handling, steering, basic navigation, and safety procedures. The bay\'s consistent winds and calm waters make it ideal for learning.',
    safetyInfo: [
      'Life jackets must be worn at all times',
      'Listen carefully to instructor commands',
      'Stay seated unless instructed otherwise',
      'Inform instructor of swimming ability',
      'Lessons cancelled in strong winds'
    ],
    whatToExpect: 'Basic sailing theory, hands-on practice with steering and sail handling, understanding wind direction and boat movement, and the satisfaction of sailing independently by the end of the lesson.',
    instructor: {
      name: 'RYA Certified Instructor',
      bio: 'Professional sailing instructor with Mediterranean expertise',
      experience: '12+ years',
      certifications: 'RYA Yachtmaster Instructor'
    },
    groupSize: '2-4 people per boat',
    ageLimit: '12+ years',
    facilities: [
      { name: 'Training Boats', icon: 'accessible' },
      { name: 'Safety Equipment', icon: 'accessible' },
      { name: 'Marina Facilities', icon: 'card' }
    ]
  },
  {
    id: 'horseback-riding',
    name: 'Horseback Riding in Empordà',
    village: 'Begur',
    villageId: 'begur',
    description: 'Explore the countryside on horseback through ancient paths.',
    image: 'https://images.pexels.com/photos/1572/pexels-photo-1572.jpeg',
    category: 'Adventure',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '€45-€60',
    coordinates: { lat: 41.9500, lng: 3.2167 },
    phone: '+34 972 62 41 89',
    bestTime: 'Morning or evening',
    equipment: ['Helmet provided', 'Long pants', 'Closed shoes'],
    detailedDescription: 'Discover the beautiful Empordà countryside on horseback, following ancient paths through pine forests, olive groves, and along coastal cliffs. This guided ride is suitable for beginners and experienced riders alike, with gentle, well-trained horses.',
    safetyInfo: [
      'Helmets mandatory and provided',
      'Follow guide instructions at all times',
      'Wear appropriate clothing and footwear',
      'Inform guide of riding experience level',
      'Stay calm and gentle with horses'
    ],
    whatToExpected: 'Peaceful ride through Mediterranean countryside, stunning coastal views, interaction with gentle horses, and the unique perspective of exploring the landscape on horseback.',
    instructor: {
      name: 'Experienced Horse Guide',
      bio: 'Professional equestrian guide with local area expertise',
      experience: '18+ years',
      certifications: 'Equestrian Guide License'
    },
    groupSize: '4-8 people',
    ageLimit: '10+ years',
    facilities: [
      { name: 'Well-trained Horses', icon: 'accessible' },
      { name: 'Safety Equipment', icon: 'accessible' },
      { name: 'Scenic Routes', icon: 'accessible' }
    ]
  },
  {
    id: 'stand-up-paddle',
    name: 'Stand-Up Paddleboarding',
    village: 'Cadaqués',
    villageId: 'cadaques',
    description: 'Peaceful SUP session in the crystal-clear waters of Cadaqués.',
    image: 'https://images.pexels.com/photos/1573/pexels-photo-1573.jpeg',
    category: 'Water Sports',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '€30-€40',
    coordinates: { lat: 42.2889, lng: 3.2794 },
    phone: '+34 972 25 81 55',
    bestTime: 'Morning',
    equipment: ['SUP board provided', 'Paddle', 'Leash'],
    detailedDescription: 'Experience the tranquility of stand-up paddleboarding in the pristine waters around Cadaqués. This activity combines gentle exercise with the opportunity to explore hidden coves and enjoy unique perspectives of this famous white village.',
    safetyInfo: [
      'Basic swimming ability required',
      'Wear leash at all times',
      'Stay within designated area',
      'Inform instructor of any concerns',
      'Activity cancelled in rough conditions'
    ],
    whatToExpect: 'Calm, clear waters perfect for SUP, instruction on paddling technique and balance, exploration of small coves, and peaceful time on the water with beautiful coastal scenery.',
    instructor: {
      name: 'SUP Instructor',
      bio: 'Certified stand-up paddleboard instructor',
      experience: '6+ years',
      certifications: 'SUP Instructor Certification'
    },
    groupSize: '4-8 people',
    ageLimit: '12+ years (swimming required)',
    facilities: [
      { name: 'Equipment Included', icon: 'accessible' },
      { name: 'Beach Launch', icon: 'accessible' },
      { name: 'Calm Waters', icon: 'accessible' }
    ]
  },
  {
    id: 'cooking-class',
    name: 'Catalan Cooking Class',
    village: 'Figueres',
    villageId: 'figueres',
    description: 'Learn to cook traditional Catalan dishes with local chefs.',
    image: 'https://images.pexels.com/photos/1574/pexels-photo-1574.jpeg',
    category: 'Cultural',
    duration: '4 hours',
    difficulty: 'Easy',
    price: '€75-€95',
    coordinates: { lat: 42.2667, lng: 2.9667 },
    phone: '+34 972 50 31 55',
    bestTime: 'Morning',
    equipment: ['All ingredients provided', 'Apron', 'Recipe book'],
    detailedDescription: 'Immerse yourself in Catalan culinary culture by learning to prepare traditional dishes using local ingredients. This hands-on cooking class covers classic recipes like paella, escalivada, and crema catalana, followed by enjoying your creations.',
    safetyInfo: [
      'Inform chef of any food allergies',
      'Follow kitchen safety procedures',
      'Wash hands frequently',
      'Be careful with hot surfaces and knives',
      'Wear provided apron'
    ],
    whatToExpect: 'Market visit to select fresh ingredients, hands-on cooking instruction, learning traditional techniques, preparing 3-4 classic dishes, and enjoying a meal with wine pairing.',
    instructor: {
      name: 'Professional Chef',
      bio: 'Local chef specializing in traditional Catalan cuisine',
      experience: '20+ years',
      certifications: 'Culinary Arts Degree'
    },
    groupSize: '6-12 people',
    ageLimit: '16+ years',
    facilities: [
      { name: 'Professional Kitchen', icon: 'accessible' },
      { name: 'All Ingredients', icon: 'card' },
      { name: 'Recipe Book', icon: 'accessible' }
    ]
  },
  {
    id: 'paragliding',
    name: 'Paragliding over Costa Brava',
    village: 'L\'Escala',
    villageId: 'lescala',
    description: 'Soar above the coastline with experienced instructors.',
    image: 'https://images.pexels.com/photos/1575/pexels-photo-1575.jpeg',
    category: 'Adventure',
    duration: '3 hours',
    difficulty: 'Moderate',
    price: '€120-€150',
    coordinates: { lat: 42.1167, lng: 3.1333 },
    phone: '+34 972 77 31 42',
    bestTime: 'Morning',
    equipment: ['All equipment provided', 'Comfortable clothes', 'Closed shoes'],
    detailedDescription: 'Experience the ultimate aerial adventure with a tandem paragliding flight over the stunning Costa Brava coastline. Soar like a bird above beaches, cliffs, and medieval villages while enjoying breathtaking panoramic views of the Mediterranean.',
    safetyInfo: [
      'Tandem flight with certified instructor',
      'Weather dependent activity',
      'Weight limits apply (max 100kg)',
      'No heart or back problems',
      'Follow all instructor commands'
    ],
    whatToExpect: 'Safety briefing and equipment check, transport to launch site, tandem flight lasting 15-25 minutes, spectacular aerial views of the coastline, and an unforgettable adrenaline experience.',
    instructor: {
      name: 'Certified Paragliding Pilot',
      bio: 'Professional paragliding instructor with thousands of flights',
      experience: '15+ years',
      certifications: 'Paragliding Instructor License'
    },
    groupSize: '1-4 people (individual flights)',
    ageLimit: '16+ years',
    facilities: [
      { name: 'Professional Equipment', icon: 'accessible' },
      { name: 'Transport to Launch', icon: 'accessible' },
      { name: 'Photo/Video Service', icon: 'card' }
    ]
  },
  {
    id: 'boat-tour',
    name: 'Boat Tour to Hidden Coves',
    village: 'Llafranc',
    villageId: 'llafranc',
    description: 'Discover secluded beaches and coves by boat.',
    image: 'https://images.pexels.com/photos/1576/pexels-photo-1576.jpeg',
    category: 'Sightseeing',
    duration: '4 hours',
    difficulty: 'Easy',
    price: '€55-€75',
    coordinates: { lat: 41.9000, lng: 3.1833 },
    phone: '+34 972 30 21 03',
    bestTime: 'Morning or afternoon',
    equipment: ['Life jacket provided', 'Sun protection', 'Swimwear'],
    detailedDescription: 'Explore the hidden gems of the Costa Brava coastline by boat, visiting secluded coves and beaches only accessible from the sea. This relaxing tour includes swimming stops, snorkeling opportunities, and stunning coastal scenery.',
    safetyInfo: [
      'Life jackets available and recommended',
      'Stay seated when boat is moving',
      'Follow captain\'s safety instructions',
      'Inform crew of swimming ability',
      'Bring sun protection'
    ],
    whatToExpect: 'Scenic coastal cruise, visits to hidden coves, swimming and snorkeling stops, spectacular cliff formations, and possibly dolphin sightings. Includes refreshments on board.',
    instructor: {
      name: 'Licensed Boat Captain',
      bio: 'Experienced local captain with extensive coastal knowledge',
      experience: '20+ years',
      certifications: 'Commercial Boat License'
    },
    groupSize: '8-20 people',
    ageLimit: 'All ages (children supervised)',
    facilities: [
      { name: 'Comfortable Boat', icon: 'accessible' },
      { name: 'Snorkel Equipment', icon: 'card' },
      { name: 'Refreshments', icon: 'card' }
    ]
  },
  {
    id: 'hiking-cap-creus',
    name: 'Hiking in Cap de Creus',
    village: 'Port de la Selva',
    villageId: 'port-de-la-selva',
    description: 'Explore the rugged landscape of Spain\'s easternmost point.',
    image: 'https://images.pexels.com/photos/1577/pexels-photo-1577.jpeg',
    category: 'Hiking',
    duration: '5 hours',
    difficulty: 'Moderate',
    price: '€25-€35',
    coordinates: { lat: 42.3333, lng: 3.2833 },
    phone: '+34 972 38 71 22',
    bestTime: 'Morning',
    equipment: ['Hiking boots', 'Water', 'Sun protection', 'Camera'],
    detailedDescription: 'Discover the wild beauty of Cap de Creus Natural Park, Spain\'s easternmost point. This guided hike explores dramatic landscapes sculpted by wind and sea, unique rock formations, and diverse Mediterranean vegetation.',
    safetyInfo: [
      'Wear appropriate hiking footwear',
      'Bring plenty of water (2L minimum)',
      'Use sun protection - limited shade',
      'Stay on marked trails',
      'Inform guide of any medical conditions'
    ],
    whatToExpect: 'Rugged coastal landscapes, unique geological formations, diverse flora and fauna, spectacular viewpoints, and the lighthouse at Spain\'s easternmost point.',
    instructor: {
      name: 'Nature Guide',
      bio: 'Local naturalist guide specializing in Cap de Creus ecology',
      experience: '10+ years',
      certifications: 'Nature Guide Certification'
    },
    groupSize: '6-15 people',
    ageLimit: '12+ years (good fitness required)',
    facilities: [
      { name: 'Natural Park', icon: 'accessible' },
      { name: 'Marked Trails', icon: 'accessible' },
      { name: 'Scenic Viewpoints', icon: 'accessible' }
    ]
  },
  {
    id: 'jet-ski-tour',
    name: 'Jet Ski Coastal Tour',
    village: 'Empuriabrava',
    villageId: 'empuriabrava',
    description: 'High-speed adventure along the Costa Brava coastline.',
    image: 'https://images.pexels.com/photos/1578/pexels-photo-1578.jpeg',
    category: 'Water Sports',
    duration: '1.5 hours',
    difficulty: 'Moderate',
    price: '€80-€120',
    coordinates: { lat: 42.2500, lng: 3.1167 },
    phone: '+34 972 45 08 33',
    bestTime: 'Afternoon',
    equipment: ['Jet ski provided', 'Life jacket', 'Wetsuit if needed'],
    detailedDescription: 'Experience the thrill of jet skiing along the beautiful Costa Brava coastline. This guided tour combines adrenaline with sightseeing as you speed past beaches, cliffs, and coastal landmarks while enjoying the freedom of the open water.',
    safetyInfo: [
      'Valid driving license required',
      'Life jacket mandatory',
      'Follow guide at all times',
      'Minimum age restrictions apply',
      'Weather and sea conditions dependent'
    ],
    whatToExpect: 'High-speed coastal adventure, spectacular sea views, adrenaline rush, guided tour with stops for photos, and the excitement of controlling your own jet ski.',
    instructor: {
      name: 'Jet Ski Guide',
      bio: 'Certified jet ski instructor and coastal guide',
      experience: '8+ years',
      certifications: 'Jet Ski Instructor License'
    },
    groupSize: '4-8 people',
    ageLimit: '16+ years (with license)',
    facilities: [
      { name: 'Modern Jet Skis', icon: 'accessible' },
      { name: 'Safety Equipment', icon: 'accessible' },
      { name: 'Marina Launch', icon: 'accessible' }
    ]
  },
  {
    id: 'archaeological-tour',
    name: 'Archaeological Tour of Empúries',
    village: 'L\'Escala',
    villageId: 'lescala',
    description: 'Explore ancient Greek and Roman ruins by the sea.',
    image: 'https://images.pexels.com/photos/1579/pexels-photo-1579.jpeg',
    category: 'Cultural',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '€12-€18',
    coordinates: { lat: 42.1333, lng: 3.1167 },
    phone: '+34 972 77 02 08',
    bestTime: 'Morning or afternoon',
    equipment: ['Comfortable shoes', 'Sun protection', 'Camera'],
    detailedDescription: 'Step back in time at the archaeological site of Empúries, where Greek and Roman civilizations left their mark on the Iberian Peninsula. This guided tour explores well-preserved ruins including temples, houses, and mosaics.',
    safetyInfo: [
      'Wear comfortable walking shoes',
      'Bring sun protection',
      'Stay on designated paths',
      'Don\'t touch archaeological remains',
      'Follow guide instructions'
    ],
    whatToExpect: 'Ancient Greek and Roman ruins, well-preserved mosaics, historical insights, beautiful coastal setting, and understanding of Mediterranean ancient civilizations.',
    instructor: {
      name: 'Archaeologist Guide',
      bio: 'Professional archaeologist specializing in Mediterranean ancient history',
      experience: '15+ years',
      certifications: 'Archaeology Degree, Museum Guide'
    },
    groupSize: '10-25 people',
    ageLimit: 'All ages',
    facilities: [
      { name: 'Archaeological Site', icon: 'accessible' },
      { name: 'Museum', icon: 'accessible' },
      { name: 'Visitor Center', icon: 'card' }
    ]
  },
  {
    id: 'mountain-biking',
    name: 'Mountain Biking in Gavarres',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Challenging trails through the Gavarres mountains.',
    image: 'https://images.pexels.com/photos/1580/pexels-photo-1580.jpeg',
    category: 'Cycling',
    duration: '4 hours',
    difficulty: 'Hard',
    price: '€40-€60',
    coordinates: { lat: 41.7833, lng: 3.0333 },
    phone: '+34 972 32 71 93',
    bestTime: 'Morning',
    equipment: ['Mountain bike rental', 'Helmet', 'Protective gear'],
    detailedDescription: 'Challenge yourself on the mountain bike trails of the Gavarres massif. These technical trails wind through cork oak forests, offer stunning views, and provide an adrenaline-filled adventure for experienced mountain bikers.',
    safetyInfo: [
      'Advanced mountain biking experience required',
      'Helmet and protective gear mandatory',
      'Stay on marked trails only',
      'Carry repair kit and first aid',
      'Inform guide of fitness level'
    ],
    whatToExpect: 'Technical single-track trails, challenging climbs and descents, cork oak forest scenery, panoramic views, and an intense mountain biking workout.',
    instructor: {
      name: 'Mountain Bike Guide',
      bio: 'Professional mountain bike guide and trail expert',
      experience: '12+ years',
      certifications: 'Mountain Bike Guide License'
    },
    groupSize: '4-8 people',
    ageLimit: '16+ years (advanced level)',
    facilities: [
      { name: 'Quality Bikes', icon: 'card' },
      { name: 'Safety Gear', icon: 'accessible' },
      { name: 'Trail Maps', icon: 'accessible' }
    ]
  },
  {
    id: 'flamenco-class',
    name: 'Flamenco Dance Class',
    village: 'Girona',
    villageId: 'girona',
    description: 'Learn the passionate art of flamenco dancing.',
    image: 'https://images.pexels.com/photos/1581/pexels-photo-1581.jpeg',
    category: 'Cultural',
    duration: '2 hours',
    difficulty: 'Easy',
    price: '€35-€45',
    coordinates: { lat: 41.9794, lng: 2.8214 },
    phone: '+34 972 20 45 67',
    bestTime: 'Evening',
    equipment: ['Comfortable clothes', 'Flat shoes', 'Water bottle'],
    detailedDescription: 'Immerse yourself in the passionate world of flamenco dance. This beginner-friendly class teaches basic flamenco steps, arm movements, and the emotional expression that makes this Spanish art form so captivating.',
    safetyInfo: [
      'Wear comfortable, flexible clothing',
      'Flat shoes or dance shoes recommended',
      'Stay hydrated during class',
      'Inform instructor of any injuries',
      'Start slowly and build intensity'
    ],
    whatToExpect: 'Basic flamenco techniques, understanding of rhythm and expression, cultural background of flamenco, and the joy of this passionate dance form.',
    instructor: {
      name: 'Flamenco Instructor',
      bio: 'Professional flamenco dancer and instructor',
      experience: '15+ years',
      certifications: 'Flamenco Dance Certification'
    },
    groupSize: '8-15 people',
    ageLimit: '12+ years',
    facilities: [
      { name: 'Dance Studio', icon: 'accessible' },
      { name: 'Sound System', icon: 'accessible' },
      { name: 'Mirrors', icon: 'accessible' }
    ]
  },
  {
    id: 'monastery-tour',
    name: 'Monastery Historical Tour',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Explore the ancient Benedictine monastery and its history.',
    image: 'https://images.pexels.com/photos/1582/pexels-photo-1582.jpeg',
    category: 'Cultural',
    duration: '1.5 hours',
    difficulty: 'Easy',
    price: '€8-€12',
    coordinates: { lat: 41.7820, lng: 3.0320 },
    phone: '+34 972 82 15 75',
    bestTime: 'Morning or afternoon',
    equipment: ['Comfortable shoes', 'Camera'],
    detailedDescription: 'Discover the fascinating history of the Benedictine monastery of Sant Feliu de Guíxols, founded in the 10th century. This guided tour explores the pre-Romanesque and Romanesque architecture, the museum, and the role of the monastery in the development of the town.',
    safetyInfo: [
      'Wear comfortable walking shoes',
      'Be respectful in religious areas',
      'Follow guide instructions',
      'No flash photography in certain areas',
      'Stay with the group'
    ],
    whatToExpect: 'Ancient monastery architecture, historical artifacts, beautiful cloisters, understanding of monastic life, and insights into medieval Catalonia.',
    instructor: {
      name: 'Art Historian Guide',
      bio: 'Specialist in medieval Catalan architecture and monastic history',
      experience: '12+ years',
      certifications: 'Art History Degree, Official Guide License'
    },
    groupSize: '8-20 people',
    ageLimit: 'All ages',
    facilities: [
      { name: 'Historic Monastery', icon: 'accessible' },
      { name: 'Museum', icon: 'accessible' },
      { name: 'Parking Available', icon: 'parking' }
    ]
  },
  {
    id: 'coastal-photography',
    name: 'Coastal Photography Workshop',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Learn photography techniques while capturing the beautiful Costa Brava coastline.',
    image: 'https://images.pexels.com/photos/1583/pexels-photo-1583.jpeg',
    category: 'Cultural',
    duration: '3 hours',
    difficulty: 'Easy',
    price: '€45-€65',
    coordinates: { lat: 41.7850, lng: 3.0350 },
    phone: '+34 972 32 45 89',
    bestTime: 'Golden hour (sunrise/sunset)',
    equipment: ['Camera (DSLR or smartphone)', 'Comfortable shoes'],
    detailedDescription: 'Learn the art of coastal photography while exploring the stunning landscapes around Sant Feliu de Guíxols. This workshop covers composition, lighting, and technical skills while capturing the beauty of the Mediterranean coastline.',
    safetyInfo: [
      'Wear appropriate footwear for coastal terrain',
      'Protect camera equipment from sand and water',
      'Stay aware of tides and waves',
      'Follow guide to safe shooting locations',
      'Bring extra batteries and memory cards'
    ],
    whatToExpect: 'Photography instruction, stunning coastal locations, hands-on practice, composition techniques, and a portfolio of beautiful coastal images.',
    instructor: {
      name: 'Professional Photographer',
      bio: 'Award-winning landscape photographer specializing in Mediterranean coastal scenes',
      experience: '18+ years',
      certifications: 'Professional Photography Certification'
    },
    groupSize: '6-10 people',
    ageLimit: '14+ years',
    facilities: [
      { name: 'Scenic Locations', icon: 'accessible' },
      { name: 'Equipment Advice', icon: 'accessible' },
      { name: 'Photo Editing Tips', icon: 'card' }
    ]
  },
  {
    id: 'gavarres-hiking',
    name: 'Gavarres Natural Park Hiking',
    village: 'Sant Feliu de Guíxols',
    villageId: 'sant-feliu-guixols',
    description: 'Explore the cork oak forests and ancient paths of the Gavarres massif.',
    image: 'https://images.pexels.com/photos/1584/pexels-photo-1584.jpeg',
    category: 'Hiking',
    duration: '4 hours',
    difficulty: 'Moderate',
    price: '€25-€35',
    coordinates: { lat: 41.7900, lng: 3.0200 },
    phone: '+34 972 32 67 45',
    bestTime: 'Morning',
    equipment: ['Hiking boots', 'Water', 'Sun protection', 'Camera'],
    detailedDescription: 'Discover the natural beauty of the Gavarres massif, a protected natural area known for its cork oak forests, ancient stone huts, and panoramic views. This guided hike follows traditional paths used by cork harvesters and charcoal makers.',
    safetyInfo: [
      'Wear appropriate hiking footwear',
      'Bring plenty of water (1.5L minimum)',
      'Use sun protection',
      'Stay on marked trails',
      'Inform guide of fitness level and medical conditions'
    ],
    whatToExpected: 'Cork oak forests, traditional stone huts (barraques), panoramic views of the coast, diverse Mediterranean flora and fauna, and insights into traditional forest uses.',
    instructor: {
      name: 'Nature Guide',
      bio: 'Local naturalist specializing in Mediterranean forest ecosystems',
      experience: '14+ years',
      certifications: 'Nature Guide Certification, Forest Ecology Degree'
    },
    groupSize: '8-15 people',
    ageLimit: '12+ years (good fitness required)',
    facilities: [
      { name: 'Natural Park', icon: 'accessible' },
      { name: 'Marked Trails', icon: 'accessible' },
      { name: 'Scenic Viewpoints', icon: 'accessible' }
    ]
  }
];