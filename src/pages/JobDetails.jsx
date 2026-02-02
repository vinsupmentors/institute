import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LoadingContext } from "../components/LoadingContext";
import "./JobDetails.css";

const API_BASE =
  "https://script.google.com/macros/s/AKfycbyCf0PeSO60XHV2K0t6O6V_IZDgdjCqtovs4uqoJfLWpSizQwmRWOoaHjF8r75m8XbR/exec";

export default function JobDetails() {
  const { id } = useParams();
  const { setLoading } = useContext(LoadingContext);

  const [job, setJob] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(`${API_BASE}?action=getJobDetail&id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "Job not found") {
          setError("Job not found");
        } else {
          setJob(data);
        }
      })
      .catch(() => setError("Failed to load job details"))
      .finally(() => setLoading(false));
  }, [id, setLoading]);

  if (error) {
    return (
      <main className="job-details-page">
        <div className="section-inner job-not-found">
          <h2>{error}</h2>
          <Link to="/contact" className="btn-back">
            ← Back to Job Listings
          </Link>
        </div>
      </main>
    );
  }

  if (!job) return null; // loader will show, so no need to display anything

  return (
    <main className="job-details-page">
      <div className="section-inner">

        {/* Job Title */}
        <h1 className="job-title-detail">{job.title}</h1>

        {/* Metadata */}
        <div className="job-meta-detail">
          <p><b>📍 Location:</b> {job.location}</p>
          <p><b>🎓 Experience:</b> {job.experience}</p>
          <p><b>💰 Salary:</b> {job.salary}</p>
          <p><b>🕒 Job Type:</b> {job.type}</p>
        </div>

        {/* Description */}
        <h2 className="job-desc-title">Job Description</h2>
        <p className="job-full-desc">{job.fullDesc}</p>

        {/* Buttons */}
        <div className="job-buttons">
          <Link to={`/apply/${job.id}`} className="btn-apply">
            Apply Now →
          </Link>

          <Link to="/contact" className="btn-back">
            ← Back to Openings
          </Link>
        </div>
      </div>
    </main>
  );
}
