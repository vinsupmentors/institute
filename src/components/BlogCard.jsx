// src/components/BlogCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HoverCarousel from "./HoverCarousel";
import "../styles/BlogCard.css";

export default function BlogCard({ post }) {
  const [hover, setHover] = useState(false);

  // choose image
  const thumb = (post.heroImages && post.heroImages[0]) || post.heroImage || "";

  return (
    <article
      className="blog-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="thumb-wrap">
        {thumb ? (
          <img src={thumb} alt={post.title} className="card-thumb" onError={(e)=>e.target.style.display='none'} />
        ) : (
          <div className="card-thumb placeholder">No image</div>
        )}

        {hover && post.heroImages && post.heroImages.length > 0 && (
          <div className="hover-layer">
            <HoverCarousel images={post.heroImages} />
          </div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <div className="card-meta">{post.dateFormatted} • {post.author}</div>
        <p className="card-excerpt">{post.excerpt}</p>
        <div className="card-tags">
          {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <Link to={`/blog/${post.slug}`} className="card-link">Read</Link>
      </div>
    </article>
  );
}
