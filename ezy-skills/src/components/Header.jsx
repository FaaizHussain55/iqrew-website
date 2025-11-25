import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/", isActive: false },
  { label: "Course Selector", path: "#courses", isActive: false },
  { label: "Courses", path: "/courses", isActive: false },
  { label: "Pricing", path: "/pricing", isActive: false },
  { label: "FAQ", path: "/faq", isActive: false },
  { label: "Contact US", path: "/contact", isActive: false },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="container header__container">
        <Link to="/" className="header__brand" aria-label="EZY Skills Home">
          <div className="brand__logo">
            <div className="logo__hexagon">
              <svg className="logo__cap-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L3 17L12 22L21 17L21 7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 7L12 12L21 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="brand__text">
            <span className="brand__title">EZY</span>
            <span className="brand__subtitle">SKILLS</span>
            <span className="brand__tagline">EMPOWER YOUR SKILLS</span>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const LinkComponent = link.path.startsWith("#") ? "a" : Link;
            const linkProps = link.path.startsWith("#") ? { href: link.path } : { to: link.path };

            return (
              <LinkComponent key={link.label} {...linkProps} className={`nav__link${isActive || link.isActive ? " nav__link--active" : ""}`}>
                {link.label}
              </LinkComponent>
            );
          })}
        </nav>

        <div className="header__actions">
          <Link to="/login" className="btn btn--ghost">
            Log In
          </Link>
          <Link to="/signup" className="btn btn--primary">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
}
