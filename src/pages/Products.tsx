import { Fragment } from "react";
import { Project, PROJECTS } from "../data";
import { Link } from "react-router-dom";
import { ProductBar } from "../components/ProductBar";

type ProductCardProps = {
  product: Project;
};

const ProjectCard = ({ product }: ProductCardProps) => (
  <div className={product.link ? "project-card" : "card"} style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ width: "25%" }}>
      <img className="rounded-lg" src={product.image} loading="lazy" alt={product.name} style={{ maxWidth: "80%", maxHeight: "150px", borderRadius: "25%" }} />
    </div>
    <div style={{ width: "75%" }}>
      <strong style={{ marginTop: "10px" }}>{product.name}</strong>
      <p>{product.description}</p>
    </div>
  </div>
);

const ProductCard = ({ product }: ProductCardProps) => (
  <div>

  </div>
)

export const Products = () => {
  return (
    <div style={{ paddingTop: "10vh", background: "#1F232B", color: "white" }}>
      <div style={{ fontSize: "65px", fontWeight: 700, marginTop: "10vh" }}>Products</div>
      <div style={{ fontSize: "20px", fontWeight: 400, marginTop: "10vh"  }}>From a campus-wide student directory to your class-scheduling needs, we've got you covered.</div>
      <ProductBar productBarHeader="Overview"/>
      <h2 style={{ fontSize: "30px", fontWeight: 700, margin: "20px 0" }}>Live Products</h2>
      <div className="product-grid">
        {PROJECTS.filter((project) => project.live).map((project, i) => (
          <Fragment key={i}>
            {
              project.link ? 
              <Link to={project.link} style={{ textDecoration: "none", color: "inherit" }}>
                <ProjectCard product={project} />
              </Link> :
              <ProjectCard product={project} />
            }
          </Fragment>
        ))}
      </div>
      <h2 style={{ fontSize: "30px", fontWeight: 700, margin: "20px 0" }}>Products in Production</h2>
      <div className="product-grid">
        {PROJECTS.filter((project) => !project.live).map((project, i) => (
          <Fragment key={i}>
          {
            project.link ? 
            <Link to={project.link} style={{ textDecoration: "none", color: "inherit" }}>
              <ProjectCard product={project} />
            </Link> :
            <ProjectCard product={project} />
          }
        </Fragment>
        ))}
      </div>
    </div>
  );
};
