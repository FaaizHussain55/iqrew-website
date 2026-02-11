import { useEffect } from "react";
import logo from "../assets/images/iqrew-logo.png";
import closeIcon from "../assets/icons/icon-close.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import "./Sidebar.scss";

const navLinks = [
  { label: "Why IQrew", path: "#why-iqrew" },
  { label: "How It Works", path: "#how-it-works" },
  { label: "Features", path: "#features" },
  { label: "Content Creation", path: "#content-creation" },
  { label: "Use Cases", path: "#use-cases" },
  { label: "FAQ", path: "#faq" },
];

export default function Sidebar({ isOpen, onClose }) {
  const isMobile = useIsMobile();

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Check viewport width directly at click time for accurate mobile detection
      const isMobileView = window.innerWidth < 768;
      const headerOffset = isMobileView ? 61 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close sidebar
    onClose();
  };

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
        <a
          href="#"
          className="sidebar-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
          }}
        >
          <img className="icon" src={logo} alt="iQrew Logo" />
        </a>
        <nav className="sidebar-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-actions">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn btn--md btn--orange"
          >
            Contact Us
          </a>
        </div>
      </aside>
    </>
  );
}
