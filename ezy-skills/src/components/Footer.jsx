import './Footer.scss';

const quickLinks = [
  'Home',
  'Our Story',
  'Best Courses',
  "Your FAQ's",
  'Cancellation & Refunds',
  'Contact US',
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
        <div className="footer__column footer__column--brand">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="logo__hexagon">
                <svg className="logo__cap-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 7L3 17L12 22L21 17L21 7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 7L12 12L21 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="footer__brand-text">
              <div className="footer__brand-title">EZY SKILLS</div>
              <div className="footer__brand-tagline">EMPOWER YOUR SKILLS</div>
            </div>
          </div>
          <p className="footer__intro">
            Let Us build your career together Be the first person to transform yourself with
            our unique &amp; world class corporate level trainings.
          </p>
          <div className="newsletter-section">
            <label className="newsletter__label">Subscribe Our Newsletter</label>
            <form className="newsletter" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email address"
                required
                aria-label="Enter your email to subscribe"
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="footer__column">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((item) => (
              <li key={item}>
                <a href="#home">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Navakethan Complex, 6th Floor, 605, 606 A&amp;P opp, CLock Tower, SD Road,
              Secunderabad, Telangana 500003
            </li>
            <li>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              info@ezyskills.in
            </li>
            <li>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3528 21.3992C21.1483 21.5857 20.9074 21.7262 20.6446 21.8117C20.3819 21.8972 20.1035 21.9259 19.83 21.896C16.7428 21.5856 13.787 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22001 12.85C3.50341 10.2412 2.44826 7.27099 2.14001 4.17C2.11011 3.89697 2.13877 3.61923 2.22418 3.35719C2.30959 3.09515 2.4499 2.85502 2.6362 2.65158C2.8225 2.44813 3.05065 2.28562 3.3055 2.175C3.56036 2.06437 3.83597 2.00808 4.11401 2.01H7.11401C7.59377 1.99522 8.06806 2.16708 8.43399 2.49C8.79993 2.81292 9.03026 3.26392 9.08001 3.75C9.18628 4.68064 9.44553 5.58666 9.84401 6.43C10.0026 6.79113 10.0635 7.19159 10.02 7.586C9.97652 7.98041 9.83026 8.35464 9.59801 8.67L8.08801 10.18C9.51315 12.5587 11.4213 14.4669 13.8 15.892L15.31 14.382C15.6254 14.1497 15.9996 14.0035 16.394 13.96C16.7884 13.9165 17.1889 13.9774 17.55 14.136C18.3933 14.5345 19.2994 14.7937 20.23 14.9C20.7185 14.9523 21.1677 15.1852 21.4876 15.5536C21.8075 15.922 21.9752 16.3979 21.96 16.878L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 8428448903
            </li>
            <li>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3528 21.3992C21.1483 21.5857 20.9074 21.7262 20.6446 21.8117C20.3819 21.8972 20.1035 21.9259 19.83 21.896C16.7428 21.5856 13.787 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22001 12.85C3.50341 10.2412 2.44826 7.27099 2.14001 4.17C2.11011 3.89697 2.13877 3.61923 2.22418 3.35719C2.30959 3.09515 2.4499 2.85502 2.6362 2.65158C2.8225 2.44813 3.05065 2.28562 3.3055 2.175C3.56036 2.06437 3.83597 2.00808 4.11401 2.01H7.11401C7.59377 1.99522 8.06806 2.16708 8.43399 2.49C8.79993 2.81292 9.03026 3.26392 9.08001 3.75C9.18628 4.68064 9.44553 5.58666 9.84401 6.43C10.0026 6.79113 10.0635 7.19159 10.02 7.586C9.97652 7.98041 9.83026 8.35464 9.59801 8.67L8.08801 10.18C9.51315 12.5587 11.4213 14.4669 13.8 15.892L15.31 14.382C15.6254 14.1497 15.9996 14.0035 16.394 13.96C16.7884 13.9165 17.1889 13.9774 17.55 14.136C18.3933 14.5345 19.2994 14.7937 20.23 14.9C20.7185 14.9523 21.1677 15.1852 21.4876 15.5536C21.8075 15.922 21.9752 16.3979 21.96 16.878L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 9475484959
            </li>
          </ul>
        </div>

        <div className="footer__column footer__column--social">
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.icon} href={social.url} aria-label={social.label} className="social-link">
                <span className={`icon icon--${social.icon}`} />
              </a>
            ))}
          </div>
          <div className="footer__legal">
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
