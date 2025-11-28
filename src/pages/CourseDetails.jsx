import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.scss";

// Course data - in a real app, this would come from an API
const courseData = {
  "angular-js": {
    title: "Angular JS",
    subtitle: "Basic to Advance",
    level: "Level Coding",
    icon: "angular",
    iconColor: "#e53e3e",
  },
  "react-js": {
    title: "React JS",
    subtitle: "Complete Guide",
    level: "Level Coding",
    icon: "react",
    iconColor: "#61dafb",
  },
  "vue-js": {
    title: "Vue JS",
    subtitle: "Master Class",
    level: "Level Coding",
    icon: "vue",
    iconColor: "#42b983",
  },
  aws: {
    title: "AWS",
    subtitle: "Cloud Mastery",
    level: "Level Coding",
    icon: "aws",
    iconColor: "#ff7a00",
  },
  python: {
    title: "Python",
    subtitle: "Complete Course",
    level: "Level Coding",
    icon: "python",
    iconColor: "#3776ab",
  },
};

const objectives = [
  "Utilizing AngularJS formats adequately",
  "Questioning and adjusting information in various databases and getting to be plainly gifted with the API",
  "Quickly making perplexing structures",
  "Understanding two-way (proportional) information authoritative",
  "Presenting route usefulness in web applications",
  "Overseeing conditions with Injection frameworks",
  "Securing web applications from dangers and pernicious clients",
  "Building different AngularJS orders",
  "Organizing the web application utilizing the vigorous index structure",
  "Organizing, composing, and ultimately sending the application",
];

const courseContent = [
  {
    id: 1,
    title: "HTML",
    expanded: true,
    topics: "Introduction >> Layers in Web >> Application >> Tags & Attribute >> Programming >> Audio >> Video >> Graphics",
  },
  {
    id: 2,
    title: "CSS",
    expanded: false,
    topics: "",
  },
  {
    id: 3,
    title: "Bootstrap",
    expanded: false,
    topics: "",
  },
  {
    id: 4,
    title: "Javascript",
    expanded: false,
    topics: "",
  },
  {
    id: 5,
    title: "DOM",
    expanded: false,
    topics: "",
  },
  {
    id: 6,
    title: "Angular JS",
    expanded: false,
    topics: "",
  },
  {
    id: 7,
    title: "Environment",
    expanded: false,
    topics: "",
  },
  {
    id: 8,
    title: "MVC Architecture",
    expanded: false,
    topics: "",
  },
  {
    id: 9,
    title: "Directives",
    expanded: false,
    topics: "",
  },
  {
    id: 10,
    title: "Modules",
    expanded: false,
    topics: "",
  },
  {
    id: 11,
    title: "Dependency Injection",
    expanded: false,
    topics: "",
  },
];

const projects = [
  {
    id: 1,
    title: "Angular Hello World Project",
    description: "Hello, World offers a tremendous opportunity to hone your skills if you are just starting with Angular and Typescript.",
    featured: true,
  },
  {
    id: 2,
    title: "Angular Bare Bones project",
    description: "",
    featured: false,
  },
  {
    id: 3,
    title: "Data Binding In Forms",
    description: "",
    featured: false,
  },
  {
    id: 4,
    title: "Angular Projects On Local Storage",
    description: "",
    featured: false,
  },
  {
    id: 5,
    title: "AngularJS In Patterns",
    description: "",
    featured: false,
  },
  {
    id: 6,
    title: "NGRX Libraries",
    description: "",
    featured: false,
  },
  {
    id: 7,
    title: "Data Binding In Forms",
    description: "",
    featured: false,
  },
  {
    id: 8,
    title: "Admin Panel Framework",
    description: "",
    featured: false,
  },
];

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courseData[slug] || courseData["angular-js"]; // Default to Angular if slug not found
  const [contentItems, setContentItems] = useState(courseContent);

  const toggleContentItem = (id) => {
    setContentItems((items) => items.map((item) => (item.id === id ? { ...item, expanded: !item.expanded } : { ...item, expanded: false })));
  };

  // Handle AWS and Python icons
  const renderCourseIcon = () => {
    if (course.icon === "angular") {
      return (
        <div className="course-logo course-logo--angular">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 20L170 70L170 130L100 180L30 130L30 70Z" fill="#e53e3e" />
            <path d="M100 20L170 70L170 130L100 180L30 130L30 70Z" stroke="#c0c0c0" strokeWidth="3" fill="none" />
            <text x="100" y="130" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="700" fill="#fff" textAnchor="middle">
              A
            </text>
          </svg>
        </div>
      );
    }
    if (course.icon === "react") {
      return (
        <div className="course-logo course-logo--react">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="8" fill="#61dafb" />
            <ellipse cx="100" cy="100" rx="70" ry="15" stroke="#61dafb" strokeWidth="4" />
            <ellipse cx="100" cy="100" rx="15" ry="70" stroke="#61dafb" strokeWidth="4" />
            <ellipse cx="100" cy="100" rx="70" ry="15" stroke="#61dafb" strokeWidth="4" transform="rotate(60 100 100)" />
          </svg>
        </div>
      );
    }
    if (course.icon === "vue") {
      return (
        <div className="course-logo course-logo--vue">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="100" y="130" fontFamily="Arial, sans-serif" fontSize="120" fontWeight="700" fill="#42b983" textAnchor="middle">
              V
            </text>
          </svg>
        </div>
      );
    }
    if (course.icon === "aws") {
      return (
        <div className="course-logo course-logo--aws">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="20" y="65" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="700" fill="#fff">
              aws
            </text>
            <path d="M140 30L180 20L170 60L140 30Z" fill="#ff7a00" />
          </svg>
        </div>
      );
    }
    if (course.icon === "python") {
      return (
        <div className="course-logo course-logo--python">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#3776ab" />
            <path d="M60 60L140 60L140 140L60 140Z" fill="#ffd343" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="course-details-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-pattern"></div>
        <div className="container">
          <div className="course-hero-content">
            <div className="course-logo-wrapper">{renderCourseIcon()}</div>
            <div className="course-title-wrapper">
              <h1 className="course-title">
                <span className="course-title-main">{course.title}:</span>
                <span className="course-title-subtitle">{course.subtitle}</span>
                <span className="course-title-level">{course.level}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Section */}
      <section className="course-info-section">
        <div className="container">
          <div className="course-info-grid">
            {/* Left Column */}
            <div className="course-info-left">
              <div className="info-block">
                <h2 className="info-heading">About The Course</h2>
                <p className="info-description">
                  Angular JS is a JavaScript-based open-source front-end web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and
                  corporations.
                </p>
              </div>

              <div className="info-block">
                <h2 className="info-heading">Objectives</h2>
                <ul className="objectives-list">
                  {objectives.map((objective, index) => (
                    <li key={index} className="objective-item">
                      <svg className="check-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 5L7 14L4 11" stroke="#42b983" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="course-info-right">
              <div className="content-block">
                <h2 className="info-heading">Course Content</h2>
                <div className="content-list">
                  {contentItems.map((item) => (
                    <div key={item.id} className={`content-item ${item.expanded ? "content-item--expanded" : ""}`}>
                      <button className="content-item-header" onClick={() => toggleContentItem(item.id)}>
                        <span className="content-number">{String(item.id).padStart(2, "0")}</span>
                        <span className="content-title">{item.title}</span>
                        <svg className={`content-arrow ${item.expanded ? "content-arrow--up" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {item.expanded && item.topics && <div className="content-topics">{item.topics}</div>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="content-dots-pattern"></div>
              <div className="content-circle-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="course-projects-section">
        <div className="container">
          <h2 className="projects-title">
            <span className="projects-title-text">{course.title} Projects</span>
            <span className="projects-title-underline"></span>
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
                <div className="project-icon">
                  <div className="project-icon-circle">
                    <span className="project-icon-letter">A</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  {project.description && <p className="project-description">{project.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="course-cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-pattern"></div>
            <div className="cta-content">
              <div className="cta-text">
                <h2 className="cta-question">
                  <span className="cta-line">Wanna check more</span>
                  <span className="cta-line">about the course?</span>
                </h2>
              </div>
              <div className="cta-buttons">
                <button className="btn btn--cta btn--cta-outline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Demo
                </button>
                <button className="btn btn--cta btn--cta-outline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21L12 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 9V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Enroll Now
                </button>
                <button className="btn btn--cta btn--cta-filled">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 10H15C14.4477 10 14 10.4477 14 11V20C14 20.5523 14.4477 21 15 21H18C18.5523 21 19 20.5523 19 20V11C19 10.4477 18.5523 10 18 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 8L12 3L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="course-tools-section">
        <div className="container">
          <div className="tools-header">
            <h2 className="tools-title">Tools & Platforms</h2>
            <div className="tools-separator"></div>
          </div>
          <div className="tools-grid">
            {/* Angular UI */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content">
                  <span className="tool-text tool-text--orange">Ui</span>
                  <div className="angular-shield-small">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L25 12.5L25 17.5L15 22.5L5 17.5L5 12.5Z" fill="#e53e3e" />
                      <text x="15" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">
                        A
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* MEAN Stack */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content tool-icon-content--mean">
                  <div className="mean-logos">
                    <div className="mean-logo mean-logo--mongo">M</div>
                    <div className="mean-logo mean-logo--express">ex</div>
                  </div>
                  <div className="mean-text">
                    <span className="mean-letter mean-letter--green">M</span>
                    <span className="mean-letter mean-letter--green">E</span>
                    <span className="mean-letter mean-letter--red">A</span>
                    <span className="mean-letter mean-letter--red">N</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content tool-icon-content--devops">
                  <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15C10 10 15 5 20 5C25 5 30 10 30 15" stroke="#00d4aa" strokeWidth="2" fill="none" />
                    <path d="M30 15C30 20 35 25 40 25C45 25 50 20 50 15" stroke="#00d4aa" strokeWidth="2" fill="none" />
                    <path d="M10 15C10 20 5 25 0 25" stroke="#072144" strokeWidth="2" fill="none" />
                    <path d="M0 15C0 10 5 5 10 5" stroke="#072144" strokeWidth="2" fill="none" />
                    <text x="8" y="18" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="#fff">
                      Dev
                    </text>
                    <text x="32" y="18" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="#fff">
                      Ops
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content">
                  <div className="ui-shield">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5L30 10L30 25L20 30L10 25L10 10Z" fill="#808080" stroke="#072144" strokeWidth="2" />
                      <text x="20" y="22" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">
                        UI
                      </text>
                      <line x1="15" y1="18" x2="25" y2="18" stroke="#fff" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="2" fill="#61dafb" />
                    <ellipse cx="25" cy="25" rx="18" ry="4" stroke="#61dafb" strokeWidth="2" />
                    <ellipse cx="25" cy="25" rx="4" ry="18" stroke="#61dafb" strokeWidth="2" />
                    <ellipse cx="25" cy="25" rx="18" ry="4" stroke="#61dafb" strokeWidth="2" transform="rotate(60 25 25)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* C# */}
            <div className="tool-icon">
              <div className="tool-icon-circle">
                <div className="tool-icon-content">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5L30 10L30 25L20 30L10 25L10 10Z" stroke="#000" strokeWidth="2" fill="none" />
                    <text x="20" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="700" fill="#000" textAnchor="middle">
                      C
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
