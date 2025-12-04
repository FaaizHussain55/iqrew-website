import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import vectorWave from "../assets/images/vector-wave.svg";
import formVector1 from "../assets/images/vector-contact-form-dots.svg";
import formVector2 from "../assets/images/vector-circle-orange.svg";
import emailIcon from "../assets/icons/icon-email-us.svg";
import callIcon from "../assets/icons/icon-call-us.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Julia William",
    email: "you@example.com",
    phone: "",
    issue: "Course Structure",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <section className="curve-top-section orange-curve" aria-labelledby="contact curve section">
        <div className="container">
          <h1 id="contact-title" className="page-title">
            Contact Our Team
          </h1>
        </div>
        <img className="vector-wave" src={vectorWave} alt="" aria-hidden="true" />
      </section>
      <section className="contact2" aria-label="Contact Form and Information">
        <div className="container">
          <div className="form-card">
            <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
              <div className="fields-flex">
                <div className="form-row">
                  <div className="form-item">
                    <label className="form-label" htmlFor="name">
                      Your name<span aria-label="required">*</span>
                    </label>
                    <input
                      className="form-field"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="name-description"
                      autoComplete="name"
                    />
                    <span id="name-description" className="sr-only">
                      Enter your full name
                    </span>
                  </div>
                  <div className="form-item">
                    <label className="form-label" htmlFor="email">
                      Contact email<span aria-label="required">*</span>
                    </label>
                    <input
                      className="form-field"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="email-description"
                      autoComplete="email"
                    />
                    <span id="email-description" className="sr-only">
                      Enter your email address
                    </span>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label className="form-label" htmlFor="phone">
                      Phone Number<span aria-label="required">*</span>
                    </label>
                    <input
                      className="form-field"
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+49 123 4567890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="phone-description"
                      autoComplete="tel"
                    />
                    <span id="phone-description" className="sr-only">
                      Enter your phone number
                    </span>
                  </div>
                  <div className="form-item">
                    <label className="form-label" htmlFor="issue">
                      Issue Related to<span aria-label="required">*</span>
                    </label>
                    <select
                      className="form-field form-select"
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="issue-description"
                    >
                      <option value="Course Structure">Course Structure</option>
                      <option value="Payment Failure">Payment Failure</option>
                      <option value="Other">Other</option>
                    </select>
                    <span id="issue-description" className="sr-only">
                      Select the issue category
                    </span>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label" htmlFor="message">
                    Your message<span aria-label="required">*</span>
                  </label>
                  <textarea
                    className="form-field form-textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message...."
                    rows="5"
                    required
                    aria-required="true"
                    aria-describedby="message-description"
                  ></textarea>
                  <span id="message-description" className="sr-only">
                    Enter your message or inquiry
                  </span>
                </div>
              </div>
              <p className="form-disclaimer" role="note" aria-label="Terms and privacy notice">
                By submitting this form you agree to our{" "}
                <Link to="/terms" className="link-inline">
                  terms and conditions
                </Link>{" "}
                and our{" "}
                <Link to="/privacy" className="link-inline">
                  Privacy Policy
                </Link>{" "}
                which explains how we may collect, use and disclose your personal information including to third parties.
              </p>
              <button type="submit" className="btn btn--blue btn--md btn--send" aria-label="Submit contact form">
                Send
              </button>
            </form>
            <img className="form-vector1" src={formVector1} alt="" aria-hidden="true" />
            <img className="form-vector2" src={formVector2} alt="" aria-hidden="true" />
          </div>
          <div className="contact-info-cards" role="complementary" aria-label="Contact information">
            <article className="info-card">
              <img className="info-icon" src={emailIcon} alt="" aria-hidden="true" />
              <h3 className="info-title">Email us</h3>
              <p className="info-description">Email us for general queries, including marketing and partnership opportunities.</p>
              <a href="mailto:info@iqrew.com" className="info-link" aria-label="Send email to info@iqrew.com">
                info@iqrew.com
              </a>
            </article>

            <article className="info-card">
              <img className="info-icon" src={callIcon} alt="" aria-hidden="true" />
              <h3 className="info-title">Call us</h3>
              <p className="info-description">Call us to speak to a member of our team. We are always happy to help.</p>
              <a href="tel:+478888899999" className="info-link" aria-label="Call us at +47 88888 99999">
                +47 88888 99999
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
