import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Projects</h1>

      {projects.length === 0 && <p>No projects found.</p>}

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
