// src/components/ToolsMarquee.jsx
import React from "react";
import "../styles/ToolsMarquee.css";

export default function ToolsMarquee({ tools = [] }) {
  if (!tools.length) return null;

  // Duplicate list for smooth infinite scroll
  const loopTools = [...tools, ...tools];

  return (
    <div className="tools-marquee">
      <div className="tools-track">
        {loopTools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img
              src={tool.img}
              alt={tool.name}
              className="tool-icon"
              loading="lazy"
            />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
