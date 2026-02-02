// src/components/FeaturedBlog.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

export default function FeaturedBlog({ post }) {
  const [index, setIndex] = useState(0);

  const images = Array.isArray(post.heroImages) ? post.heroImages : (post.heroImages ? [post.heroImages] : []);
  const hasImages = images.length > 0;

  // auto-advance
  useEffect(() => {
    if (!hasImages) return;
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [hasImages, images.length]);

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  return (
    <section className="featured-wrap">
      <div className="featured-left">
        {hasImages ? (
          <div className="featured-carousel">
            <img src={images[index]} alt="blog visual" className="featured-img" />
            {images.length > 1 && (
              <>
                <button className="carousel-nav left" onClick={prev} aria-label="prev">❮</button>
                <button className="carousel-nav right" onClick={next} aria-label="next">❯</button>
              </>
            )}
          </div>
        ) : (
          <div className="featured-placeholder">No Image</div>
        )}
      </div>

      <div className="featured-right">
        <h2 className="featured-title">{post.title}</h2>
        <p className="featured-sub">{post.subtitle}</p>
        <p className="meta">{post.dateFormatted} • {post.author}</p>
        
        <p className="featured-excerpt">{post.excerpt}</p>

        {/* <div className="tag-list">
          {(post.tags || []).map(t => <span className="tag-pill" key={t}>{t}</span>)}
        </div> */}
        <br />

        <Link to={`/blog/${post.slug}`} className="featured-btn">Read full article</Link>
      </div>
    </section>
  );
}
