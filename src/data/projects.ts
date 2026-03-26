export interface ProjectLink {
  github?: string;
  live?: string;
  demo?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  technologies: string[];
  features: string[];
  links: ProjectLink;
  images: string[];
  heroImage?: string;
  cardImage?: string;
  category: 'vr' | 'web' | 'mobile';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecoquesrt-vr',
    title: 'EcoQuest VR - Environmental Education Game',
    shortDesc: 'An immersive VR educational experience teaching environmental sustainability through interactive simulations on Meta Quest.',
    longDesc: `EcoQuest VR is an innovative educational game developed for Meta Quest 2/3 that brings environmental learning to life through immersive virtual reality experiences. The game combines engaging gameplay with educational content to teach players about sustainability, environmental conservation, and ecological responsibility.

The game features multiple interactive environments where players engage with environmental challenges. In the tree planting simulation, players experience realistic growth mechanics where they plant seeds, water trees, and watch them grow over virtual time periods. The waste recycling mini-game presents a sorting challenge where players must categorize different types of waste into appropriate recycling bins.

The ocean cleaning experience transports players underwater where they navigate through realistic oceanic environments and participate in environmental cleanup challenges. Hand tracking integration enables natural, intuitive interactions - players can grab objects, sort items, and manipulate virtual elements using their actual hands without needing controllers.

The game includes comprehensive educational feedback systems that teach players about environmental impact, provide information about conservation efforts, and track player progress throughout the experience. With stunning visual environments created in Unity, appropriate sound design, and engaging mechanics, EcoQuest VR makes environmental education both fun and impactful.

Built with a focus on optimization for Meta Quest devices, the game maintains smooth performance at 90 FPS while delivering immersive graphics and complex interactions. Perfect for schools, environmental organizations, and individual learners interested in interactive education.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Meta Quest SDK',
      'VR Interaction Toolkit',
      'Hand Tracking API',
      'XR Interaction Toolkit',
      'Photon Networking',
      'Shader Graph'
    ],
    features: [
      'Tree Planting Simulation with Growth Mechanics',
      'Waste Recycling Mini-Game with Sorting Challenges',
      'Ocean Cleaning Experience with Underwater Exploration',
      'Hand Tracking Integration for Natural Interactions',
      'Educational Feedback System',
      'Progress Tracking & Achievement System',
      'Multiple Interactive Environments',
      'Haptic Feedback Integration',
      'Performance Optimized for Meta Quest',
      '90 FPS Smooth Gameplay'
    ],
    links: {
      github: '#',
      demo: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/1a1a2e/00ffff?text=EcoQuest+VR+-+Tree+Planting+Environment',
      'https://via.placeholder.com/1200x600/0f3460/00ff88?text=EcoQuest+VR+-+Waste+Recycling+Mini-Game',
      'https://via.placeholder.com/1200x600/16213e/00ffaa?text=EcoQuest+VR+-+Ocean+Cleaning+Experience',
      'https://via.placeholder.com/1200x600/e94560/00ffff?text=EcoQuest+VR+-+Hand+Tracking+Interaction'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/1a1a2e/00ffff?text=EcoQuest+VR+-+Meta+Quest+2%2F3+Environment',
    cardImage: 'https://via.placeholder.com/1200x600/0f3460/00ff88?text=EcoQuest+VR+-+Educational+VR+Game',
    category: 'vr',
    featured: true
  },
  {
    id: 'dream-and-get',
    title: 'Dream and Get - Open World Multiplayer Game',
    shortDesc: 'A GTA-inspired open-world 3D game featuring story mode, multiplayer gameplay, and diverse activities with PC/Mobile support.',
    longDesc: `Dream and Get is an ambitious open-world multiplayer game that brings GTA-like gameplay to mobile and PC platforms. It combines rich storytelling with engaging multiplayer features, creating an expansive gaming experience where players collaborate and compete in a dynamic living world.

The game features a vast open-world environment filled with interactive NPCs that react to player actions and create a living, breathing city. The single-player campaign offers a story-driven experience with multiple narrative branches, compelling characters, and mission-based progression. Players complete missions with clear objectives and unlock new areas and abilities as they progress.

Multiplayer mode leverages Photon Fusion for real-time networking, allowing up to 32 players to inhabit the same world simultaneously. The third-person shooting mechanics feature extensive weapon variety, each with unique handling and characteristics. Vehicle physics include cars, bikes, and trucks with realistic weight dynamics and traffic interaction.

Mission variety keeps gameplay fresh - from heist-style robberies to delivery challenges, rescue operations, and competitive combat scenarios. Character customization allows players to personalize their avatars with clothing, accessories, and tattoos. The progression system includes skill advancement, ability unlocks, and a comprehensive reward structure.

The game is fully optimized for both high-end PC and mobile platforms using intelligent LOD systems, dynamic resolution scaling, and efficient networking. Built with cross-platform multiplayer support, players on mobile can compete against PC players in the same servers.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Photon Fusion Networking',
      'NavMesh AI',
      'Wheel Collider Physics',
      'FSM State Machines',
      'Shader Optimization',
      'Firebase Analytics',
      'Cloud Save System',
      'Cross-Platform Input'
    ],
    features: [
      'Expansive Open-World Environment',
      'Dynamic NPC System with AI Behaviors',
      'Story-Driven Single Player Campaign',
      'Multiplayer Gameplay (32 Players)',
      'Third-Person Shooting Mechanics',
      'Weapon Variety System',
      'Realistic Vehicle Physics',
      'Mission System with Objectives',
      'Character Customization & Progression',
      'High-Performance Cross-Platform',
      'Photon Fusion Real-Time Networking',
      'Achievement & Leaderboard System'
    ],
    links: {
      github: '#',
      live: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/1a1a2e/ff0080?text=Dream+and+Get+-+Open+World+City',
      'https://via.placeholder.com/1200x600/0f3460/ff0080?text=Dream+and+Get+-+Multiplayer+Gameplay',
      'https://via.placeholder.com/1200x600/16213e/ff0080?text=Dream+and+Get+-+Third-Person+Shooting',
      'https://via.placeholder.com/1200x600/e94560/ff0080?text=Dream+and+Get+-+Vehicle+Driving'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/1a1a2e/ff0080?text=Dream+and+Get+-+Open+World+Multiplayer',
    cardImage: 'https://via.placeholder.com/1200x600/0f3460/ff0080?text=Dream+and+Get+-+GTA-Inspired+Game',
    category: 'mobile',
    featured: true
  },
  {
    id: 'words-slot',
    title: 'Words Slot - Educational Spelling Game',
    shortDesc: 'An interactive spelling game where players learn vocabulary by arranging alphabet tiles to form correct words.',
    longDesc: `Words Slot is an engaging educational mobile game designed to help players build vocabulary and improve spelling skills through interactive gameplay. The game combines learning with entertainment, making language development fun for players of all ages.

The core mechanic involves dragging and dropping alphabet tiles to form correct words based on visual hints and definitions. Players must arrange the letters in the correct sequence to complete words, with the difficulty progressively increasing as they advance through levels. Each correctly formed word earns points and unlocks new vocabulary.

Visual hints accompany word challenges - players might see an image of an object and must spell the word for that object. Alternate challenges show word definitions and players must construct the matching word. The game tracks player progress across different vocabulary categories including animals, food, nature, technology, and daily objects.

The UI features a kid-friendly design with vibrant colors, large touch-friendly buttons, and clear typography. Smooth animations accompany correct word formations and celebration effects reward successful completions. Sound effects enhance the experience with positive feedback for correct answers and encouraging audio for wrong attempts.

The game includes an achievement system that rewards consistent play and vocabulary milestones. Leaderboards track word collection and player rankings, fostering a sense of friendly competition. All mechanics and content are specifically designed with mobile optimization in mind, ensuring fast loading and smooth performance across various device specifications.`,
    technologies: [
      'Unity Engine',
      'C#',
      'UI Toolkit',
      'TextMesh Pro',
      'Mobile Optimization',
      'Firebase Analytics',
      'PlayFab',
      'Addressables'
    ],
    features: [
      'Drag-and-Drop Alphabet Tile Mechanics',
      'Progressive Difficulty Levels',
      'Vocabulary Building System',
      'Visual Hint System',
      'Definition-Based Challenges',
      'Multiple Vocabulary Categories',
      'Kid-Friendly UI Design',
      'Sound Effects & Animations',
      'Achievement System',
      'Score Tracking',
      'Mobile Optimized',
      'Offline Play Support'
    ],
    links: {
      github: '#',
      live: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/667eea/ffffff?text=Words+Slot+-+Game+Home+Screen',
      'https://via.placeholder.com/1200x600/764ba2/ffffff?text=Words+Slot+-+Spelling+Challenge',
      'https://via.placeholder.com/1200x600/f093fb/ffffff?text=Words+Slot+-+Visual+Hint+System',
      'https://via.placeholder.com/1200x600/4facfe/ffffff?text=Words+Slot+-+Achievement+Rewards'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/667eea/ffffff?text=Words+Slot+-+Educational+Spelling+Game',
    cardImage: 'https://via.placeholder.com/1200x600/764ba2/ffffff?text=Words+Slot+-+Interactive+Learning',
    category: 'mobile',
    featured: true
  },
  {
    id: 'tall-man-run',
    title: 'Tall Man Run - Hypercasual Endless Runner',
    shortDesc: 'An addictive endless runner where players collect coins, avoid obstacles, and compete for high scores.',
    longDesc: `Tall Man Run is a fast-paced hypercasual endless runner game that combines simple one-touch controls with addictive gameplay mechanics. The game features a tall character that continuously runs forward through an ever-changing obstacle course, and players must time jumps perfectly to avoid hazards while collecting coins.

The gameplay is straightforward but challenging - one tap makes the character jump, and players must avoid obstacles, gaps, and enemies while collecting coins to increase their score. The game uses procedural obstacle generation to create unique level layouts each run, ensuring fresh gameplay experiences and preventing predictability.

Players collect coins during their runs which can be used to purchase power-ups including shields, invulnerability periods, and coin multipliers. These power-ups add strategic depth to the gameplay. The progressive difficulty system ensures that as players advance, enemies become faster, obstacles appear more frequently, and the environment becomes more challenging.

The game features beautiful particle effects, smooth animations, and satisfying feedback for each interaction. Visual progression is obvious as players collect coins and see their coin count increase in real-time. The leaderboard system encourages players to compete with friends and track their best distances and scores.

Monetization is balanced with rewarded video ads offering double coins for a run and interstitial ads between games. The game is heavily optimized for mobile devices with efficient graphics, minimal loading times, and smooth 60 FPS gameplay. Analytics integration tracks player behavior to continuously optimize the game experience.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Mobile Ads SDK',
      'Firebase Analytics',
      'Google Play Services',
      'Leaderboard API',
      'Smooth Physics',
      'Procedural Generation',
      'Particle Systems'
    ],
    features: [
      'Smooth Endless Running Mechanics',
      'Procedural Obstacle Generation',
      'Coin Collection System',
      'Power-Up Mechanics (Shield, Invulnerability, Multiplier)',
      'Progressive Difficulty Scaling',
      'One-Touch Controls',
      'Leaderboard Integration',
      'Achievement System',
      'Ad Monetization (Rewarded & Interstitial)',
      'Beautiful Particle Effects',
      'Mobile Optimized (60 FPS)',
      'Analytics Tracking'
    ],
    links: {
      github: '#',
      live: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/ffb347/000000?text=Tall+Man+Run+-+Gameplay+Screenshot',
      'https://via.placeholder.com/1200x600/ffa500/000000?text=Tall+Man+Run+-+Obstacle+Course',
      'https://via.placeholder.com/1200x600/ff8c00/000000?text=Tall+Man+Run+-+Coin+Collection',
      'https://via.placeholder.com/1200x600/ff6347/000000?text=Tall+Man+Run+-+Power+Up+Effect'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/ffb347/000000?text=Tall+Man+Run+-+Hypercasual+Endless+Runner',
    cardImage: 'https://via.placeholder.com/1200x600/ffa500/000000?text=Tall+Man+Run+-+Addictive+Gameplay',
    category: 'mobile',
    featured: true
  },
  {
    id: 'vehicle-simulation',
    title: '3D Vehicle Simulation Games',
    shortDesc: 'Collection of realistic car, truck, and bus parking/driving simulation games for PC and Mobile.',
    longDesc: `The Vehicle Simulation Suite is a collection of professionally-developed driving and parking simulation games that deliver realistic physics and engaging gameplay across multiple platforms. Each game in the suite focuses on different vehicle types and driving scenarios, providing varied simulation experiences.

The car simulation includes precision parking challenges across multiple environments from urban streets to multi-level parking structures. Players must navigate through tight spaces, avoid obstacles, and meet specific parking requirements with realistic vehicle weight and momentum dynamics. The truck simulation emphasizes cargo hauling with different load weights affecting vehicle handling and braking distance.

The bus simulation provides a transport management experience where players drive passengers through city routes, navigate tight turns, and manage schedule adherence. Realistic traffic simulation creates dynamic driving scenarios with AI-controlled vehicles following traffic rules and creating unpredictable road situations.

All games feature multiple camera angles including first-person for immersive driving, third-person for spatial awareness, and top-down for precise parking. Wheel Collider physics ensure authentic vehicle behavior with proper weight distribution, suspension effects, and realistic acceleration/deceleration curves.

The environment design includes detailed city layouts with buildings, pedestrians, traffic signals, and environmental elements. Mission-based gameplay provides objectives like reaching destinations in time, parking without damage, or completing delivery routes. Mobile versions feature intuitive touch controls adapted for various phone sizes and orientations.

Graphics are optimized for performance across devices with quality settings that scale from low-end phones to high-end PCs. The games include comprehensive tutorials for new players and progressive difficulty levels accommodating both casual and hardcore simulation enthusiasts.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Wheel Collider Physics',
      'NavMesh AI (Traffic)',
      'Mobile Input System',
      'UI Toolkit',
      'Shader Optimization',
      'LOD Systems',
      'Firebase Analytics',
      'Cloud Save'
    ],
    features: [
      'Realistic Vehicle Physics & Handling',
      'Multiple Camera Angles (First-Person, Third-Person, Top-Down)',
      'Parking Challenges & Missions',
      'Cargo Management System',
      'Dynamic Traffic AI',
      'Multiple Vehicle Types (Car, Truck, Bus)',
      'City Driving Environments',
      'Time Trials & Performance Scoring',
      'Mission-Based Gameplay',
      'Mobile-Optimized Controls',
      'Cross-Platform Support',
      'Progressive Difficulty Levels'
    ],
    links: {
      github: '#',
      live: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/4169e1/ffffff?text=Vehicle+Simulation+-+Car+Parking',
      'https://via.placeholder.com/1200x600/1e90ff/ffffff?text=Vehicle+Simulation+-+Truck+Driving',
      'https://via.placeholder.com/1200x600/00bfff/ffffff?text=Vehicle+Simulation+-+Bus+Navigation',
      'https://via.placeholder.com/1200x600/0099ff/ffffff?text=Vehicle+Simulation+-+City+Environment'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/4169e1/ffffff?text=Vehicle+Simulation+-+3D+Driving+Games',
    cardImage: 'https://via.placeholder.com/1200x600/1e90ff/ffffff?text=Vehicle+Simulation+-+Realistic+Physics',
    category: 'mobile',
    featured: true
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System - Backend API',
    shortDesc: 'Comprehensive backend system for hospital operations management with complete CRUD operations and REST API.',
    longDesc: `The Hospital Management System is a robust backend API built with Java Spring Boot that handles comprehensive hospital operations including patient management, doctor scheduling, appointment booking, prescription management, and billing. The system is designed for enterprise-level healthcare institutions requiring reliable, scalable solutions.

The API provides complete patient management functionality including patient registration, medical history tracking, and health records. The doctor scheduling system allows administrators to manage doctor availability, specialties, and shift schedules. The appointment booking system enables patients to book appointments with available doctors, with automated timezone handling and reminder systems.

Prescription management features allow doctors to create, update, and manage patient prescriptions. The billing system calculates charges based on services rendered and maintains comprehensive billing records. An admin dashboard provides overview statistics on patients, appointments, and system performance.

The system implements robust security with JWT authentication and role-based authorization ensuring only authorized personnel access sensitive data. All API endpoints follow RESTful principles with clear, consistent request/response formats. Input validation on all endpoints prevents malicious data entry and system abuse.

The database uses MySQL with optimized queries, proper indexing on frequently-searched fields, and database transaction management ensuring data integrity. The system includes comprehensive error handling with meaningful error messages that help clients understand and resolve issues.

API documentation is comprehensive with Postman collections available for developers. The system supports unlimited scalability with stateless service design allowing horizontal scaling. All communication is encrypted using HTTPS with secure token management for authentication.`,
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'REST API',
      'JWT Authentication',
      'Postman',
      'Springdoc OpenAPI',
      'Lombok',
      'Maven'
    ],
    features: [
      'Patient Registration & Management',
      'Medical Record Management',
      'Doctor Scheduling System',
      'Appointment Booking System',
      'Prescription Management',
      'Billing & Payment Tracking',
      'JWT Authentication & Authorization',
      'Role-Based Access Control',
      'Admin Dashboard Endpoints',
      'Comprehensive Error Handling',
      'Input Validation',
      'Scalable Architecture',
      'Complete API Documentation'
    ],
    links: {
      github: '#',
      demo: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/2d5016/ffffff?text=Hospital+Management+-+API+Architecture',
      'https://via.placeholder.com/1200x600/3a6b35/ffffff?text=Hospital+Management+-+Database+Schema',
      'https://via.placeholder.com/1200x600/4a7c4e/ffffff?text=Hospital+Management+-+Authentication+Flow',
      'https://via.placeholder.com/1200x600/5a8c5e/ffffff?text=Hospital+Management+-+Postman+Collection'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/2d5016/ffffff?text=Hospital+Management+-+System+Backend',
    cardImage: 'https://via.placeholder.com/1200x600/3a6b35/ffffff?text=Hospital+Management+-+REST+API',
    category: 'web',
    featured: true
  },
  {
    id: 'cinema-booking-system',
    title: 'Online Cinema Ticket Booking System',
    shortDesc: 'Full-stack web application for cinema ticket booking with user and admin interfaces built with C#.NET.',
    longDesc: `The Cinema Ticket Booking System is a comprehensive full-stack web application built with C#.NET and ASP.NET that provides a complete platform for cinema operations and online ticket booking. The system serves both users looking to book movies and administrators managing cinema operations.

The user interface provides an intuitive experience for browsing available movies and their showtimes across multiple screens and theaters. Interactive seat selection allows users to visualize cinema seating layouts and select their preferred seats in real-time. The system prevents simultaneous booking of the same seat through efficient locking mechanisms.

Users can proceed through a streamlined booking workflow including seat selection, concession items selection (snacks, drinks), and payment processing. The system maintains detailed booking history allowing users to view past bookings, print or download tickets, and manage cancellations with automatic refund processing.

The admin panel provides comprehensive cinema management capabilities including movie management (adding movies, setting showtimes, managing prices), screen configuration, and show scheduling. Administrators can view real-time booking statistics, manage seat availability, and handle customer complaints. Revenue reports provide detailed analysis of ticket sales and concession revenue.

The backend implements robust security with user authentication and role-based authorization separating user and admin functions. All payment processing is simulation-based for development but structured to integrate with real payment gateways. Email confirmation system automatically sends booking confirmations to registered users.

The database uses SQL Server with comprehensive schema supporting movies, shows, seats, bookings, users, and transactions. The system includes payment simulation, email notifications, and comprehensive logging for audit purposes.`,
    technologies: [
      'C#.NET',
      'ASP.NET MVC',
      'SQL Server',
      'Entity Framework',
      'Bootstrap',
      'JavaScript',
      'HTML5',
      'CSS3',
      'LINQ',
      'jQuery'
    ],
    features: [
      'Interactive Seat Selection UI',
      'Real-Time Seat Availability',
      'Ticket Booking & Cancellation',
      'Automatic Refund System',
      'User Authentication & Profiles',
      'Admin Show Scheduling',
      'Movie Management System',
      'Screen & Seat Configuration',
      'Payment Integration (Simulated)',
      'Email Confirmation System',
      'Booking History Tracking',
      'Revenue & Sales Reports',
      'Concession Management'
    ],
    links: {
      github: '#',
      demo: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/8b0000/ffffff?text=Cinema+Booking+-+Movie+Listing',
      'https://via.placeholder.com/1200x600/a00000/ffffff?text=Cinema+Booking+-+Seat+Selection',
      'https://via.placeholder.com/1200x600/c00000/ffffff?text=Cinema+Booking+-+Payment+Checkout',
      'https://via.placeholder.com/1200x600/d00000/ffffff?text=Cinema+Booking+-+Admin+Dashboard'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/8b0000/ffffff?text=Cinema+Ticket+Booking+-+Full+Stack+Web+App',
    cardImage: 'https://via.placeholder.com/1200x600/a00000/ffffff?text=Cinema+Booking+-+ASP.NET+Application',
    category: 'web',
    featured: true
  },
  {
    id: 'management-systems',
    title: 'Management Systems Collection',
    shortDesc: 'Multiple professional business management solutions including inventory, HR, school, and restaurant management.',
    longDesc: `The Management Systems Collection comprises multiple professional desktop applications built with Java and C#.NET, each specialized for specific business domains. These systems demonstrate expertise in database design, user interface development, and enterprise-level application architecture.

The Inventory Management System handles complete stock tracking including product catalogs, stock quantities, reorder points, and supplier management. Features include barcode integration, stock movement history, and automated low-stock alerts. Purchase order generation and supplier communication workflows streamline procurement.

The Employee Management System provides comprehensive HR functionality including employee records, attendance tracking, payroll management, and leave tracking. The system calculates salaries based on attendance, deductions, and allowances. Performance review workflows and promotion history tracking support career development.

The School Management System manages academic institutions with student records, teacher information, class scheduling, grade management, and transcript generation. Attendance tracking, parent communication portals, and timetable management support educational operations. Integration with educational standards ensures compliance.

The Library Management System handles complete library operations including book catalog management, member registration, lending and return tracking, fine calculation, and overdue notifications. Reservation systems allow members to reserve books, and reporting provides insights into library usage patterns.

The Restaurant POS System provides point-of-sale functionality including menu management, order placement, bill generation, and payment processing. Kitchen display systems send orders directly to preparation areas. Inventory integration tracks ingredient usage and generates purchase orders automatically.

All systems share common features including comprehensive CRUD operations, user authentication, role-based access control, report generation in PDF and Excel formats, and professional desktop user interfaces. Data validation ensures data integrity throughout the systems.`,
    technologies: [
      'Java',
      'C#.NET',
      'MySQL',
      'SQLite',
      'Windows Forms',
      'JavaFX',
      'iTextPDF',
      'Apache POI',
      'JDBC',
      'Entity Framework'
    ],
    features: [
      'Complete CRUD Operations',
      'User Authentication & Authorization',
      'Role-Based Access Control',
      'Report Generation (PDF, Excel)',
      'Data Export Functionality',
      'Professional Desktop UI',
      'Input Validation & Error Handling',
      'Search & Filter Capabilities',
      'Sorting Functionality',
      'Database Integration',
      'Transaction Management',
      'Audit Logging',
      'Backup & Restore'
    ],
    links: {
      github: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/1f4e78/ffffff?text=Management+Systems+-+Inventory+Module',
      'https://via.placeholder.com/1200x600/2d5a96/ffffff?text=Management+Systems+-+HR+Module',
      'https://via.placeholder.com/1200x600/3d6ab4/ffffff?text=Management+Systems+-+School+Module',
      'https://via.placeholder.com/1200x600/4d7ad2/ffffff?text=Management+Systems+-+Library+Module'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/1f4e78/ffffff?text=Management+Systems+-+Desktop+Applications',
    cardImage: 'https://via.placeholder.com/1200x600/2d5a96/ffffff?text=Management+Systems+-+Enterprise+Solutions',
    category: 'web',
    featured: false
  },
  {
    id: 'vr-shooting-game',
    title: 'VR Tactical Shooter - Multiplayer Combat Game',
    shortDesc: 'Immersive multiplayer VR first-person shooter with realistic weapon mechanics and tactical team gameplay on Meta Quest.',
    longDesc: `VR Tactical Shooter is an intense multiplayer virtual reality first-person shooter developed for Meta Quest 2/3 that delivers premium tactical combat experiences. The game combines realistic weapon mechanics with team-based gameplay, creating a competitive arena shooter experience in virtual reality.

The game features multiple game modes including Team Deathmatch where two teams compete for kills, Bomb Defuse mode similar to counter-strike where attackers plant objectives and defenders prevent them, and Capture The Flag where teams battle for control of strategic positions. Each mode requires different tactical approaches and teamwork.

Weapon mechanics are meticulously crafted with realistic physics including weapon recoil, bullet spread, and damage falloff based on distance. Players can customize loadouts with different weapons from pistols to sniper rifles, shotguns to assault rifles. Hand tracking integration allows natural aiming and weapon handling using player's actual hands for intuitive controls.

The game supports 4 vs 4 team gameplay with custom color schemes and team identifiers. Voice communication and ping systems enable real-time team coordination. Multiple arena maps offer varied gameplay opportunities including urban environments, industrial facilities, and outdoor combat zones with varied sightlines and cover positions.

Progression systems reward players with cosmetic unlocks, weapon skins, and character customizations based on ranked play and wins. Matchmaking algorithms ensure balanced competitive games. The game maintains 90 FPS performance on Meta Quest devices with optimized graphics and efficient networking using Photon Fusion.

Advanced VR mechanics include full body tracking support, haptic feedback for weapon firing and impacts, and realistic recoil simulation. The experience is designed for both casual players seeking fun multiplayer action and competitive players training for esports-level play.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Meta Quest SDK',
      'Photon Fusion Networking',
      'VR Interaction Toolkit',
      'Hand Tracking API',
      'Haptic Feedback SDK',
      'Audio Spatializer',
      'Shader Graph',
      'Performance Optimization'
    ],
    features: [
      'Team Deathmatch Mode',
      'Bomb Defuse Tactical Mode',
      'Capture The Flag Mode',
      'Realistic Weapon Mechanics',
      'Weapon Customization & Loadouts',
      'Hand Tracking Aiming',
      'Voice Communication System',
      'Tactical Ping System',
      'Multiple Arena Maps',
      'Ranked Matchmaking',
      'Cosmetic Progression System',
      'Full Body Tracking Support',
      'Haptic Feedback Integration',
      ' 4v4 Team-Based Gameplay'
    ],
    links: {
      github: '#',
      demo: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/1a0000/ffff00?text=VR+Shooting+-+Team+Deathmatch',
      'https://via.placeholder.com/1200x600/2d0000/ffff00?text=VR+Shooting+-+Weapon+Arsenal',
      'https://via.placeholder.com/1200x600/4d0000/ffff00?text=VR+Shooting+-+Tactical+Gameplay',
      'https://via.placeholder.com/1200x600/6d0000/ffff00?text=VR+Shooting+-+Arena+Map'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/1a0000/ffff00?text=VR+Tactical+Shooter+-+Multiplayer+Combat',
    cardImage: 'https://via.placeholder.com/1200x600/2d0000/ffff00?text=VR+Shooting+-+First-Person+Shooter',
    category: 'vr',
    featured: true
  },
  {
    id: 'vr-ebbinghaus-illusion',
    title: 'VR Ebbinghaus Illusion - Interactive Optical Illusion Demonstration',
    shortDesc: 'Interactive VR demonstration of the Ebbinghaus optical illusion with scalable sphere groups to explore size perception.',
    longDesc: `VR Ebbinghaus Illusion is an interactive virtual reality application that brings the famous Ebbinghaus optical illusion to life on Meta Quest. This immersive experience demonstrates how our perception of size is influenced by surrounding context, allowing users to interactively explore one of psychology's most fascinating perceptual phenomena.

The Ebbinghaus illusion, named after German psychologist Hermann Ebbinghaus (1850-1909), shows that two identical circles appear different in size when one is surrounded by large circles and the other by small circles. Despite being physically identical, the circle surrounded by large circles appears smaller, while the circle surrounded by small circles appears larger.

In this VR application, users experience two identical central spheres in immersive 3D space. One central sphere is surrounded by a large group of spheres, while the other is surrounded by a small group of spheres. Users can scale either the outer group of circles or the inner group of circles in real-time using intuitive hand controls, directly observing how the size relationships affect their perception of the central spheres.

The interactive nature of the application allows users to:
- Observe the illusion effect with perfect visual clarity in VR
- Dynamically adjust the size of surrounding sphere groups to understand the threshold where perception shifts
- Compare the two central spheres side-by-side to verify they are actually identical
- Experiment with different spacing between surrounding circles and central circles
- Understand how distance affects size perception (closer surrounding circles make the center appear larger, farther ones make it appear smaller)

The experience includes detailed educational overlays explaining the psychological mechanisms behind the illusion, including information about context-sensitivity, the two-streams hypothesis in visual perception, and why this illusion remains consistent across different age groups and demographics.

This demonstration is particularly valuable for students of psychology, neuroscience, and cognitive science, as well as anyone interested in understanding how our brains perceive visual information. The VR environment provides a level of immersion and interactivity that traditional 2D demonstrations cannot match.`,
    technologies: [
      'Unity Engine',
      'C#',
      'Meta Quest SDK',
      'Hand Tracking API',
      'VR Interaction Toolkit',
      'UI Toolkit',
      'Physics Engine',
      'Performance Optimization',
      'Spatial Audio SDK',
      'Custom Geometry Generation'
    ],
    features: [
      'Interactive Sphere Scaling (Outer & Inner Groups)',
      'Real-Time Size Perception Demonstration',
      'Hand Tracking Controls',
      'Identical Central Sphere Verification',
      'Dynamic Distance Adjustment',
      'Educational Overlays & Explanations',
      'Psychological Context Information',
      'Visual Comparison Tools',
      'Performance Optimized for Meta Quest',
      'Smooth 90 FPS Interaction',
      'Intuitive VR Interface',
      '360-Degree Observation Environment'
    ],
    links: {
      github: '#',
      demo: '#'
    },
    images: [
      'https://via.placeholder.com/1200x600/1a1a3e/00ff88?text=Ebbinghaus+-+Central+Spheres',
      'https://via.placeholder.com/1200x600/2d2d5e/00ff88?text=Ebbinghaus+-+Scale+Outer+Group',
      'https://via.placeholder.com/1200x600/3d3d7e/00ff88?text=Ebbinghaus+-+Scale+Inner+Group',
      'https://via.placeholder.com/1200x600/4d4d9e/00ff88?text=Ebbinghaus+-+Educational+Overlay'
    ],
    heroImage: 'https://via.placeholder.com/1200x600/1a1a3e/00ff88?text=VR+Ebbinghaus+Illusion+-+Optical+Demonstration',
    cardImage: 'https://via.placeholder.com/1200x600/2d2d5e/00ff88?text=Ebbinghaus+-+Interactive+Illusion',
    category: 'vr',
    featured: true
  }
];
