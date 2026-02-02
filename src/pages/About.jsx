import React ,{useEffect} from "react";
import Counter from "../components/Counter";
import QuickEnquiry from "../components/QuickEnquiry";
import "./About.css";

export default function About() {
 useEffect(() => {
  const steps = document.querySelectorAll("[data-step]");

  // Make first step active initially
  if (steps.length > 0) {
    steps[0].classList.add("is-active");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          steps.forEach((s) => s.classList.remove("is-active"));
          entry.target.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.55, // smoother switching
    }
  );

  steps.forEach((step) => observer.observe(step));

  return () => observer.disconnect();
}, []);

  return (
    <main>

      {/* =========================================
          SECTION 1 — HERO (Tagline + Image)
      ========================================== */}
      <section className="about-hero" aria-label="About us hero">
        <div className="about-hero-inner">

          {/* Left - Text */}
          <div className="about-hero-content">
            <h2>The Preeminent Institute for IT Training in Coimbatore </h2>
            <p className="hero-lead">
             The Vinsup Skill Academy in Ganapathy Coimbatore offers more than simply a means of achieving certification; it provides an entire ecosystem for professional skill development. Whilst many institutions will only teach you content applicable to your specific subject area, here we prepare learners to be successful by providing them with industry-specific training that prepares them for the real world. Our model of education focuses heavily on outcomes; however, we believe that there should be an underlying philosophy behind our approach. Therefore when we deliver practical training it is always delivered by experienced mentors who understand and have experienced their own successes within these industries.
            </p>

            <div className="about-hero-ctas">
              <a className="btn-primary" href="/courses">Explore Courses</a>
              <a className="btn-outline" href="/contact">Contact Us</a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="about-hero-image">
            {/* <img
              src="/src/assets/about/hero.jpg"
              alt="About Vinsup Skill Academy"
            /> */}
            <img src="https://img.freepik.com/free-photo/sunset-snow-capped-mountains_23-2152014205.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
          </div>

        </div>
      </section>

{/* ====================================================
    SECTION — Mission & Vision (Two Column Layout)
==================================================== */}
<div className="about-copy">

  <div className="about-card">
    <h3 className="about-card-title">Our Mission</h3>
    <p>
      The Vinsup Skill Academy’s mission is to give students and working
      professionals essential job-ready and industry-current skills.
      We bridge the gap between academics and real-world expectations
      through hands-on training, live projects, and mentorship.
    </p>
  </div>

  <div className="about-card">
    <h3 className="about-card-title">Our Vision</h3>
    <p>
      Our vision is to become the most recognized skill development academy
      in Coimbatore, creating future-ready professionals and ensuring every
      learner finds successful employment after completing training.
    </p>
  </div>

</div>

{/* story section */}
        <section className="story-section" aria-label="Our Story">
  <div className="story-inner">

    {/* Story Image */}
    <div className="story-media">
      <img
        src="https://rukminim2.flixcart.com/image/480/480/k612pow0/poster/d/h/z/medium-tom-and-jerry-cartoon-poster-high-resolution-p41915-original-imafzh3zzcymbyzk.jpeg?q=90"
        alt="Our Story"
      />
    </div>

    {/* Story Content */}
    <div className="story-flow">

      <h2 className="story-title">Our Story</h2>

      <div className="story-step" data-step>
        <span className="story-marker">01</span>
        <p>
          Comprehensive Skill Training: Professional training in Full Stack Development or Data Analytics or UI/UX, consisting of multiple content modules.
        </p>
      </div>

      <div className="story-step" data-step>
        <span className="story-marker">02</span>
        <p>
           Internship Certification: This provides you with a professional credential to enhance your resume.
        </p>
      </div>

      <div className="story-step" data-step>
        <span className="story-marker">03</span>
        <p>
          Actual Work Experience: We prepare you to move from being a student to being a professional.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* ================================================
          SECTION 4 — Our Values (Grid)
      ================================================= */}
      <section className="why-choose section section--full" aria-label="Our Values">
        <div className="section-inner">
          <h2 className="section-title">Our Values</h2>
          <p className="section-desc">
            These core principles define our approach to teaching and guide everything we do.
          </p>

          <div className="wc-grid">

            <article className="wc-card">
              <h3 className="wc-title">Final Year Internships </h3>
              <p className="wc-text">
               Our final year students are welcome to complete internship training with us, including completing reports for their final year project. In this manner, you receive a formal degree and also develop a comprehensive professional portfolio while attending our classes
                
              </p>
            </article>

            <article className="wc-card">
              <h3 className="wc-title">Industry-Relevant Curriculum</h3>
              <p className="wc-text">
            Vinsup Skill Academy continuously updates all of its training modules to ensure that you develop the necessary 100-hour job readiness skills that employers today seek. We offer courses on full stack development, data analytics using AI technology, digital marketing, and UI/UX design, among others.
              </p>
            </article>

            <article className="wc-card">
              <h3 className="wc-title">Mentorship</h3>
              <p className="wc-text">
                Students receive continuous support, review, and guidance from industry experts.
              </p>
            </article>

           

          </div>
        </div>
      </section>






{/* =================================================
    SECTION — Leadership Team (2 per row)
================================================= */}
<section className="why-choose section" aria-label="Leadership Team">
  <div className="section-inner">

    <h2 className="section-title">Leadership Team</h2>

    <div className="team-grid-2">

      {/* Team Member 1 */}
      <div className="team-card">
        <div className="team-photo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s" alt="Founder" />
        </div>
        <h3 className="team-name">Founder Name</h3>
        <p className="team-role">Founder & CEO</p>
        <p className="team-exp">12+ Years Experience</p>
      </div>

      {/* Team Member 2 */}
      <div className="team-card">
        <div className="team-photo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s" alt="Co-Founder" />
        </div>
        <h3 className="team-name">Co-Founder Name</h3>
        <p className="team-role">Co-Founder</p>
        <p className="team-exp">10+ Years Experience</p>
      </div>

      {/* Team Member 3 */}
      <div className="team-card">
        <div className="team-photo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s" alt="Training Lead" />
        </div>
        <h3 className="team-name">Training Lead</h3>
        <p className="team-role">Senior Instructor</p>
        <p className="team-exp">8+ Years Experience</p>
      </div>

     

    </div>
  </div>
</section>



     {/* ===========================
   CAMPUS GALLERY (inline styles)
   =========================== */}
<section className="section section--full gallery-section" aria-label="Campus Gallery">
  <div className="section-inner">

    <h2 className="section-title" style={{ textAlign: "center" }}>Campus Gallery</h2>

    <div
      className="gallery-grid-fixed"
     
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="gallery-item"
         
        >
          <img
            src={`/src/assets/gallery/${i + 1}.jpg`}
            alt={`Campus ${i + 1}`}
           
          />
        </div>
      ))}
    </div>

  </div>
</section>


      {/* =================================================
          SECTION 8 — Quick Enquiry CTA
      ================================================= */}
      <section className="ql">
        <div className="section-inner">
          <h2 className="section-title">Quick Enquiry</h2>
          <QuickEnquiry />
        </div>
      </section>

    </main>
  );
}
