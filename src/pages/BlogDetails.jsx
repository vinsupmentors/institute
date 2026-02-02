import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";
import Loader from "../components/Loader";

export default function BlogDetails() {
  const { slug } = useParams();
  const API_URL =
    "https://script.google.com/macros/s/AKfycbzVwzboGQdxKjR6V_My4deJNzHjCo5V4sJWvpJK36qxtowqHyOmUPW4Y5CekNPKTMVb/exec";

  const [blog, setBlog] = useState(null);
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  // ---------------------------
  // Fetch Blog + Clean URLs
  // ---------------------------
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.slug === slug);

        if (found) {
          console.log("FOUND BLOG:", found);
          console.log("RAW IMAGES:", found.heroImages);

          const cleaned = (found.heroImages || [])
            .map((url) => {
              if (!url) return null;

              let clean = url.trim();

              // ❗ Remove ONLY Cloudinary timestamp tracking (&t=xxxx)
              if (clean.includes("&t=")) {
                clean = clean.substring(0, clean.indexOf("&t="));
              }

              // ❗ DO NOT modify extension — DO NOT add .png  
              // ❗ Cloudinary works only with the ORIGINAL URL

              return clean;
            })
            .filter((u) => u);

          console.log("CLEANED IMAGES:", cleaned);

          setBlog(found);
          setImages(cleaned);
        }

        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  // ---------------------------
  // Auto-slide every 3 seconds
  // ---------------------------
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  if (loading) return <Loader />;
  if (!blog) return <div className="blog-notfound">Blog not found…</div>;

  const formattedDate = new Date(blog.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="blog-details-container">
      <Link to="/blog" className="back-btn">← Back to Blogs</Link>

      <h1 className="blog-title">{blog.title}</h1>

      <div className="blog-meta">
        {formattedDate} • {blog.author}
      </div>

      {/* -------------------------
           HERO IMAGE CAROUSEL
         ------------------------- */}
      {images.length > 0 && (
        <div className="carousel-wrapper">

          <button
            className="carousel-btn left"
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
          >
            ❮
          </button>

          <div className="carousel-container">
            <img
              src={images[current]}
              className="carousel-image"
              alt="blog visual"
            />
          </div>

          <button
            className="carousel-btn right"
            onClick={() =>
              setCurrent((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
          >
            ❯
          </button>

        </div>
      )}

      {/* Blog Content */}
      <div className="blog-content">{blog.content}</div>
    </div>
  );
}
