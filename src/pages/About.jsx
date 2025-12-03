import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./About.scss";

const teamMembers = [
  {
    id: 1,
    name: "KISHORE KUMAR",
    title: "CEO & FOUNDER",
    company: "CARAMEL IT SERVICES",
    image: "kishore-kumar",
  },
  {
    id: 2,
    name: "SUCHITRA",
    title: "DIRECTOR - HR & OPERATIONS",
    company: "",
    image: "suchitra",
  },
  {
    id: 3,
    name: "NAREN M",
    title: "Co-Founder",
    company: "",
    image: "naren-m",
  },
  {
    id: 4,
    name: "Name",
    title: "Co-Founder",
    company: "",
    image: "name",
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            {/* Left Side */}
            <div className="about-hero-left">
              <div className="about-label">ABOUT US</div>
              <h1 className="about-title">Empowering Learning Through Advanced LMS Technology</h1>
              <p className="about-subtitle">
                A comprehensive Learning Management System designed to transform how organizations train learners, manage courses, and track progress across departments
              </p>
              <div className="about-dots-pattern"></div>
            </div>

            {/* Right Side */}
            <div className="about-hero-right">
              <div className="about-images-grid">
                {/* Top Left Image */}
                <div className="about-image about-image--top-left">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Learners Studying</span>
                    </div>
                  </div>
                </div>

                {/* Top Right Image */}
                <div className="about-image about-image--top-right">
                  <div className="orange-ring orange-ring--top"></div>
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Course Management</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Right Image */}
                <div className="about-image about-image--bottom-right">
                  <div className="orange-ring orange-ring--bottom"></div>
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Interactive Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-hero-curve"></div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="our-story-content">
            {/* Left Side - Visuals */}
            <div className="our-story-left">
              <div className="story-image-wrapper">
                <div className="story-circular-image">
                  <div className="image-placeholder-circular">
                    <div className="placeholder-content">
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Learning Path</span>
                    </div>
                  </div>
                </div>
                <div className="story-orange-ring"></div>
                <div className="story-chevrons">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="story-plus-signs">
                  <div className="plus-row">
                    <div className="plus-icon">+</div>
                    <div className="plus-icon">+</div>
                  </div>
                  <div className="plus-row">
                    <div className="plus-icon">+</div>
                    <div className="plus-icon">+</div>
                  </div>
                  <div className="plus-row">
                    <div className="plus-icon">+</div>
                    <div className="plus-icon">+</div>
                  </div>
                  <div className="plus-row">
                    <div className="plus-icon">+</div>
                    <div className="plus-icon">+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="our-story-right">
              <div className="story-label">OUR STORY</div>
              <h2 className="story-title">
                <span className="story-title-line">Revolutionizing corporate</span>
                <span className="story-title-line">and educational learning</span>
              </h2>
              <div className="story-text">
                <p className="story-paragraph">
                  Founded with a vision to bridge the gap between traditional learning and modern workforce needs, our LMS platform empowers organizations to deliver comprehensive training programs. We've built a system that seamlessly manages courses, modules, and content while tracking learner progress across departments.
                </p>
                <p className="story-paragraph">
                  Our platform supports learners, department heads, and administrators with intuitive course management, interactive quizzes, comprehensive assessments, and automated certificate generation. We believe in creating an environment where learning is accessible, measurable, and rewarding for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Our Mission */}
            <div className="mission-vision-card">
              <div className="mv-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer white ring */}
                  <circle cx="40" cy="40" r="32" stroke="#fff" strokeWidth="2.5" fill="none" />
                  {/* Middle orange ring */}
                  <circle cx="40" cy="40" r="22" stroke="var(--brand-orange)" strokeWidth="2.5" fill="none" />
                  {/* Inner white bullseye */}
                  <circle cx="40" cy="40" r="10" fill="#fff" />
                  {/* Arrow pointing to bullseye */}
                  <path d="M58 22L65 28L60 32L58 28Z" fill="var(--brand-orange)" />
                  <line x1="58" y1="28" x2="50" y2="35" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M58 28L54 26L56 31Z" fill="#fff" />
                </svg>
              </div>
              <h2 className="mv-title">
                <span className="mv-title-prefix">Our</span> <span className="mv-title-main">Mission</span>
              </h2>
              <p className="mv-description">
                To provide a comprehensive Learning Management System that enables organizations to create, manage, and deliver effective training programs. We empower learners through structured courses, interactive modules, comprehensive assessments, and achievement tracking, ensuring continuous skill development and knowledge retention across all departments and roles.
              </p>
            </div>

            {/* Our Vision */}
            <div className="mission-vision-card">
              <div className="mv-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Telescope body - orange, angled */}
                  <rect x="28" y="32" width="28" height="10" rx="2" fill="var(--brand-orange)" transform="rotate(15 42 37)" />
                  {/* Telescope end cap - white */}
                  <circle cx="54" cy="36" r="7" fill="#fff" />
                  {/* Telescope lens opening */}
                  <ellipse cx="32" cy="37" rx="5" ry="4" fill="none" stroke="#fff" strokeWidth="2" />
                  {/* Tripod - three legs */}
                  <line x1="40" y1="42" x2="30" y2="65" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="42" x2="45" y2="65" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  <line x1="40" y1="42" x2="52" y2="65" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  {/* Tripod base/connection */}
                  <circle cx="40" cy="42" r="3" fill="#fff" />
                </svg>
              </div>
              <h2 className="mv-title">
                <span className="mv-title-prefix">Our</span> <span className="mv-title-main">Vision</span>
              </h2>
              <p className="mv-description">
                To become the leading Learning Management System platform that transforms how organizations approach employee development and training. We envision a future where every learner has access to personalized learning paths, real-time progress tracking, and recognized certifications that drive career growth and organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team-section">
        <div className="container">
          <h2 className="team-title">
            <span className="team-title-prefix">Our</span> <span className="team-title-main">Team</span>
          </h2>
          <div className="team-swiper-wrapper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={3}
              navigation={{
                nextEl: ".team-swiper-button-next",
                prevEl: ".team-swiper-button-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="team-swiper"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="team-member-card">
                    <div className="team-member-image">
                      <div className="image-placeholder-team">
                        <div className="placeholder-content">
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{member.name.split(" ")[0]}</span>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-info">
                      <h3 className="team-member-name">{member.name}</h3>
                      <p className="team-member-title">{member.title}</p>
                      {member.company && <p className="team-member-company">{member.company}</p>}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="team-swiper-button team-swiper-button-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="team-swiper-button team-swiper-button-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
