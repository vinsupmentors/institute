import React, { useEffect, useState } from "react";
import "./UpcomingBatches.css";

export default function UpcomingBatches() {
  const [batches, setBatches] = useState([]);

  const quotes = [
    "Learn today, lead tomorrow.",
    "Skill up. Rise up.",
    "Small steps create big futures.",
    "Your future starts now.",
    "Every expert was once a beginner.",
    "Greatness begins with learning.",
    "You're closer than you think.",
    "Success begins with one decision.",
    "Grow your skills, grow your life."
  ];

  useEffect(() => {
    async function load() {
      const api =
        "https://script.google.com/macros/s/AKfycbwwYgbBP8jN6F30-F9hF5zyfjT_9L4omuGczYYU59ycPDqtWOXDNra4Slrf2fVyhaTV/exec";

      const resp = await fetch(api);
      const data = await resp.json();

      // Add quotes
      const withQuotes = data.map((item) => ({
        ...item,
        quote: quotes[Math.floor(Math.random() * quotes.length)],
      }));

      // Duplicate ENOUGH items to avoid break
      const repeated = [...withQuotes, ...withQuotes, ...withQuotes, ...withQuotes];

      setBatches(repeated);
    }

    load();
  }, []);

  return (
    <section className="upcoming-wrapper">
      <h2 className="section-title red-title">Upcoming Batches</h2>

      <div className="marquee">
        <div className="marquee-track">
          {batches.map((b, i) => (
            <div className="batch-card" key={i}>
              <h3 className="bc-title">{b.course_name}</h3>

              <div className="bc-row">
                <span>Starting Date:</span>
                <b>{b.start_date}</b>
              </div>

              <div className="bc-row">
                <span>Mode:</span>
                <b>{b.mode}</b>
              </div>

              <div className="bc-row">
                <span>Timing:</span>
                <b>{b.timing}</b>
              </div>

              <div className="bc-quote">"{b.quote}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
