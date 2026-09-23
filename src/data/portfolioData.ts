import { Project, EducationItem, SkillCategory, ExperienceStage } from '../types';
import defaultAvatar from '../assets/images/photo_karunya_1790186327658.jpg';

export const PERSONAL_INFO = {
  name: 'MUGESH S',
  role: 'AI & Data Science Student | Python Developer | AI Enthusiast',
  tagline: 'Building intelligent applications and data-driven solutions using Python, AI, machine learning, computer vision, NLP, and modern web technologies.',
  location: 'Kallakurichi, Tamil Nadu, India',
  email: 'sesams1976@gmail.com',
  phone: '+91 9345168254',
  githubUrl: 'https://github.com/dashboard',
  githubPlaceholder: 'https://github.com/dashboard',
  linkedinUrl: 'https://www.linkedin.com/feed/',
  linkedinPlaceholder: 'https://www.linkedin.com/feed/',
  avatarImage: defaultAvatar,
  about: `I am an M.Sc. Artificial Intelligence and Data Science student with strong foundations in Python, SQL, object-oriented programming, REST APIs, Django, and full-stack application development. I have experience building web and AI-based applications and working with databases, APIs, computer vision, NLP, and data processing. I am passionate about building practical AI-powered applications and solving real-world challenges through clean, scalable engineering.`,
  languages: [
    { language: 'Tamil', proficiency: 'Native Proficiency' },
    { language: 'English', proficiency: 'Professional Working Proficiency' }
  ],
  strengths: [
    'Problem Solving',
    'Critical Thinking',
    'Analytical Thinking',
    'Logical Thinking',
    'Communication',
    'Teamwork',
    'Collaboration',
    'Quick Learning',
    'Adaptability',
    'Time Management'
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Sc. Artificial Intelligence & Data Science',
    institution: 'Karunya University',
    period: '2025 – Present',
    score: '8.09',
    scoreLabel: 'CGPA',
    location: 'Coimbatore, Tamil Nadu',
    highlights: [
      'Advanced coursework in Deep Learning, Computer Vision, and Predictive Analytics',
      'Hands-on research projects integrating Machine Learning with Web Frameworks',
      'Focus on real-world AI deployment and scalable model architectures'
    ]
  },
  {
    degree: 'B.Sc.',
    institution: 'Guru Nanak College of Arts & Sciences',
    period: '2022 – 2025',
    score: '7.5',
    scoreLabel: 'CGPA',
    location: 'Chennai, Tamil Nadu',
    highlights: [
      'Core foundations in Computer Science, Database Management Systems, and Mathematics',
      'Practical software laboratory work in Object-Oriented Programming and Data Structures',
      'Developed foundational academic web and database management applications'
    ]
  },
  {
    degree: 'Higher Secondary',
    institution: 'A.K.T Academy Matric Hr. Sec. School',
    period: '2021 – 2022',
    score: '70%',
    scoreLabel: 'Percentage',
    location: 'Kallakurichi, Tamil Nadu',
    highlights: [
      'Focus on Mathematics, Physics, and Computer Science fundamentals',
      'Developed early passion for algorithmic logic and computing'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational algorithmic problem solving & object-oriented architecture',
    iconName: 'Code',
    skills: [
      { name: 'Python' },
      { name: 'SQL' }
    ]
  },
  {
    title: 'Web & Software Development',
    description: 'Full-stack application architecture and asynchronous REST API engineering',
    iconName: 'Globe',
    skills: [
      { name: 'Django' },
      { name: 'REST API Development' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Object-Oriented Programming' }
    ]
  },
  {
    title: 'AI / Machine Learning / Computer Vision',
    description: 'Model training, neural networks, real-time image processing & NLP',
    iconName: 'Brain',
    skills: [
      { name: 'Machine Learning' },
      { name: 'TensorFlow' },
      { name: 'OpenCV' },
      { name: 'Natural Language Processing' },
      { name: 'Computer Vision' },
      { name: 'Deep Learning' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational data modeling, indexing, and document-store databases',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
      { name: 'SQL' },
      { name: 'MongoDB' }
    ]
  },
  {
    title: 'Data & Visualization',
    description: 'Exploratory data analysis, business intelligence, and reporting',
    iconName: 'BarChart2',
    skills: [
      { name: 'Data Analysis' },
      { name: 'Tableau' },
      { name: 'Microsoft Excel' }
    ]
  },
  {
    title: 'Tools & Version Control',
    description: 'Collaborative code versioning, repository workflows, and issue tracking',
    iconName: 'GitBranch',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' }
    ]
  },
  {
    title: 'Software Engineering Fundamentals',
    description: 'Robust end-to-end development practices and application security',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'SDLC' },
      { name: 'Debugging' },
      { name: 'Testing' },
      { name: 'Secure Coding' },
      { name: 'Authentication' },
      { name: 'Authorization' }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'web-scraper-insights',
    title: 'Keyword-Based Web Data Scraper & Insight Generator',
    category: ['All', 'Full Stack', 'Data Science', 'NLP'],
    featured: true,
    shortDescription: 'Full-stack application that crawls target web content by keywords, processes bulk datasets, and yields automated summaries and trend insights.',
    problem: 'Manual market research and web data aggregation are labor-intensive, fragmented, and slow for analysts needing real-time thematic summaries.',
    solution: 'Engineered an asynchronous pipeline linking a React + TypeScript frontend with a Django REST API backend to crawl, clean, extract keywords, and visualize actionable reports.',
    technologies: ['Python', 'Django', 'REST APIs', 'React', 'TypeScript', 'SQLite', 'PostgreSQL'],
    keyFeatures: [
      'Keyword-targeted web crawler and structured HTML content extraction',
      'Batch data processing pipeline with deduplication and normalization',
      'Automated summary generation and statistical keyword frequency analytics',
      'Search history archive with persistent user authentication and session states',
      'Interactive React dashboard for report filtering, export, and trend review'
    ],
    architectureOrWorkflow: 'React + TypeScript frontend → Django REST API → Python processing/scraping → Database → Insights/Dashboard',
    workflowSteps: [
      'React + TypeScript client initiates keyword query',
      'Django REST API validates & registers search session',
      'Python scraping engine harvests relevant web resources',
      'Batch processing module extracts keywords & builds summaries',
      'Normalized records persisted to PostgreSQL/SQLite',
      'Real-time metrics rendered on reactive analytics dashboard'
    ],
    image: '/src/assets/images/project_web_scraper_1790180990581.jpg',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'emotion-detection-fer',
    title: 'Real-Time Emotion Detection & FER System',
    category: ['All', 'Computer Vision', 'AI / ML'],
    featured: true,
    shortDescription: 'Computer vision and deep learning application that identifies face landmarks and classifies human emotions from live camera feeds.',
    problem: 'Human-computer interactions lack intuitive affective awareness, requiring low-latency facial feature recognition under variable lighting.',
    solution: 'Implemented an OpenCV-driven face detection pipeline feeding normalized facial crops into trained deep learning classifiers for instantaneous emotional state prediction.',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning', 'Computer Vision'],
    keyFeatures: [
      'Live camera stream ingestion and frame-by-frame face localization',
      'Haar cascade / deep facial landmark bounding box detection',
      'Preprocessing pipeline with grayscale normalization and spatial alignment',
      'Multi-class emotion classification (Happy, Sad, Angry, Surprise, Neutral)',
      'Real-time visual confidence telemetry rendered on live viewport'
    ],
    architectureOrWorkflow: 'Image → Face Detection → Preprocessing → Model Prediction → Emotion',
    workflowSteps: [
      'Live camera video frame ingestion',
      'OpenCV-based face detection and region-of-interest cropping',
      'Image normalization, resizing, and pixel scaling',
      'Deep learning model inference on emotional feature weights',
      'Visual HUD overlay displaying predicted class and confidence'
    ],
    image: '/src/assets/images/project_emotion_detection_1790181005690.jpg',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'weather-prediction',
    title: 'Weather Prediction & Decision Support Application',
    category: ['All', 'AI / ML', 'Data Science'],
    featured: true,
    shortDescription: 'AI-driven meteorological decision support system featuring real-time map visualization and proactive extreme weather hazard alerts.',
    problem: 'Standard weather apps only display raw temperatures without contextual risk intelligence for agriculture, transit, and civil safety.',
    solution: 'Trained predictive ML models with TensorFlow that continuously analyze atmospheric variables to fire automated threshold warnings before severe events occur.',
    technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Weather/Data APIs', 'Map Visualization'],
    keyFeatures: [
      'Predictive atmospheric modeling based on historical and real-time parameters',
      'Map-based interactive weather layer visualization',
      'Automated Heavy Rain Alert triggered when precipitation probability > 70%',
      'Heat Warning system dispatched when temperature exceeds 40°C',
      'Severe weather and cyclone condition alerts with risk advisory advisories',
      'Actionable decision support guidelines tailored to predicted events'
    ],
    architectureOrWorkflow: 'Meteorological Data Streams → Feature Engineering → TensorFlow Regression/Classification → Threshold Rule Engine → Map Visualization & Safety Alerts',
    workflowSteps: [
      'Ingest live satellite and sensor feeds via meteorological APIs',
      'Feature normalization and time-series feature engineering',
      'TensorFlow inference to forecast rainfall, humidity, and pressure',
      'Threshold evaluator checks condition triggers (>70% rain, >40°C heat)',
      'Render geospatial heatmap overlay with proactive decision support notices'
    ],
    image: '/src/assets/images/project_weather_prediction_1790182668326.jpg',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'ai-chatbot-nlp',
    title: 'AI Chatbot Application',
    category: ['All', 'NLP', 'AI / ML'],
    shortDescription: 'Rule-based and NLP-driven conversational agent engineered for intelligent user query classification and context-aware responses.',
    problem: 'First-tier user support queries suffer from high latency and inconsistent handling when handled manually.',
    solution: 'Designed an NLP query processing pipeline that accurately categorizes user intent, extracts syntactic tokens, and maps inquiries to contextually relevant automated responses.',
    technologies: ['Python', 'Natural Language Processing (NLP)', 'Tokenization', 'Regex'],
    keyFeatures: [
      'Text tokenization, lemmatization, and stopword filtering',
      'Intent recognition and classification engine',
      'Automated fallback logic and context tracking across conversational turns',
      'Modular rule-based response generation dictionary',
      'Clean terminal/web interface for testing dialogue interactions'
    ],
    architectureOrWorkflow: 'User Query → Text Preprocessing → Intent Classification → Context Matcher → Response Generation',
    workflowSteps: [
      'User inputs natural language query',
      'NLP pipeline performs string cleaning, tokenization, and normalization',
      'Intent recognition classifier maps input to primary conversation topic',
      'Context manager determines dialogue branch',
      'Dispatches tailored automated reply with high accuracy'
    ],
    image: '/src/assets/images/project_ai_chatbot_1790182682911.jpg',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 'iot-smart-parking',
    title: 'IoT Smart Parking System',
    category: ['All', 'IoT'],
    shortDescription: 'Automated hardware-software parking management system with ultrasonic distance sensing, IR detection, and servo-operated barriers.',
    problem: 'Urban congestion and parking hunting lead to fuel wastage, traffic choke points, and inefficient space utilization.',
    solution: 'Engineered an embedded IoT controller system with Arduino UNO that checks bay occupancy with IR/ultrasonic sensors and automatically regulates entrance barriers.',
    technologies: ['Arduino UNO', 'IR Sensors', 'Ultrasonic Distance Sensor', 'Servo Motors', 'Embedded C/C++'],
    keyFeatures: [
      'Arduino UNO central micro-controller processing sensor signals',
      'Individual slot availability tracking using IR sensors in each parking bay',
      'Ultrasonic distance sensor for entry gate vehicle proximity detection',
      'Automated gate/slot access control driven by 3 high-torque servo motors',
      'Real-time vacancy indicator LEDs signaling driver clearance',
      'Sensor-based automation eliminating manual barrier operation'
    ],
    architectureOrWorkflow: 'Ultrasonic/IR Sensors → Arduino UNO Logic → Servo Actuation & LED Slot Matrix → Real-time Vacancy State',
    workflowSteps: [
      'Vehicle approaches gate detected by ultrasonic sensor',
      'Controller checks slot availability from IR sensor array',
      'If open bay exists, servo motor raises entry barrier',
      'IR sensor confirms slot occupancy and updates LED status',
      'System recalibrates available count in real-time'
    ],
    image: '/src/assets/images/project_iot_smart_parking_1790181017758.jpg',
    githubUrl: '#'
  },
  {
    id: 'ocr-handwritten-recognition',
    title: 'OCR Handwritten Text Recognition',
    category: ['All', 'Computer Vision', 'AI / ML'],
    shortDescription: 'Deep learning optical character recognition pipeline combining CNN feature extraction with sequence recognition for handwritten text.',
    problem: 'Handwritten notes vary dramatically in stroke thickness, cursive curvature, and slant, making traditional rule-based OCR highly error-prone.',
    solution: 'Architected a CNN/CRNN deep learning model that extracts visual character features from handwritten documents and decodes them into machine-readable digital text.',
    technologies: ['CNN / CRNN', 'Python', 'Deep Learning', 'Computer Vision', 'OCR', 'OpenCV'],
    keyFeatures: [
      'Handwritten document image ingestion and automated binarization',
      'Morphological operations for line and character segmentation',
      'Convolutional neural network (CNN) visual feature extraction',
      'Recurrent sequence recognition (CRNN) for cursive character alignment',
      'High-accuracy machine text transcription and digital export'
    ],
    architectureOrWorkflow: 'Handwritten Image → Preprocessing → CNN Feature Extraction → CRNN/Sequence Recognition → Recognized Text',
    workflowSteps: [
      'Input handwritten image file or camera capture',
      'Preprocessing (grayscale conversion, thresholding, noise removal)',
      'CNN layers extract deep convolutional feature maps',
      'CRNN sequence modeling predicts character token sequences',
      'CTC decoding maps probability distributions into digital text string'
    ],
    image: '/src/assets/images/project_ocr_recognition_1790182695289.jpg',
    githubUrl: '#'
  },
  {
    id: 'motion-tracking-kalman',
    title: 'Motion Tracking using Kalman Filter',
    category: ['All', 'Computer Vision', 'AI / ML'],
    shortDescription: 'Computer vision tracking system utilizing recursive Kalman Filter state estimation to predict object trajectories through noise and occlusion.',
    problem: 'Raw video object detection is vulnerable to sensor noise, temporary occlusion, and erratic frame jitter.',
    solution: 'Integrated OpenCV optical position tracking with a linear Kalman Filter algorithm to mathematically estimate velocities, smooth jitter, and project future coordinates.',
    technologies: ['Python', 'OpenCV', 'Kalman Filter', 'NumPy', 'State Estimation'],
    keyFeatures: [
      'Contour and centroid detection for continuous target localization',
      'Recursive state estimation (position and velocity vector modeling)',
      'Gaussian measurement noise suppression and movement smoothing',
      'Predictive trajectory projection even during brief object occlusions',
      'Visual tracking HUD displaying past path history and projected path'
    ],
    architectureOrWorkflow: 'Object Detection → Position Extraction → Kalman Prediction → Motion Smoothing → Predicted Trajectory',
    workflowSteps: [
      'Capture video stream and isolate target bounding box',
      'Extract centroid coordinate measurements (x, y)',
      'Kalman Filter state propagation calculates predicted next position',
      'Measurement update corrects error covariance matrix',
      'Render smoothed trajectory line and ahead-of-time forecast'
    ],
    image: '/src/assets/images/project_kalman_tracking_1790182707213.jpg',
    githubUrl: '#'
  },
  {
    id: 'hostel-management-app',
    title: 'Hostel Booking & Management Web Application',
    category: ['All', 'Full Stack'],
    shortDescription: 'Comprehensive web portal facilitating student room allocations, booking requests, fee tracking, and administration workflows.',
    problem: 'Academic hostel allocations handled with paper ledgers lead to double bookings, delayed verification, and poor administrative visibility.',
    solution: 'Constructed an end-to-end web application with an intuitive user interface, relational database schema, and server-side business logic for room allotments.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python/Django', 'MySQL/phpMyAdmin', 'SQL'],
    keyFeatures: [
      'Clean student-facing interface for viewing available rooms and amenities',
      'Room reservation and booking request submission portal',
      'Administrative dashboard for allotment approvals and capacity monitoring',
      'Relational database integration tracking student records and room status',
      'Backend processing ensuring transactional integrity during bookings'
    ],
    architectureOrWorkflow: 'Client Browser (HTML/CSS/JS) → Application Server (Python/Django) → Relational Database (MySQL) → Allotment Engine',
    workflowSteps: [
      'Student browses real-time room availability matrix',
      'Submits booking request with academic credentials',
      'Backend validates room vacancy constraints and user eligibility',
      'Commits reservation to MySQL database and issues confirmation voucher',
      'Admin portal updates live occupancy statistics'
    ],
    image: '/src/assets/images/project_hostel_management_1790182720468.jpg',
    githubUrl: '#'
  },
  {
    id: 'home-automation-iot',
    title: 'Home Automation System',
    category: ['All', 'IoT'],
    shortDescription: 'IoT-based automation project focused on controlling household electrical appliances and monitoring environmental inputs using sensors.',
    problem: 'Traditional home appliances lack remote accessibility and intelligent power-saving automation based on physical presence.',
    solution: 'Designed an embedded IoT automation system utilizing microcontrollers, sensor triggers, and relay modules to reliably toggle home devices.',
    technologies: ['Arduino/Microcontroller', 'Relay Modules', 'Environmental Sensors', 'IoT Protocols', 'C/C++'],
    keyFeatures: [
      'Sensor-guided device switching based on environmental inputs',
      'Relay module interfacing for safe AC appliance control',
      'Low-power microcontroller firmware handling input polling',
      'Status indicators reporting device states and sensor telemetry',
      'Failsafe logic ensuring secure operation during power interruptions'
    ],
    architectureOrWorkflow: 'Sensors/Inputs → Microcontroller Decision Logic → Relay Module Isolation → Appliance Control',
    workflowSteps: [
      'Environmental sensors record ambient physical states',
      'Microcontroller processes input thresholds',
      'Switches relay contacts to toggle connected appliances',
      'Maintains stable state feedback and error safety'
    ],
    image: '/src/assets/images/project_home_automation_1790182731713.jpg',
    githubUrl: '#'
  }
];

export const INTERNSHIP_EXPERIENCE = {
  role: 'Web/App Development Intern',
  focus: 'Keyword-Based Web Data Scraper and Insight Generator',
  technologies: ['React.js', 'Django REST API', 'Python', 'PostgreSQL', 'HTML5/Tailwind'],
  summary: 'Engineered a full-cycle web intelligence platform, spearheading everything from reactive UI design to Python-based asynchronous web scraping and automated insight synthesis.',
  progression: [
    {
      step: 1,
      title: 'React Project Setup & Home Page UI',
      description: 'Initialized the modern React frontend architecture with responsive component hierarchies, setting up modern styling and search entry interfaces.',
      deliverables: ['Modular component structure', 'Interactive search query bar', 'Responsive layout system']
    },
    {
      step: 2,
      title: 'Django REST API Development',
      description: 'Engineered the server-side API endpoints using Django REST Framework, establishing standardized JSON schemas for search requests and data retrieval.',
      deliverables: ['RESTful endpoint design', 'Request validation logic', 'CORS and security configuration']
    },
    {
      step: 3,
      title: 'Keyword Search & Frontend-Backend Integration',
      description: 'Connected the React client with the Django backend via asynchronous API handlers, enabling seamless query dispatch and state management.',
      deliverables: ['Axios/Fetch asynchronous integration', 'Client-side query state management', 'Graceful loading and error states']
    },
    {
      step: 4,
      title: 'Data Processing & Batch Handling',
      description: 'Designed the Python data collection and scraping pipeline to harvest target web content efficiently and process multi-item batches without blocking.',
      deliverables: ['Batch queuing architecture', 'Content parsing and HTML sanitization', 'Resilient error recovery on timeouts']
    },
    {
      step: 5,
      title: 'Keyword Extraction & Summary Generation',
      description: 'Implemented algorithmic text extraction to isolate high-relevance keyword frequencies and synthesize structured analytical summaries.',
      deliverables: ['Frequency matrix calculation', 'Text summarization routines', 'Categorized trend tag generation']
    },
    {
      step: 6,
      title: 'Dashboard Improvements, Filters, Testing & Final Review',
      description: 'Polished the final user experience with historical search filters, export capabilities, rigorous edge-case testing, and code review.',
      deliverables: ['Search history archive & filters', 'End-to-end integration validation', 'Performance optimization & final delivery']
    }
  ] as ExperienceStage[]
};
