import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Julia William",
    email: "you@example.com",
    phone: "",
    issue: "Course Structure",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      {/* Contact Our Team Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="contact-dots-pattern"></div>
        </div>
        <div className="container">
          <h1 className="contact-title">Contact Our Team</h1>
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Your name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Contact email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Company name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="issue">Issue Related to*</label>
                  <select
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    required
                  >
                    <option value="Course Structure">Course Structure</option>
                    <option value="Payment Failure">Payment Failure</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field form-field--textarea">
                  <label htmlFor="message">Your message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message...."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <p className="form-disclaimer">
                  By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.
                </p>

                <button type="submit" className="btn btn--send">
                  Send
                </button>
              </form>
            </div>
            <div className="contact-curved-shape"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon contact-info-icon--email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffc107" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="L22 6L12 13L2 6" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-info-title">Email us</h3>
              <p className="contact-info-description">
                Email us for general queries, including marketing and partnership opportunities.
              </p>
              <a href="mailto:hello@ezyskills.com" className="contact-info-link">
                hello@ezyskills.com
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon contact-info-icon--call">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2126 21.3528 21.3992C21.1483 21.5857 20.9074 21.7262 20.6446 21.8117C20.3819 21.8972 20.1035 21.9259 19.83 21.896C16.7428 21.5856 13.787 20.5341 11.19 18.82C8.77382 17.3148 6.72533 15.2663 5.22001 12.85C3.50341 10.2412 2.44826 7.27099 2.14001 4.17C2.11011 3.89697 2.13877 3.61923 2.22418 3.35719C2.30959 3.09515 2.4499 2.85502 2.6362 2.65158C2.8225 2.44813 3.05065 2.28562 3.3055 2.175C3.56036 2.06437 3.83597 2.00808 4.11401 2.01H7.11401C7.59377 1.99522 8.06806 2.16708 8.43399 2.49C8.79993 2.81292 9.03026 3.26392 9.08001 3.75C9.18628 4.68064 9.44553 5.58666 9.84401 6.43C10.0026 6.79113 10.0635 7.19159 10.02 7.586C9.97652 7.98041 9.83026 8.35464 9.59801 8.67L8.08801 10.18C9.51315 12.5587 11.4213 14.4669 13.8 15.892L15.31 14.382C15.6254 14.1497 15.9996 14.0035 16.394 13.96C16.7884 13.9165 17.1889 13.9774 17.55 14.136C18.3933 14.5345 19.2994 14.7937 20.23 14.9C20.7185 14.9523 21.1677 15.1852 21.4876 15.5536C21.8075 15.922 21.9752 16.3979 21.96 16.878L22 16.92Z" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#ff7a00"/>
                </svg>
              </div>
              <h3 className="contact-info-title">Call us</h3>
              <p className="contact-info-description">
                Call us to speak to a member of our team. We are always happy to help.
              </p>
              <a href="tel:+918888899999" className="contact-info-link">
                +91 88888 99999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

