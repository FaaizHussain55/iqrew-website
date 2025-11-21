import './Header.scss';

const navLinks = [
  { label: 'Home', href: '#home', isActive: false },
  { label: 'Course Selector', href: '#courses', isActive: true },
  { label: 'Courses', href: '#top-courses', isActive: false },
  { label: 'FAQ', href: '#faq', isActive: false },
  { label: 'Contact', href: '#contact', isActive: false },
  { label: 'About Us', href: '#about', isActive: false },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header__container">
        <a href="/" className="header__brand" aria-label="EZY Skills Home">
          <div className="brand__logo">
            <span className="logo__cap" />
            <span className="logo__cap-shadow" />
          </div>
          <div className="brand__text">
            <span className="brand__title">EZY</span>
            <span className="brand__subtitle">Skills</span>
          </div>
        </a>

        <nav className="header__nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav__link${link.isActive ? ' nav__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="btn btn--ghost">Log In</button>
          <button className="btn btn--primary">Create Account</button>
        </div>
      </div>
    </header>
  );
}
