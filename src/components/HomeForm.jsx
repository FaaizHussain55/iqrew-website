import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomeForm() {
  const { t } = useLanguage();
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
    <form className="contact-form" onSubmit={handleSubmit} aria-label={t("form.ariaLabel")} noValidate>
      <div className="fields-flex">
        <div className="form-row">
          <div className="form-item">
            <label className="form-label" htmlFor="name">
              {t("form.name.label")}<span aria-label={t("form.required")}>*</span>
            </label>
            <input
              className="form-field"
              type="text"
              id="name"
              name="name"
              placeholder={t("form.name.placeholder")}
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="name-description"
              autoComplete="name"
            />
            <span id="name-description" className="sr-only">
              {t("form.name.description")}
            </span>
          </div>
          <div className="form-item">
            <label className="form-label" htmlFor="email">
              {t("form.email.label")}<span aria-label={t("form.required")}>*</span>
            </label>
            <input
              className="form-field"
              type="email"
              id="email"
              name="email"
              placeholder={t("form.email.placeholder")}
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="email-description"
              autoComplete="email"
            />
            <span id="email-description" className="sr-only">
              {t("form.email.description")}
            </span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-item">
            <label className="form-label" htmlFor="phone">
              {t("form.phone.label")}<span aria-label={t("form.required")}>*</span>
            </label>
            <input
              className="form-field"
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("form.phone.placeholder")}
              value={formData.phone}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="phone-description"
              autoComplete="tel"
            />
            <span id="phone-description" className="sr-only">
              {t("form.phone.description")}
            </span>
          </div>
          <div className="form-item">
            <label className="form-label" htmlFor="issue">
              {t("form.issue.label")}<span aria-label={t("form.required")}>*</span>
            </label>
            <input
              className="form-field"
              type="text"
              id="issue"
              name="issue"
              placeholder={t("form.issue.placeholder")}
              value={formData.issue}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="issue-description"
              autoComplete="off"
            />
            <span id="issue-description" className="sr-only">
              {t("form.issue.description")}
            </span>
          </div>
        </div>
        <div className="form-item">
          <label className="form-label" htmlFor="message">
            {t("form.message.label")}<span aria-label={t("form.required")}>*</span>
          </label>
          <textarea
            className="form-field form-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.message.placeholder")}
            rows="5"
            required
            aria-required="true"
            aria-describedby="message-description"
          ></textarea>
          <span id="message-description" className="sr-only">
            {t("form.message.description")}
          </span>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn--blue btn--md btn--send" aria-label={t("form.submit.ariaLabel")}>
            {t("form.submit.label")}
          </button>
        </div>
      </div>
    </form>
  );
}
