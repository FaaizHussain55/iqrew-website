import { useMemo } from "react";
import "./Terms.scss";
import vectorWave from "../assets/images/vector-wave.svg";

export default function Terms() {
  const lastUpdated = "December 1, 2025";

  const termsSections = useMemo(
    () => [
      {
        title: "1. Acceptance of Terms",
        content: `By accessing and using the iQrew Learning Management System (LMS) platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services. These terms apply to all users, including Learners, Department Heads, Admins, and Super Admins.`,
      },
      {
        title: "2. User Accounts and Registration",
        content: `To access our LMS platform, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`,
      },
      {
        title: "3. User Roles and Permissions",
        content: `Our platform supports multiple user roles with different access levels:
- Learners: Access to enrolled courses, modules, content, quizzes, and assessments
- Department Heads: Management of department-specific courses and user progress tracking
- Admins: Full course and user management capabilities
- Super Admins: Complete system access and administrative controls

Each role has specific permissions and responsibilities. Users must not attempt to access features or data beyond their assigned role permissions.`,
      },
      {
        title: "4. Course Enrollment and Access",
        content: `Courses are organized by departments including Engineering, Human Resources, Marketing, and Sales. Enrollment may be subject to department assignments and organizational policies. Once enrolled, you gain access to course modules, content (videos, audio, PDFs, images), quizzes, and assessments. Access to courses may be restricted based on your user role and department assignments. We reserve the right to modify, suspend, or discontinue any course at any time.`,
      },
      {
        title: "5. Learning Path and Content Completion",
        content: `Courses follow a structured learning path where modules must be completed in order. Some content may be marked as mandatory and requires completion before proceeding. Content with "Requires Previous" settings must be completed sequentially. Video content may allow skipping if enabled by course administrators. You are responsible for completing all required content and assessments to earn certificates.`,
      },
      {
        title: "6. Assessments and Quizzes",
        content: `Our platform includes various assessment types:
- Content Quizzes: Assigned to specific course content with passing score requirements
- Course Quick Tests: Comprehensive assessments covering multiple modules
- Final Course Assessments: Comprehensive tests covering all course material

Each assessment has specific time limits, passing scores, and maximum attempt restrictions. You must complete all modules before taking final assessments. Attempt history and scores are tracked and recorded.`,
      },
      {
        title: "7. Certificates and Achievements",
        content: `Module Certificates are awarded upon completing all content within a module and achieving required passing scores. Course Certificates are awarded after successfully passing the Final Course Assessment. Certificates include certificate numbers, average scores, completion progress, and issued dates. Certificates are valid and can be downloaded as PDFs. We reserve the right to revoke certificates if violations of these terms are discovered.`,
      },
      {
        title: "8. Intellectual Property Rights",
        content: `All course content, including but not limited to videos, audio files, PDFs, images, quizzes, assessments, and course materials, are protected by copyright and other intellectual property laws. Content is provided for your personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without explicit written permission. Unauthorized sharing, copying, or distribution of course materials is strictly prohibited.`,
      },
      {
        title: "9. Payment and Refund Policy",
        content: `Access to our LMS platform may require payment based on your selected plan (Learner Plan, Department Head Plan, or Enterprise Plan). All fees are non-refundable unless otherwise stated. Payment must be made in full before access is granted. We reserve the right to change pricing at any time, with notice provided to existing users. Refunds may be considered on a case-by-case basis for technical issues preventing access to paid content.`,
      },
      {
        title: "10. User Conduct and Prohibited Activities",
        content: `You agree not to:
- Share your account credentials with others
- Attempt to hack, breach, or compromise platform security
- Use automated systems or bots to access the platform
- Copy, download, or redistribute course content without authorization
- Impersonate other users or provide false information
- Interfere with or disrupt the platform's functionality
- Use the platform for any illegal or unauthorized purpose
- Violate any applicable laws or regulations

Violations may result in immediate account termination and legal action.`,
      },
      {
        title: "11. Progress Tracking and Data",
        content: `Your course progress, quiz scores, assessment results, and completion status are tracked and stored on our platform. This data is used to provide learning analytics, generate certificates, and improve our services. You can view your progress, attempt history, and scores through your account dashboard. We maintain records of your learning activities in accordance with our Privacy Policy.`,
      },
      {
        title: "12. Privacy and Data Protection",
        content: `We are committed to protecting your privacy and personal information. Your data is collected, stored, and processed in accordance with our Privacy Policy and applicable data protection laws. We implement security measures to protect your information, but cannot guarantee absolute security. By using our platform, you consent to the collection and use of your information as described in our Privacy Policy.`,
      },
      {
        title: "13. Platform Availability and Modifications",
        content: `We strive to maintain platform availability but do not guarantee uninterrupted access. The platform may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify, update, or discontinue features, courses, or the entire platform at any time. We are not liable for any loss or inconvenience resulting from platform unavailability or modifications.`,
      },
      {
        title: "14. Limitation of Liability",
        content: `To the maximum extent permitted by law, iQrew and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities. Our total liability shall not exceed the amount you paid for services in the 12 months preceding the claim. We do not guarantee specific learning outcomes or job placement results.`,
      },
      {
        title: "15. Indemnification",
        content: `You agree to indemnify, defend, and hold harmless iQrew, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the platform, violation of these terms, or infringement of any rights of another party.`,
      },
      {
        title: "16. Termination",
        content: `We reserve the right to suspend or terminate your account at any time for violations of these terms, fraudulent activity, or any other reason we deem necessary. You may terminate your account at any time by contacting our support team. Upon termination, your access to the platform will be immediately revoked, and you may lose access to course content, progress, and certificates.`,
      },
      {
        title: "17. Modifications to Terms",
        content: `We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated through email or platform notifications. Continued use of the platform after changes constitutes acceptance of the modified terms. It is your responsibility to review these terms periodically for updates.`,
      },
      {
        title: "18. Governing Law and Dispute Resolution",
        content: `These Terms and Conditions are governed by the laws of the jurisdiction in which iQrew operates. Any disputes arising from these terms or your use of the platform shall be resolved through binding arbitration or in the appropriate courts of jurisdiction. You agree to waive any right to participate in class-action lawsuits.`,
      },
      {
        title: "19. Contact Information",
        content: `For questions, concerns, or support regarding these Terms and Conditions, please contact us at:
Email: info@iqrew.com
Phone: +47 88888 99999
Address: Navakethan Complex, 6th Floor, 605, 606 A&P opp, Clock Tower, SD Road, Secunderabad, Telangana 500003`,
      },
      {
        title: "20. Severability and Entire Agreement",
        content: `If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full effect. These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and iQrew regarding your use of the LMS platform and supersede all prior agreements and understandings.`,
      },
    ],
    []
  );

  const jsonLdSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms and Conditions - iQrew Learning Management System",
      description:
        "Terms and Conditions governing access to and use of the iQrew LMS platform, including courses, modules, content, assessments, and certification services.",
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
        headline: "Terms and Conditions",
        datePublished: "2024-01-01",
        dateModified: "2025-12-01",
        author: {
          "@type": "Organization",
          name: "iQrew",
        },
        articleSection: termsSections.map((section) => ({
          "@type": "ArticleSection",
          headline: section.title,
          text: section.content,
        })),
      },
    };
  }, [termsSections]);

  return (
    <div className="terms-page">
      <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
      <section className="curve-top-section blue-curve terms1" aria-labelledby="terms-title">
        <div className="container">
          <h1 id="terms-title" className="page-title">
            Terms and <span className="text-orange">Conditions</span>
          </h1>
          <p className="date">
            Last Updated: <time dateTime="2025-12-01">{lastUpdated}</time>
          </p>
        </div>
        <img className="vector-wave" src={vectorWave} alt="" aria-hidden="true" />
      </section>

      <section className="terms-content-section" aria-labelledby="terms-content-title">
        <div className="container">
          <div className="terms-content-wrapper">
            <div className="terms-intro" role="note" aria-label="Terms and Conditions Introduction">
              <p className="intro-text">
                Welcome to iQrew Learning Management System. These Terms and Conditions govern your access to and use of our LMS platform, including
                courses, modules, content, assessments, and certification services. Please read these terms carefully before using our services.
              </p>
            </div>

            <div className="terms-sections" role="list">
              {termsSections.map((section, index) => {
                const paragraphs = section.content.split("\n").filter((p) => p.trim() !== "");
                const hasList = paragraphs.some((p) => p.trim().startsWith("-"));
                const sectionId = `terms-section-${index + 1}`;

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

            <div className="terms-footer" role="note" aria-label="Terms and Conditions Footer">
              <p className="footer-text">
                By using the iQrew LMS platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
