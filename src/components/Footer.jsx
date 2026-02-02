import { Link } from "react-router-dom";
import courses from "../data/courses";


// simple inline SVG icons (no extra libs)
const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H8.08v-2.91h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.91h-2.1V22c4.78-.75 8.42-4.92 8.42-9.94Z" fill="currentColor"/>
  </svg>
);
const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer footer-gradient">
      <div className="footer-wrap">
        {/* Column 1: Brand + description + social */}
        <div className="f-col f-brand">
          <div className="f-brand-row">
            {/* <div className="f-brand-icon"></div> */}
            <h3 className="f-brand-name">Vinsup Skill Academy</h3>
          </div>
          <p className="f-desc">
            Empowering learners worldwide with cutting-edge education and personalized learning
            experiences. Join thousands who've transformed their careers with us.
          </p>

          <div className="f-subtitle">Follow Us</div>
          <div className="f-social">
            <a className="f-social-btn" href="#" aria-label="Facebook"><Facebook/></a>
            <a className="f-social-btn" href="#" aria-label="Instagram"><Instagram/></a>
          </div>
        </div>

        {/* Column 2: Courses (from data) */}
        <div className="f-col">
          <h4 className="f-head">Courses</h4>
          <ul className="f-list">
            {courses.map((c) => (
              <li key={c.slug}><Link to={`/courses?show=${encodeURIComponent(c.slug)}`}>{c.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="f-col">
          <h4 className="f-head">Company</h4>
          <ul className="f-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Our Mission</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="f-col">
          <h4 className="f-head">Support</h4>
          <ul className="f-list">
            <li><Link to="/faqs">Help Center</Link></li>
            <li><Link to="/faqs">Student Support</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 5: Get in Touch + Map */}
        <div className="f-col f-contact">
          <h4 className="f-head">Get in Touch</h4>
          <ul className="f-contact-list">
            <li> A,B, Gopalsamy, 140,<br/>Gopalsamy Koil St, Sridevi Nagar, Ganapathy, Coimbatore,<br/>Tamil Nadu 641006</li>
            <li> 8870060607</li>
            <li> hrvinsup@gmail.com</li>
          </ul>
          <div className="map-wrap">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0301951658284!2d76.97409037504568!3d11.036361389128652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85963b47c9905%3A0xccf88b0cf54e457e!2sVINSUP%20SKILL%20ACADEMY!5e0!3m2!1sen!2sin!4v1763537845307!5m2!1sen!2sin" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Institute Location"
            />
          </div>
        </div>
      </div>
       {/* Column 6: Location */}

      <div className="copyright">
        © {new Date().getFullYear()} Vinsup Skill Academy. All rights reserved.
      </div>

      {/* Floating action buttons (optional; looks like your reference) */}
      <a className="fab fab-whatsapp" href="https://wa.me/918870060607" target="_blank" rel="noreferrer" aria-label="WhatsApp">✆</a>
      <a className="fab fab-call" href="tel:+918870060607" aria-label="Call">📞</a>
    </footer>
  );
}
