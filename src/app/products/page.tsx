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
        <ProductCard
          product={project}
          roundedIcon={project.shouldIconBeRounded}
          isBackgroundWhite={project.isBackgroundWhite}
          key={i}
        />
      ))}
    </div>
  </>
);

const Products = () => {
  return (
    <>
      <SectionTitle
        title="Products"
        subtitle="From a campus-wide student directory to your class-scheduling needs, we've got you covered."
      />
      <ProductGrid live />
      <ProductGrid live={false} />
    </>
  );
};

export default Products;
