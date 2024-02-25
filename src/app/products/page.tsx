import { ReactElement, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import { SectionTitle } from "@components/SectionTitle";
import { Project, PROJECTS } from "@data";
import "@styles/App.css";

type ProductCardProps = {
  product: Project;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
  }: {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactElement;
    children: ReactNode;
  }) => (condition ? wrapper(children) : children);
  return (
    <div
      className={product.link ? "project-card" : "project-card-no-link"}
      style={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <ConditionalWrapper
        condition={product.link != null}
        wrapper={(children: ReactNode) => (
          <Link href={product.link!} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
          </Link>
        )}
      >
        <div
          className="w-40 h-40"
          style={{
            backgroundColor: "#404859",
            borderRadius: "50%",
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translate(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            className="w-32 h-32"
            src={product.image}
            loading="lazy"
            alt={product.name}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div style={{ fontWeight: 500, fontSize: "25px", marginTop: "80px" }}>{product.name}</div>
        <div style={{ fontWeight: 400, fontSize: "18px", margin: "40px 20px" }}>
          {product.description}
        </div>
      </ConditionalWrapper>
    </div>
  );
};

interface ProductGridProps {
  live: boolean;
}

const ProductGrid = ({ live }: ProductGridProps) => (
  <div className="product-grid">
    {PROJECTS.filter((project) => project.live === live).map((project, i) => (
      <ProductCard product={project} key={i} />
    ))}
  </div>
);

const Products = () => {
  return (
    <div className="product-container">
      <SectionTitle
        title="Products"
        subtitle="From a campus-wide student directory to your class-scheduling needs, we've got you covered."
      />
      <h2 className="text-3xl font-bold my-20 text-center">Live Products</h2>
      <ProductGrid live />
      <h2 className="text-3xl font-bold my-20 text-center">Products in Production</h2>
      <ProductGrid live={false} />
    </div>
  );
};

export default Products;
