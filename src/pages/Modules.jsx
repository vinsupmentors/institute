// src/pages/Modules.jsx
import React, { useState } from "react";
import "../styles/CoursePage.css";

export default function Modules({ modules }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Decide number of columns based on module count
  const count = modules.length;
  let columns = 1;

  if (count <= 5) columns = 1;
  else if (count <= 8) columns = 2;
  else columns = 3;

  return (
    <section className="modules-wrapper">
      <h2 className="section-title">Modules</h2>

      <div
        className="modules-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {modules.map((mod, i) => (
          <div
            key={i}
            className={`module-card ${openIndex === i ? "open" : ""}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="module-header">
              <h3>{mod.title}</h3>
              <span className="arrow">{openIndex === i ? "▲" : "▼"}</span>
            </div>

            {openIndex === i && (
              <div className="module-content">
                <ul>
                  {mod.topics.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
