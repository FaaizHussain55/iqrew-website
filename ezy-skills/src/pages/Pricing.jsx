import "./Pricing.scss";

const pricingPlans = [
  {
    label: "Learner Plan",
    price: "20,000",
    features: [
      { icon: "✓", text: "Access to All Courses" },
      { icon: "✓", text: "Content Quizzes & Assessments" },
      { icon: "✓", text: "Module & Course Certificates" },
    ],
  },
  {
    label: "Department Head Plan",
    price: "50,000",
    features: [
      { icon: "✓", text: "Manage Department Courses" },
      { icon: "✓", text: "User Management & Progress Tracking" },
      { icon: "✓", text: "Custom Learning Paths" },
    ],
    featured: true, // Center card is bigger
  },
  {
    label: "Enterprise Plan",
    price: "75,000",
    features: [
      { icon: "✓", text: "Full Admin Access" },
      { icon: "✓", text: "Advanced Analytics & Reporting" },
      { icon: "✓", text: "Multi-Department Management" },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-section">
        <div className="pricing-dots-left"></div>
        <div className="pricing-dots-right"></div>
        <div className="container">
          <h1 className="pricing-title">LMS Pricing Plans</h1>
          <div className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}>
                {/* Orange Top Section */}
                <div className="pricing-card-top">
                  <div className="pricing-label">{plan.label}</div>
                  <div className="pricing-price">
                    <span className="currency">₹</span>
                    <span className="amount">{plan.price}</span>
                    <span className="tax-text">+ Tax</span>
                  </div>
                  <div className="pricing-disclaimer">(Exclusive of GST & Taxes)</div>
                </div>

                {/* White Bottom Section */}
                <div className="pricing-card-bottom">
                  <div className="pricing-features">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="pricing-feature">
                        <span className="feature-icon">{feature.icon}</span>
                        <span className="feature-text">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn--pricing">Choose Plan</button>
                  <div className="razorpay-logo">
                    <div className="razorpay-text">
                      <span className="razorpay-blue">Razor</span>
                      <span className="razorpay-orange">pay</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Management Features */}
      <section className="feature-comparison-section">
        <div className="container">
          <h2 className="comparison-title">Course Management Features</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-column">IQrew packages</th>
                  <th className="plan-column plan-column--basic">Learner</th>
                  <th className="plan-column plan-column--premium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Create and manage courses with modules and contents</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Assign courses to specific departments (Engineering, HR, Marketing, Sales)</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Set course deadlines, passing scores, and status management</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">View course enrollment statistics and completion rates</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quiz Management Features */}
      <section className="feature-comparison-section">
        <div className="container">
          <h2 className="comparison-title">Quiz & Assessment Features</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-column">IQrew packages</th>
                  <th className="plan-column plan-column--basic">Learner</th>
                  <th className="plan-column plan-column--premium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Create content quizzes and course quick tests</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Configure time limits, passing scores, and max attempts</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Take content quizzes, quick tests, and final assessments</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">View quiz attempt history and performance analytics</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certificate Features */}
      <section className="feature-comparison-section">
        <div className="container">
          <h2 className="comparison-title">Certificate & Achievement Features</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-column">IQrew packages</th>
                  <th className="plan-column plan-column--basic">Learner</th>
                  <th className="plan-column plan-column--premium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Earn module certificates and course certificates</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Download certificates as PDF documents</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">View all users certificates and manage certificate issuance</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Track certificate statistics and completion rates</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* User Management Features */}
      <section className="feature-comparison-section">
        <div className="container">
          <h2 className="comparison-title">User Management Features</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-column">IQrew packages</th>
                  <th className="plan-column plan-column--basic">Learner</th>
                  <th className="plan-column plan-column--premium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Add users with roles (Learner, Admin, Department Head, Super Admin)</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Manage user departments and access permissions</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Track user course progress and enrollment status</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-check">✓</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">Export user data and generate comprehensive reports</td>
                  <td className="plan-cell plan-cell--basic">
                    <span className="icon-cross">✕</span>
                  </td>
                  <td className="plan-cell plan-cell--premium">
                    <span className="icon-check">✓</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
