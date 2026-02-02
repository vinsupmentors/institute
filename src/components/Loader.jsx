import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 15;
      if (value >= 100) value = 100;
      setProgress(Math.floor(value));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="full-loader">
      <div className="loader-box">
        <div className="loader-title">Loading… {progress}%</div>
        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
