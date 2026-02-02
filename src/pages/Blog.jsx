// src/pages/Blog.jsx
import React, { useEffect, useMemo, useState } from "react";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogGrid from "../components/BlogGrid";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import "../styles/Blog.css";
import CustomSelect from "../components/CustomSelect";

/*
  Replace with your deployed Apps Script /exec URL (if different)
*/
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVwzboGQdxKjR6V_My4deJNzHjCo5V4sJWvpJK36qxtowqHyOmUPW4Y5CekNPKTMVb/exec?sheet=Blogs";

// number of *older* posts to show per page (NOT counting featured)
const OLDER_PER_PAGE = 9;

function parseAndFormatDate(raw) {
  if (!raw) return "";
  if (raw instanceof Date && !isNaN(raw)) {
    return raw.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }
  const d = new Date(raw);
  if (!isNaN(d)) {
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }
  // fallback short substring
  return String(raw).slice(0, 16);
}

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI state
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(APPS_SCRIPT_URL)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        const arr = Array.isArray(data) ? data : [];
        const normalized = arr.map((r, idx) => {
          const heroArray = Array.isArray(r.heroImages)
            ? r.heroImages
            : r.heroImages
            ? String(r.heroImages).split(",").map(s => s.trim()).filter(Boolean)
            : [];
          const tags = (r.tags || r.Tags || "").toString().split(",").map(t => t.trim()).filter(Boolean);
          const published = String(r.published || r.Published || "").trim().toLowerCase() === "true" || r.published === true;
          const dateRaw = r.date || r.Date || r.dateRaw || "";
          return {
            id: r.id || r.ID || `row-${idx}`,
            slug: (r.slug || r.Slug || "").toString().trim(),
            title: r.title || r.Title || "",
            subtitle: r.subtitle || r.Subtitle || "",
            excerpt: r.excerpt || r.Excerpt || "",
            content: r.content || r.Content || "",
            author: r.author || r.Author || "",
            dateRaw,
            dateFormatted: parseAndFormatDate(dateRaw),
            tags,
            imageFolderId: r.imageFolderId || r.imageFolder || "",
            heroImages: heroArray,
            published
          };
        });

        // only published
        const publishedPosts = normalized.filter(p => p.published);

        // sort by dateRaw if possible (descending)
        publishedPosts.sort((a, b) => {
          const da = Date.parse(a.dateRaw) || 0;
          const db = Date.parse(b.dateRaw) || 0;
          return db - da;
        });

        setBlogs(publishedPosts);
      })
      .catch((err) => {
        console.error("Failed loading blogs:", err);
        setBlogs([]);
      })
      .finally(() => setLoading(false));

    return () => mounted = false;
  }, []);

  // tags list
  const tags = useMemo(() => {
    const s = new Set();
    blogs.forEach(b => (b.tags || []).forEach(t => s.add(t)));
    return Array.from(s).filter(Boolean);
  }, [blogs]);

  // filtering
  const filtered = useMemo(() => {
    const q = (search || "").toLowerCase().trim();
    return blogs.filter(b => {
      if (selectedTag && !(b.tags || []).includes(selectedTag)) return false;
      if (!q) return true;
      const hay = [
        b.title || "",
        b.subtitle || "",
        b.excerpt || "",
        b.content || "",
        (b.tags || []).join(" ")
      ].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [blogs, search, selectedTag]);

  // featured = first filtered post
  const featured = filtered.length ? filtered[0] : null;
  const olderAll = filtered.slice(featured ? 1 : 0);

  // pagination for older posts
  const totalPages = Math.max(1, Math.ceil(olderAll.length / OLDER_PER_PAGE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  const pagedOlder = olderAll.slice((page - 1) * OLDER_PER_PAGE, page * OLDER_PER_PAGE);

  if (loading) return <Loader />;

  return (
    <main className="blog-page-container">
      <div className="container inner-container">
        <h1 className="page-title">Latest Events</h1>
<div className="blog-search-filter">
  <input
    className="search-input"
    placeholder="Search blogs..."
    value={search}
    onChange={(e) => { setSearch(e.target.value); setPage(1); }}
  />

  <CustomSelect
    options={["All categories", ...tags]}
    value={selectedTag || "All categories"}
    placeholder="All categories"
    onChange={(val) => {
      setSelectedTag(val === "All categories" ? "" : val);
      setPage(1);
    }}
  />
</div>


        {featured && <FeaturedBlog post={featured} />}

        <h2 className="section-title">Other Events</h2>

        <section className="grid-section">
          <BlogGrid posts={pagedOlder} />
        </section>

        <Pagination page={page} setPage={setPage} totalItems={olderAll.length} perPage={OLDER_PER_PAGE} />
      </div>
    </main>
  );
}
