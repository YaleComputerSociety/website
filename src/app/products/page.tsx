import { ProductCard } from '@components/ProductCard';
import { PROJECTS } from '@data';
import '@styles/App.css';
import { SectionTitle } from '@components/SectionTitle';
import { GoArrowUpRight } from 'react-icons/go';

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
            <ProductCard key={i} product={{ ...project, logo: project.logo?.src }} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-32 px-4">
        <div className="border-b border-zinc-800 pb-4 mb-12">
          <h2 className="text-white text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-zinc-400 text-base md:text-lg mt-2">
            Common questions about accessing our products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="bg-zinc-800/20 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
              What if I&apos;m not a Yale student?
            </h3>
            <p className="text-sm md:text-base text-zinc-300">
              Certain applications have Guest modes built in or only require a gmail account, but
              some of the apps that deal with sensitive Yale data require CAS login.
            </p>
          </div>

          <div className="bg-zinc-800/20 rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
              What if I&apos;m an incoming student?
            </h3>
            <p className="text-sm md:text-base text-zinc-300">
              When you receive CAS login you will be able to access our applications. Sometimes this
              can take until the beginning of the semester, so just hang tight!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
