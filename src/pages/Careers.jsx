import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [jobs, setJobs] = useState([]);

  const API =
    "https://script.google.com/macros/s/AKfycbyCf0PeSO60XHV2K0t6O6V_IZDgdjCqtovs4uqoJfLWpSizQwmRWOoaHjF8r75m8XbR/exec?action=getJobs";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Job load error:", err));
  }, []);

  return (
    <main>
      {/* ===========================
          JOB OPENINGS
      ============================ */}
      <section className="section job-listings">
        <div className="section-inner">
          <h2 className="section-title">Current Job Openings</h2>

          {jobs.length === 0 ? (
            <p className="no-jobs">No openings available now.</p>
          ) : (
            <div className="job-cards-grid">
              {jobs.map((job) => (
                <div className="job-card" key={job.id}>
                  <h3 className="job-title">{job.title}</h3>

                  <div className="job-info">
                    <p><b>📍 Location:</b> {job.location}</p>
                    <p><b>🎓 Experience:</b> {job.experience}</p>
                    <p><b>💰 Salary:</b> {job.salary}</p>
                    <p><b>🕒 Type:</b> {job.type}</p>
                  </div>

                  <Link className="btn-read-more" to={`/jobs/${job.id}`}>
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
