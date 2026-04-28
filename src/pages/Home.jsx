import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="hero fade-in">
        <h1>Hi, I'm Melanie Kenton</h1>

        <p>
          I’m a Digital Media student at UCF focused on UX design and AI-assisted development.
          I enjoy creating user-centered experiences and using AI to improve how I build and solve problems.
        </p>

        <Link to="/projects" className="button">
          View My Work
        </Link>
      </div>

      {/* TOOLS SECTION */}
      <div className="tools-section fade-in">
        <h2>Tools & Technologies</h2>

        <div className="tools-grid">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML & CSS</span>
          <span>Figma</span>
          <span>Adobe Creative Cloud</span>
          <span>ChatGPT</span>
          <span>Claude</span>
          <span>Netlify</span>
        </div>
      </div>

    </div>
  );
}

export default Home;