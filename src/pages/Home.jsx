import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.scss";
import shapeOne from "../assets/images/line-vector-1.svg";
import shapeTwo from "../assets/images/line-vector-2.svg";
import shapeThree from "../assets/images/line-vector-3.svg";
import shapeFour from "../assets/images/line-vector-4.svg";
// import shapeFive from "../assets/images/line-vector-5.svg";
import shapeVertical from "../assets/images/shape-yellow-vertical.svg";
import shapeHorizontal from "../assets/images/shape-blue-horizontal.svg";
import contentTypeImg1 from "../assets/images/img-content-sec-type1.jpg";
import contentTypeImg2 from "../assets/images/img-content-sec-type2.jpg";
import contentTypeImg3 from "../assets/images/img-content-sec-type3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeForm from "../components/HomeForm";
// import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
    { name: "Multiple Choice", icon: "☑️" },
    { name: "Single Choice", icon: "🔘" },
    { name: "True/False", icon: "✓" },
    { name: "Sequencing", icon: "🔢", description: "e.g., ordering process steps correctly" },
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

  const faqs = [
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
      <section id="why-iqrew" className="home-why-iqrew-sec why-iqrew-section">
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
              <div key={index} className="item">
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
      <section id="features" className="quizzes-section">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">QUIZZES & CERTIFICATES</h4>
            <h2 className="sec-title-lg">How Does Knowledge Become Verifiable in the Company?</h2>
          </div>
          <div className="quizzes-layout">
            <div className="quizzes-left">
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
              <div className="quiz-types-card">
                <h3>These Quiz Types Are Available for Selection</h3>
                <p>Depending on the learning objective, you can choose the appropriate question type:</p>
                <div className="quiz-types-list">
                  {quizTypes.map((type, index) => (
                    <div key={index} className="quiz-type-item">
                      <div className="quiz-type-icon">{type.icon}</div>
                      <div className="quiz-type-text">
                        <span className="quiz-type-name">{type.name}</span>
                        {type.description && <span className="quiz-type-desc">{type.description}</span>}
                  </div>
                </div>
              ))}
            </div>
              </div>
              <div className="certificate-highlight">
                <div className="certificate-icon">🏆</div>
                <h3>Automatic Certificates, As Soon As Everything Is Passed</h3>
                <p>
                  When all quizzes have been successfully completed according to the creator's specifications, IQrew automatically generates and saves a certificate.
                </p>
                <p>Reliable proofs are created without manual checking or additional tools.</p>
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
      </section>

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
          <img className="shape1" src={shapeVertical} alt="Vector" />
          <img className="shape2" src={shapeHorizontal} alt="Vector" />
          <div className="section-header">
            <h2 className="sec-title-lg">Let’s Stay Connected</h2>
            <p className="sec-desc">
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using.
            </p>
          </div>
          <div className="footer-flex">
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
                  <div className="social-media-links">
                    <a href="https://www.facebook.com/iqrew" target="_blank" rel="noopener noreferrer">
                      {/* <FontAwesomeIcon icon={faFacebook} /> */}
                    </a>
                    <a href="https://www.twitter.com/iqrew" target="_blank" rel="noopener noreferrer">
                      {/* <FontAwesomeIcon icon={faTwitter} /> */}
                    </a>
                  </div>
                </div>
              </div>
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
