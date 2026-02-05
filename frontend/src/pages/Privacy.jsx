import { useMemo } from "react";
import "./Terms.scss";
import vectorWave from "../assets/images/vector-wave.svg";

export default function Privacy() {
  const lastUpdated = "December 1, 2025";

  const privacySections = useMemo(
    () => [
      {
        title: "1. Introduction",
        content: `Welcome to iQrew Learning Management System (LMS). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our LMS platform, including courses, modules, assessments, and certification services. By using our platform, you consent to the data practices described in this policy.`,
      },
      {
        title: "2. Information We Collect",
        content: `We collect various types of information to provide and improve our services:

- Personal Information: Name, email address, phone number, date of birth, user ID, and other contact details provided during account registration
- Account Information: Username, password (encrypted), role assignments (Learner, Department Head, Admin, Super Admin), and department assignments
- Profile Information: Language skills, proficiency levels, profile settings, and preferences
- Learning Data: Course enrollments, module completion status, content viewing history, quiz scores, assessment results, attempt history, and progress tracking
- Certificate Data: Certificate numbers, issued dates, average scores, completion progress, and certificate validity status
- Usage Data: Login times, session duration, platform interactions, search queries, and feature usage patterns
- Technical Data: IP address, browser type, device information, operating system, and platform access logs`,
      },
      {
        title: "3. How We Collect Information",
        content: `We collect information through various methods:

- Direct Collection: Information you provide when creating an account, updating your profile, enrolling in courses, or contacting our support team
- Automatic Collection: Data collected automatically through your use of the platform, including cookies, log files, and tracking technologies
- Third-Party Sources: Information provided by your organization or employer if you access the platform through an enterprise account
- Administrative Collection: Data added by administrators, department heads, or system administrators for account management and course assignments`,
      },
      {
        title: "4. How We Use Your Information",
        content: `We use your information for the following purposes:

- Service Delivery: To provide access to courses, modules, content, quizzes, assessments, and certification services
- Progress Tracking: To track your learning progress, completion status, quiz scores, and assessment results
- Certificate Generation: To create and manage module and course certificates with your scores and completion data
- User Management: To manage user accounts, roles, permissions, and department assignments
- Communication: To send important updates, notifications, course reminders, and support communications
- Platform Improvement: To analyze usage patterns, improve platform functionality, and enhance user experience
- Security: To detect and prevent fraud, unauthorized access, and security threats
- Compliance: To comply with legal obligations, enforce our terms, and protect our rights`,
      },
      {
        title: "5. Data Sharing and Disclosure",
        content: `We may share your information in the following circumstances:

- Within Your Organization: Department Heads and Admins within your organization may access your learning progress, course enrollments, and assessment results for management purposes
- Service Providers: We may share data with third-party service providers who assist in platform operations, hosting, analytics, and support services
- Legal Requirements: We may disclose information if required by law, court order, or government regulation
- Business Transfers: Information may be transferred in connection with mergers, acquisitions, or sale of assets
- With Your Consent: We may share information with your explicit consent for specific purposes

We do not sell your personal information to third parties for marketing purposes.`,
      },
      {
        title: "6. Data Storage and Security",
        content: `We implement industry-standard security measures to protect your information:

- Encryption: Data is encrypted in transit using SSL/TLS protocols and at rest using secure encryption methods
- Access Controls: Role-based access controls ensure that only authorized personnel can access sensitive data
- Secure Infrastructure: Our platform is hosted on secure servers with regular security updates and monitoring
- Authentication: Strong password requirements and secure authentication mechanisms protect account access
- Regular Audits: We conduct regular security audits and assessments to identify and address vulnerabilities

However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.`,
      },
      {
        title: "7. Data Retention",
        content: `We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:

- Account Data: Retained while your account is active and for a reasonable period after account closure
- Learning Records: Course progress, quiz scores, and assessment results are retained to maintain your learning history and certificate validity
- Certificate Data: Certificate information is retained indefinitely to verify certification status
- Legal Requirements: Some data may be retained longer if required by law or for legitimate business purposes

You may request deletion of your account and associated data, subject to legal and contractual obligations.`,
      },
      {
        title: "8. Your Privacy Rights",
        content: `Depending on your location, you may have the following rights:

- Access: Request access to your personal information and learning data
- Correction: Request correction of inaccurate or incomplete information
- Deletion: Request deletion of your account and associated data
- Portability: Request a copy of your data in a portable format
- Objection: Object to certain processing activities
- Restriction: Request restriction of processing in certain circumstances
- Withdrawal of Consent: Withdraw consent for data processing where applicable

To exercise these rights, please contact us using the information provided in the Contact section.`,
      },
      {
        title: "9. Cookies and Tracking Technologies",
        content: `We use cookies and similar tracking technologies to enhance your experience:

- Essential Cookies: Required for platform functionality, authentication, and security
- Performance Cookies: Help us understand how users interact with the platform to improve performance
- Functional Cookies: Remember your preferences and settings
- Analytics Cookies: Collect usage statistics and platform analytics

You can control cookie preferences through your browser settings, though disabling certain cookies may affect platform functionality.`,
      },
      {
        title: "10. Third-Party Services",
        content: `Our platform may integrate with third-party services:

- Analytics Services: We may use analytics tools to understand platform usage and improve services
- Cloud Storage: Course content and user data may be stored on secure cloud infrastructure
- Communication Tools: Email and notification services for platform communications
- Payment Processors: If applicable, payment information is processed by secure third-party payment providers

These third parties have their own privacy policies, and we encourage you to review them.`,
      },
      {
        title: "11. Children's Privacy",
        content: `Our LMS platform is designed for professional and educational use. We do not knowingly collect personal information from children under the age of 13 (or the applicable age of consent in your jurisdiction). If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly. Parents or guardians who believe their child has provided personal information should contact us immediately.`,
      },
      {
        title: "12. International Data Transfers",
        content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country. When we transfer data internationally, we implement appropriate safeguards, including standard contractual clauses and other legal mechanisms, to ensure your information receives adequate protection in accordance with this Privacy Policy and applicable data protection laws.`,
      },
      {
        title: "13. Department and Organizational Data",
        content: `If you access the platform through an organization or enterprise account:

- Organizational Access: Your organization's administrators and department heads may have access to your learning progress, course enrollments, and assessment results
- Department Assignments: Your department assignment may determine course access and visibility of your progress to department managers
- Organizational Policies: Your organization may have additional privacy policies that apply to your use of the platform
- Data Ownership: Your organization may have rights to access and manage data associated with enterprise accounts

We recommend reviewing your organization's privacy policies in addition to this policy.`,
      },
      {
        title: "14. Learning Analytics and Progress Tracking",
        content: `We collect and analyze learning data to provide insights:

- Progress Tracking: Your course progress, module completion, and content viewing history are tracked
- Assessment Analytics: Quiz scores, attempt history, and assessment results are recorded and analyzed
- Performance Metrics: We track completion rates, time spent on content, and learning patterns
- Certificate Tracking: Certificate issuance, validity, and revocation status are maintained

This data is used to improve learning outcomes, provide personalized recommendations, and generate reports for administrators.`,
      },
      {
        title: "15. Data Export and Portability",
        content: `You have the right to request a copy of your data:

- Learning Records: Course enrollments, completion status, and progress data
- Assessment Results: Quiz scores, attempt history, and assessment outcomes
- Certificates: Certificate information, issuance dates, and validity status
- Profile Data: Account information and profile settings

Data export requests will be fulfilled within a reasonable timeframe, typically within 30 days. Data will be provided in a commonly used, machine-readable format.`,
      },
      {
        title: "16. Changes to This Privacy Policy",
        content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated through:

- Email Notifications: Registered users will receive email notifications of significant policy changes
- Platform Notifications: In-platform notifications will alert users to policy updates
- Updated Date: The "Last Updated" date at the top of this policy will be revised

Continued use of the platform after policy changes constitutes acceptance of the updated policy. We encourage you to review this policy periodically.`,
      },
      {
        title: "17. Contact Us",
        content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: info@iqrew.com
Phone: +47 88888 99999
Address: Navakethan Complex, 6th Floor, 605, 606 A&P opp, Clock Tower, SD Road, Secunderabad, Telangana 500003

For data protection inquiries or to exercise your privacy rights, please include "Privacy Request" in your subject line.`,
      },
      {
        title: "18. Compliance and Legal Basis",
        content: `We process your personal information based on the following legal bases:

- Contractual Necessity: To fulfill our contract with you and provide LMS services
- Legitimate Interests: To improve our services, ensure platform security, and prevent fraud
- Legal Obligations: To comply with applicable laws and regulations
- Consent: Where you have provided explicit consent for specific processing activities

We are committed to complying with applicable data protection laws, including GDPR, CCPA, and other regional privacy regulations.`,
      },
    ],
    []
  );

  const jsonLdSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy - iQrew Learning Management System",
      description: "Privacy Policy explaining how iQrew collects, uses, and protects your personal information when using our LMS platform.",
      datePublished: "2024-01-01",
      dateModified: "2025-12-01",
      publisher: {
        "@type": "Organization",
        name: "iQrew",
        email: "info@iqrew.com",
        telephone: "+478888899999",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Navakethan Complex, 6th Floor, 605, 606 A&P opp, Clock Tower, SD Road",
          addressLocality: "Secunderabad",
          addressRegion: "Telangana",
          postalCode: "500003",
          addressCountry: "IN",
        },
      },
      mainEntity: {
        "@type": "Article",
        headline: "Privacy Policy",
        datePublished: "2024-01-01",
        dateModified: "2025-12-01",
        author: {
          "@type": "Organization",
          name: "iQrew",
        },
        articleSection: privacySections.map((section) => ({
          "@type": "ArticleSection",
          headline: section.title,
          text: section.content,
        })),
      },
    };
  }, [privacySections]);

  return (
    <div className="terms-page">
      <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      <section className="curve-top-section blue-curve terms1" aria-labelledby="privacy-title">
        <div className="container">
          <h1 id="privacy-title" className="page-title">
            Privacy <span className="text-orange">Policy</span>
          </h1>
          <p className="date">
            Last Updated: <time dateTime="2025-12-01">{lastUpdated}</time>
          </p>
        </div>
        <img className="vector-wave" src={vectorWave} alt="" aria-hidden="true" />
      </section>

      <section className="terms-content-section" aria-labelledby="privacy-content-title">
        <div className="container">
          <div className="terms-content-wrapper">
            <div className="terms-intro" role="note" aria-label="Privacy Policy Introduction">
              <p className="intro-text">
                At iQrew, we take your privacy seriously. This Privacy Policy explains how we collect, use, protect, and share your personal
                information when you use our Learning Management System platform. We are committed to transparency and giving you control over your
                data.
              </p>
            </div>

            <div className="terms-sections" role="list">
              {privacySections.map((section, index) => {
                const paragraphs = section.content.split("\n").filter((p) => p.trim() !== "");
                const hasList = paragraphs.some((p) => p.trim().startsWith("-"));
                const sectionId = `privacy-section-${index + 1}`;

                return (
                  <article key={index} className="terms-section" role="listitem" aria-labelledby={sectionId}>
                    <h2 id={sectionId} className="section-title">
                      {section.title}
                    </h2>
                    <div className="section-content" role="region" aria-labelledby={sectionId}>
                      {hasList ? (
                        <>
                          {paragraphs
                            .filter((p) => !p.trim().startsWith("-"))
                            .map((paragraph, pIndex) => (
                              <p key={pIndex} className="section-paragraph">
                                {paragraph.trim()}
                              </p>
                            ))}
                          <ul className="terms-list">
                            {paragraphs
                              .filter((p) => p.trim().startsWith("-"))
                              .map((item, itemIndex) => (
                                <li key={itemIndex}>{item.replace(/^-\s*/, "").trim()}</li>
                              ))}
                          </ul>
                        </>
                      ) : (
                        paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex} className="section-paragraph">
                            {paragraph.trim()}
                          </p>
                        ))
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="terms-footer" role="note" aria-label="Privacy Policy Footer">
              <p className="footer-text">
                Your privacy is important to us. If you have any questions or concerns about how we handle your data, please don't hesitate to contact
                us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
