import '../assets/styles/home.css'

const HomePage = () => {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1>Welcome to My Portfolio</h1>
        </header>
        <section className="home-intro">
          <p>
            Hi, I am Agu Ifeanyi Leo, a Front-End Web Developer specializing in creating beautiful and functional web applications with React js. 
            With a passion for coding and a keen eye for design, I strive to deliver the best user experiences.
          </p>
        </section>
        <section className="home-sections">
          <h2>Key Sections</h2>
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
    );
  };
  
  

export default HomePage;

