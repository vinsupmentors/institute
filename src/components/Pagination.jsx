// src/components/Pagination.jsx
import React from "react";
import "../styles/Blog.css";

export default function Pagination({ page, setPage, totalItems, perPage }) {
  if (!totalItems || totalItems <= perPage) return null;

  const totalPages = Math.ceil(totalItems / perPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="pagination">
      <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="page-btn">Prev</button>

      {pages.map(p => (
        <button
          key={p}
          className={`page-number ${p === page ? "active" : ""}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}

      <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="page-btn">Next</button>
    </div>
  );
}
