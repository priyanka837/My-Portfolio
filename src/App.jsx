import profilePhoto from "./assets/profile.jpg";
import "./App.css";
function App() {
  return (
    <div className="portfolio">

      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Priyanka, home">Priyanka<span>.</span></a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div>
          <p className="intro">Hello, I'm</p>
          <h1>Priyanka Halim Samia</h1>
          <h2>Undergraduate CSE Student</h2>
          <p>
            Passionate about learning, teaching, and creating meaningful
            digital experiences.
          </p>

          <a href="#about" className="button">
            Explore My Portfolio
          </a>
        </div>
      </section>

      <section id="about" className="section about">
  <div className="about-content">
    <img
  src={profilePhoto}
  alt="Priyanka Halim Samia"
  className="profile-photo"
/>

    <div className="about-text">
      <h2>About Me</h2>
      <p>
        I am an undergraduate Computer Science and Engineering student
        interested in teaching and learning new technologies. I enjoy
        developing my skills and exploring creative ideas through technology.
        I am also an aspiring web developer, currently learning HTML, CSS,
        JavaScript, and React while building hands-on projects.
      </p>
    </div>
  </div>
</section>

      <section id="skills" className="section">
  <h2>My Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <strong>HTML</strong>
     
    </div>

    <div className="skill-card">
      <strong>CSS</strong>
      
    </div>

    <div className="skill-card">
      <strong>JavaScript</strong>
      
    </div>

    <div className="skill-card">
      <strong>React</strong>
     
    </div>

    <div className="skill-card">
      <strong>C / C++</strong>
     
    </div>

    <div className="skill-card">
      <strong>Teaching</strong>
      
    </div>
  </div>
</section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-card">
  <h3>Portfolio Website</h3>
  <p>
    A responsive personal portfolio website developed using React,
    HTML, and CSS.
  </p>
</div>

<div className="project-card">
  <h3>Movie Ticket Booking System</h3>
  <p>
    A database-based movie ticket booking system developed using
    PHP, MySQL, and XAMPP.
  </p>
</div>
</section>

     <section id="contact" className="section contact">
  <h2>Contact Me</h2>
  <p>Email: priyankahalim422@gmail.com</p>
</section>

      <footer>
        <p>© 2026 Priyanka Halim Samia. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App