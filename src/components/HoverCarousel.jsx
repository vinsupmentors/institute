// src/components/HoverCarousel.jsx
import React, { useEffect, useState } from "react";
import "../styles/HoverCarousel.css";

export default function HoverCarousel({ images = [] }) {
  const [i, setI] = useState(0);

  useEffect(() => setI(0), [images]);

  useEffect(() => {
    if (!images.length) return;
    const t = setInterval(() => setI(x => (x + 1) % images.length), 1200);
    return () => clearInterval(t);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="hover-carousel">
      <img src={images[i]} alt={`preview-${i}`} onError={(e)=>e.target.style.display='none'} />
    </div>
  );
}
