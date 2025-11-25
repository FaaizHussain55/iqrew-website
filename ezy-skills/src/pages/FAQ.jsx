import { useState } from "react";
import "./FAQ.scss";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can browse all available courses and enroll directly from the course page. Once enrolled, you'll have access to all modules and content associated with that course. Courses are organized by departments including Engineering, Human Resources, Marketing, and Sales.",
    },
    {
      question: "What is a Learning Path and how does it work?",
      answer:
        "A Learning Path guides you through completing modules step-by-step. You'll need to complete modules in order and take individual content quizzes. This traditional learning mode ensures you master each concept before moving to the next level.",
    },
    {
      question: "What types of content are available in courses?",
      answer:
        "Our courses include various content types: Video files (MP4, MOV, AVI, WebM), Audio files, PDF documents, and Images. Each content piece may be mandatory or optional, and some may require completing previous content first.",
    },
    {
      question: "How do Content Quizzes work?",
      answer:
        "Content Quizzes are assessments assigned to specific course content. You can take these quizzes after completing the associated content. Each quiz has a passing score requirement, and you can track your progress and attempt history. Quizzes may have time limits and maximum attempt restrictions.",
    },
    {
      question: "What are Course Quick Tests?",
      answer:
        "Course Quick Tests are comprehensive assessments that cover multiple modules within a course. These tests help evaluate your overall understanding of the course material. Each quick test has a passing percentage, time limit, and maximum attempts allowed.",
    },
    {
      question: "What is the Final Course Assessment?",
      answer:
        "The Final Course Assessment is a comprehensive test covering all course material. You must complete all modules before taking the final assessment. Upon passing, you'll earn your course certificate. The assessment has specific time limits, question counts, and passing score requirements.",
    },
    {
      question: "How do I earn Module and Course Certificates?",
      answer:
        "You earn Module Certificates by completing all content within a module and achieving the required passing scores on module quizzes. Course Certificates are awarded after successfully passing the Final Course Assessment. Certificates include your certificate number, average score, completion progress, and issued date.",
    },
    {
      question: "What are the different user roles in the system?",
      answer:
        "The system supports multiple roles: Learners (students who take courses), Department Heads (manage department-specific courses), Admins (manage courses and users), and Super Admins (full system access). Each role has different permissions and access levels.",
    },
    {
      question: "How is my course progress tracked?",
      answer:
        "Your progress is tracked through content completion, quiz scores, module completion status, and overall course progress. You can view your progress for each module, see your quiz attempt history, track your best scores, and monitor your completion percentage for both modules and courses.",
    },
    {
      question: "Can I skip content or must I complete it in order?",
      answer:
        "This depends on the course settings. Some content is marked as mandatory and requires completion before proceeding. Content may also have a 'Requires Previous' setting, meaning you must complete previous content first. However, some videos allow skipping if the course administrator has enabled that option.",
    },
    {
      question: "What happens if I don't pass a quiz or assessment?",
      answer:
        "If you don't meet the passing score, you can retake the quiz or assessment (subject to maximum attempt limits). Your attempt history is tracked, showing all your scores. For final assessments, you'll need to achieve the required passing percentage to earn your course certificate.",
    },
    {
      question: "How do I download my certificates?",
      answer:
        "Once you've earned a certificate, you can view certificate details including your certificate number, scores, and issued date. You can download your certificate as a PDF directly from the certificate details page. The system will generate the certificate PDF for you.",
    },
    {
      question: "Are courses organized by departments?",
      answer:
        "Yes, courses can be assigned to specific departments such as Engineering, Human Resources, Marketing, and Sales. Department Heads can manage courses for their respective departments, and learners may have access to courses based on their department assignments.",
    },
    {
      question: "What is the difference between Module Certificates and Course Certificates?",
      answer:
        "Module Certificates are awarded when you complete all content within a specific module and pass the module assessments. Course Certificates are higher-level certifications earned by completing all modules in a course and passing the Final Course Assessment. Both certificates are valid and can be downloaded as PDFs.",
    },
    {
      question: "Can I access courses from multiple departments?",
      answer:
        "Access depends on your user role and department assignments. Learners typically have access to courses assigned to their department, while Admins and Super Admins can access courses across all departments. Department Heads manage courses within their specific department.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-background">
          <div className="faq-decorative-dots"></div>
          <div className="faq-curved-shape"></div>
        </div>
        <div className="container">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-card">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <div className="faq-icon">{openIndex === index ? <span className="faq-minus">−</span> : <span className="faq-plus">+</span>}</div>
                    <div className="faq-question-text">
                      {openIndex === index && <span className="faq-question-line"></span>}
                      <span className="faq-question-content">{faq.question}</span>
                    </div>
                  </div>
                  {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
