import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="projects-container">

      <h1 className="fade-in">My Projects</h1>

      <div className="fade-in">
        <ProjectCard
          title="Sage Stone Yoga"
          image="/images/sage.png"
          link="https://sage-stone-yoga.netlify.app/"
          tech="React, CSS, AI-assisted development"
          description="A fully deployed wellness website focused on layout, visual hierarchy, and responsive design. Built with AI-assisted development to refine structure and styling."
        />
      </div>

      <div className="fade-in">
        <ProjectCard
          title="Design Moodboard"
          image="/images/moodboard.png"
          link="https://design-moodboard.netlify.app/"
          tech="React, CSS, Design Systems"
          description="A visual moodboard exploring color, typography, and branding direction. Focused on translating design concepts into structured layouts."
        />
      </div>

      <div className="fade-in">
        <ProjectCard
          title="Quiz App"
          image="/images/quiz.png"
          link="https://quizzed-app.netlify.app/"
          tech="React, JavaScript, AI tools"
          description="An interactive quiz application that allows users to answer questions and track progress. This project focused on state management, user interaction, and building dynamic UI components."
        />
      </div>

    </div>
  );
}

export default Projects;