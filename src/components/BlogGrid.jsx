// src/components/BlogGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

export default function BlogGrid({ posts = [] }) {
  if (!posts || posts.length === 0) {
    return <div className="blog-loading">No other events found.</div>;
  }

  return (
    <div className="blog-grid">
      {posts.map((p) => {
        const thumb =
          p.heroImages?.length > 0 ? p.heroImages[0] : "";

        return (
          <article className="blog-card" key={p.id || p.slug}>
            
            {/* IMAGE */}
            <div className="blog-card-img">
              {thumb ? (
                <img src={thumb} alt={p.title} />
              ) : (
                <div className="blog-card-placeholder">No Image</div>
              )}
            </div>

            {/* CONTENT */}
            <div className="blog-card-content">
              <h3 className="blog-card-title">{p.title}</h3>

              {p.subtitle && (
                <p className="blog-card-subtitle">{p.subtitle}</p>
              )}

              <div className="blog-card-row">
  <span className="blog-card-meta">
    {p.dateFormatted} • {p.author}
  </span>

  <Link to={`/blog/${p.slug}`} className="blog-card-read">
    Read 
  </Link>
</div>

            </div>
          </article>
        );
      })}
    </div>
  );
}
