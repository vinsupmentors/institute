import React, { useEffect, useState } from "react";
import "./MarketingAlerts.css";

export default function MarketingAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbwe-3ZOvXCHxF8ZcMfp4kvP_59IQ-96UAM8QU461NbNcl-KyLg9U7090jLlCuX6gkGp/exec"
        );
        const data = await res.json();

        // safety check
        if (Array.isArray(data)) {
          setAlerts(data);
        } else {
          setAlerts([]);
        }
      } catch (err) {
        console.error("Marketing alerts fetch failed", err);
      }
    }

    fetchAlerts();
  }, []);

  useEffect(() => {
    if (!alerts.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % alerts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [alerts]);

  if (!alerts.length) return null;

  return (
    <section className="marketing-alerts">
      <span className="ma-dot" />
      <span className="ma-label">Live Updates</span>
      <span className="ma-text">
        {alerts[current].message}
      </span>
    </section>
  );
}
