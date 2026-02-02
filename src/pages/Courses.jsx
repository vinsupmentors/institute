import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import courses from "../data/courses";
import MarketingAlerts from "../components/MarketingAlerts";
import UpcomingBatches from "./UpcomingBatches";
import QuickEnquiry from "../components/QuickEnquiry";

import "../styles/CoursesPremium.css";

/* =========================
   FILTER CONFIG
========================= */
const filters = [
  { label: "All", value: "all" },
  { label: "Data", value: "data" },
  { label: "Development", value: "dev" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" }
];

const courseFAQs = [
  {
    q: "Do I need prior experience to join these courses?",
    a: "No prior experience is required. Our courses start from fundamentals and gradually move to advanced, industry-level concepts."
  },
  {
    q: "Are the courses available online or offline?",
    a: "Yes. Most courses are available in Online, Offline, and Hybrid modes depending on the batch."
  },
  {
    q: "Will I get placement assistance?",
    a: "Yes. We provide resume building, mock interviews, and placement assistance for eligible candidates."
  },
  {
    q: "Do you provide recorded sessions?",
    a: "Yes. Recorded sessions are provided for revision and backup."
  },
  {
    q: "Can I attend a demo class?",
    a: "Absolutely. You can book a free demo session before enrolling."
  }
];


export default function Courses() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter(course => course.category === activeFilter);

  return (
    <main className="courses-premium">

      {/* =========================
          MARKETING ALERTS
      ========================== */}
      <MarketingAlerts />

      {/* =========================
          HERO
      ========================== */}
      <section className="courses-hero-premium">
        <h1>
          Build Your Career with <span>Industry-Ready Courses</span>
        </h1>
        <p>
          Learn from mentors. Work on real projects.
          Become job-ready — not just certified.
        </p>
      </section>
      <h2 className="courses-section-title">
  Explore Our Career Programs
</h2>

<p className="courses-section-subtitle">
  Choose a path, build skills, and get job-ready with industry-focused training.
</p>


      {/* =========================
          CATEGORY FILTERS
      ========================== */}
      <section className="courses-filters">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={activeFilter === filter.value ? "active" : ""}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </section>

      {/* =========================
          COURSES GRID
      ========================== */}
      <section className="courses-grid-premium">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.slug}
            className="course-card-premium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            {course.badge && (
              <span className="course-badge">
                {course.badge === "best-seller"
                  ? "🔥 Best Seller"
                  : "⭐ Popular"}
              </span>
            )}

            <h3>{course.title}</h3>
            <p className="course-short">{course.short}</p>

            <div className="course-meta">
              {course.duration && <span>⏳ {course.duration}</span>}
              {course.mode && <span>🎓 {course.mode}</span>}
            </div>

            {course.roles && (
              <ul className="course-outcomes">
                {course.roles.slice(0, 2).map((role, i) => (
                  <li key={i}>✔ {role}</li>
                ))}
              </ul>
            )}

            <div className="course-actions">
              <Link
                to={`/courses/${course.slug}`}
                className="btn-primary-premium"
              >
                View Course
              </Link>

              <a
                href={`/contact?course=${encodeURIComponent(course.title)}`}
                className="btn-secondary-premium"
              >
                Enquire
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* =========================
          UPCOMING BATCHES
      ========================== */}
      <UpcomingBatches />

      <section className="courses-faq">
  <div className="container">
    <h2 className="section-title">Frequently Asked Questions</h2>

    <div className="faq-list">
      {courseFAQs.map((item, index) => (
        <details key={index} className="faq-item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>


      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="courses-enquiry">
  <div className="container">
    <h2 className="section-title">Not Sure Which Course to Choose?</h2>
    <p className="section-sub">
      Talk to our course advisors and get personalized guidance.
    </p>

    <QuickEnquiry />
  </div>
</section>

    

    </main>
  );
}
