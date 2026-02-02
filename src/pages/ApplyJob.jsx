import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ApplyJob.css";

const WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbyCf0PeSO60XHV2K0t6O6V_IZDgdjCqtovs4uqoJfLWpSizQwmRWOoaHjF8r75m8XbR/exec";

export default function ApplyJob() {
  const { jobId } = useParams();

  const [jobTitle, setJobTitle] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  /* -----------------------------------------------------
     FETCH JOB TITLE
  ----------------------------------------------------- */
  useEffect(() => {
    fetch(`${WEBAPP_URL}?action=getJobDetail&id=${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.title) setJobTitle(data.title);
      })
      .catch((err) => console.error("Error fetching job:", err));
  }, [jobId]);

  /* -----------------------------------------------------
     SIMPLE CONFETTI ANIMATION
  ----------------------------------------------------- */
  function triggerConfetti() {
    const duration = 800;
    const end = Date.now() + duration;

    (function frame() {
      const colors = ["#c62839", "#7a003c", "#ffb703", "#06d6a0"];

      // 20 particles each frame
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "confetti";
        particle.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = "-10px";
        particle.style.opacity = 1;
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(particle);

        // fall animation
        setTimeout(() => {
          particle.style.top = "110%";
          particle.style.opacity = 0;
        }, 10);

        // remove after animation ends
        setTimeout(() => {
          particle.remove();
        }, duration + 600);
      }

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  /* -----------------------------------------------------
     CONVERT FILE → BASE64
  ----------------------------------------------------- */
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /* -----------------------------------------------------
     SUBMIT FORM
  ----------------------------------------------------- */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      if (!resumeFile) {
        setMsg("Please upload your resume");
        setLoading(false);
        return;
      }

      const base64 = await fileToBase64(resumeFile);

      let body = new URLSearchParams();
      body.append("action", "submitApplication");
      body.append("jobId", jobId);
      body.append("jobTitle", jobTitle);
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("experience", form.experience);
      body.append("resumeName", resumeFile.name);
      body.append("resumeBase64", base64);

      const res = await fetch(WEBAPP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const data = await res.json();

      if (data.status === "success") {
        setMsg("🎉 Application submitted successfully!");
        triggerConfetti();
        setShowSuccess(true);

        /* RESET FORM */
        setForm({
          name: "",
          email: "",
          phone: "",
          experience: "",
        });
        setResumeFile(null);
        document.querySelector("#resumeInput").value = "";

        // Remove success after 6 sec
        setTimeout(() => setShowSuccess(false), 6000);
      } else {
        setMsg("❌ Error: " + data.message);
      }
    } catch (err) {
      setMsg("❌ Something went wrong: " + err.message);
    }

    setLoading(false);
  }

  /* -----------------------------------------------------
     UI
  ----------------------------------------------------- */
  return (
    <div className="apply-page">
      <h2>Apply for {jobTitle || "Job"}</h2>

      <form className="apply-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <label>Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* PHONE */}
        <label>Phone</label>
        <input
          type="text"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* EXPERIENCE DROPDOWN */}
        <label>Experience</label>
        <select
          required
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
        >
          <option value="">Select Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="0–1 Years">0–1 Years</option>
          <option value="1–2 Years">1–2 Years</option>
          <option value="2–3 Years">2–3 Years</option>
          <option value="3–5 Years">3–5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>

        {/* FILE UPLOAD */}
        <label>Upload Resume (PDF/DOC)</label>
        <input
          id="resumeInput"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={(e) => setResumeFile(e.target.files[0])}
        />

        {/* SUBMIT */}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {msg && <p className="apply-message">{msg}</p>}
    </div>
  );
}
