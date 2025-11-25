import { useState } from "react";
import "./Checkout.scss";

const orderItems = [
  {
    id: 1,
    title: "adipising elit, sed do eiusmod tempor",
    description: "Lorem ipsum dollar...",
    price: 24.69,
    image: "course-1",
  },
  {
    id: 2,
    title: "adipising elit, sed do eiusmod tempor",
    description: "Lorem ipsum dollar...",
    price: 24.69,
    image: "course-2",
  },
];

export default function Checkout() {
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    saveInfo: false,
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const couponDiscount = 0;
  const tax = 5;
  const total = subtotal + tax;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Payment submitted:", formData);
  };

  return (
    <div className="checkout-page">
      <section className="checkout-section">
        <div className="container">
          <div className="checkout-content">
            {/* Left Section - Payment Form */}
            <div className="checkout-form-section">
              <h1 className="checkout-title">Checkout</h1>

              {/* Payment Methods */}
              <div className="payment-methods">
                <label className="payment-methods-label">Cart Type</label>
                <div className="payment-logos">
                  <div className="payment-logo">
                    <div className="logo-placeholder logo-paypal">PayPal</div>
                  </div>
                  <div className="payment-logo">
                    <div className="logo-placeholder logo-amex">AMEX</div>
                  </div>
                  <div className="payment-logo">
                    <div className="logo-placeholder logo-visa">VISA</div>
                  </div>
                  <div className="payment-logo">
                    <div className="logo-placeholder logo-mastercard">MC</div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="nameOnCard">Name on Card</label>
                  <input type="text" id="nameOnCard" name="nameOnCard" value={formData.nameOnCard} onChange={handleChange} placeholder="Enter name on Card" required />
                </div>

                <div className="form-field">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Enter Card Number" maxLength="19" required />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="expirationDate">Expiration Date (MM/YY)</label>
                    <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} placeholder="Enter Expiration Date" maxLength="5" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cvc">CVC</label>
                    <input type="text" id="cvc" name="cvc" value={formData.cvc} onChange={handleChange} placeholder="Enter CVC" maxLength="4" required />
                  </div>
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" id="saveInfo" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} />
                  <label htmlFor="saveInfo">Save my information for faster checkout</label>
                </div>

                <button type="submit" className="btn btn--checkout">
                  Confirm Payment
                </button>
              </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="checkout-summary-section">
              <h2 className="summary-title">Summary</h2>
              <div className="summary-items">
                {orderItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <div className="item-image">
                      <div className="image-placeholder-summary">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="item-details">
                      <h4 className="item-title">{item.title}</h4>
                      <p className="item-description">{item.description}</p>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-breakdown">
                <div className="breakdown-row">
                  <span className="breakdown-label">Subtotal:</span>
                  <span className="breakdown-value">${subtotal.toFixed(2)}</span>
                </div>
                <div className="breakdown-row">
                  <span className="breakdown-label">Coupon Discount:</span>
                  <span className="breakdown-value">{couponDiscount}%</span>
                </div>
                <div className="breakdown-row">
                  <span className="breakdown-label">TAX:</span>
                  <span className="breakdown-value">${tax.toFixed(2)}</span>
                </div>
                <div className="breakdown-row breakdown-row--total">
                  <span className="breakdown-label">Total:</span>
                  <span className="breakdown-value">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
