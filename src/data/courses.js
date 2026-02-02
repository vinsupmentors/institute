// src/data/courses.js

const courses = [
  /* =====================================================
     DATA VERSE PRO
  ====================================================== */
  {
    slug: "data-verse-pro",
    title: "Data Verse Pro",
    category: "data",
    badge: "Best Seller",
     trustImage: "/images/trust/data-engineering.jpg",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "A complete data analytics + engineering career program.",
    duration: "6 Months",
    hours: 300,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.8 / 5",
    learners: "7000+ Learners",

    whyCareer:
      "Data engineering and analytics form the backbone of modern AI-driven and data-powered products.",

    whoCanStudy: [
      { title: "Students & Fresh Graduates", desc: "Build strong data foundations." },
      { title: "Working Professionals", desc: "Upskill into high-demand data roles." },
      { title: "Career Switchers", desc: "Move from non-IT backgrounds." },
      { title: "Tech Enthusiasts", desc: "Work with real-world tools." }
    ],

    tools: [
      { name: "Python", img: "/src/assets/tools/python.png" },
      { name: "SQL", img: "/src/assets/tools/sql.png" },
      { name: "Pandas", img: "/src/assets/tools/pandas.png" },
      { name: "Airflow", img: "/src/assets/tools/airflow.png" },
      { name: "AWS", img: "/src/assets/tools/aws.png" },
      { name: "Docker", img: "/src/assets/tools/docker.png" },
      { name: "Spark", img: "/src/assets/tools/spark.png" }
    ],

    modules: [
      { title: "Data Engineering Basics", topics: ["Pipelines", "Storage", "Architecture"] },
      { title: "Python Essentials", topics: ["Python", "Pandas", "Automation"] },
      { title: "Advanced SQL", topics: ["Joins", "Window Functions"] },
      { title: "ETL Pipelines", topics: ["Airflow", "Scheduling"] },
      { title: "Production Systems", topics: ["Docker", "Monitoring"] }
    ],

    syllabusPdf: "/syllabus/data-verse-pro.pdf",

    projects: "Build production-grade ETL pipelines and analytics systems.",

    roles: ["Data Engineer", "ETL Developer", "BI Analyst", "ML Ops Engineer"],

    companies: [
      "/src/assets/companies/company1.jpeg",
      "/src/assets/companies/company2.jpeg",
      "/src/assets/companies/company3.jpeg"
    ],

    faq: [
      { q: "Do I need coding experience?", a: "No, we start from the basics." },
      { q: "Is placement support included?", a: "Yes, full placement assistance." }
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
     trustImage: "/images/trust/data-engineering.jpg",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn Excel, SQL, Power BI & Python.",
    duration: "4 Months",
    hours: 150,
    mode: "Online + Classroom",
    language: "English / Tamil",
    rating: "4.7 / 5",
    learners: "2000+ Learners",

    whyCareer:
      "Data analytics helps businesses make smarter decisions using insights.",

    whoCanStudy: [
      { title: "Students & Freshers", desc: "Kickstart analytics careers." },
      { title: "Working Professionals", desc: "Upgrade analytical skills." }
    ],

    tools: [
      { name: "Excel", img: "/src/assets/tools/excel.png" },
      { name: "SQL", img: "/src/assets/tools/sql.png" },
      { name: "Power BI", img: "/src/assets/tools/powerbi.png" },
      { name: "Python", img: "/src/assets/tools/python.png" }
    ],

    modules: [
      { title: "Excel", topics: ["Functions", "Dashboards"] },
      { title: "SQL", topics: ["Queries", "Joins"] },
      { title: "Power BI", topics: ["DAX", "Reports"] },
      { title: "Python", topics: ["Pandas", "Visualization"] }
    ],

    syllabusPdf: "/syllabus/data-analytics.pdf",

    projects: "Analyze real datasets and build dashboards.",

    roles: ["Data Analyst", "Business Analyst"],

    companies: ["/src/assets/companies/company1.jpeg"],

    faq: [
      { q: "Is this beginner friendly?", a: "Yes, no prior experience required." }
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
     trustImage: "/images/trust/data-engineering.jpg",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Master MERN stack with DevOps tools.",
    duration: "6 Months",
    hours: 300,
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
      { name: "React", img: "/src/assets/tools/react.png" },
      { name: "Node.js", img: "/src/assets/tools/node.png" },
      { name: "MongoDB", img: "/src/assets/tools/mongodb.png" },
      { name: "Docker", img: "/src/assets/tools/docker.png" }
    ],

    modules: [
      { title: "Frontend", topics: ["HTML", "CSS", "React"] },
      { title: "Backend", topics: ["Node", "APIs"] },
      { title: "DevOps", topics: ["Docker", "CI/CD"] }
    ],

    syllabusPdf: "/syllabus/devstack.pdf",

    projects: "Build and deploy fullstack applications.",

    roles: ["Fullstack Developer", "DevOps Engineer"],

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
     trustImage: "/images/trust/data-engineering.jpg",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn HTML, CSS, JavaScript & React.",
    duration: "3 Months",
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

    tools: [
      { name: "HTML", img: "/src/assets/tools/html.png" },
      { name: "CSS", img: "/src/assets/tools/css.png" },
      { name: "JavaScript", img: "/src/assets/tools/javascript.png" },
      { name: "React", img: "/src/assets/tools/react.png" }
    ],

    modules: [
      { title: "Web Basics", topics: ["HTML", "CSS"] },
      { title: "JavaScript", topics: ["DOM", "Logic"] },
      { title: "React", topics: ["Components", "Hooks"] }
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
     trustImage: "/images/trust/data-engineering.jpg",

  // optional (for accessibility / SEO)
  trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Design user-centric digital products.",
    duration: "3 Months",
    hours: 150,
    mode: "Online + Offline",
    language: "English",
    rating: "4.7 / 5",
    learners: "900+ Learners",

    whyCareer:
      "UI/UX designers shape the digital experiences used by millions.",

    whoCanStudy: [
      { title: "Design Enthusiasts", desc: "Start a design career." },
      { title: "Developers", desc: "Add design skills." }
    ],

    tools: [
      { name: "Figma", img: "/src/assets/tools/figma.png" },
      { name: "Adobe XD", img: "/src/assets/tools/xd.png" }
    ],

    modules: [
      { title: "UX Basics", topics: ["Research", "Personas"] },
      { title: "UI Design", topics: ["Wireframes", "Prototypes"] }
    ],

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
     trustImage: "/images/trust/data-engineering.jpg",

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

    tools: [
      { name: "SEO", img: "/src/assets/tools/seo.png" },
      { name: "Google Ads", img: "/src/assets/tools/googleads.png" },
      { name: "Analytics", img: "/src/assets/tools/analytics.png" }
    ],

    modules: [
      { title: "SEO", topics: ["On-page", "Off-page"] },
      { title: "Paid Ads", topics: ["Google Ads", "Social Ads"] }
    ],

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
