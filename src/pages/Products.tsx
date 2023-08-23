import { Project, PROJECTS } from "../data";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { SectionTitle } from "../components/SectionTitle";

type ProductCardProps = {
  product: Project;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const ConditionalWrapper = ({ condition, wrapper, children }: { condition: any, wrapper: any, children: ReactNode }) => condition ? wrapper(children) : children;
  return (
    <div className={product.link ? "project-card" : "project-card-no-link"} style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <ConditionalWrapper 
        condition={product.link}
        wrapper={(children: ReactNode) => <Link to={product.link!} style={{ textDecoration: "none", color: "inherit" }}>{children}</Link>}  
      >
        <div className="w-40 h-40" style={{ backgroundColor: "#404859", borderRadius: "50%", position: "absolute", top: "-80px", left: "50%", transform: "translate(-50%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className="w-32 h-32" src={product.image} loading="lazy" alt={product.name} style={{ borderRadius: "50%" }} />
        </div>
        <div style={{ fontWeight: 500, fontSize: "25px", marginTop: "80px" }}>{product.name}</div>
        <div style={{ fontWeight: 400, fontSize: "18px", margin: "40px 20px" }}>{product.description}</div>
      </ConditionalWrapper>
    </div>
  )
}

interface ProductGridProps {
  live: boolean
}

const ProductGrid = ({live}: ProductGridProps) => (
  <div className="product-grid">
    {
      PROJECTS.filter((project) => project.live === live).map((project, i) => <ProductCard product={project} key={i}/>)
    }
  </div>
) 

export const Products = () => {
  return (
    <div className="product-container">
      <SectionTitle header="Products" subheader="From a campus-wide student directory to your class-scheduling needs, we've got you covered."/>
      <h2 style={{ fontSize: "30px", fontWeight: 700, margin: "10vh 0" }}>Live Products</h2>
      <ProductGrid live/>
      <h2 style={{ fontSize: "30px", fontWeight: 700, margin: "10vh 0" }}>Products in Production</h2>
      <ProductGrid live={false}/>
    </div>
  );
};
