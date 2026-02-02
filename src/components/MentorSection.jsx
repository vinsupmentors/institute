import React from "react";
import "./MentorSection.css";

export default function MentorSection({ mentor }) {
  if (!mentor) return null;

  return (
    <div className="course-section mentor-section">

      <h2 className="section-title">About The Mentor</h2>

      <div className="mentor-container">

        {/* LEFT SIDE — PHOTO */}
        <div className="mentor-left">
          <img
            src={mentor.photo}
            alt="mentor"
            className="mentor-photo"
          />
          {/* <div className="mentor-bg-text">{mentor.initials}</div> */}
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div className="mentor-right">

          <h3 className="mentor-name">{mentor.name}</h3>
          <p className="mentor-role">{mentor.title}</p>
          <p className="mentor-tagline">{mentor.tagline}</p>

          <div className="mentor-block">
            <h4>Profile Summary</h4>
            <p>{mentor.profile}</p>
          </div>

          <div className="mentor-block">
            <h4>Teaching Experience</h4>
            <p>{mentor.experience}</p>
          </div>

          <div className="mentor-block">
            <h4>Companies Worked With</h4>
            <div className="mentor-company-logos">
              {mentor.companies.map((logo, index) => (
                <img key={index} src={logo} alt="company" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
