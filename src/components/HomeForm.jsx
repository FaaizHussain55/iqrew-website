import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
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
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
      <div className="fields-flex">
        <div className="form-row">
          <div className="form-item">
            <label className="form-label" htmlFor="name">
              Full name<span aria-label="required">*</span>
            </label>
            <input
              className="form-field"
              type="text"
              id="name"
              name="name"
              placeholder="Devid Wonder"
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
              Email Address<span aria-label="required">*</span>
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
        <div className="form-actions">
          <button type="submit" className="btn btn--blue btn--md btn--send" aria-label="Submit contact form">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
