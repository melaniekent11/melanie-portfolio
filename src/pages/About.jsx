function About() {
  return (
    <div className="about-container fade-in">

      <h1>About Me</h1>

      {/* IMAGE ON TOP */}
      <div className="about-image-centered">
        <img src="/images/headshot.jpg" alt="Melanie Kenton" />
      </div>

      {/* TEXT */}
      <div className="about-text-centered">
        <p>
          I’m a Digital Media student at the University of Central Florida with a focus on UX design and digital marketing.
          I’m passionate about creating user-centered experiences and using data and design to solve real problems.
        </p>

        <p>
          At <strong>UCF IT Enterprise Applications</strong>, I work on UX/UI initiatives, contributing to research, design decisions,
          and improvements to internal systems used by students and staff. This role has strengthened my ability to think from a user-first perspective
          while working within real-world technical constraints.
        </p>

        <p>
          As a <strong>Digital Media Strategist at Appleton Creative</strong>, I focus on SEO, analytics, and content strategy.
          I analyze performance data, optimize website content, and support campaigns that improve visibility and engagement for clients.
        </p>

        <p>
          This semester, I focused on integrating AI into my workflow using tools like ChatGPT and Claude to assist with coding,
          debugging, and structuring projects.
        </p>
      </div>

    </div>
  );
}

export default About;