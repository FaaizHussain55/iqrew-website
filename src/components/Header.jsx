import "./Header.scss";
import logo from "../assets/images/iqrew-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";
import { useIsMobile } from "../hooks/useIsMobile";

const navLinks = [
  { label: "Home", path: "/", isActive: false },
  { label: "Course Selector", path: "#courses", isActive: false },
  { label: "Courses", path: "/courses", isActive: false },
  { label: "Pricing", path: "/pricing", isActive: false },
  { label: "FAQ", path: "/faq", isActive: false },
  { label: "Contact US", path: "/contact", isActive: false },
];

// Map of pathname to class to apply when at top
const topPageClasses = {
  "/pricing": "temp-blue-backdrop",
  "/faq": "temp-orange-backdrop",
  "/contact": "temp-orange-backdrop",
};

export default function Header() {
  const location = useLocation();
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const headerRef = useRef(null);
  const isMobile = useIsMobile();

  const handleToggleMenu = () => {
    setIsMenuToggled((prev) => !prev);
  };

  const handleCloseMenu = () => {
    if (isMobile) {
      setIsMenuToggled(false);
    }
  };

  useEffect(() => {
    const header = headerRef.current || document.querySelector(".site-header");
    if (!header) return;

    if (isMenuToggled) {
      header.classList.add("toggled-menu");
    } else {
      header.classList.remove("toggled-menu");
    }
  }, [isMenuToggled]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".site-header");
      if (!header) return;

      const { pathname } = location;

      // Add 'scrolled' class if scrolled more than 50px
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Remove all possible top-page classes first
      Object.values(topPageClasses).forEach((cls) => header.classList.remove(cls));

      // Add the class corresponding to pathname if scrollY === 0
      if (window.scrollY <= 50 && topPageClasses[pathname]) {
        header.classList.add(topPageClasses[pathname]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount to check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header ref={headerRef} className="site-header temp-orange-backdrop">
      <div className="container">
        <div className="header-flex">
          <Link to="/" className="brand-logo" aria-label="iQrew Home">
            <img src={logo} alt="iQrew Logo" />
          </Link>
          <nav className="header-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const LinkComponent = link.path.startsWith("#") ? "a" : Link;
              const linkProps = link.path.startsWith("#") ? { href: link.path } : { to: link.path };

              return (
                <LinkComponent
                  key={link.label}
                  {...linkProps}
                  className={`nav__link${isActive || link.isActive ? " nav__link--active" : ""}`}
                  onClick={handleCloseMenu}
                >
                  {link.label}
                </LinkComponent>
              );
            })}
            {isMobile && (
              <div className="header-actions">
                <Link to="/login" className="btn btn--md btn-outline-orange" onClick={handleCloseMenu}>
                  Log In
                </Link>
                <Link to="/signup" className="btn btn--md btn--orange" onClick={handleCloseMenu}>
                  Create Account
                </Link>
              </div>
            )}
          </nav>
          {!isMobile && (
            <div className="header-actions">
              <Link to="/login" className="btn btn--md btn-outline-orange">
                Log In
              </Link>
              <Link to="/signup" className="btn btn--md btn--orange">
                Create Account
              </Link>
            </div>
          )}
          {isMobile && (
            <button className="btn-hamburger" onClick={handleToggleMenu}>
              <img src={hamburgerIcon} alt="Menu" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
