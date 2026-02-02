const content = {
  brandName: "Vinsup Skill Academy",

  hero: {
  tagline: "Job-ready training with live projects and mentors from industry.",
  description:
    "Hands-on learning paths designed for students and working professionals. Master real tools, practise on projects, and present confidently in interviews.",
  ctas: [
    { label: "View Courses", to: "/courses", type: "primary" },
    { label: "Book Free Demo", to: "/contact?demo=1", type: "outline" }
  ],
  media: {
    // we use gallery for this hero version
    gallery: [
      "/src/assets/hero/1.jpg",
      "/src/assets/hero/2.jpg",
      "/src/assets/hero/3.jpg",
      "/src/assets/hero/4.jpg",
      "/src/assets/hero/5.jpg",
      "/src/assets/hero/6.jpg"
    ]
  }
},


  highlights: [
    { label: "2000+ Students Trained" },
    { label: "95% Placement Rate" },
    { label: "50+ Industry Mentors" }
  ],

  // hours: default 150; exceptions 300 for two courses
  courses: [
    { slug: "data-analytics", title: "Data Analytics", blurb: "Excel to BI dashboards", mode: ["Online","Offline"] },
    { slug: "digital-marketing", title: "Digital Marketing", blurb: "SEO, Ads & Automation", mode: ["Online","Offline"] },
    { slug: "frontend", title: "Front-end Development", blurb: "HTML, CSS, JS, React", mode: ["Online","Offline"] },
    { slug: "ui-ux-design", title: "UX UI Designing", blurb: "Figma, Wireframes, Prototypes", mode: ["Online","Offline"] },
    { slug: "data-verse-pro", title: "Data Verse Pro", blurb: "Data Eng + Cloud foundations", mode: ["Online","Offline"], hours: 300 },
    { slug: "devstack-fullstack-devops", title: "DevStack – Fullstack with DevOps", blurb: "MERN + CI/CD pipelines", mode: ["Online","Offline"], hours: 300 }
  ],

  defaults: {
    hours: 150, // applied to all courses unless overridden
    hoursLabel: (h) => `${h} Hours Training`
  }
};

export default content;
