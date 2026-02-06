import { useState } from "react";
import "./CheckoutNew.scss";

const orderItems = [
  {
    id: 1,
    title: "Advanced Angular JS Course",
    description: "Complete guide to Angular development",
    price: 99.99,
    image: "course-1",
  },
  {
    id: 2,
    title: "React Mastery Program",
    description: "Master React from basics to advanced",
    price: 129.99,
    image: "course-2",
  },
];

export default function CheckoutNew() {
  const [formData, setFormData] = useState({
    email: "",
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    zipCode: "",
    saveInfo: false,
  });

  const [focusedField, setFocusedField] = useState(null);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const tax = (subtotal * 0.08).toFixed(2);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let formattedValue = value;

    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiration date
    if (name === "expirationDate") {
      formattedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
    }

    // Format CVC
    if (name === "cvc") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="checkout-new-page">
      <div className="checkout-new-container">
        {/* Left Section - Payment Form */}
        <div className="checkout-new-form-wrapper">
          <div className="checkout-new-header">
            <h1 className="checkout-new-title">Complete your purchase</h1>
            <p className="checkout-new-subtitle">Secure checkout powered by industry-leading encryption</p>
          </div>

          <form className="checkout-new-form" onSubmit={handleSubmit}>
            {/* Email Section */}
            <div className="form-section">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className={`form-input ${focusedField === "email" ? "form-input--focused" : ""}`}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Card Information Section */}
            <div className="form-section">
              <label className="form-label" htmlFor="nameOnCard">
                Card information
              </label>
              <div className="card-input-wrapper">
                <input
                  className={`form-input form-input--card ${focusedField === "cardNumber" ? "form-input--focused" : ""}`}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("cardNumber")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="1234 1234 1234 1234"
                  maxLength="19"
                  required
                />
                <div className="card-icons">
                  <div className="card-icon card-icon--visa">VISA</div>
                  <div className="card-icon card-icon--mastercard">MC</div>
                  <div className="card-icon card-icon--amex">AMEX</div>
                </div>
              </div>
              <div className="card-details-row">
                <input
                  className={`form-input form-input--expiry ${focusedField === "expirationDate" ? "form-input--focused" : ""}`}
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("expirationDate")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
                <input
                  className={`form-input form-input--cvc ${focusedField === "cvc" ? "form-input--focused" : ""}`}
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("cvc")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="CVC"
                  maxLength="4"
                  required
                />
              </div>
            </div>

            {/* Name on Card */}
            <div className="form-section">
              <label className="form-label" htmlFor="nameOnCard">
                Name on card
              </label>
              <input
                className={`form-input ${focusedField === "nameOnCard" ? "form-input--focused" : ""}`}
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                onFocus={() => setFocusedField("nameOnCard")}
                onBlur={() => setFocusedField(null)}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Zip Code */}
            <div className="form-section">
              <label className="form-label" htmlFor="zipCode">
                ZIP / Postal code
              </label>
              <input
                className={`form-input ${focusedField === "zipCode" ? "form-input--focused" : ""}`}
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                onFocus={() => setFocusedField("zipCode")}
                onBlur={() => setFocusedField(null)}
                placeholder="12345"
                required
              />
            </div>

            {/* Save Info Checkbox */}
            <div className="form-checkbox-wrapper">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleChange}
                className="form-checkbox"
              />
              <label htmlFor="saveInfo" className="form-checkbox-label">
                Save this information for next time
              </label>
            </div>

            {/* Security Badge */}
            <div className="security-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 1L3 3V7C3 10.5 5.5 13.5 8 15C10.5 13.5 13 10.5 13 7V3L8 1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6 8L7.5 9.5L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Your payment information is secure and encrypted</span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="checkout-submit-btn">
              <span>Pay ${total}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="checkout-new-summary">
          <div className="summary-header">
            <h2 className="summary-title">Order summary</h2>
          </div>

          <div className="summary-items">
            {orderItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-image">
                  <div className="image-placeholder">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="summary-item-details">
                  <h4 className="summary-item-title">{item.title}</h4>
                  <p className="summary-item-description">{item.description}</p>
                </div>
                <div className="summary-item-price">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-totals">
            <div className="summary-total-row">
              <span className="total-label">Subtotal</span>
              <span className="total-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-total-row">
              <span className="total-label">Tax</span>
              <span className="total-value">${tax}</span>
            </div>
            <div className="summary-total-row summary-total-row--final">
              <span className="total-label">Total</span>
              <span className="total-value">${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

