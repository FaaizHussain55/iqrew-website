import "./Footer.scss";
import logoWhite from "../assets/images/iqrew-logo-white.png";
import { Link } from "react-router-dom";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";
import iconLinkedin from "../assets/icons/icon-linkedin.svg";
import iconYoutube from "../assets/icons/icon-youtube.svg";
import iconLocation from "../assets/icons/icon-location.svg";
import iconEmail from "../assets/icons/icon-email.svg";
import iconPhone from "../assets/icons/icon-phone.svg";
import iconChevronRight from "../assets/icons/icon-chevron-right.svg";

const quickLinks = ["Home", "About", "Courses", "FAQ", "Pricing", "Contact US"];

// Icon mapping for dynamic icon loading
const iconMap = {
  facebook: iconFacebook,
  twitter: iconTwitter,
  instagram: iconInstagram,
  linkedin: iconLinkedin,
  youtube: iconYoutube,
};

const socials = [
  { icon: "facebook", label: "Facebook", url: "https://facebook.com" },
  { icon: "twitter", label: "Twitter", url: "https://twitter.com" },
  { icon: "instagram", label: "Instagram", url: "https://instagram.com" },
  { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
  { icon: "youtube", label: "YouTube", url: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-upper">
          <div className="footer-column">
            <Link to="/" className="brand-logo" aria-label="iQrew Home">
              <img src={logoWhite} alt="iQrew Logo" />
            </Link>
            <p className="intro-text">
              Let Us build your career together Be the first person to transform yourself with our unique &amp; world class corporate level trainings.
            </p>
            <div className="newsletter">
              <label>Subscribe Our Newsletter</label>
              <form onSubmit={(event) => event.preventDefault()}>
                <input type="email" placeholder="Your Email address" required aria-label="Enter your email to subscribe" />
                <button className="btn-submit" type="submit" aria-label="Subscribe to newsletter">
                  <img src={iconChevronRight} alt="iQrew Logo" />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="column-title">
              Quick <span className="text-orange">Links</span>
            </h4>
            <div className="quick-links">
              {quickLinks.map((item) => (
                <a key={item} href="#home">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4 className="column-title">
              Contact <span className="text-orange">Us</span>
            </h4>
            <div className="contact-list">
              <div className="item">
                <img className="icon" src={iconLocation} alt="iQrew Logo" />
                <span className="text">Navakethan Complex, 6th Floor, 605, 606 A&P opp, CLock Tower, SD Road, Secunderabad, Telangana 500003</span>
              </div>
              <a className="item" href="mailto:info@iqrew.com">
                <img className="icon" src={iconEmail} alt="iQrew Logo" />
                <span className="text">info@iqrew.com</span>
              </a>
              <a className="item" href="tel:+478888899999">
                <img className="icon" src={iconPhone} alt="iQrew Logo" />
                <span className="text">+47 88888 99999</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-legal">
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer-socials">
            {socials.map((social) => (
              <a key={social.icon} href={social.url} aria-label={social.label} className="social-link" target="_blank" rel="noopener noreferrer">
                <img src={iconMap[social.icon]} alt={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
