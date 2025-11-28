import { useState } from "react";
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
      <section className="curve-top-section orange-curve">
        <div className="container">
          <h1 className="page-title">Contact Our Team</h1>
        </div>
        <img className="vector-wave" src={vectorWave} alt="Vector Wave" />
      </section>
      <section className="contact2">
        <div className="container">
          <div className="form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="fields-flex">
                <div className="form-row">
                  <div className="form-item">
                    <label className="form-label" htmlFor="name">
                      Your name*
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
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label" htmlFor="email">
                      Contact email*
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
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-item">
                    <label className="form-label" htmlFor="phone">
                      Phone Number*
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
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label" htmlFor="issue">
                      Issue Related to*
                    </label>
                    <select className="form-field form-select" id="issue" name="issue" value={formData.issue} onChange={handleChange} required>
                      <option value="Course Structure">Course Structure</option>
                      <option value="Payment Failure">Payment Failure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label" htmlFor="message">
                    Your message*
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
                  ></textarea>
                </div>
              </div>
              <p className="form-disclaimer">
                By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and
                disclose your personal information including to third parties.
              </p>
              <button type="submit" className="btn btn--blue btn--md btn--send">
                Send
              </button>
            </form>
            <img className="form-vector1" src={formVector1} alt="Dots Vector" />
            <img className="form-vector2" src={formVector2} alt="Circle Vector" />
          </div>
          <div className="contact-info-cards">
            <div className="info-card">
              <img className="info-icon" src={emailIcon} alt="Email Icon" />
              <h3 className="info-title">Email us</h3>
              <p className="info-description">Email us for general queries, including marketing and partnership opportunities.</p>
              <a href="mailto:hello@ezyskills.com" className="info-link">
                hello@ezyskills.com
              </a>
            </div>

            <div className="info-card">
              <img className="info-icon" src={callIcon} alt="Call Icon" />
              <h3 className="info-title">Call us</h3>
              <p className="info-description">Call us to speak to a member of our team. We are always happy to help.</p>
              <a href="tel:+918888899999" className="info-link">
                +91 88888 99999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
