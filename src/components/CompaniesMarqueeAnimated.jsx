// src/components/CompaniesMarqueeAnimated.jsx
import React, { useMemo } from "react";
import "../styles/CompaniesMarquee.css";

export default function CompaniesMarqueeAnimated({ logos = [] }) {
  const doubled = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <section className="companies-marquee" aria-label="Hiring partners">
      {[1, 2, 3].map((row) => (
        <div className="marquee-row" key={row}>
          <div
            className={`marquee-track ${
              row === 2
                ? "scroll-right"
                : row === 3
                ? "scroll-left-slow"
                : "scroll-left"
            }`}
          >
            {doubled.map((logo, i) => (
              <div className="marquee-card" key={`${row}-${i}`}>
                <img src={logo} alt="Hiring partner logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
