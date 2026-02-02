import React from "react";
import "./Preloader.css";
import logo from "../assets/logo.png"; // ✅ import image from src/assets

export default function Preloader() {
  return (
    <div className="preloader-container">
      <img src={logo} className="preloader-image" alt="Loading..." />
    </div>
  );
}
