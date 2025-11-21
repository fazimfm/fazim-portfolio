import "./App.css";
import fazii from "./fazii.jpeg";
import React, { useState } from "react";

function App() {
  const [showMiniDetails, setShowMiniDetails] = useState(false);
  const [showMainDetails, setShowMainDetails] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset(); // Optional: clears the form

    // Optional: Message disappears after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  return (
    <div className="background">
      <div className="top">
        <nav className="navbar">
          <div className="logo-container">
            <img src={fazii} alt="Logo" className="logo" />
          </div>
          <div className="menu-items">
            <a href="#home" className="head">
              Home
            </a>
            <a href="#projects" className="head">
              My Projects
            </a>
            <a href="#about" className="head">
              About Us
            </a>
            <a href="#contact" className="head">
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
     
      <div className="home">
        {/* My  SECTION  */}
        <section id="home" className="hero-section">
          <div className="hero-text">
            <p className="small-text">I'm</p>
            <h1 className="big-text">FAZIM</h1>
            <p className="sub-text">Fix The Error But Never Quit</p>
            {/* 
             <div className="hero-buttons">
              <button className="hero-btn"  onClick={() => document.getElementById('mini-project').scrollIntoView({ behavior: 'smooth' })}>Project 1</button>
              <button className="hero-btn" onClick={() => document.getElementById('main-project').scrollIntoView({ behavior: 'smooth' })}>Project 2</button>
            </div>  */}
          </div>

          <div className="hero-image">
            <img src={fazii} alt="Your portrait" />
          </div>
        </section>

        <section id="projects" className="section">
          <h1 className="he">Projects</h1>
          {/*  Mini Project */}
          <div className="project-card mini-project">
            <div className="project-overlay">
              <h2>Mini Project</h2>
              <p>Plant Disease Detection using AI (Artificial Intelligence)</p>

              <button
                className="read-more-btn"
                onClick={() => setShowMiniDetails(!showMiniDetails)}
              >
                {showMiniDetails ? "Hide Details" : "Read More"}
              </button>

              {showMiniDetails && (
                <div className="project-details">
                  <p>
                    This project uses Machine Learning and CNN models to detect
                    diseases in plant leaves using image processing. It helps
                    farmers quickly identify and treat crops.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Main Project */}
          <div className="project-card main-project">
            <div className="project-overlay">
              <h2>Main Project</h2>
              <p>
                Blind People Shopping Navigation With Voice Assistance And
                Obstacle Analysis
              </p>

              <button
                className="read-more-btn"
                onClick={() => setShowMainDetails(!showMainDetails)}
              >
                {showMainDetails ? "Hide Details" : "Read More"}
              </button>

              {showMainDetails && (
                <div className="project-details">
                  <p>
                    This project allows visually challenged individuals to shop
                    independently using voice instructions and smart sensors for
                    obstacle detection. It uses speech recognition, navigation
                    algorithms, and audio feedback.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* <section></section> */}

        <section id="about" className="section">
          <h1>About</h1>
          <p className="para">
            My name is Fazim. I have recently completed my Bachelor of
            Engineering degree in Computer Science from VRS College of
            Engineering and Technology. During my time in college, I developed a
            strong foundation in programming, data structures, and software
            development. I am passionate about technology and enjoy learning
            about new tools and frameworks. Throughout my studies, I worked on
            several academic projects that helped sharpen my problem-solving and
            coding skills. I am particularly interested in web development and
            exploring innovative tech solutions. I enjoy working in team
            environments and collaborating on exciting tech ideas. I am a quick
            learner, adaptable, and always open to new challenges. My goal is to
            build a successful career in the IT industry. I am currently looking
            for opportunities to grow and contribute as a developer.
          </p>
          <a href="./FazimResume.pdf" className="download-btn" download>
            📄 Download My Resume
          </a>
        </section>
        <section id="contact" className="section contact">
          <h1>Get in Touch</h1>

          <div className="contact-info">
            <p>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:fazimwrkid@gmail.com">fazimwrkid@gmail.com</a>
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 63826 76699
            </p>
            <p>
              <strong>📍 Location:</strong> Tamil Nadu, India
            </p>
          </div>

          <div className="social-links">
            <p>
              <strong>Follow Me:</strong>
            </p>
            <a
              href="https://gitlab.com/fazimwrkid"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 GitHub
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/fazimr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>{" "}
            |
            <a
              href="https://gitlab.com/fazimwrkid"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌎 Git Lab
            </a>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            {formSubmitted && (
              <p style={{ color: "green", marginTop: "10px" }}>
                ✅ Message has been sent!
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
