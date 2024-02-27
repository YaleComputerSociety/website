<<<<<<< HEAD
<<<<<<< HEAD
import { SectionTitle } from "@components/SectionTitle";
import { PROJECTS } from "@data";
import "@styles/App.css";
import { ProductCard } from "@components/ProductCard";

interface Props {
  live: boolean;
}

const ProductGrid = ({ live }: Props) => (
  <>
    <h2 className="text-2xl sm:text-4xl font-bold text-center mb-16 mt-10">
      {live ? "Live Products" : "Products in Development"}
    </h2>
    <div className="product-grid">
      {PROJECTS.filter((project) => project.live === live).map((project, i) => (
        <ProductCard product={project} roundedIcon={project.shouldIconBeRounded} key={i} />
      ))}
    </div>
  </>
=======
import { ReactElement, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

=======
>>>>>>> e7167db (Refactor product card into its own component)
import { SectionTitle } from "@components/SectionTitle";
import { PROJECTS } from "@data";
import "@styles/App.css";
import { ProductCard } from "@components/ProductCard";

interface Props {
  live: boolean;
}

<<<<<<< HEAD
const ProductGrid = ({ live }: ProductGridProps) => (
  <div className="product-grid">
    {PROJECTS.filter((project) => project.live === live).map((project, i) => (
      <ProductCard product={project} roundedIcon={project.shouldIconBeRounded} key={i} />
    ))}
  </div>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
const ProductGrid = ({ live }: Props) => (
  <>
    <h2 className="text-3xl font-bold text-center mb-16">
      {live ? "Live Products" : "Products in Development"}
    </h2>
    <div className="product-grid">
      {PROJECTS.filter((project) => project.live === live).map((project, i) => (
        <ProductCard product={project} roundedIcon={project.shouldIconBeRounded} key={i} />
      ))}
    </div>
  </>
>>>>>>> e7167db (Refactor product card into its own component)
);

const Products = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <SectionTitle
        title="Products"
        subtitle="From a campus-wide student directory to your class-scheduling needs, we've got you covered."
      />
      <ProductGrid live />
      <ProductGrid live={false} />
    </>
=======
    <div className="product-container">
=======
    <>
>>>>>>> e7167db (Refactor product card into its own component)
      <SectionTitle
        title="Products"
        subtitle="From a campus-wide student directory to your class-scheduling needs, we've got you covered."
      />
      <ProductGrid live />
      <ProductGrid live={false} />
<<<<<<< HEAD
    </div>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
    </>
>>>>>>> e7167db (Refactor product card into its own component)
  );
};

export default Products;
