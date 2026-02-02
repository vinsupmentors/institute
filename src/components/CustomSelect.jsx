import React, { useState, useRef, useEffect } from "react";
import "./CustomSelect.css";

export default function CustomSelect({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="cs-container" ref={ref}>
      <div className="cs-selected" onClick={() => setOpen(!open)}>
        {value || placeholder}
        <span className="cs-arrow">▼</span>
      </div>

      {open && (
        <div className="cs-dropdown">
          {options.length === 0 && (
            <div className="cs-item cs-empty">No options</div>
          )}

          {options.map((opt) => (
            <div
              key={opt}
              className={`cs-item ${value === opt ? "active" : ""}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
