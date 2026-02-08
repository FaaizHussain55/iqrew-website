import { Link } from "react-router-dom";
import { useEffect, useRef, useMemo, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ShapeSvgComponent from "../components/ShapeSvgComponent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.scss";
import shapeOne from "../assets/images/line-vector-1.svg";
import shapeTwo from "../assets/images/line-vector-2.svg";
import shapeThree from "../assets/images/line-vector-3.svg";
import shapeFour from "../assets/images/line-vector-4.svg";
// import shapeFive from "../assets/images/line-vector-5.svg";
import contentTypeImg1 from "../assets/images/img-content-sec-type1.jpg";
import contentTypeImg2 from "../assets/images/img-content-sec-type2.jpg";
import contentTypeImg3 from "../assets/images/img-content-sec-type3.jpg";
import quizTypeIcon1 from "../assets/icons/icon-quiz-type1.gif";
import quizTypeIcon2 from "../assets/icons/icon-quiz-type2.gif";
import quizTypeIcon3 from "../assets/icons/icon-quiz-type3.gif";
import quizTypeIcon4 from "../assets/icons/icon-quiz-type4.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeForm from "../components/HomeForm";
import {
  faUsers,
  faClipboardCheck,
  faPuzzlePiece,
  faCertificate,
  faUserShield,
  faGlobe,
  faSync,
  faChartBar,
  faGraduationCap,
  faMapMarkerAlt,
  faUserPlus,
  faCalendarAlt,
  faBook,
  faExchangeAlt,
  faHandshake,
  faLayerGroup,
  faDollarSign,
  faFileAlt,
  faCheckSquare,
  faVideo,
  faTrophy,
  faFilePdf,
  faIndustry,
  faHeadset,
  faBookOpen,
  faCubes,
  faCheckCircle,
  faChartLine,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
// Regular icons are available but not all icons have regular equivalents
// If you want to use regular style, uncomment and use the available ones below:
// import { faUsers as farUsers, faGlobe as farGlobe, faGraduationCap as farGraduationCap } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const homeSecAudienceRef = useRef(null);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Initialize AOS only for home-sec-audience section (optimized)
  useEffect(() => {
    // Only initialize if the section exists
    if (homeSecAudienceRef.current) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true, // Animation happens only once for better performance
        offset: 100,
        disable: false,
        startEvent: "DOMContentLoaded",
      });

      // Refresh AOS to detect new elements
      AOS.refresh();
    }

    // Cleanup on unmount
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const coreFeatures = [
    {
      icon: faCubes,
      title: "Modular Structure",
      description: "Build scalable training programs that adapt to many roles and teams.",
    },
    {
      icon: faCheckCircle,
      title: "Knowledge Checks",
      description: "Implement comprehensive quizzes and assessments for content and complete courses.",
    },
    {
      icon: faCertificate,
      title: "Auto Certificates",
      description: "Automatically generate and issue certificates without any manual effort required.",
    },
    {
      icon: faChartLine,
      title: "Track Progress",
      description: "Comprehensive tracking and qualification management for external and internal certificates.",
    },
  ];

  const quizTypes = [
    { name: "Multiple Choice", iconImg: quizTypeIcon1 },
    { name: "Single Choice", iconImg: quizTypeIcon2 },
    { name: "True/False", iconImg: quizTypeIcon3 },
    { name: "Sequencing", iconImg: quizTypeIcon4, description: "e.g., ordering process steps correctly" },
  ];

  const contentTypes = [
    {
      img: contentTypeImg1,
      title: "Training Videos",
      items: [
        "Explainer videos and training films (flexible length, clear, practical).",
        "Optionally with voiceover, subtitles, and chapter structure.",
        "On request in the style of your brand (tonality, look & feel).",
        "AI speakers ensure long-term usability and easy adaptability.",
        "Full control of the contents by you or a subject matter expert of your choice.",
      ],
    },
    {
      img: contentTypeImg2,
      title: "Audios & Learning Podcasts",
      items: [
        "Audio training for mobile learning in podcast style.",
        "Knowledge impulses for recurring updates (e.g., guidelines, processes).",
        "Ideal as a supplement or update to videos and PDFs in our modules.",
      ],
    },
    {
      img: contentTypeImg3,
      title: "PDFs & Learning Materials",
      items: [
        "Handouts, guides, checklists, one-pagers.",
        "Training documents with clear structure and visual preparation incl. graphics.",
        "Relevant summaries of learning materials for exam preparations and mandatory training.",
      ],
    },
  ];

  const trainingTypes = [
    "AI basic training",
    "Data privacy training",
    "Safety instructions",
    "Process and tool training",
    "Role- or department-specific induction",
  ];

  const targetAudience = [
    {
      text: "Companies that want to standardize and systematize onboarding.",
      icon: faUsers, // Solid style - use farUsers for Regular style (available)
    },
    {
      text: "Companies who want to get audit-ready and develop their teams.",
      icon: faClipboardCheck, // Solid only - no Regular equivalent
    },
    {
      text: "Teams that want to reuse training contents modularly and save time.",
      icon: faPuzzlePiece, // Solid only - no Regular equivalent
    },
    {
      text: "Organizations with a need for certifications and proofs of knowledge.",
      icon: faCertificate, // Solid only - no Regular equivalent
    },
    {
      text: "Admins who must centrally manage knowledge tracking, qualifications and expiration dates.",
      icon: faUserShield, // Solid only - no Regular equivalent
    },
    {
      text: "Companies with different employee roles or locations.",
      icon: faGlobe, // Solid style - use farGlobe for Regular style (available)
    },
    {
      text: "Companies from industries with high turnover and recurring personnel demand.",
      icon: faSync, // Solid only - no Regular equivalent
    },
    {
      text: "Managers who report the training progress to their chiefs.",
      icon: faChartBar, // Solid only - no Regular equivalent
    },
    {
      text: "Companies with products that require knowledge from the customers.",
      icon: faGraduationCap, // Solid style - use farGraduationCap for Regular style (available)
    },
  ];

  //FAQ Section Script
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(
    () => [
      {
        question: "Can a module be used in multiple courses?",
        answer: "Yes. Exactly that is a core principle: Modules are reusable and can be part of multiple courses.",
        icon: faLayerGroup,
      },
      {
        question: "Can contents also be used multiple times?",
        answer: "Yes. A content (e.g., a PDF or video) can appear in multiple modules, ideal for precise training of central company guidelines and department-internal know-how.",
        icon: faSync,
      },
      {
        question: "What does IQrew cost?",
        answer: "In our launch phase, we offer discounted plans. These start from 2€ per user. For enterprise customers from ~500 employees, separate tariffs apply, which can be individually negotiated and adjusted. Contact us to learn more.",
        icon: faDollarSign,
      },
      {
        question: "Which content types does IQrew support?",
        answer: "Videos, audios, PDFs, and images.",
        icon: faFileAlt,
      },
      {
        question: "Which quiz types are there?",
        answer: "Multiple Choice, Single Choice, True/False, and Ordering Questions.",
        icon: faCheckSquare,
      },
      {
        question: "Can I prevent videos from being skipped?",
        answer: "Yes. For videos, skipping can be deactivated.",
        icon: faVideo,
      },
      {
        question: "When is a certificate created?",
        answer: "Automatically, as soon as all quizzes have been successfully completed according to the specifications.",
        icon: faTrophy,
      },
      {
        question: "Can external certificates with proof be managed?",
        answer: "Yes. You can maintain external qualifications incl. PDF proofs and track expiration dates.",
        icon: faFilePdf,
      },
      {
        question: "For which industries is IQrew best suitable?",
        answer: "IQrew is not fixed to any special industry, as our solution was designed universally.",
        icon: faIndustry,
      },
      {
        question: "Is there English-speaking support?",
        answer: "Yes, we have Englisch-speaking support to facilitate communication.",
        icon: faHeadset,
      },
      {
        question: "Does IQrew offer courses?",
        answer: "No, IQrew does not offer pre-made courses \"off the shelf\" at the current time, as standardized courses represent no great added value. For our customers, however, we offer course creation service at a discounted rate. Contact us to learn more about this.",
        icon: faBookOpen,
      },
    ], 
    []
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD structured data for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    script.id = "faq-structured-data";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("faq-structured-data");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs]);

  const socials = [
    { icon: faFacebookF, label: "Facebook", url: "https://www.facebook.com/iqrew" },
    { icon: faTwitter, label: "Twitter", url: "https://www.twitter.com/iqrew" },
    { icon: faInstagram, label: "Instagram", url: "https://www.instagram.com/iqrew" },
    { icon: faLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com/company/iqrew" },
    { icon: faYoutube, label: "YouTube", url: "https://www.youtube.com/@iqrew" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section - Dark Blue Background */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="sec-label">CORPORATE TRAINING TOOL</div>
              <h1 className="sec-title-lg">IQrew – Corporate Training Tool</h1>
              <h2 className="sec-subtitle">Accelerate Onboarding, Make Qualifications Verifiable</h2>
              <p className="sec-desc">
                With IQrew, you can create trainings for your employees in just a few clicks. Modular, efficient, clear.
                Create courses from reusable modules and contents, set deadlines, check knowledge with quizzes, and document learning success with automatically generated certificates.
              </p>
              <p className="sec-desc">
                For admins, the dashboard delivers all information for cross-departmental tracking of learning progress, qualifications, and certificate databases, including user management with powerful tagging and filtering options.
              </p>
              <p className="hero-tagline">Ideal tool for Reporting, Controlling, Qualifications and Knowledge Management!</p>
              <div className="hero-cta">
                <a 
                  href="#contact" 
                  className="btn btn--orange btn--lg"
                  onClick={handleScrollToContact}
                >
                  Start with IQrew
                </a>
                {/* <Link to="/contact" className="btn btn--outline-white btn--lg">Request an Offer</Link> */}
              </div>
              <div className="hero-dots-pattern"></div>
            </div>
            <div className="hero-right">
              <div className="hero-images-grid">
                <div className="hero-image hero-image--top-left">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Modular Courses</span>
              </div>
            </div>
          </div>
                <div className="hero-image hero-image--top-right">
                  <div className="orange-ring orange-ring--top"></div>
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <span>Auto Certificates</span>
        </div>
                </div>
              </div>
                <div className="hero-image hero-image--bottom-right">
                  <div className="orange-ring orange-ring--bottom"></div>
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                      <span>Track Progress</span>
                            </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        </div>
                      </div>
      </section>

      {/* Stats Section */}
      <section className="home-sec-stats">
        <img className="vector" src={shapeOne} alt="Vector" />
        <ShapeSvgComponent className="shape1" fillColor="orange">
          <svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0L79.8372 69H0.16283L40 0Z" fill="#fff"/>
          </svg>
        </ShapeSvgComponent>
        <ShapeSvgComponent className="shape2" fillColor="#1771b8">
          <svg width="43" height="86" viewBox="0 0 43 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 86C5.64684 86 11.2384 84.8878 16.4554 82.7268C21.6724 80.5659 26.4127 77.3985 30.4056 73.4056C34.3985 69.4127 37.5659 64.6724 39.7268 59.4554C41.8878 54.2384 43 48.6468 43 43C43 37.3532 41.8878 31.7616 39.7268 26.5446C37.5659 21.3276 34.3985 16.5873 30.4056 12.5944C26.4127 8.60149 21.6724 5.43413 16.4554 3.27318C11.2384 1.11223 5.64684 -2.46831e-07 0 0V86Z" fill="#fff"/>
          </svg>
        </ShapeSvgComponent>
        <div className="container">
          <div className="stats-flex">
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">33%</h2>
              <h5 className="stat-label">Reduction in Onboarding Time</h5>
            </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">100%</h2>
              <h5 className="stat-label">Automated Certificates</h5>
            </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">∞</h2>
              <h5 className="stat-label">Reusable Modules</h5>
              </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">24/7</h2>
              <h5 className="stat-label">Access & Support</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Why IQrew Section */}
      <section id="why-iqrew" className="home-why-iqrew-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">WHY IQREW</h4>
            <h2 className="sec-title-lg">Because In Practice, Training Must Be Fast, Consistent, and Verifiable</h2>
            <p className="sec-desc">
              Whether onboarding, compliance, data privacy, IT security, AI basics, or internal process training: Companies need training that doesn't start from scratch but is reusable and delivers learning results that can be concretely implemented in everyday work.
            </p>
                  </div>
          <div className="features-flex">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="item" data-aos="fade-up">
                <div className="icon-container">
                  <FontAwesomeIcon className="icon" icon={feature.icon} />
                </div>
                <h3 className="item-title">{feature.title}</h3>
                <p className="item-desc">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* <div className="success-highlight">
            <div className="success-badge">SUCCESS STORY</div>
            <p className="success-text">
              IQrew is a platform for companies that want to not only create training but scale it: modular structure, deadlines, quizzes, certificates, and an admin area that makes qualifications truly visible. Our customers report up to a <strong>33% reduction in the onboarding time</strong> for new colleagues.
            </p>
          </div> */}
                </div>
      </section>

      {/* Success Story Section */}
      <section className="blue-banner-sec home-success-story-sec">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">Our Customer Success Story with IQrew Platform</h4>
              <p className="banner-desc">
                IQrew helps companies scale training with modular structure, deadlines, quizzes, and certificates. Our customers report up to a <strong>33% reduction in onboarding time</strong>. Create modular trainings, check knowledge, issue certificates automatically, and track everything in the dashboard.
              </p>
            </div>
            <a 
              href="#contact" 
              className="btn btn--white btn--lg" 
              data-aos="fade-left" 
              onClick={handleScrollToContact}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* How IQrew Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">HOW IT WORKS</h4>
            <h2 className="sec-title-lg">Modular, Flexible, Efficient</h2>
                  </div>
          <div className="works-layout">
            <div className="works-left">
              <div className="works-visual">
                <div className="works-circle">
                  <div className="circle-content">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Modular System</span>
                  </div>
                </div>
                <div className="works-orange-ring"></div>
                <div className="works-chevrons">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ))}
                  </div>
                </div>
              </div>
            <div className="works-right">
              <div className="works-content-item">
                <h3>Courses, Modules, Contents – A Construction Kit for Modern Employee Training</h3>
                <p>In IQrew, training is structured logically:</p>
                <ul className="works-list">
                  <li>Courses consist of multiple modules.</li>
                  <li>Modules consist of various content types: videos, audios, PDFs, and images.</li>
                  <li>Modularity saves time and enables precise course creation.</li>
                  <li>A module can be used in multiple courses.</li>
                  <li>A content can be part of multiple modules.</li>
                </ul>
                <p>This creates a central and efficient knowledge management system that you can continuously expand.</p>
              </div>
              <div className="works-content-item">
                <h3>Set Deadlines and Steer Progress Cleanly</h3>
                <p>
                  When creating courses, you can define deadlines for your employees. This ensures that onboardings, training sessions, or mandatory training are completed on time and simply do not get lost.
                </p>
                <p>IQrew enables transparent expectation management for admins and learners.</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes & Certificates Section */}
      <section id="features" className="home-quizzes-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">QUIZZES & CERTIFICATES</h4>
            <h2 className="sec-title-lg">How Does Knowledge Become Verifiable in the Company?</h2>
          </div>
          <div className="quizzes-layout">
            {/* <div className="quizzes-left">
              <div className="quiz-feature-card">
                <div className="quiz-card-icon">📝</div>
                <h3>Quiz Creation for Contents and Complete Courses</h3>
                <p>With IQrew, you create quizzes both:</p>
                <ul className="quiz-list">
                  <li>For individual contents (e.g., after a video or PDF).</li>
                  <li>As well as for complete courses (final tests).</li>
                </ul>
              </div>
              <div className="quiz-feature-card">
                <div className="quiz-card-icon">🎬</div>
                <h3>Video Contents: Prevent Skipping</h3>
                <p>
                  For videos, you can determine whether skipping should be prevented. Ideal for mandatory contents such as safety instructions, data privacy, or compliance training.
                </p>
              </div>
            </div>
            <div className="quizzes-right">
              
            </div> */}

            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faFileAlt} />
              </div>
              <h4 className="title">Quiz Creation for Contents and Complete Courses</h4>
              <p className="desc">With IQrew, you create quizzes both:</p>
              <ul className="point-list">
                <li>For individual contents (e.g., after a video or PDF).</li>
                <li>As well as for complete courses (final tests).</li>
              </ul>
            </div>
            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faVideo} />
              </div>
              <h4 className="title">Video Contents: Prevent Skipping</h4>
              <p className="desc">
                For videos, you can determine whether skipping should be prevented. Ideal for mandatory contents such as safety instructions, data privacy, or compliance training.
              </p>
            </div>
            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faTrophy} />
              </div>
              <h4 className="title">Automatic Certificates, As Soon As Everything Is Passed</h4>
              <p className="desc">
                When all quizzes have been successfully completed according to the creator's specifications, IQrew automatically generates and saves a certificate.
              </p>
              <p className="desc">Reliable proofs are created without manual checking or additional tools.</p>
            </div>
            <div className="quiz-card quiz-types-card" data-aos="fade-up">
              <h3 className="title">These Quiz Types Are Available for Selection</h3>
              <p className="desc">Depending on the learning objective, you can choose the appropriate question type:</p>
              <div className="quiz-types-list">
                {quizTypes.map((type, index) => (
                  <div key={index} className="quiz-type">
                    <img className="type-icon" src={type.iconImg} alt={type.name} />
                    <div>
                      <h4 className="type-name">{type.name}</h4>
                      {type.description && <p className="type-desc">{type.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
      <section className="admin-dashboard-section">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">ADMIN DASHBOARD</h4>
            <h2 className="sec-title-lg">Learning Progress and Qualifications in View</h2>
          </div>
          <div className="dashboard-layout">
            <div className="dashboard-features">
              <div className="dashboard-feature-card">
                <div className="dashboard-card-icon">📊</div>
                <h3>Extensive Dashboard for Clarity</h3>
                <p>Administrators receive a dashboard that makes learning successes and qualifications visible company-wide. This allows you to:</p>
                <ul className="dashboard-list">
                  <li>Trace progress and completion rates.</li>
                  <li>Compare qualification statuses.</li>
                  <li>Check onboarding status per team/department.</li>
                  <li>Organize cross-departmental knowledge competitions.</li>
                </ul>
              </div>
              <div className="dashboard-feature-card">
                <div className="dashboard-card-icon">🔍</div>
                <h3>User Management with Extensive Search and Filter Options</h3>
                <p>
                  In user management, you quickly filter user lists according to relevant criteria. Especially valuable for growing teams, multiple locations, or different role profiles.
                </p>
                </div>
              <div className="dashboard-feature-card">
                <div className="dashboard-card-icon">🏷️</div>
                <h3>Tagging by Qualifications</h3>
                <p>With the tagging feature, you can tag users according to their qualifications and filter specifically later. This supports, for example:</p>
                <ul className="dashboard-list">
                  <li>Role-based training assignments.</li>
                  <li>Employee lists for qualification proofs within the scope of audit preparations.</li>
                  <li>Skill overviews in the company.</li>
                </ul>
                </div>
              </div>
            <div className="dashboard-highlight">
              <div className="dashboard-highlight-icon">📋</div>
              <h3>Manage External Qualifications & Certificate Expiry Dates (Incl. PDF Proofs)</h3>
              <p>Not every qualification is created internally. IQrew also allows you to:</p>
              <ul className="dashboard-list">
                <li>Capture and maintain external qualifications.</li>
                <li>Deposit PDF proofs.</li>
                <li>Track expiration dates of certificates & Certificate Lifecycle Management.</li>
              </ul>
              <p>This makes IQrew the central point for documenting internal and external qualifications in a structured manner.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Bulk Import Section */}
      <section className="home-bulk-import-sec">
        {/* <img className="vector-top" src={shapeTwo} alt="Vector" />
        <img className="vector-bottom" src={shapeThree} alt="Vector" /> */}
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">BULK IMPORT</h4>
            <h2 className="sec-title-lg">Invite Many Users in Minutes</h2>
            <p className="sec-desc">
              With our bulk import, you invite a multitude of users with just a few clicks. This saves time especially with large-scale operations and helps streamline your onboarding process efficiently.
            </p>
          </div>
          <div className="bulk-items-flex">
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h4 className="item-title">New Locations</h4>
              <p className="item-desc">Easily onboard employees at new office locations or branches.</p>
                  </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faUserPlus} />
                  </div>
              <h4 className="item-title">Large-Scale Hiring</h4>
              <p className="item-desc">Invite multiple new employees simultaneously during recruitment drives.</p>
                  </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
              <h4 className="item-title">Seasonal Teams</h4>
              <p className="item-desc">Quickly set up training for temporary or seasonal workforce.</p>
              </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faBook} />
            </div>
              <h4 className="item-title">Mandatory Training</h4>
              <p className="item-desc">Roll out mandatory training programs across your entire organization.</p>
                </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
              <h4 className="item-title">High Turnover</h4>
              <p className="item-desc">Manage frequent employee changes and short-term working power demands efficiently.</p>
                </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4 className="item-title">Mergers & Acquisitions</h4>
              <p className="item-desc">Integrate teams from merged or acquired companies seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="home-content-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">CONTENT CREATION</h4>
            <h2 className="sec-title-lg">Have Training Content Created</h2>
            <h3 className="sec-title-sm">You Want to Offer Your Team High-Quality Training Content, But You Lack Time, Resources, or an Established Content Team?</h3>
            <p className="sec-desc">
              We take over the creation of contents for your IQrew training. AI-supported, target-group-oriented, and based on your documents and data.
              We create videos, audios, and PDFs exactly so that they fit your roles, language, and internal specifications.
            </p>
          </div>
          <div  className="content-rows-flex">
            {contentTypes.map((type, index) => (
              <div key={index} className="content-type-row" data-aos="fade-up">
                <div className="img-container">
                  <img src={type.img} alt={type.title} />
                </div>
                <div className="content-container">
                  <h3 className="content-title">{type.title}</h3>
                  <ul className="content-list">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="content-creation-section">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">CONTENT CREATION</h4>
            <h2 className="sec-title-lg">Have Training Content Created</h2>
            <h3 className="sec-subtitle">You Want to Offer Your Team High-Quality Training Content, But You Lack Time, Resources, or an Established Content Team?</h3>
            <p className="sec-desc">
              We take over the creation of contents for your IQrew training. AI-supported, target-group-oriented, and based on your documents and data.
              We create videos, audios, and PDFs exactly so that they fit your roles, language, and internal specifications.
            </p>
          </div>
          <div className="content-types-carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
              className="content-types-carousel"
            >
              {contentTypes.map((type, index) => (
                <SwiperSlide key={index}>
                  <div className="content-type-card">
                    <div className="content-type-header">
                      <div className="content-type-icon">{type.icon}</div>
                      <h3>{type.title}</h3>
                    </div>
                    <ul className="content-type-list">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                </div>
              </div>
      </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="blue-banner-sec home-pricing-sec">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">Prices for IQrew Training and Content Creation</h4>
              <p className="banner-desc">
                Costs vary depending on the type, scope, and complexity of the content (e.g., video 
                length, number of videos, desired depth, design/brand adjustments, number of iterations).
                Therefore, we are happy to create an individual offer on request, fitting your goals 
                and schedule.
              </p>
                </div>
            <a 
              href="#contact" 
              className="btn btn--white btn--lg" 
              data-aos="fade-left" 
              onClick={handleScrollToContact}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="use-cases-section">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">USE CASES</h4>
            <h2 className="sec-title-lg">Onboarding for Companies of Every Size (Fast, Precise, Reusable)</h2>
              </div>
          <div className="use-cases-layout">
            <div className="use-case-card">
              <div className="use-case-icon">🚀</div>
              <h3>Create Onboarding Training in Few Clicks</h3>
              <p>
                Team leads and admins can build precise onboarding training by combining relevant modules from different company areas, e.g.:
              </p>
              <ul className="use-case-list">
                <li>IT & Security</li>
                <li>HR & Processes</li>
                <li>Data Privacy & Compliance</li>
                <li>Team-specific workflows</li>
                <li>AI basics in everyday work</li>
              </ul>
              <p>The result: New employees receive comprehensive, consistent onboarding without every team creating training completely from scratch.</p>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">✨</div>
              <h3>Typical Training That Becomes Particularly Easy with IQrew</h3>
              <div className="training-types-list">
                {trainingTypes.map((type, index) => (
                  <div key={index} className="training-type-item">
                    <div className="training-type-bullet"></div>
                    <span>{type}</span>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="home-sec-audience" ref={homeSecAudienceRef}>
        <img className="vector-top" src={shapeTwo} alt="Vector" />
        <img className="vector-bottom" src={shapeThree} alt="Vector" />
        <div className="container">
          <ShapeSvgComponent className="shape1" fillColor="orange">
            <svg width="43" height="86" viewBox="0 0 43 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 86C5.64684 86 11.2384 84.8878 16.4554 82.7268C21.6724 80.5659 26.4127 77.3985 30.4056 73.4056C34.3985 69.4127 37.5659 64.6724 39.7268 59.4554C41.8878 54.2384 43 48.6468 43 43C43 37.3532 41.8878 31.7616 39.7268 26.5446C37.5659 21.3276 34.3985 16.5873 30.4056 12.5944C26.4127 8.60149 21.6724 5.43413 16.4554 3.27318C11.2384 1.11223 5.64684 -2.46831e-07 0 0V86Z" fill="#fff"/>
            </svg>
          </ShapeSvgComponent>
          <ShapeSvgComponent className="shape2" fillColor="#1771b8">
            <svg width="198" height="99" viewBox="0 0 198 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M198 98.9998C198 85.9989 195.439 73.1253 190.464 61.1141C185.489 49.1029 178.197 38.1892 169.004 28.9962C159.811 19.8032 148.897 12.5109 136.886 7.53568C124.874 2.56047 112.001 -0.000244709 99 -0.000244141C85.9991 -0.000243572 73.1256 2.56047 61.1143 7.53568C49.1031 12.5109 38.1894 19.8032 28.9964 28.9962C19.8034 38.1892 12.5111 49.1029 7.53592 61.1141C2.56071 73.1253 -1.13657e-06 85.9989 0 98.9998L198 98.9998Z" fill="#fff"/>
            </svg>
          </ShapeSvgComponent>
          <div className="section-header">
            <h4 className="sec-label">TARGET AUDIENCE</h4>
            <h2 className="sec-title-lg">Who Is IQrew Made For?</h2>
            <p className="sec-desc">
              IQrew is designed for companies and organizations that need efficient, scalable training solutions. Whether you're managing onboarding, compliance, or continuous learning, IQrew helps you standardize training processes and track qualifications effectively.
            </p>
                </div>
          <div className="audience-cards-flex">
            {targetAudience.map((item, index) => (
              <div 
                key={index} 
                className="audience-card"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="home-faq-sec">
        {/* <img className="vector" src={shapeFive} alt="Vector" /> */}
        <div className="container">
          <div className="section-header">
            {/* <h4 className="sec-label">FAQ</h4> */}
            <h2 className="sec-title-lg">Frequently Asked Questions</h2>
            <p className="sec-desc">
              Find answers to common questions about IQrew, our training platform, and how it can help your organization. Explore our comprehensive FAQ section to learn more about features, pricing, implementation, and support options.
            </p>
          </div>
          <dl className="faq-list" data-aos="fade-up">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const faqId = `faq-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div key={index} className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
                  <dt className="faq-question-wrapper">
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      id={faqId}
                      type="button"
                    >
                      <span className="faq-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={faq.icon} />
                      </span>
                      <h4 className="faq-question-text">{faq.question}</h4>
                      <span className="toggle-icon" aria-hidden="true">
                        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="faq-answer" id={answerId} role="region" aria-labelledby={faqId}>
                      {faq.answer}
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* FAQ Cards Style */}
      {/* <section id="faq" className="home-faq-sec">
        <div className="container">
          <div className="section-header">
            <h2 className="sec-title-lg">Frequently Asked Questions</h2>
            <p className="sec-desc">
              Find answers to common questions about IQrew, our training platform, and how it can help your organization. Explore our comprehensive FAQ section to learn more about features, pricing, implementation, and support options.
            </p>
          </div>
          <div className="faq-cards-flex">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card" data-aos="fade-up">
                <div className="icon-container">
                  <FontAwesomeIcon className="icon" icon={faq.icon} />
                </div>
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Onboarding Section */}
      <section className="blue-banner-sec home-sec-onboarding">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">IQrew Brings Structure to Training and Speed to Onboarding</h4>
              <p className="banner-desc">
                IQrew is a platform for companies that want to scale training with modular structure, deadlines, quizzes, and certificates. Our customers report up to a 33% reduction in onboarding time. Create modular trainings, check knowledge, issue certificates automatically, and track everything in the dashboard.
              </p>
              </div>
            <a 
              href="#contact" 
              className="btn btn--white btn--lg" data-aos="fade-left"
              onClick={handleScrollToContact}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>
      {/* <section className="blue-banner-sec final-cta-section">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="cta-content">
            <div className="cta-label">READY TO START</div>
            <h2 className="cta-title">IQrew Brings Structure to Training and Speed to Onboarding</h2>
            <p className="cta-description">
              IQrew is a platform for companies that want to not only create training but scale it: modular structure, deadlines, quizzes, certificates, and an admin area that makes qualifications truly visible.
              Our customers report up to a 33% reduction in the onboarding time for new colleagues.
            </p>
            <p className="cta-message">
              Start with IQrew and create training that truly advances your team.
              Onboarding, compliance, or AI basics: create modular trainings, check knowledge, issue certificates automatically, and track everything in the dashboard.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn--orange btn--lg">Start with IQrew</Link>
              <Link to="/contact" className="btn btn--outline btn--lg">Request an Offer</Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Form Section */}
      <section id="contact" className="home-sec-footer">
        <img className="vector-top" src={shapeTwo} alt="Vector" />
        <img className="vector-bottom" src={shapeThree} alt="Vector" />
        <div className="container">
          <ShapeSvgComponent className="shape1" fillColor="orange">
            <svg width="43" height="86" viewBox="0 0 43 86" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 86C5.64684 86 11.2384 84.8878 16.4554 82.7268C21.6724 80.5659 26.4127 77.3985 30.4056 73.4056C34.3985 69.4127 37.5659 64.6724 39.7268 59.4554C41.8878 54.2384 43 48.6468 43 43C43 37.3532 41.8878 31.7616 39.7268 26.5446C37.5659 21.3276 34.3985 16.5873 30.4056 12.5944C26.4127 8.60149 21.6724 5.43413 16.4554 3.27318C11.2384 1.11223 5.64684 -2.46831e-07 0 0V86Z" fill="#fff"/>
            </svg>
          </ShapeSvgComponent>
          <ShapeSvgComponent className="shape2" fillColor="#1771b8">
            <svg width="198" height="99" viewBox="0 0 198 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M198 98.9998C198 85.9989 195.439 73.1253 190.464 61.1141C185.489 49.1029 178.197 38.1892 169.004 28.9962C159.811 19.8032 148.897 12.5109 136.886 7.53568C124.874 2.56047 112.001 -0.000244709 99 -0.000244141C85.9991 -0.000243572 73.1256 2.56047 61.1143 7.53568C49.1031 12.5109 38.1894 19.8032 28.9964 28.9962C19.8034 38.1892 12.5111 49.1029 7.53592 61.1141C2.56071 73.1253 -1.13657e-06 85.9989 0 98.9998L198 98.9998Z" fill="#fff"/>
            </svg>
          </ShapeSvgComponent>
          <div className="section-header">
            <h2 className="sec-title-lg">Let’s Stay Connected</h2>
            <p className="sec-desc">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using.
            </p>
          </div>
          <div className="footer-flex">
            <ShapeSvgComponent className="shape3" fillColor="#1771b8">
              <svg width="85" height="46" viewBox="0 0 85 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3816 2.39296C69.6701 2.06242 67.0688 3.16277 64.3819 5.46577C59.9602 9.25571 52.2878 11.1411 45.3723 5.48293C42.4097 3.059 39.8275 2.67579 37.694 3.03136C35.4851 3.39951 33.6272 4.57716 32.1668 5.55074C29.8539 7.09272 27.3067 8.71308 24.3732 9.09333C21.3452 9.48585 18.1119 8.54561 14.4286 5.47623C11.3446 2.90625 8.70571 2.41192 6.67863 2.72379C4.60456 3.04288 2.98853 4.23443 2.05857 5.33348C1.64211 5.82566 0.905519 5.88704 0.413345 5.47058C-0.0788304 5.05413 -0.140213 4.31754 0.276243 3.82536C1.48647 2.39509 3.5772 0.838716 6.3236 0.416181C9.11699 -0.0135824 12.4122 0.756749 15.9233 3.68262C19.2443 6.4501 21.8479 7.06639 24.0731 6.77795C26.3928 6.47725 28.5152 5.17916 30.8717 3.60811L31.5193 4.57942L30.8717 3.60811C32.3298 2.63605 34.5577 1.1871 37.3102 0.728369C40.1381 0.257061 43.3927 0.84667 46.8507 3.67592C52.7127 8.47206 59.1125 6.90726 62.8625 3.69307C65.8163 1.16131 69.0519 -0.364991 72.6641 0.0753546C76.2403 0.5113 79.8876 2.84169 83.7662 7.31693C84.1884 7.80414 84.1357 8.54141 83.6485 8.96366C83.1613 9.38591 82.424 9.33325 82.0018 8.84603C78.2924 4.56591 75.1292 2.72789 72.3816 2.39296Z" fill="#fff"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3816 14.6417C69.6701 14.3112 67.0688 15.4116 64.3819 17.7145C59.9602 21.5045 52.2878 23.3899 45.3723 17.7317C42.4097 15.3078 39.8275 14.9246 37.694 15.2801C35.4851 15.6483 33.6272 16.8259 32.1668 17.7995C29.8539 19.3415 27.3067 20.9619 24.3732 21.3421C21.3452 21.7346 18.1119 20.7944 14.4286 17.725C11.3446 15.155 8.70571 14.6607 6.67863 14.9726C4.60456 15.2917 2.98853 16.4832 2.05857 17.5823C1.64211 18.0744 0.905519 18.1358 0.413345 17.7194C-0.0788304 17.3029 -0.140213 16.5663 0.276243 16.0741C1.48647 14.6439 3.5772 13.0875 6.3236 12.665C9.11699 12.2352 12.4122 13.0055 15.9233 15.9314C19.2443 18.6989 21.8479 19.3152 24.0731 19.0267C26.3928 18.726 28.5152 17.4279 30.8717 15.8569L31.5193 16.8282L30.8717 15.8569C32.3298 14.8848 34.5577 13.4359 37.3102 12.9771C40.1381 12.5058 43.3927 13.0954 46.8507 15.9247C52.7127 20.7208 59.1125 19.156 62.8625 15.9419C65.8163 13.4101 69.0519 11.8838 72.6641 12.3241C76.2403 12.7601 79.8876 15.0905 83.7662 19.5657C84.1884 20.0529 84.1357 20.7902 83.6485 21.2124C83.1613 21.6347 82.424 21.582 82.0018 21.0948C78.2924 16.8147 75.1292 14.9767 72.3816 14.6417Z" fill="#fff"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3816 26.8905C69.6701 26.56 67.0688 27.6603 64.3819 29.9633C59.9602 33.7533 52.2878 35.6386 45.3723 29.9805C42.4097 27.5566 39.8275 27.1733 37.694 27.5289C35.4851 27.8971 33.6272 29.0747 32.1668 30.0483C29.8539 31.5903 27.3067 33.2106 24.3732 33.5909C21.3452 33.9834 18.1119 33.0432 14.4286 29.9738C11.3446 27.4038 8.70571 26.9095 6.67863 27.2213C4.60456 27.5404 2.98853 28.732 2.05857 29.831C1.64211 30.3232 0.905519 30.3846 0.413345 29.9681C-0.0788304 29.5517 -0.140213 28.8151 0.276243 28.3229C1.48647 26.8927 3.5772 25.3363 6.3236 24.9137C9.11699 24.484 12.4122 25.2543 15.9233 28.1802C19.2443 30.9477 21.8479 31.5639 24.0731 31.2755C26.3928 30.9748 28.5152 29.6767 30.8717 28.1057L31.5193 29.077L30.8717 28.1057C32.3298 27.1336 34.5577 25.6847 37.3102 25.2259C40.1381 24.7546 43.3927 25.3442 46.8507 28.1735C52.7127 32.9696 59.1125 31.4048 62.8625 28.1906C65.8163 25.6589 69.0519 24.1326 72.6641 24.5729C76.2403 25.0089 79.8876 27.3393 83.7662 31.8145C84.1884 32.3017 84.1357 33.039 83.6485 33.4612C83.1613 33.8835 82.424 33.8308 82.0018 33.3436C78.2924 29.0635 75.1292 27.2255 72.3816 26.8905Z" fill="#fff"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72.3816 39.1393C69.6701 38.8088 67.0688 39.9091 64.3819 42.2121C59.9602 46.0021 52.2878 47.8874 45.3723 42.2293C42.4097 39.8053 39.8275 39.4221 37.694 39.7777C35.4851 40.1458 33.6272 41.3235 32.1668 42.2971C29.8539 43.8391 27.3067 45.4594 24.3732 45.8397C21.3452 46.2322 18.1119 45.292 14.4286 42.2226C11.3446 39.6526 8.70571 39.1583 6.67863 39.4701C4.60456 39.7892 2.98853 40.9808 2.05857 42.0798C1.64211 42.572 0.905519 42.6334 0.413345 42.2169C-0.0788304 41.8005 -0.140213 41.0639 0.276243 40.5717C1.48647 39.1414 3.5772 37.5851 6.3236 37.1625C9.11699 36.7328 12.4122 37.5031 15.9233 40.429C19.2443 43.1964 21.8479 43.8127 24.0731 43.5243C26.3928 43.2236 28.5152 41.9255 30.8717 40.3544L31.5193 41.3258L30.8717 40.3544C32.3298 39.3824 34.5577 37.9334 37.3102 37.4747C40.1381 37.0034 43.3927 37.593 46.8507 40.4223C52.7127 45.2184 59.1125 43.6536 62.8625 40.4394C65.8163 37.9076 69.0519 36.3813 72.6641 36.8217C76.2403 37.2576 79.8876 39.588 83.7662 44.0633C84.1884 44.5505 84.1357 45.2877 83.6485 45.71C83.1613 46.1322 82.424 46.0796 82.0018 45.5924C78.2924 41.3123 75.1292 39.4742 72.3816 39.1393Z" fill="#fff"/>
              </svg>
            </ShapeSvgComponent>
            <div className="footer-left footer-card" data-aos="fade-up">
              <div className="contact-info-items">
                <div className="item">
                  <h4 className="title">Email Address</h4>
                  <p className="text">
                    <a href="mailto:info@iqrew.com">info@iqrew.com</a>
                    </p>
                </div>
                <div className="item">
                  <h4 className="title">Office Location</h4>
                  <p className="text">
                    Navakethan Complex, 6th Floor, 605, 606 A&P opp, CLock Tower, SD Road, 
                    Secunderabad, Telangana 500003
                  </p>
                </div>
                <div className="item">
                  <h4 className="title">Phone Number</h4>
                  <p className="text">
                    <a href="tel:+478888899999">+47 88888 99999</a>
                  </p>
                </div>
                <div className="item">
                  <h4 className="title">Social Media</h4>
                  <div className="social-links">
                    {socials.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.url} 
                        aria-label={social.label} 
                        className="link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon className="icon" icon={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <ShapeSvgComponent className="shape4" fillColor="orange">
                <svg width="43" height="86" viewBox="0 0 43 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 86C5.64684 86 11.2384 84.8878 16.4554 82.7268C21.6724 80.5659 26.4127 77.3985 30.4056 73.4056C34.3985 69.4127 37.5659 64.6724 39.7268 59.4554C41.8878 54.2384 43 48.6468 43 43C43 37.3532 41.8878 31.7616 39.7268 26.5446C37.5659 21.3276 34.3985 16.5873 30.4056 12.5944C26.4127 8.60149 21.6724 5.43413 16.4554 3.27318C11.2384 1.11223 5.64684 -2.46831e-07 0 0V86Z" fill="#fff"/>
                </svg>
              </ShapeSvgComponent>
            </div>
            <div className="footer-right footer-card" data-aos="fade-up">
              <HomeForm />
            </div>
            
          </div>
          
        </div>
      </section>

    </div>
  );
}
