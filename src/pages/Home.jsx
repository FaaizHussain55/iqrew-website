import { Link } from "react-router-dom";
import { useEffect, useRef, useMemo, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ShapeSvgComponent from "../components/ShapeSvgComponent";
import { useLanguage } from "../contexts/LanguageContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.scss";
import shapeOne from "../assets/images/line-vector-1.svg";
import shapeTwo from "../assets/images/line-vector-2.svg";
import shapeThree from "../assets/images/line-vector-3.svg";
import shapeFour from "../assets/images/line-vector-4.svg";
// import shapeFive from "../assets/images/line-vector-5.svg";
import heroImage from "../assets/images/img-hero.png";
import HiwVector1 from "../assets/images/home-hiw-vector1.png";
import HiwVector2 from "../assets/images/home-hiw-vector2.png";
import adminDashboardImgEng from "../assets/images/eng-dashboard-ss.png";
import adminUsersImgEng from "../assets/images/eng-users-ss.png";
import adminTagsImgEng from "../assets/images/eng-tags-ss.png";
import adminCertificatesImgEng from "../assets/images/eng-certificates-ss.png";
import adminDashboardImgDe from "../assets/images/german-dashboard-ss.png";
import adminUsersImgDe from "../assets/images/german-users-ss.png";
import adminTagsImgDe from "../assets/images/german-tags-ss.png";
import adminCertificatesImgDe from "../assets/images/german-certificates-ss.png";
import contentTypeImg1 from "../assets/images/img-content-sec-type1.jpg";
import contentTypeImg2 from "../assets/images/img-content-sec-type2.jpg";
import contentTypeImg3 from "../assets/images/img-content-sec-type3.jpg";
import useCaseVector1 from "../assets/images/home-use-cases-vector1.png";
import useCaseVector2 from "../assets/images/home-use-cases-vector2.png";
import quizTypeIcon1 from "../assets/icons/icon-quiz-type1.gif";
import quizTypeIcon2 from "../assets/icons/icon-quiz-type2.gif";
import quizTypeIcon3 from "../assets/icons/icon-quiz-type3.gif";
import quizTypeIcon4 from "../assets/icons/icon-quiz-type4.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faInstagram,
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
  const { t, language } = useLanguage();

  const handleScrollToTarget = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Check viewport width directly at click time for accurate mobile detection
      const isMobileView = window.innerWidth < 768;
      const headerOffset = isMobileView ? 61 : 78;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Initialize AOS only for home-audience-sec section (optimized)
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

  const coreFeatures = useMemo(() => [
    {
      icon: faCubes,
      title: t("whyIqrew.features.modularStructure.title"),
      description: t("whyIqrew.features.modularStructure.description"),
    },
    {
      icon: faCheckCircle,
      title: t("whyIqrew.features.knowledgeChecks.title"),
      description: t("whyIqrew.features.knowledgeChecks.description"),
    },
    {
      icon: faCertificate,
      title: t("whyIqrew.features.autoCertificates.title"),
      description: t("whyIqrew.features.autoCertificates.description"),
    },
    {
      icon: faChartLine,
      title: t("whyIqrew.features.trackProgress.title"),
      description: t("whyIqrew.features.trackProgress.description"),
    },
  ], [t]);

  const quizTypes = useMemo(() => [
    { name: t("quizzes.quizTypes.types.multipleChoice"), iconImg: quizTypeIcon1 },
    { name: t("quizzes.quizTypes.types.singleChoice"), iconImg: quizTypeIcon2 },
    { name: t("quizzes.quizTypes.types.trueFalse"), iconImg: quizTypeIcon3 },
    { name: t("quizzes.quizTypes.types.sequencing"), iconImg: quizTypeIcon4 },
  ], [t]);

  const contentTypes = useMemo(() => [
    {
      img: contentTypeImg1,
      title: t("contentCreation.types.trainingVideos.title"),
      items: t("contentCreation.types.trainingVideos.items"),
    },
    {
      img: contentTypeImg2,
      title: t("contentCreation.types.audios.title"),
      items: t("contentCreation.types.audios.items"),
    },
    {
      img: contentTypeImg3,
      title: t("contentCreation.types.pdfs.title"),
      items: t("contentCreation.types.pdfs.items"),
    },
  ], [t]);

  const trainingTypes = useMemo(() => t("useCases.typicalTraining.types"), [t]);

  const targetAudience = useMemo(() => {
    const items = t("targetAudience.items");
    const icons = [faUsers, faClipboardCheck, faPuzzlePiece, faCertificate, faUserShield, faGlobe, faSync, faChartBar, faGraduationCap];
    return items.map((text, index) => ({
      text,
      icon: icons[index],
    }));
  }, [t]);

  //FAQ Section Script
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(
    () => [
      {
        question: t("faq.questions.moduleMultipleCourses.question"),
        answer: t("faq.questions.moduleMultipleCourses.answer"),
        icon: faLayerGroup,
      },
      {
        question: t("faq.questions.contentMultipleTimes.question"),
        answer: t("faq.questions.contentMultipleTimes.answer"),
        icon: faSync,
      },
      {
        question: t("faq.questions.cost.question"),
        answer: t("faq.questions.cost.answer"),
        icon: faDollarSign,
      },
      {
        question: t("faq.questions.contentTypes.question"),
        answer: t("faq.questions.contentTypes.answer"),
        icon: faFileAlt,
      },
      {
        question: t("faq.questions.quizTypes.question"),
        answer: t("faq.questions.quizTypes.answer"),
        icon: faCheckSquare,
      },
      {
        question: t("faq.questions.preventSkipping.question"),
        answer: t("faq.questions.preventSkipping.answer"),
        icon: faVideo,
      },
      {
        question: t("faq.questions.autoCertificates.question"),
        answer: t("faq.questions.autoCertificates.answer"),
        icon: faTrophy,
      },
      {
        question: t("faq.questions.externalCertificates.question"),
        answer: t("faq.questions.externalCertificates.answer"),
        icon: faFilePdf,
      },
      {
        question: t("faq.questions.industries.question"),
        answer: t("faq.questions.industries.answer"),
        icon: faIndustry,
      },
      {
        question: t("faq.questions.support.question"),
        answer: t("faq.questions.support.answer"),
        icon: faHeadset,
      },
      {
        question: t("faq.questions.courses.question"),
        answer: t("faq.questions.courses.answer"),
        icon: faBookOpen,
      },
    ], 
    [t]
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
    { icon: faInstagram, label: "Instagram", url: "https://www.instagram.com/iqrew.de?igsh=MW4ybnF2NTl1ZTNvdA%3D%3D&utm_source=qr" },
    { icon: faLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com/company/iqrew" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section - Dark Blue Background */}
      <section className="home-hero-sec">
        <div className="container">
          <div className="hero-flex">
            <div className="content-container" data-aos="fade-right">
              <h1 className="sec-title-lg">{t("hero.title")}</h1>
              <h2 className="sec-subtitle">{t("hero.subtitle")}</h2>
              <p className="sec-desc">
                {t("hero.description1")}
              </p>
              <p className="sec-desc">
                {t("hero.description2")}
              </p>
              <p className="sec-desc">{t("hero.tagline")}</p>
              <div className="btns-flex">
                <a 
                  href="#why-iqrew" 
                  className="btn btn--orange btn--lg"
                  onClick={(e) => handleScrollToTarget(e, "why-iqrew")}
                >
                  {t("hero.cta")}
                </a>
                <a 
                  href="#contact" 
                  className="btn btn--outline-white btn--lg"
                  onClick={(e) => handleScrollToTarget(e, "contact")}
                >
                  {t("hero.cta2")}
                </a>
              </div>
            </div>
            <div className="img-container" data-aos="fade-left">
              <img src={heroImage} alt="Hero Image" />
              {/* <div className="hero-images-grid">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Why IQrew Section */}
      <section id="why-iqrew" className="home-why-iqrew-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("whyIqrew.label")}</h4>
            <h2 className="sec-title-lg">{t("whyIqrew.title")}</h2>
            <p className="sec-desc">
              {t("whyIqrew.description")}
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
        </div>
      </section>

      {/* Success Story Section */}
      <section className="blue-banner-sec home-success-story-sec">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">{t("successStory.title")}</h4>
              <p className="banner-desc">
                {t("successStory.description")}
              </p>
            </div>
            <a 
              href="#contact" 
              className="btn btn--orange btn--lg" 
              data-aos="fade-left" 
              onClick={(e) => handleScrollToTarget(e, "contact")}
            >
              {t("successStory.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* How IQrew Works Section */}
      <section id="how-it-works" className="home-hiw-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("howItWorks.label")}</h4>
            <h2 className="sec-title-lg">{t("howItWorks.title")}</h2>
          </div>
          <div className="rows-flex">
            <div className="row-item">
              <div className="content-container" data-aos="fade-right">
                <h3 className="content-title">
                  {t("howItWorks.coursesModules.title")}
                </h3>
                <p className="content-desc">{t("howItWorks.coursesModules.description")}</p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("howItWorks.coursesModules.points.courses")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("howItWorks.coursesModules.points.modules")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("howItWorks.coursesModules.points.modularity")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("howItWorks.coursesModules.points.moduleReuse")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("howItWorks.coursesModules.points.contentReuse")}</span>
                  </li>
                </ul>
                <p className="content-desc">
                  {t("howItWorks.coursesModules.conclusion")}
                </p>
              </div>
              <div className="img-container" data-aos="fade-left">
                <img src={HiwVector1} alt="Use Case" />
              </div>
            </div>
            <div className="row-item">
              <div className="content-container" data-aos="fade-left">
                <h3 className="content-title">{t("howItWorks.deadlines.title")}</h3>
                <p className="content-desc">
                  {t("howItWorks.deadlines.description1")}
                </p>
                <p className="content-desc">{t("howItWorks.deadlines.description2")}</p>
              </div>
              <div className="img-container" data-aos="fade-right">
                <img src={HiwVector2} alt="Use Case" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-sec">
        <img className="vector" src={shapeOne} alt="Vector" />
        <ShapeSvgComponent className="shape1" fillColor="#ef7600">
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
              <h2 className="stat-number">{t("stats.reduction.number")}</h2>
              <h5 className="stat-label">{t("stats.reduction.label")}</h5>
            </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">{t("stats.automated.number")}</h2>
              <h5 className="stat-label">{t("stats.automated.label")}</h5>
            </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">{t("stats.reusable.number")}</h2>
              <h5 className="stat-label">{t("stats.reusable.label")}</h5>
              </div>
            <div className="stat-item" data-aos="fade-up">
              <h2 className="stat-number">{t("stats.access.number")}</h2>
              <h5 className="stat-label">{t("stats.access.label")}</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes & Certificates Section */}
      <section id="features" className="home-quizzes-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("quizzes.label")}</h4>
            <h2 className="sec-title-lg">{t("quizzes.title")}</h2>
          </div>
          <div className="quizzes-layout">
            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faFileAlt} />
              </div>
              <h4 className="title">{t("quizzes.quizCreation.title")}</h4>
              <p className="desc">{t("quizzes.quizCreation.description")}</p>
              <ul className="checks-list blue-checks">
                <li>
                  <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                  <span>{t("quizzes.quizCreation.points.individual")}</span>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                  <span>{t("quizzes.quizCreation.points.complete")}</span>
                </li>
              </ul>
            </div>
            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faVideo} />
              </div>
              <h4 className="title">{t("quizzes.videoSkipping.title")}</h4>
              <p className="desc">
                {t("quizzes.videoSkipping.description")}
              </p>
              <ul className="checks-list blue-checks">
                <li>
                  <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                  <span>{t("quizzes.videoSkipping.points.point1")}</span>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                  <span>{t("quizzes.videoSkipping.points.point2")}</span>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                  <span>{t("quizzes.videoSkipping.points.point3")}</span>
                </li>
              </ul>
            </div>
            <div className="quiz-card" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faTrophy} />
              </div>
              <h4 className="title">{t("quizzes.autoCertificates.title")}</h4>
              <p className="desc">
                {t("quizzes.autoCertificates.description1")}
              </p>
              <p className="desc">{t("quizzes.autoCertificates.description2")}</p>
            </div>
            <div className="quiz-card quiz-types-card" data-aos="fade-up">
              <h3 className="title">{t("quizzes.quizTypes.title")}</h3>
              <p className="desc">{t("quizzes.quizTypes.description")}</p>
              <div className="quiz-types-list">
                {quizTypes.map((type, index) => (
                  <div key={index} className="quiz-type">
                    <img className="type-icon" src={type.iconImg} alt={type.name} />
                    <h4 className="type-name">{type.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Admin Dashboard Section */}
      <section className="home-admin-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("adminDashboard.label")}</h4>
            <h2 className="sec-title-lg">{t("adminDashboard.title")}</h2>
            <p className="sec-desc">
              {t("adminDashboard.description")}
            </p>
          </div>
          <div className="rows-flex">
            <div className="row-item">
              <div className="content-container" data-aos="fade-right">
                <h3 className="content-title">{t("adminDashboard.detailedDashboard.title")}</h3>
                <p className="content-desc">
                  {t("adminDashboard.detailedDashboard.description")}
                </p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.detailedDashboard.points.trace")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.detailedDashboard.points.compare")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.detailedDashboard.points.check")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.detailedDashboard.points.organize")}</span>
                  </li>
                </ul>
              </div>
              <div className="img-container" data-aos="fade-left">
                <img src={language === 'de' ? adminDashboardImgDe : adminDashboardImgEng} alt="Admin Dashboard" />
              </div>
            </div>
            <div className="row-item">
              <div className="content-container" data-aos="fade-left">
                <h3 className="content-title">
                  {t("adminDashboard.userManagement.title")}
                </h3>
                <p className="content-desc">
                  {t("adminDashboard.userManagement.description")}
                </p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userManagement.points.growing")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userManagement.points.locations")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userManagement.points.roles")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userManagement.points.reporting")}</span>
                  </li>
                </ul>
              </div>
              <div className="img-container" data-aos="fade-right">
                <img src={language === 'de' ? adminUsersImgDe : adminUsersImgEng} alt="Admin Dashboard" />
              </div>
            </div>
            <div className="row-item">
              <div className="content-container" data-aos="fade-right">
                <h3 className="content-title">{t("adminDashboard.userTags.title")}</h3>
                <p className="content-desc">
                  {t("adminDashboard.userTags.description")}
                </p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userTags.points.roleBased")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userTags.points.employeeLists")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.userTags.points.skillOverviews")}</span>
                  </li>
                </ul>
              </div>
              <div className="img-container" data-aos="fade-left">
                <img src={language === 'de' ? adminTagsImgDe : adminTagsImgEng} alt="Admin Dashboard" />
              </div>
            </div>
            <div className="row-item">
              <div className="content-container" data-aos="fade-left">
                <h3 className="content-title">
                  {t("adminDashboard.externalQualifications.title")}
                </h3>
                <p className="content-desc">
                  {t("adminDashboard.externalQualifications.description")}
                </p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.externalQualifications.points.capture")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.externalQualifications.points.deposit")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("adminDashboard.externalQualifications.points.track")}</span>
                  </li>
                </ul>
                <p className="content-desc">
                  {t("adminDashboard.externalQualifications.conclusion")}
                </p>
              </div>
              <div className="img-container" data-aos="fade-right">
                <img src={language === 'de' ? adminCertificatesImgDe : adminCertificatesImgEng} alt="Admin Dashboard" />
              </div>
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
            <h4 className="sec-label">{t("bulkImport.label")}</h4>
            <h2 className="sec-title-lg">{t("bulkImport.title")}</h2>
            <p className="sec-desc">
              {t("bulkImport.description")}
            </p>
          </div>
          <div className="bulk-items-flex">
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h4 className="item-title">{t("bulkImport.items.newLocations.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.newLocations.description")}</p>
            </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faUserPlus} />
                  </div>
              <h4 className="item-title">{t("bulkImport.items.largeHiring.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.largeHiring.description")}</p>
                  </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
              <h4 className="item-title">{t("bulkImport.items.seasonalTeams.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.seasonalTeams.description")}</p>
              </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faBook} />
            </div>
              <h4 className="item-title">{t("bulkImport.items.mandatoryTraining.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.mandatoryTraining.description")}</p>
                </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
              <h4 className="item-title">{t("bulkImport.items.highTurnover.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.highTurnover.description")}</p>
                </div>
            <div className="item" data-aos="fade-up">
              <div className="icon-container">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h4 className="item-title">{t("bulkImport.items.mergers.title")}</h4>
              <p className="item-desc">{t("bulkImport.items.mergers.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section id="content-creation" className="home-content-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("contentCreation.label")}</h4>
            <h2 className="sec-title-lg">{t("contentCreation.title")}</h2>
            {/* <h3 className="sec-title-sm">You Want to Offer Your Team High-Quality Training Content, But You Lack Time, Resources, or an Established Content Team?</h3> */}
            <p className="sec-desc">
              {t("contentCreation.description")}
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
                  <ul className="checks-list blue-checks">
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

      {/* Pricing Section */}
      <section className="blue-banner-sec home-pricing-sec">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">{t("pricing.title")}</h4>
              <p className="banner-desc">
                {t("pricing.description")}
              </p>
                </div>
            <a 
              href="#contact" 
              className="btn btn--orange btn--lg" 
              data-aos="fade-left" 
              onClick={(e) => handleScrollToTarget(e, "contact")}
            >
              {t("pricing.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="home-use-cases-sec">
        <div className="container">
          <div className="section-header">
            <h4 className="sec-label">{t("useCases.label")}</h4>
            <h2 className="sec-title-lg">{t("useCases.title")}</h2>
            <p className="sec-desc">
              {t("useCases.description")}
            </p>
          </div>
          <div className="rows-flex">
            <div className="row-item">
              <div className="content-container" data-aos="fade-right">
                <h3 className="content-title">{t("useCases.onboardingTraining.title")}</h3>
                <p className="content-desc">
                  {t("useCases.onboardingTraining.description")}
                </p>
                <ul className="checks-list blue-checks">
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("useCases.onboardingTraining.points.itSecurity")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("useCases.onboardingTraining.points.hrProcesses")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("useCases.onboardingTraining.points.dataPrivacy")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("useCases.onboardingTraining.points.teamWorkflows")}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                    <span>{t("useCases.onboardingTraining.points.aiBasics")}</span>
                  </li>
                </ul>
                <p className="content-desc">
                  {t("useCases.onboardingTraining.conclusion")}
                </p>
              </div>
              <div className="img-container" data-aos="fade-left">
                <img src={useCaseVector1} alt="Use Case" />
              </div>
            </div>
            <div className="row-item">
              <div className="content-container" data-aos="fade-left">
                <h3 className="content-title">
                  {t("useCases.typicalTraining.title")}
                </h3>
                <p className="content-desc">
                  {t("useCases.typicalTraining.description")}
                </p>
                <ul className="checks-list blue-checks">
                  {trainingTypes.map((type, index) => (
                    <li key={index}>
                      <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="img-container" data-aos="fade-right">
                <img src={useCaseVector2} alt="Use Case" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="home-audience-sec" ref={homeSecAudienceRef}>
        <img className="vector-top" src={shapeTwo} alt="Vector" />
        <img className="vector-bottom" src={shapeThree} alt="Vector" />
        <div className="container">
          <ShapeSvgComponent className="shape1" fillColor="#ef7600">
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
            <h4 className="sec-label">{t("targetAudience.label")}</h4>
            <h2 className="sec-title-lg">{t("targetAudience.title")}</h2>
            <p className="sec-desc">
              {t("targetAudience.description")}
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
            <h2 className="sec-title-lg">{t("faq.title")}</h2>
            <p className="sec-desc">
              {t("faq.description")}
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
      <section className="blue-banner-sec home-onboarding-sec">
        <img className="vector" src={shapeFour} alt="Vector" />
        <div className="container">
          <div className="banner-flex">
            <div className="banner-content" data-aos="fade-right">
              <h4 className="banner-title">{t("finalCta.title")}</h4>
              <p className="banner-desc">
                {t("finalCta.description")}
              </p>
              </div>
            <a 
              href="#contact" 
              className="btn btn--orange btn--lg" data-aos="fade-left"
              onClick={(e) => handleScrollToTarget(e, "contact")}
            >
              {t("finalCta.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="home-sec-footer">
        <img className="vector-top" src={shapeTwo} alt="Vector" />
        <img className="vector-bottom" src={shapeThree} alt="Vector" />
        <div className="container">
          <ShapeSvgComponent className="shape1" fillColor="#ef7600">
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
            <h2 className="sec-title-lg">{t("contact.title")}</h2>
            <p className="sec-desc">
              {t("contact.description")}
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
                  <h4 className="title">{t("contact.email.title")}</h4>
                  <p className="text">
                    <a href="mailto:info@iqrew.app">{t("contact.email.value")}</a>
                    </p>
                </div>
                <div className="item">
                  <h4 className="title">{t("contact.office.title")}</h4>
                  <p className="text">
                    {t("contact.office.value")}
                  </p>
                </div>
                <div className="item">
                  <h4 className="title">{t("contact.phone.title")}</h4>
                  <p className="text">
                    <a href="tel:+4989248819270">{t("contact.phone.value")}</a>
                  </p>
                </div>
                <div className="item">
                  <h4 className="title">{t("contact.social.title")}</h4>
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
              <ShapeSvgComponent className="shape4" fillColor="#ef7600">
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
