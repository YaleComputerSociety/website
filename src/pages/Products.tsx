import { Fragment } from "react";
import { Project, PROJECTS } from "../data";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className={project.link ? "project-card" : "card"} style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ width: "25%" }}>
      <img src={project.image} loading="lazy" alt={project.name} style={{ maxWidth: "80%", maxHeight: "150px", borderRadius: "15px" }} />
    </div>
    <div style={{ width: "75%" }}>
      <strong style={{ marginTop: "10px" }}>{project.name}</strong>
      <p>{project.description}</p>
    </div>
  </div>
);

export const Products = () => {
  return (
    <div style={{ paddingTop: "10vh", background: "white" }}>
      <h2>Live Products</h2>
      <div className="product-grid">
        {PROJECTS.filter((project) => project.live).map((project, i) => (
          <Fragment key={i}>
            {project.name === "CourseTable" ? (
              <Link to="/products/CourseTable" style={{ textDecoration: "none", color: "inherit" }}>
                <ProjectCard project={project} />
              </Link>
            ) : project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <ProjectCard project={project} />
              </a>
            ) : (
              <ProjectCard project={project} />
            )}
          </Fragment>
        ))}
      </div>
      <h2>Products in Production</h2>
      <div className="product-grid">
        {PROJECTS.filter((project) => !project.live).map((project, i) => (
          <Fragment key={i}>
            {project.link ? (
                <Link to={project.link} style={{ textDecoration: "none", color: "inherit" }}>
                    <ProjectCard project={project} />
                </Link>
            ) : (
              <ProjectCard project={project} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
