// src/data/courses.js
// import shree from '../assets/courses/2.png'  
const courses = [
  /* =====================================================
     DATA VERSE PRO
  ====================================================== */
  {
    slug: "data-verse-pro",
    title: "Data Verse Pro",
    category: "data",
    badge: "Best Seller",
     trustImage: "/src/assets/courses/dvp.png",

  //,
  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "A complete data analytics + engineering career program.",
    duration: "2.5 Months",
    hours: 250,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.8 / 5",
    learners: "5000+ Learners",

    whyCareer:
      "Data engineering and analytics form the backbone of modern AI-driven and data-powered products.",

    whoCanStudy: [
      { title: "Students & Fresh Graduates", desc: "Build strong data foundations." },
      { title: "Working Professionals", desc: "Upskill into high-demand data roles." },
      { title: "Career Switchers", desc: "Move from non-IT backgrounds." },
      { title: "Tech Enthusiasts", desc: "Work with real-world tools." }
    ],

    tools: [
      { name: "Python", img: "/src/assets/front end/data verse pro/PY.jpeg" },
         { name: "Excel", img: "/src/assets/front end/data verse pro/EXCEL.jpeg" },
            { name: "Python", img: "/src/assets/front end/data verse pro/PY.jpeg" },
      { name: "SQL", img: "/src/assets/front end/data verse pro/SQL.png" },
      { name: "Pandas", img: "/src/assets/front end/data verse pro/PY.jpeg" },
      { name: "Numpy", img: "/src/assets/front end/data verse pro/NUMPY.png" },
      { name: "Tableau", img: "/src/assets/front end/data verse pro/TABLE.jpg" },
      { name: "Jupyter", img: "/src/assets/front end/data verse pro/JUPY.png" },
      { name: "Google - Colob", img: "/src/assets/front end/data verse pro/COLOB.png" },
      { name: "Gemini", img: "/src/assets/front end/data verse pro/GEMNII.JPG" },
      { name: "ChatGPT", img: "/src/assets/front end/data verse pro/GPT.png" },
      { name: "PowerBI", img: "/src/assets/front end/data verse pro/BI.png" },
      { name: "Looker Studio", img: "/src/assets/front end/data verse pro/LOOK.jpg" },
      { name: "JIRA", img: "/src/assets/front end/data verse pro/JIRA.png" },
      { name: "Seaborn", img: "/src/assets/front end/data verse pro/seaborn.svg" }

    ],
   highlights: [
  {
    icon: "clock",
    value: "250+ Hours",
    label: "Live Interactive Sessions"
  },
  {
    icon: "calendar",
    value: "2 Months",
    label: "Weekday Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "offline",
    value: "6 Days",
    label: "Offline Immersion Program"
  },
  {
    icon: "projects",
    value: "7 Hands-On Projects",
    label: "2+ Capstones Projects"
  },
  {
    icon: "target",
    value: "Ace the Interview",
    label: "Targeted Prep for Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "From Leading Tech Companies"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
],

   modules: [
  { title: "Excel", topics: ["Advanced Functions", "Pivot Tables", "Dashboards"] },

  { title: "SQL", topics: ["Queries & Filtering", "Joins", "Aggregations"] },

  { title: "Power BI", topics: ["Data Modeling", "DAX Basics", "Reports & Dashboards"] },

  { title: "Python", topics: ["Python Basics", "Data Analysis", "Visualization"] },

  { title: "Google Colab / Jupyter Notebook", topics: ["Notebook Environment", "Running Code", "Data Exploration"] },

  { title: "NumPy", topics: ["Arrays", "Mathematical Operations", "Broadcasting"] },

  { title: "Pandas", topics: ["DataFrames", "Data Cleaning", "Aggregation"] },

  { title: "Seaborn", topics: ["Statistical Plots", "EDA Visualizations", "Styling"] },

  { title: "Statistics", topics: ["Descriptive Statistics", "Probability", "Hypothesis Testing"] },

  { title: "Tableau", topics: ["Calculated Fields", "Dashboards", "Data Storytelling"] },

  { title: "Machine Learning", topics: ["Regression", "Classification", "Model Evaluation"] },

  { title: "Jira", topics: ["Agile Basics", "Issue Tracking", "Sprint Management"] },

  { title: "AI Tools - GPT, Gemini, Copilot", topics: ["Prompt Engineering", "Code Assistance", "Productivity Use Cases"] },

  { title: "n8n (Automation)", topics: ["Workflow Automation", "API Integrations", "Data Pipelines"] },

  { title: "Github", topics: ["Version Control", "Repositories & Branches", "Collaboration"] },
]
,

    syllabusPdf: "/syllabus/data-verse-pro.pdf",

    projects: "Build production-grade ETL pipelines and analytics systems.",

    roles: ["Data Engineer", "ETL Developer", "BI Analyst", "ML Ops Engineer"],

    companies: [
      "/src/assets/companies/company1.jpeg",
      "/src/assets/companies/company2.jpeg",
      "/src/assets/companies/company3.jpeg"
    ],

    faq: [
      { q: " Why is Data Verse Pro the #1 Data Science Course for Newbies in 2026?", 
        a: " Data Verse Pro is designed for the modern workplace (beyond the basic theory) and focuses on what will be trending in 2026. The course focuses on new trends in 2026 such as Generative Ai, Predictive Analytics and Machine Learning. Unlike standard courses, the Data Verse Pro curriculum combines Python, SQL and Power BI with real-world projects allowing you to be prepared for Data Analyst and Data Scientist positions." },
      { q: "Does the Data Verse Pro Course Offer Training on AI and the Tools/Algorithms used to Create These Products?", 
        a: " Yes, the Data Verse Pro Course provides in-depth training on artificial intelligence (AI) and machine learning (ML) algorithms. The course provides students hands-on experience using popular industry-standard libraries such as TensorFlow, Pandas, and Scikit-learn, making you well positioned to earn a lucrative salary in the AI and Data Science Space." },
      { q: " Is Data Verse Pro a Certification Course and Will You Help Me Get Placed?",
         a: "Yes, at the completion of the course, you receive a Data Science Certification from Vinsup Skill Academy, an industry-recognized certification. Additionally, we provide a dedicated placement service to help you gain employment at a reputed company by helping you with your resume and conducting mock interviews to prepare you for your next interview. " },
      { q: "Do I need to have coding experience before joining Data Verse Pro?",
         a: "No coding experience is necessary. We will teach Python and statistics from the ground up. Fresh graduates and professionals looking to enhance their data engineering skills can follow our structured program to learn data engineering concepts from the beginning." },
         { q: "Will I complete any projects while enrolled in Data Verse Pro?",
         a: "Yes. The capstone projects that you will create in Data Verse Pro will replicate the same problems experienced by businesses today. Some of the projects completed in the capstone will include predict customer churn, forecasting sales and developing an AI chatbot. Completing these live projects will give you an excellent opportunity to showcase your skills in your portfolio when applying for positions with employers." }


    ]
  },

  /* =====================================================
     DATA ANALYTICS
  ====================================================== */
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "data",
    badge: "Popular",
      trustImage: "/src/assets/courses/da.png",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn Excel, SQL, Power BI & Python.",
    duration: "1.5 Months",
    hours: 100,
    mode: "Offline + Online",
    language: "English / Tamil",
    rating: "4.9 / 5",
    learners: "2000+ Learners",

    whyCareer:
      "Data analytics helps businesses make smarter decisions using insights.",

    whoCanStudy: [
      { title: "Students & Freshers", desc: "Kickstart analytics careers." },
      { title: "Working Professionals", desc: "Upgrade analytical skills." }
    ],

    tools: [
      { name: "Excel", img: "/src/assets/front end/data analytics/EXCEL.jpeg" },
      { name: "SQL", img: "/src/assets/front end/data analytics/SQL.png" },
      { name: "Power BI", img: "/src/assets/front end/data analytics/PBI.png" },
      { name: "Python", img: "/src/assets/front end/data analytics/PY.png" },
      { name: "Python", img: "/src/assets/front end/data analytics/STAT.jpeg" }
    ],
 highlights: [
  {
    icon: "clock",
    value: "100+ Hours",
    label: "Live Interactive Sessions"
  },
  {
    icon: "calendar",
    value: "1 Months",
    label: "Weekday Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "Offline",
    value: "10 Days",
    label: "SoftSkills Preparation"
  },
  {
    icon: "projects",
    value: "5 Projects",
    label: "1+ AI Capstones"
  },
  {
    icon: "target",
    value: "Interview Ready",
    label: "Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "Industry Experts"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
]
,

    modules: [
  { title: "Excel", topics: ["Advanced Functions", "Pivot Tables", "Dashboards"] },

  { title: "SQL", topics: ["Queries & Filtering", "Joins", "Aggregations"] },

  { title: "Power BI", topics: ["Data Modeling", "DAX Basics", "Reports & Dashboards"] },

  { title: "Python", topics: ["Python Basics", "Data Analysis", "Visualization"] },

  { title: "Pandas", topics: ["Data Structures", "Data Cleaning", "Data Manipulation"] },

  { title: "Seaborn", topics: ["Statistical Plots", "Categorical Plots", "Advanced Visualization"] },

  { title: "Statistics", topics: ["Descriptive Statistics", "Probability & Distributions", "Inferential Statistics"] }
]
,

    syllabusPdf: "/syllabus/data-analytics.pdf",

    projects: "Analyze real datasets and build dashboards.",

    roles: ["Data Analyst", "Business Analyst"],

    companies: ["/src/assets/companies/company1.jpeg"],

    faq: [
      { q: " Why is Data Verse Pro the #1 Data Science Course for Newbies in 2026?", 
        a: " Data Verse Pro is designed for the modern workplace (beyond the basic theory) and focuses on what will be trending in 2026. The course focuses on new trends in 2026 such as Generative Ai, Predictive Analytics and Machine Learning. Unlike standard courses, the Data Verse Pro curriculum combines Python, SQL and Power BI with real-world projects allowing you to be prepared for Data Analyst and Data Scientist positions." },
      { q: "Does the Data Verse Pro Course Offer Training on AI and the Tools/Algorithms used to Create These Products?", 
        a: " Yes, the Data Verse Pro Course provides in-depth training on artificial intelligence (AI) and machine learning (ML) algorithms. The course provides students hands-on experience using popular industry-standard libraries such as TensorFlow, Pandas, and Scikit-learn, making you well positioned to earn a lucrative salary in the AI and Data Science Space." },
      { q: " Is Data Verse Pro a Certification Course and Will You Help Me Get Placed?",
         a: "Yes, at the completion of the course, you receive a Data Science Certification from Vinsup Skill Academy, an industry-recognized certification. Additionally, we provide a dedicated placement service to help you gain employment at a reputed company by helping you with your resume and conducting mock interviews to prepare you for your next interview. " },
      { q: "Do I need to have coding experience before joining Data Verse Pro?",
         a: "No coding experience is necessary. We will teach Python and statistics from the ground up. Fresh graduates and professionals looking to enhance their data engineering skills can follow our structured program to learn data engineering concepts from the beginning." },
         { q: "Will I complete any projects while enrolled in Data Verse Pro?",
         a: "Yes. The capstone projects that you will create in Data Verse Pro will replicate the same problems experienced by businesses today. Some of the projects completed in the capstone will include predict customer churn, forecasting sales and developing an AI chatbot. Completing these live projects will give you an excellent opportunity to showcase your skills in your portfolio when applying for positions with employers." }


    ]
  },

  /* =====================================================
     DEVSTACK – FULLSTACK + DEVOPS
  ====================================================== */
  {
    slug: "devstack-fullstack-devops",
    title: "DevStack – Fullstack with DevOps",
    category: "dev",
    badge: "Hot Program",
      trustImage: "/src/assets/courses/dvs.png",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Master MERN stack with DevOps tools.",
    duration: "2.5 Months",
    hours: 250,
    mode: "Online + Offline",
    language: "English",
    rating: "4.8 / 5",
    learners: "1500+ Learners",

    whyCareer:
      "Fullstack developers with DevOps skills are among the highest-paid IT professionals.",

    whoCanStudy: [
      { title: "Students", desc: "Learn development from scratch." },
      { title: "Developers", desc: "Upgrade with DevOps skills." }
    ],

 tools: [
  { name: "HTML", img: "/src/assets/front end/dev stack/html.svg" },
  { name: "CSS", img: "/src/assets/front end/dev stack/CSS.jpeg" },
  { name: "Bootstrap", img: "/src/assets/front end/dev stack/BOOT.png" },
  { name: "JavaScript", img: "/src/assets/front end/dev stack/js.jpg" },
  { name: "React.js", img: "/src/assets/front end/dev stack/REACT.jpeg" },
  { name: "Node.js", img: "/src/assets/front end/dev stack/NODE.png" },
  { name: "Express.js", img: "/src/assets/front end/dev stack/EXPRESS.png" },
  { name: "MongoDB", img: "/src/assets/front end/dev stack/MONGO.JPG" },
  { name: "Git", img: "/src/assets/front end/dev stack/GIT.png" },
  { name: "GitHub", img: "/src/assets/front end/dev stack/GITHUB.png" },
  { name: "Jira", img: "/src/assets/front end/dev stack/JIRA.png" },
  { name: "Jenkins", img: "/src/assets/front end/dev stack/JEN.png" },
  { name: "Docker", img: "/src/assets/front end/dev stack/DOCK.jpeg" }
],

 highlights: [
  {
    icon: "clock",
    value: "300+ Hours",
    label: "Live + Recorded Sessions"
  },
  {
    icon: "calendar",
    value: "9 Months",
    label: "Weekend Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "offline",
    value: "4 Days",
    label: "Offline Immersion"
  },
  {
    icon: "projects",
    value: "15 Projects",
    label: "3+ AI Capstones"
  },
  {
    icon: "target",
    value: "Interview Ready",
    label: "Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "Industry Experts"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
]
,

    modules: [
  {
    title: "HTML",
    topics: ["Elements & Attributes", "Forms & Tables", "Semantic HTML"]
  },
  {
    title: "CSS",
    topics: ["Flexbox", "Grid", "Responsive Design"]
  },
  {
    title: "Bootstrap",
    topics: ["Grid System", "Components", "Customization"]
  },
  {
    title: "JavaScript",
    topics: ["Variables & Functions", "DOM Manipulation", "ES6 Features"]
  },
  {
    title: "React.js",
    topics: ["Components & Props", "State & Hooks", "Routing"]
  },
  {
    title: "Node.js",
    topics: ["Event Loop", "File System", "Modules"]
  },
  {
    title: "Express.js",
    topics: ["Routing", "Middleware", "REST APIs"]
  },
  {
    title: "MongoDB",
    topics: ["CRUD Operations", "Schema Design", "Aggregation"]
  },
  {
    title: "Git",
    topics: ["Version Control Basics", "Branching", "Merging"]
  },
  {
    title: "GitHub",
    topics: ["Repositories", "Pull Requests", "GitHub Actions"]
  },
  {
    title: "Jira",
    topics: ["Issue Tracking", "Sprint Management", "Kanban Boards"]
  },
  {
    title: "Jenkins",
    topics: ["CI Pipelines", "Build Automation", "Deployment Jobs"]
  },
  {
    title: "Docker",
    topics: ["Images & Containers", "Dockerfile", "Docker Compose"]
  }
],


    syllabusPdf: "/syllabus/devstack.pdf",

    projects: "Build and deploy fullstack applications.",

    roles: [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "MERN Stack Developer",
  "JavaScript Developer",
  "Web Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Software Engineer",
  "Application Developer"
]
,

    companies: ["/src/assets/companies/company2.jpeg"],

    faq: [
      { q: "Is coding experience required?", a: "Basic knowledge helps." }
    ]
  },

  /* =====================================================
     FRONT-END DEVELOPMENT
  ====================================================== */
  {
    slug: "frontend",
    title: "Front-end Development",
    category: "dev",
      trustImage: "/src/assets/courses/fsd.png",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn HTML, CSS, JavaScript & React.",
    duration: "1.5 Months",
    hours: 150,
    mode: "Online + Classroom",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "1200+ Learners",

    whyCareer:
      "Frontend developers create engaging and user-friendly interfaces.",

    whoCanStudy: [
      { title: "Beginners", desc: "Start from scratch." },
      { title: "Designers", desc: "Transition into frontend roles." }
    ],
 highlights: [
  {
    icon: "clock",
    value: "100+ Hours",
    label: "Live Interactive Sessions"
  },
  {
    icon: "calendar",
    value: "1 Months",
    label: "Weekday Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "offline",
    value: "10 Days",
    label: "SoftSkills Preparation"
  },
  {
    icon: "projects",
    value: "5 Projects",
    label: "1+ AI Capstones"
  },
  {
    icon: "target",
    value: "Interview Ready",
    label: "Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "Industry Experts"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
]
,

    tools: [
      { name: "HTML", img: "/src/assets/front end/dev stack/html.svg" },
  { name: "CSS", img: "/src/assets/front end/dev stack/CSS.jpeg" },
  { name: "Bootstrap", img: "/src/assets/front end/dev stack/BOOT.png" },
  { name: "JavaScript", img: "/src/assets/front end/dev stack/js.jpg" },
  { name: "React.js", img: "/src/assets/front end/dev stack/REACT.jpeg" }
    ],

    modules: [
      {
    title: "HTML",
    topics: ["Elements & Attributes", "Forms & Tables", "Semantic HTML"]
  },
  {
    title: "CSS",
    topics: ["Flexbox", "Grid", "Responsive Design"]
  },
  {
    title: "Bootstrap",
    topics: ["Grid System", "Components", "Customization"]
  },
  {
    title: "JavaScript",
    topics: ["Variables & Functions", "DOM Manipulation", "ES6 Features"]
  },
  {
    title: "React.js",
    topics: ["Components & Props", "State & Hooks", "Routing"]
  }
    ],

    syllabusPdf: "/syllabus/frontend.pdf",

    projects: "Build responsive websites and React apps.",

    roles: ["Frontend Developer", "UI Developer"],

    companies: ["/src/assets/companies/company3.jpeg"],

    faq: [
      { q: "Is this practical?", a: "Yes, hands-on projects included." }
    ]
  },

  /* =====================================================
     UI / UX DESIGN
  ====================================================== */
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    category: "design",
      trustImage: "/src/assets/courses/ux.png",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Design user-centric digital products.",
    duration: "1..5 Months",
    hours: 150,
    mode: "Online + Offline",
    language: "English & Tamil",
    rating: "4.7 / 5",
    learners: "900+ Learners",

    whyCareer:
      "UI/UX designers shape the digital experiences used by millions.",

    whoCanStudy: [
      { title: "Design Enthusiasts", desc: "Start a design career." },
      { title: "Developers", desc: "Add design skills." }
    ],

  tools: [
  { name: "Figma", img: "/src/assets/front end/uxui/FIGMA.png" },
  { name: "Adobe Photoshop", img: "/src/assets/front end/uxui/PS.png" },
  { name: "Adobe Illustrator", img: "/src/assets/front end/uxui/AI.png" },
  // { name: "Adobe InDesign", img: "/src/assets/front end/uxui/indesign.png" },
  { name: "Blender", img: "/src/assets/front end/uxui/BLEN.png" }
]

,

 highlights: [
  {
    icon: "clock",
    value: "150+ Hours",
    label: "Live Interactive Sessions"
  },
  {
    icon: "calendar",
    value: "2 Months",
    label: "Weekday Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "offline",
    value: "10 Days",
    label: "SoftSkills Preparation"
  },
  {
    icon: "projects",
    value: "5 Projects",
    label: "1+ AI Capstones"
  },
  {
    icon: "target",
    value: "Interview Ready",
    label: "Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "Industry Experts"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
]
,
    modules: [
  {
    title: "UX Fundamentals",
    topics: [
      "What is UX & UI?",
      "Design Thinking Process",
      "User-Centered Design",
      "UX vs UI"
    ]
  },
  {
    title: "User Research",
    topics: [
      "User Research Methods",
      "Stakeholder Interviews",
      "User Personas",
      "Empathy Mapping"
    ]
  },
  {
    title: "Information Architecture",
    topics: [
      "User Flows",
      "Site Maps",
      "Card Sorting",
      "Content Structuring"
    ]
  },
  {
    title: "Wireframing",
    topics: [
      "Low-Fidelity Wireframes",
      "High-Fidelity Wireframes",
      "Layout Principles",
      "Design Grids"
    ]
  },
  {
    title: "UI Design Principles",
    topics: [
      "Color Theory",
      "Typography",
      "Spacing & Alignment",
      "Visual Hierarchy"
    ]
  },
  {
    title: "Design Tools",
    topics: [
      "Figma Basics",
      "Auto Layout",
      "Components & Variants",
      "Design Systems"
    ]
  },
  {
    title: "Prototyping",
    topics: [
      "Interactive Prototypes",
      "Micro Interactions",
      "Transitions & Animations",
      "Usability Testing"
    ]
  },
  {
    title: "Responsive & Mobile Design",
    topics: [
      "Mobile-First Design",
      "Responsive Layouts",
      "iOS & Android Guidelines",
      "Accessibility Basics"
    ]
  },
  {
    title: "Branding & Visual Design",
    topics: [
      "Logo Design Basics",
      "Icon Design",
      "Style Guides",
      "Design Consistency"
    ]
  },
  {
    title: "Portfolio & Case Studies",
    topics: [
      "Case Study Structure",
      "UX Storytelling",
      "Portfolio Presentation",
      "Client Pitching"
    ]
  }
]
,

    syllabusPdf: "/syllabus/ui-ux.pdf",

    projects: "Design mobile and web interfaces.",

    roles: ["UI Designer", "UX Designer"],

    companies: ["/src/assets/companies/company4.jpeg"],

    faq: [
      { q: "Do I need drawing skills?", a: "No, creativity is enough." }
    ]
  },

  /* =====================================================
     DIGITAL MARKETING
  ====================================================== */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "marketing",
      trustImage: "/src/assets/courses/dm.png",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Master SEO, Ads, Social Media & Analytics.",
    duration: "2.5 Months",
    hours: 120,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "800+ Learners",

    whyCareer:
      "Digital marketing helps businesses grow online and reach the right audience.",

    whoCanStudy: [
      { title: "Students", desc: "Start a marketing career." },
      { title: "Business Owners", desc: "Grow your brand online." }
    ],
 highlights: [
  {
    icon: "clock",
    value: "300+ Hours",
    label: "Live + Recorded Sessions"
  },
  {
    icon: "calendar",
    value: "9 Months",
    label: "Weekend Classes"
  },
  {
    icon: "ai",
    value: "AI-Driven",
    label: "Personal Tech Assistant"
  },
  {
    icon: "offline",
    value: "4 Days",
    label: "Offline Immersion"
  },
  {
    icon: "projects",
    value: "15 Projects",
    label: "3+ AI Capstones"
  },
  {
    icon: "target",
    value: "Interview Ready",
    label: "Tech & Product Roles"
  },
  {
    icon: "mentor",
    value: "Flagship Mentors",
    label: "Industry Experts"
  },
  {
    icon: "tech",
    value: "Cutting-Edge Tech",
    label: "OpenAI, Gemini, RAG"
  }
]
,

  tools: [
  {
    name: "Google Analytics",
    img: "/src/assets/front end/digital marketing/GAD.png"
  },
  {
    name: "Google Ads",
    img: "/src/assets/front end/digital marketing/GAD.png"
  },
  {
    name: "Meta Ads Manager",
    img: "/src/assets/front end/digital marketing/META.png"
  },
  {
    name: "Hubspot",
    img: "/src/assets/front end/digital marketing/HUB.png"
  },
  {
    name: "Shopify",
    img: "/src/assets/front end/digital marketing/123.svg"
  },
  {
    name: "WordPress",
    img: "/src/assets/front end/digital marketing/WORD.png"
  },
  {
    name: "Canva",
    img: "/src/assets/front end/digital marketing/CANVA.png"
  },
  {
    name: "Mailchimp",
    img: "/src/assets/front end/digital marketing/MAIL.png"
  },
  {
    name: "Elementor",
    img: "/src/assets/front end/digital marketing/ELE.png"
  },
  {
    name: "Hrefs",
    img: "/src/assets/front end/digital marketing/HREF.png"
  }
]

,

    modules: [
  {
    title: "Digital Marketing Foundations",
    topics: [
      "Introduction to Digital Marketing",
      "Marketing Funnel & Buyer Journey",
      "Industry Trends & AI in Marketing"
    ]
  },
  {
    title: "Website Creation & Optimization",
    topics: [
      "WordPress Setup & Basics",
      "Landing Pages & UX",
      "Website Speed & Mobile Optimization"
    ]
  },
  {
    title: "Search Engine Optimization (SEO)",
    topics: [
      "Keyword Research",
      "On-Page & Off-Page SEO",
      "Local SEO & Google Business Profile"
    ]
  },
  {
    title: "Social Media & Content Marketing",
    topics: [
      "Content Strategy & Copywriting",
      "Instagram, Facebook & LinkedIn Marketing",
      "Organic Growth Techniques"
    ]
  },
  {
    title: "Paid Advertising (Google & Meta Ads)",
    topics: [
      "Google Ads Fundamentals",
      "Meta Ads (Facebook & Instagram)",
      "Audience Targeting & Retargeting"
    ]
  },
  {
    title: "Analytics & Performance Tracking",
    topics: [
      "Google Analytics 4",
      "Conversion & Event Tracking",
      "Performance Reporting"
    ]
  },
  {
    title: "Freelancing & Career Preparation",
    topics: [
      "Email Marketing Basics",
      "Freelancing Platforms & Client Handling",
      "Resume, Portfolio & Interview Prep"
    ]
  }
]
,

    syllabusPdf: "/syllabus/digital-marketing.pdf",

    projects: "Run live ad campaigns and SEO projects.",

    roles: ["Digital Marketer", "SEO Executive"],

    companies: ["/src/assets/companies/company1.jpeg"],

    faq: [
      { q: "Is this practical?", a: "Yes, live campaign exposure." }
    ]
  }
];

export default courses;
