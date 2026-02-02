// src/components/BlogMarquee.jsx
import React, { useEffect, useRef } from "react";
import "../styles/BlogMarquee.css";

export default function BlogMarquee({ items = [] }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // simple continuous scroll using transform animation
    let pos = 0;
    let raf;
    const speed = 0.5; // px per frame
    function step() {
      pos -= speed;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [items]);

  return (
    <div className="marquee-viewport">
      <div className="marquee-track" aria-hidden="true" ref={ref}>
        <div className="marquee-inner">
          {items.concat(items).map((it, i) => (
            <div className="marquee-item" key={`${it.slug}-${i}`}>
              {it.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
