// File: src/hooks/useImageCarousel.js

import { useState, useEffect } from "react";

// Use your actual deployed Apps Script URL here
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzLStB_5ZL5qlK4OJ3VmA1m9rbZraJtlFKuYAUfozXL2AUBxA3JLgCEMEXlL85knHK8/exec";

export const useImageCarousel = (interval = 4000) => {
  const [sheetImages, setSheetImages] = useState([]);
  const [slide, setSlide] = useState(0);

  // 1. Fetch Images
  useEffect(() => {
    fetch(SCRIPT_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSheetImages(data);
          console.log(`Drive images loaded: Array(${data.length})`);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((err) => console.error("Error loading Drive images:", err));
  }, []);

  // 2. Auto-slide timer
  useEffect(() => {
    if (sheetImages.length === 0) return;
    
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % sheetImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [sheetImages, interval]);

  return { sheetImages, slide };
};