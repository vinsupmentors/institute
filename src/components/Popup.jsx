import React, { useEffect, useState } from "react";
import "./Popup.css";

const API_URL = "https://script.google.com/macros/s/AKfycbxwuzOZAzAo4WyWHg1hLmEKIPWcS8xUB6IzKofnVKkbvlowbSMWuHTYLX-KlNpC-S8y/exec"; // paste your Google Apps Script URL

export default function Popup() {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.imageUrl) {
          setImage(data.imageUrl);
          setShow(true);
        }
      } catch (err) {
        console.error("Popup error:", err);
      }
    }

    fetchImage();
  }, []);

  if (!show || !image) return null;

  return (
    <div className="popup-overlay" onClick={() => setShow(false)}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShow(false)}>✖</button>
        <img src={image} className="popup-image" alt="Popup Banner" />
      </div>
    </div>
  );
}
