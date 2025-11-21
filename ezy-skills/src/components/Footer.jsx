import './Footer.scss';

const quickLinks = [
  'Home',
  'Our Story',
  'Best Courses',
  "Your FAQ's",
  'Cancellation & Refunds',
  'Contact Us',
];

const socials = [
  { icon: 'facebook', label: 'Facebook', url: 'https://facebook.com' },
  { icon: 'twitter', label: 'Twitter', url: 'https://twitter.com' },
  { icon: 'instagram', label: 'Instagram', url: 'https://instagram.com' },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: 'youtube', label: 'YouTube', url: 'https://youtube.com' },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="logo__cap" />
          </div>
          <div>
            <p className="footer__intro">
              Let us build your career together. Be the first person to transform yourself with
              our unique &amp; world class corporate-level trainings.
            </p>
            <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your Email Address"
                required
                aria-label="Enter your email to subscribe"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                &gt;
              </button>
            </form>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#home">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                Navakehtan Complex, 6th Floor, 605-606 A&amp;F Opp, Clock Tower, SD Road,
                Secunderabad, Telangana 500003
              </li>
              <li>info@ezyskills.in</li>
              <li>+91 8428484903</li>
              <li>+91 9475484959</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__meta">
        <div className="meta__links">
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="meta__socials">
          {socials.map((social) => (
            <a key={social.icon} href={social.url} aria-label={social.label}>
              <span className={`icon icon--${social.icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
