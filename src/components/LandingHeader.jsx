import "./Header.scss";
import logo from "../assets/images/iqrew-logo.png";
import { useEffect, useState } from "react";
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import { useLanguage } from "../contexts/LanguageContext";
import Sidebar from "./Sidebar";

export default function LandingHeader() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Get theme from localStorage or default to false (light theme)
    const savedTheme = localStorage.getItem('iqrew-theme');
    return savedTheme === 'dark';
  });
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

  const handleToggleMenu = () => {
    setIsMenuToggled((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuToggled(false);
  };

  const handleToggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('iqrew-theme', newTheme ? 'dark' : 'light');
    
    // Update HTML data-theme attribute
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

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

    // Close mobile menu if open
    if (isMobile) {
      setIsMenuToggled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      if (!header) return;

      // Add 'scrolled' class if scrolled more than 50px
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount to check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkTheme]);

  // Intersection Observer for active section detection
  useEffect(() => {
    const sectionPaths = ["#why-iqrew", "#how-it-works", "#features", "#content-creation", "#use-cases", "#faq"];
    const sections = sectionPaths.map((path) => {
      const id = path.replace("#", "");
      return document.getElementById(id);
    }).filter(Boolean);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in upper portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      // Find the entry that is currently intersecting
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);
      
      if (intersectingEntry) {
        setActiveSection(intersectingEntry.target.id);
      } else {
        // If no section is intersecting, check which section is closest to the top
        const scrollPosition = window.scrollY;
        let closestSection = null;
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.pageYOffset;
          const distance = Math.abs(sectionTop - scrollPosition);

          if (sectionTop <= scrollPosition + 100 && distance < closestDistance) {
            closestDistance = distance;
            closestSection = section.id;
          }
        });

        if (closestSection) {
          setActiveSection(closestSection);
        } else if (scrollPosition < 100) {
          // If at the very top and no section is visible, clear active state
          setActiveSection("");
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Initial check on mount
    const checkInitialSection = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector(".home-hero");
      
      if (heroSection && scrollPosition < 100) {
        // If at top and hero section is visible, no nav link should be active
        setActiveSection("");
      }
    };
    
    // Small delay to ensure DOM is ready
    setTimeout(checkInitialSection, 100);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header-flex">
            <a
              href="#"
              className="brand-logo"
              aria-label={t("aria.iqrewHome")}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={logo} alt="iQrew Logo" />
            </a>
            {!isMobile && (
              <>
                <nav className="header-nav" aria-label="Primary navigation">
                  {navLinks.map((link) => {
                    const sectionId = link.path.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <a
                        key={link.label}
                        href={link.path}
                        onClick={(e) => handleNavClick(e, link.path)}
                        className={`nav__link${isActive ? " nav__link--active" : ""}`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="nav__link"
                  >
                    {t("navigation.contactUs")}
                  </a>
                </nav>
                <div className="header-actions">
                  <button
                    className="theme-toggle-btn"
                    onClick={handleToggleTheme}
                    aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
                    type="button"
                    title={isDarkTheme ? "Light mode" : "Dark mode"}
                  >
                    {isDarkTheme ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                      </svg>
                    )}
                  </button>
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
              </>
            )}
            {isMobile && (
              <button
                className="btn-hamburger"
                onClick={handleToggleMenu}
                aria-label={isMenuToggled ? t("aria.closeMenu") : t("aria.openMenu")}
                aria-expanded={isMenuToggled}
                type="button"
              >
                <img src={hamburgerIcon} alt="" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </header>
      {isMobile && <Sidebar isOpen={isMenuToggled} onClose={handleCloseMenu} isDarkTheme={isDarkTheme} onToggleTheme={handleToggleTheme} />}
    </>
  );
}