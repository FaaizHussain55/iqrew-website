import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/iqrew-logo.png";
import closeIcon from "../assets/icons/icon-close.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import "./Sidebar.scss";

const navLinks = [
  { label: "Home", path: "/", isActive: false },
  { label: "Course Selector", path: "#courses", isActive: false },
  { label: "Courses", path: "/courses", isActive: false },
  { label: "Pricing", path: "/pricing", isActive: false },
  { label: "FAQ", path: "/faq", isActive: false },
  { label: "Contact US", path: "/contact", isActive: false },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close sidebar when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  // Only render on mobile
  if (!isMobile) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={`sidebar-backdrop ${isOpen ? "show" : ""}`} onClick={onClose} aria-hidden="true" />

      {/* Close Button */}
      <button className={`btn-close-sidebar ${isOpen ? "show" : ""}`} onClick={onClose} aria-label="Close sidebar" type="button">
        <img src={closeIcon} alt="" aria-hidden="true" />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`} aria-label="Mobile navigation menu" role="navigation">
        <Link to="/" className="sidebar-logo" onClick={onClose}>
          <img className="icon" src={logo} alt="iQrew Logo" />
        </Link>
        <nav className="sidebar-links" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const LinkComponent = link.path.startsWith("#") ? "a" : Link;
            const linkProps = link.path.startsWith("#") ? { href: link.path } : { to: link.path };

            return (
              <LinkComponent key={link.label} {...linkProps} className={`link${isActive || link.isActive ? " active" : ""}`} onClick={onClose}>
                {link.label}
              </LinkComponent>
            );
          })}
        </nav>
        <div className="sidebar-actions">
          <Link to="/login" className="btn btn--md btn-outline-orange" onClick={onClose}>
            Log In
          </Link>
          <Link to="/signup" className="btn btn--md btn--orange" onClick={onClose}>
            Create Account
          </Link>
        </div>
      </aside>
    </>
  );
}
