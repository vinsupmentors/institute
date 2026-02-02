// src/components/CompaniesMarquee.jsx
import React from "react";
import "../styles/CompaniesMarquee.css";

export default function CompaniesMarquee({ logos }) {
  return (
    <div className="companies-section">
      <h2 className="companies-title">Companies Hiring</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {logos.map((logo, i) => (
          <div className="company-card" key={i}>
            <img src={logo} alt={`company-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
