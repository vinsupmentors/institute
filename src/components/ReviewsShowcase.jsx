import { useMemo, useRef, useState, useEffect } from "react";


/* ⭐ Golden star icon */
const Star = ({ filled = false, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
    <path d="M12 2l3.09 6.3 6.95 1.01-5.02 4.9 1.18 6.88L12 18.77 5.8 21.1l1.18-6.88L2 9.31l6.91-1.01L12 2z"/>
  </svg>
);

/* ⭐ Rating row (example: 4.7 keeps 4 full + 1 half star look) */
const StarsRow = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.25 && rating - full < 0.85;
  return (
    <div className="rv-stars-row">
      {Array.from({ length: 5 }).map((_, i) =>
        i < full ? (
          <Star key={i} filled />
        ) : i === full && half ? (
          <Star key={i} filled />
        ) : (
          <Star key={i} />
        )
      )}
      <span className="rv-score">{rating.toFixed(1)} / 5</span>
    </div>
  );
};

export default function ReviewsShowcase({
  title = "What students say",
  rating = 4.7,
  reviews = [],
}) {
  // Guarantee exactly 18 items
  const data = useMemo(() => {
    const base = reviews.slice(0, 12);
    while (base.length < 12) {
      base.push({
        name: "Student",
        rating: 5,
        text: "Great learning experience with supportive mentors.",
      });
    }
    return base;
  }, [reviews]);

  const perSlide = 3; // ⬅️ 6 cards at a time
  const totalSlides = Math.ceil(data.length / perSlide);
  const [slide, setSlide] = useState(0);
  // Auto-slide every 5 seconds
useEffect(() => {
  const id = setInterval(() => {
    setSlide((s) => (s + 1) % totalSlides);
  }, 5000); // 5000ms = 5 seconds
  return () => clearInterval(id);
}, [totalSlides]);


  const clamp = (n) => Math.max(0, Math.min(totalSlides - 1, n));
  const goNext = () => setSlide((s) => clamp(s + 1));
  const goPrev = () => setSlide((s) => clamp(s - 1));
  const viewMore = () => goNext();

  // Touch / swipe controls
  const startX = useRef(0);
  const deltaX = useRef(0);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { deltaX.current = e.touches[0].clientX - startX.current; };
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 60) deltaX.current < 0 ? goNext() : goPrev();
  };

  // Prepare grouped slides
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    slides.push(data.slice(i * perSlide, i * perSlide + perSlide));
  }

  return (
    <section className="reviews section section--full" aria-label="Student Reviews">
      <div className="section-inner">

        <h2 className="section-title">{title}</h2>

        <div className="rv-header">
          <StarsRow rating={rating} />
          <p className="section-desc">Real feedback from students who trained with us.</p>
        </div>

        <div
          className="rv-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="rv-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {slides.map((group, gi) => (
              <div className="rv-slide" key={gi}>
                {group.map((r, i) => (
                  <article className="rv-card" key={i}>
                    <header className="rv-card-head">
                     {r.photo ? (
  <img className="rv-avatar-img" src={r.photo} alt={r.name} />
) : (
  <div className="rv-avatar">{r.name?.charAt(0) || "S"}</div>
)}

                      <div>
                        <div className="rv-name">{r.name}</div>
                        <div className="rv-mini-stars">
                          {Array.from({ length: 5 }).map((_, k) => (
                            <span key={k} className={k < Math.round(r.rating) ? "on" : ""}>★</span>
                          ))}
                        </div>
                      </div>
                    </header>
                    <p className="rv-text">{r.text}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>

          <button className="rv-nav prev" onClick={goPrev} disabled={slide === 0}>‹</button>
          <button className="rv-nav next" onClick={goNext} disabled={slide === totalSlides - 1}>›</button>
        </div>
{/* 
        <div className="rv-actions">
          {slide < totalSlides - 1 ? (
            <button className="btn-primary" onClick={viewMore}>View more</button>
          ) : (
            <button className="btn-outline" onClick={() => setSlide(0)}>Back to start</button>
          )}
        </div> */}

      </div>
    </section>
  );
}
