import { useState, useEffect } from 'react';
import { portfolioData } from './data';
import profileImg from './assets/hero.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  // Toggle theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="header glass">
        <nav className="container nav-content">
          <div className="logo font-heading">HR<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Software</a></li>
            <li><a href="#hardware">Hardware</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="section hero-section">
          <div className="container hero-grid">
            <div className="hero-content animate-fade-in">
              <h2 className="text-gradient subtitle">Hello, I'm</h2>
              <h1 className="name">{portfolioData.name}</h1>
              <h3 className="title">{portfolioData.title}</h3>
              <p className="tagline">{portfolioData.tagline}</p>
              <div className="hero-btns">
                <a href="#contact" className="btn btn-primary">Hire Me</a>
                <a href="#projects" className="btn btn-outline">View Projects</a>
              </div>
            </div>
            <div className="hero-visual animate-fade-in">
              <div className="image-blob">
                <div className="blob-gradient"></div>
              </div>
              <div className="floating-badge badge-1 glass">
                <span>🚀</span>
                <div>
                  <p>4+ Years</p>
                  <small>Experience</small>
                </div>
              </div>
              <div className="floating-badge badge-2 glass">
                <span>🤖</span>
                <div>
                  <p>AI / ML</p>
                  <small>Specialist</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-muted">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">About Me</h2>
              <div className="underline"></div>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p className="summary">{portfolioData.about.summary}</p>
                <div className="objective">
                  <h3>My Objective</h3>
                  <p>{portfolioData.about.objectives}</p>
                </div>
              </div>
              <div className="strengths-grid">
                {portfolioData.about.strengths.map((strength, index) => (
                  <div key={index} className="strength-card card glass">
                    <span className="strength-icon">✨</span>
                    <p>{strength}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Technical Expertise</h2>
              <div className="underline"></div>
            </div>
            <div className="skills-container">
              {portfolioData.skills.map((skillGroup, idx) => (
                <div key={idx} className="skill-group">
                  <h3 className="skill-category-title">{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-muted">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Featured Projects</h2>
              <div className="underline"></div>
            </div>
            <div className="projects-grid">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="project-card card glass">
                  <div className="project-badge">{project.type}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">GitHub <span>→</span></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Projects Section */}
        <section id="hardware" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Hardware & Robotics</h2>
              <div className="underline"></div>
            </div>
            <div className="projects-grid">
              {portfolioData.hardwareProjects.map((project) => (
                <div key={project.id} className="project-card card glass">
                  <div className="project-badge">{project.type}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <ul className="project-features">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Professional Journey</h2>
              <div className="underline"></div>
            </div>
            <div className="timeline">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card glass">
                    <span className="timeline-date">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <ul className="timeline-tasks">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section bg-muted">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Education</h2>
              <div className="underline"></div>
            </div>
            <div className="education-card card glass max-w-800 mx-auto">
              <div className="edu-header">
                <div>
                  <h3 className="edu-degree">{portfolioData.education.degree}</h3>
                  <h4 className="edu-univ">{portfolioData.education.university}</h4>
                </div>
                <div className="edu-meta">
                  <span className="edu-period">{portfolioData.education.period}</span>
                  <span className="edu-cgpa">CGPA: {portfolioData.education.cgpa}</span>
                </div>
              </div>
              <div className="edu-coursework">
                <h4>Key Coursework:</h4>
                <div className="course-tags">
                  {portfolioData.education.coursework.map((course, idx) => (
                    <span key={idx} className="tech-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Certifications</h2>
              <div className="underline"></div>
            </div>
            <div className="cert-grid">
              {portfolioData.certifications.map((cert, idx) => (
                <div key={idx} className="cert-card card glass">
                  <div className="cert-icon">📜</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="section bg-muted">
          <div className="container">
            <div className="section-header">
              <h2 className="font-heading">Publications & Research</h2>
              <div className="underline"></div>
            </div>
            <div className="pub-container max-w-800 mx-auto">
              {portfolioData.publications.map((pub, idx) => (
                <div key={idx} className="pub-card card glass">
                  <span className="pub-date">{pub.date}</span>
                  <h3 className="pub-title">{pub.title}</h3>
                  <a href={pub.url} target="_blank" rel="noreferrer" className="btn-link">View Research Paper <span>→</span></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-muted">
          <div className="container contact-container">
            <div className="section-header">
              <h2 className="font-heading">Get In Touch</h2>
              <div className="underline"></div>
              <p className="contact-subtitle">Let's build something amazing together.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card card glass">
                  <div className="contact-item">
                    <span className="icon">📧</span>
                    <div>
                      <p>Email</p>
                      <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📱</span>
                    <div>
                      <p>Phone</p>
                      <a href={`tel:${portfolioData.contact.mobile}`}>{portfolioData.contact.mobile}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="icon">🔗</span>
                    <div>
                      <p>LinkedIn</p>
                      <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">Haseeb Rajput</a>
                    </div>
                  </div>
                </div>
              </div>
              <form className="contact-form card glass">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
