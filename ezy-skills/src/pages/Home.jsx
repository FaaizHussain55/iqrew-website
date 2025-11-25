import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.scss";

export default function Home() {
  const aiFeatures = [
    {
      title: "AI Based Course Selector",
      icon: "🧠",
      description: "Intelligent course recommendations based on your learning path and career goals",
    },
    {
      title: "AI Based Scenarios",
      icon: "💻",
      description: "Interactive scenario-based learning with real-world applications and practice cases",
    },
    {
      title: "AI Based Quizzes/Tests",
      icon: "📝",
      description: "Adaptive assessments with content quizzes, quick tests, and comprehensive final evaluations",
    },
    {
      title: "AI Based Gamification",
      icon: "🎮",
      description: "Engaging learning experience with progress tracking, achievements, and certification rewards",
    },
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: "Enroll in Courses and Access Learning Modules",
      icon: "💬",
    },
    {
      step: "02",
      title: "Complete Video, Audio, PDF and Image Content",
      icon: "▶️",
    },
    {
      step: "03",
      title: "Take Content Quizzes and Module Assessments",
      icon: "📊",
    },
    {
      step: "04",
      title: "Attempt Course Quick Tests and Final Assessments",
      icon: "🔍",
    },
    {
      step: "05",
      title: "Track Progress and Achieve Passing Scores",
      icon: "💻",
    },
    {
      step: "06",
      title: "Earn Module and Course Certificates",
      icon: "📋",
    },
  ];

  const popularCourses = [
    { name: "Angular JS", logo: "A", color: "#dd0031" },
    { name: "AWS", logo: "AWS", color: "#ff9900" },
    { name: "Vue JS", logo: "V", color: "#4fc08d" },
    { name: "Power BI", logo: "P", color: "#f2c811" },
    { name: "Python", logo: "Py", color: "#3776ab" },
    { name: "React JS", logo: "R", color: "#61dafb" },
    { name: "Software Testing", logo: "ST", color: "#28a745" },
    { name: "Core UI", logo: "UI", color: "#007bff" },
  ];

  const mentors = [
    { name: "Sandeep", rating: 5, role: "Super Admin & Course Manager" },
    { name: "Sudhansu", rating: 5, role: "Department Head - Engineering" },
    { name: "Ruchika Tuteja", rating: 5, role: "Admin - Learning Path Coordinator" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transform Your Career Through Comprehensive Learning Management</h1>
              <p>Access structured courses, interactive modules, and earn certificates to advance your professional journey.</p>
              <div className="hero-cta">
                <input type="text" placeholder="Search contents..." className="hero-search" />
                <button className="btn btn--primary">Get Started</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-illustration">
                <div className="orange-circle-bg"></div>
                <div className="laptop-person"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Based Features - Swiper */}
      <section className="ai-features-section">
        <div className="container">
          <div className="ai-features-content">
            {/* Left Section - Headline */}
            <div className="ai-features-left">
              <div className="ai-headline-wrapper">
                <div className="gray-strip"></div>
                <div className="ai-headline">
                  <h2 className="ai-headline-blue">World's First AI Based</h2>
                  <h2 className="ai-headline-orange">Online Learning Platform</h2>
                </div>
              </div>
              <div className="orange-dots-pattern"></div>
            </div>

            {/* Right Section - Feature Cards */}
            <div className="ai-features-right">
              <div className="ai-features-cards-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  pagination={{
                    clickable: true,
                    type: "bullets",
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                  className="ai-features-swiper"
                >
                  {aiFeatures.map((feature, index) => (
                    <SwiperSlide key={index}>
                      <div className="ai-feature-card">
                        <div className="feature-header">
                          <div className="ezy-logo-card">
                            <div className="logo-hexagon-small">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L3 7L3 17L12 22L21 17L21 7L12 2Z" stroke="#ff7a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M12 22L12 12" stroke="#ff7a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 7L12 12L21 7" stroke="#ff7a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="logo-text-wrapper">
                              <span className="logo-text-small">EZY SKILLS</span>
                              <span className="logo-tagline">DRIVE YOUR FUTURE</span>
                            </div>
                          </div>
                        </div>
                        <div className="feature-title-wrapper">
                          <span className="ai-based-text">AI Based</span>
                          <span className="feature-name-text">{feature.title.replace("AI Based ", "")}</span>
                        </div>
                        <div className="feature-illustration">
                          <div className="illustration-placeholder"></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Schemes */}
      <section className="skill-schemes-section">
        <div className="container">
          <div className="schemes-content">
            <div className="schemes-text">
              <div className="schemes-subtitle">WHO CAN JOIN</div>
              <h2>Comprehensive Learning Management For All Departments</h2>
              <div className="schemes-list">
                <div className="scheme-item">
                  <div className="scheme-icon-wrapper">
                    <div className="scheme-icon scheme-icon--building">🏛️</div>
                  </div>
                  <div className="scheme-number">01</div>
                  <div className="scheme-details">
                    <h4>Engineering Department Learners</h4>
                  </div>
                </div>
                <div className="scheme-item">
                  <div className="scheme-icon-wrapper">
                    <div className="scheme-icon scheme-icon--person">👔</div>
                  </div>
                  <div className="scheme-number">02</div>
                  <div className="scheme-details">
                    <h4>Human Resources Professionals</h4>
                  </div>
                </div>
                <div className="scheme-item">
                  <div className="scheme-icon-wrapper">
                    <div className="scheme-icon scheme-icon--rocket">🚀</div>
                  </div>
                  <div className="scheme-number">03</div>
                  <div className="scheme-details">
                    <h4>Marketing Team Members</h4>
                  </div>
                </div>
                <div className="scheme-item">
                  <div className="scheme-icon-wrapper">
                    <div className="scheme-icon scheme-icon--corporate">🏢</div>
                  </div>
                  <div className="scheme-number">04</div>
                  <div className="scheme-details">
                    <h4>Sales Department Staff</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="schemes-illustration">
              <div className="illustration-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="how-it-works-background">
          <div className="how-it-works-decorative-shape"></div>
          <div className="how-it-works-dots-pattern"></div>
        </div>
        <div className="container">
          <div className="how-it-works-banner">
            <h2>How It Works</h2>
          </div>
          <div className="steps-flow-container">
            {/* Starting Point - Job Seeker */}
            <div className="flow-start">
              <div className="flow-card flow-card--start">
                <div className="flow-label">Job Seeker</div>
                <div className="flow-illustration">
                  <div className="illustration-person"></div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="steps-flow">
              {howItWorksSteps.map((item, index) => (
                <div key={index} className="step-flow-wrapper">
                  <div className="step-arrow-connector">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 10L35 15L30 20" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="0" y1="10" x2="35" y2="10" stroke="#ff7a00" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="step-flow-item">
                    <div className="step-number-label">{item.step}</div>
                    <div className="step-icon-box">
                      <div className="step-icon">{item.icon}</div>
                    </div>
                    <div className="step-text">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ending Point - Employed */}
            <div className="flow-end">
              <div className="step-arrow-connector">
                <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10L35 15L30 20" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="0" y1="10" x2="35" y2="10" stroke="#ff7a00" strokeWidth="2" />
                </svg>
              </div>
              <div className="flow-card flow-card--end">
                <div className="flow-label">Employed</div>
                <div className="flow-illustration">
                  <div className="illustration-person illustration-person--success"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="popular-courses-section">
        <div className="container">
          <h2 className="section-title">All Courses</h2>
          <div className="courses-grid">
            {popularCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-logo" style={{ backgroundColor: course.color }}>
                  {course.logo}
                </div>
                <h3>{course.name}</h3>
                <button className="btn btn--outline btn--small">View Course</button>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <button className="btn btn--primary">View All Courses</button>
          </div>
        </div>
      </section>

      {/* Section 7: Our Achievements */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="achievements-title">
            <span className="title-blue">Our</span> <span className="title-orange">Achievements</span>
          </h2>
          <div className="achievements-content">
            <div className="achievements-left">
              <div className="achievements-illustration">
                <div className="mountain-climb-illustration">
                  <div className="mountain-slope"></div>
                  <div className="climber climber-1">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" fill="#ff7a00" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#072144" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="climber climber-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" fill="#ff7a00" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#072144" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="climber climber-3">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="4" fill="#fff" />
                      <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 2L14 6L12 10L10 6L12 2Z" fill="#072144" />
                      <line x1="12" y1="2" x2="12" y2="6" stroke="#072144" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="achievements-right">
              <div className="achievements-cards">
                <div className="achievement-card">
                  <div className="achievement-number achievement-number--orange">100</div>
                  <div className="achievement-icon">🎓</div>
                  <div className="achievement-label">Total Users Enrolled</div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-number achievement-number--orange">50</div>
                  <div className="achievement-icon">📚</div>
                  <div className="achievement-label">Total Courses Available</div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-number achievement-number--blue">70%</div>
                  <div className="achievement-label achievement-label--long">Course Completion Rate with Certificates Earned</div>
                </div>
              </div>
              <div className="achievements-dots-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="mentors-section">
        <div className="container">
          <h2 className="section-title">Meet Our Department Heads & Course Administrators</h2>
          <div className="mentors-grid">
            {mentors.map((mentor, index) => (
              <div key={index} className="mentor-card">
                <div className="mentor-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <h3>{mentor.name}</h3>
                <div className="mentor-rating">{"★".repeat(mentor.rating)}</div>
                <p>{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Our Certifications</h2>
          <div className="certifications-grid">
            {["ISO 27001", "ISO 9001", "ISO 20000-1", "ISO 29993"].map((cert, index) => (
              <div key={index} className="certification-item">
                <div className="cert-logo">
                  <span>{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="collaborations-section">
        <div className="container">
          <h2 className="section-title">Our Collaborations</h2>
          <div className="collaborations-grid">
            {["NASSCOM FOUNDATION", "Skill India", "Startup India", "T-HUB HYDERABAD"].map((collab, index) => (
              <div key={index} className="collaboration-item">
                <span>{collab}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
