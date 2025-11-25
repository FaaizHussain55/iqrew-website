import { useState } from "react";
import "./Courses.scss";

const courses = [
  {
    id: 1,
    title: "Angular JS",
    icon: "A",
    iconColor: "#e53e3e",
    description: "Master Angular framework for building dynamic web applications with TypeScript and modern development practices.",
  },
  {
    id: 2,
    title: "AWS",
    icon: "aws",
    iconType: "logo",
    description: "Learn Amazon Web Services cloud computing platform, infrastructure, and services for scalable applications.",
  },
  {
    id: 3,
    title: "Vue JS",
    icon: "V",
    iconColor: "#42b983",
    description: "Build reactive user interfaces with Vue.js, a progressive JavaScript framework for modern web development.",
  },
  {
    id: 4,
    title: "Power BI",
    icon: "bars",
    iconColor: "#f2c811",
    description: "Transform data into insights with Power BI, Microsoft's business analytics and data visualization tool.",
  },
  {
    id: 5,
    title: "Python",
    icon: "python",
    iconType: "logo",
    description: "Learn Python programming from basics to advanced, including data science, web development, and automation.",
  },
  {
    id: 6,
    title: "React JS",
    icon: "atom",
    iconColor: "#61dafb",
    description: "Master React library for building user interfaces with components, hooks, and modern React patterns.",
  },
  {
    id: 7,
    title: "Software Testing",
    icon: "check",
    iconColor: "#42b983",
    description: "Comprehensive software testing course covering manual testing, automation, and quality assurance practices.",
  },
  {
    id: 8,
    title: "Core UI",
    icon: "C",
    iconColor: "#007bff",
    description: "Learn core UI/UX design principles, user interface development, and modern design systems.",
  },
  {
    id: 9,
    title: "Node.js",
    icon: "N",
    iconColor: "#339933",
    description: "Build scalable server-side applications with Node.js, Express, and modern backend development practices.",
  },
  {
    id: 10,
    title: "MongoDB",
    icon: "M",
    iconColor: "#47a248",
    description: "Master MongoDB NoSQL database, data modeling, queries, and integration with modern applications.",
  },
  {
    id: 11,
    title: "Docker",
    icon: "D",
    iconColor: "#0db7ed",
    description: "Learn containerization with Docker, container orchestration, and DevOps practices for modern deployments.",
  },
  {
    id: 12,
    title: "Kubernetes",
    icon: "K",
    iconColor: "#326ce5",
    description: "Master Kubernetes container orchestration platform for managing containerized applications at scale.",
  },
  {
    id: 13,
    title: "JavaScript",
    icon: "JS",
    iconColor: "#f7df1e",
    description: "Comprehensive JavaScript course covering ES6+, async programming, and modern JavaScript patterns.",
  },
  {
    id: 14,
    title: "TypeScript",
    icon: "TS",
    iconColor: "#3178c6",
    description: "Learn TypeScript, a typed superset of JavaScript that adds static type checking to your code.",
  },
  {
    id: 15,
    title: "GraphQL",
    icon: "G",
    iconColor: "#e10098",
    description: "Master GraphQL query language and runtime for building efficient and flexible APIs.",
  },
  {
    id: 16,
    title: "Git & GitHub",
    icon: "Git",
    iconColor: "#f05032",
    description: "Learn version control with Git and GitHub, collaboration workflows, and best practices for developers.",
  },
];

const categories = ["All", "Opened", "Coming Soon", "Archived"];
const sortOptions = ["Popular Class", "Newest", "Oldest", "A-Z", "Z-A"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Opened");
  const [sortBy, setSortBy] = useState("Popular Class");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const coursesPerPage = 16;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div className="courses-page">
      <section className="courses-section">
        <div className="container">
          <h1 className="courses-title">Courses List</h1>

          {/* Filtering and Sorting Bar */}
          <div className="courses-filters">
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" className="search-input" placeholder="Search The Courses here..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button key={category} className={`category-filter ${activeCategory === category ? "category-filter--active" : ""}`} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>
              ))}
            </div>

            <div className="sort-container">
              <label className="sort-label">Sort by:</label>
              <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                {/* Top Half - Dark Blue Background with Icon */}
                <div className="course-card-top">
                  <div className="course-icon">
                    {course.iconType === "logo" ? (
                      <div className={`course-icon-logo course-icon-logo--${course.icon}`}>
                        {course.icon === "aws" && (
                          <svg width="80" height="40" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="5" y="42" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700" fill="#fff">
                              aws
                            </text>
                            <path d="M75 18L95 12L90 32L75 18Z" fill="#ff7a00" />
                          </svg>
                        )}
                        {course.icon === "python" && (
                          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="25" fill="#3776ab" />
                            <path d="M20 20L40 20L40 40L20 40Z" fill="#ffd343" />
                          </svg>
                        )}
                      </div>
                    ) : course.icon === "A" ? (
                      <div className="course-icon-angular">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 5L50 50L10 50Z" fill="#e53e3e" />
                          <text x="30" y="42" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#fff" textAnchor="middle">
                            A
                          </text>
                        </svg>
                      </div>
                    ) : course.icon === "bars" ? (
                      <div className="course-icon-bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                    ) : course.icon === "atom" ? (
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="3" fill="#61dafb" />
                        <ellipse cx="30" cy="30" rx="20" ry="5" stroke="#61dafb" strokeWidth="2" />
                        <ellipse cx="30" cy="30" rx="5" ry="20" stroke="#61dafb" strokeWidth="2" />
                        <ellipse cx="30" cy="30" rx="20" ry="5" stroke="#61dafb" strokeWidth="2" transform="rotate(60 30 30)" />
                      </svg>
                    ) : course.icon === "check" ? (
                      <div className="course-icon-check">
                        <span className="check-text">Se</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 5L7 14L4 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ) : course.icon === "C" ? (
                      <div className="course-icon-core">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30 5L50 15L50 45L30 55L10 45L10 15Z" stroke="#007bff" strokeWidth="2" fill="none" />
                          <text x="30" y="38" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#007bff" textAnchor="middle">
                            C
                          </text>
                        </svg>
                      </div>
                    ) : (
                      <div className="course-icon-text" style={{ color: course.iconColor }}>
                        {course.icon}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Half - White Background with Details */}
                <div className="course-card-bottom">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-actions">
                    <button className="btn btn--course btn--demo">Live Demo</button>
                    <button className="btn btn--course btn--enroll">Enroll Now</button>
                    <button className="btn btn--course btn--download">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Download Curriculum
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} className={`pagination-btn ${currentPage === page ? "pagination-btn--active" : ""}`} onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
