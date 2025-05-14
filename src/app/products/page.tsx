import { ProductCard } from '@components/ProductCard';
import { PROJECTS } from '@data';
import '@styles/App.css';
import { SectionTitle } from '@components/SectionTitle';
import { GoArrowUpRight } from 'react-icons/go';

interface Props {
  live: boolean;
}

const Products = () => {
  const liveProducts = PROJECTS.filter((project) => project.live === true);
  const developmentProducts = PROJECTS.filter((project) => project.live === false);

  return (
    <div className="mb-20 pt-24 max-w-7xl text-xl mx-auto">
      <SectionTitle
        title="Product Directory"
        subtitle="From a campus-wide student directory to your class-scheduling needs, we've got you covered."
      />
      <a
        className="flex items-center text-ycs-pink hover:text-white hover:underline transition-colors duration-300 group cursor-pointer"
        href="https://github.com/YaleComputerSociety"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>View our GitHub</span>
        <GoArrowUpRight size={30} className="ml-2" />
      </a>

      <section className="max-w-7xl mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {liveProducts.concat(developmentProducts).map((project, i) => (
            <ProductCard key={i} product={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
