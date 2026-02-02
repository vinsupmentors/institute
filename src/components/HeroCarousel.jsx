// src/components/HeroCarousel.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/HeroCarousel.css";

export default function HeroCarousel({ images = [] }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Auto slide every 4.5 seconds
    timer.current = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer.current);
  }, [images]);

  if (!images || images.length === 0) {
    return <div style={{ height: 360, background: "#f3f4f6" }} />;
  }

  return (
    <div className="hc-root">
      <div className="hc-inner">

        {images.map((item, i) => (
          <img
            key={i}
            src={item.image}     // <-- FIXED HERE
            alt={`slide-${i}`}
            className={`hc-slide ${i === idx ? "active" : ""}`}
            loading="lazy"
          />
        ))}

      </div>
    </div>
  );
}
