import { useEffect } from "react";
import logo from "../assets/images/iqrew-logo.png";
import closeIcon from "../assets/icons/icon-close.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import { useLanguage } from "../contexts/LanguageContext";
import "./Sidebar.scss";

export default function Sidebar({ isOpen, onClose, isDarkTheme, onToggleTheme }) {
  const isMobile = useIsMobile();
  const { t, language, changeLanguage } = useLanguage();

  const navLinks = [
    { label: t("navigation.whyIqrew"), path: "#why-iqrew" },
    { label: t("navigation.howItWorks"), path: "#how-it-works" },
    { label: t("navigation.features"), path: "#features" },
    { label: t("navigation.contentCreation"), path: "#content-creation" },
    { label: t("navigation.useCases"), path: "#use-cases" },
    { label: t("navigation.faq"), path: "#faq" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Check viewport width directly at click time for accurate mobile detection
      const isMobileView = window.innerWidth < 768;
      const headerOffset = isMobileView ? 61 : 78;
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
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="link"
          >
            {t("navigation.contactUs")}
          </a>
        </nav>
        <div className="sidebar-actions">
          <div className="theme-switcher">
            <button
              className={`theme-btn ${!isDarkTheme ? 'active' : ''}`}
              onClick={() => {
                if (isDarkTheme) {
                  onToggleTheme();
                }
              }}
              aria-label="Switch to light theme"
              type="button"
            >
              Light
            </button>
            <button
              className={`theme-btn ${isDarkTheme ? 'active' : ''}`}
              onClick={() => {
                if (!isDarkTheme) {
                  onToggleTheme();
                }
              }}
              aria-label="Switch to dark theme"
              type="button"
            >
              Dark
            </button>
          </div>
          <div className="language-switcher">
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              aria-label="Switch to English"
              type="button"
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'de' ? 'active' : ''}`}
              onClick={() => changeLanguage('de')}
              aria-label="Switch to German"
              type="button"
            >
              DE
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
