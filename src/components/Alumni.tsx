'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import google from '@assets/partnerships/google.png';
import netflix from '@assets/partnerships/netflix.png';
import amazon from '@assets/partnerships/amazon.png';
import meta from '@assets/partnerships/meta.avif';
import bloomberg from '@assets/partnerships/bloomberg-gradient.webp';
import microsoft from '@assets/partnerships/microsoft.png';
import nvida from '@assets/partnerships/nvidia.png';
import roblox from '@assets/partnerships/roblox.png';
import { SectionContainer } from './Container';
import { Carousel } from './Carousel';

type AlumniCompany = {
  name: string;
  logo: StaticImageData;
  count: number;
  fill?: boolean; // render the logo as a full-bleed tile (e.g. a baked-in gradient background)
};

const ALUMNI_COMPANIES: AlumniCompany[] = [
  {
    name: 'Google',
    logo: google,
    count: 14,
  },
  {
    name: 'Meta',
    logo: meta,
    count: 11,
  },
  {
    name: 'Netflix',
    logo: netflix,
    count: 2,
  },
  {
    name: 'Microsoft',
    logo: microsoft,
    count: 9,
  },
  {
    name: 'Amazon',
    logo: amazon,
    count: 7,
  },
  {
    name: 'Bloomberg',
    logo: bloomberg,
    count: 3,
    fill: true,
  },

  {
    name: 'NVIDIA',
    logo: nvida,
    count: 2,
  },
  {
    name: 'Roblox',
    logo: roblox,
    count: 1,
  },
];

const CompanyCard = ({ company }: { company: AlumniCompany }) => (
  <motion.div className="bg-zinc-800/20 rounded-lg p-7 flex flex-col items-center">
    <div className="relative h-16 w-full overflow-hidden rounded-md bg-white/10 flex items-center justify-center mb-3">
      {company.fill ? (
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          fill
          sizes="240px"
          className="object-cover"
        />
      ) : (
        <Image
          src={company.logo}
          alt={`${company.name} logo`}
          width={120}
          height={120}
          className="object-contain max-h-12 transition-all duration-300"
          unoptimized={
            typeof company.logo === 'object' && 'src' in company.logo
              ? company.logo.src.endsWith('.avif')
              : false
          }
        />
      )}
    </div>
    <div className="text-white text-center">{company.name}</div>
  </motion.div>
);

const AlumniCompanies = () => {
  const carouselItems = [];
  for (let i = 0; i < ALUMNI_COMPANIES.length; i += 1) {
    const slide = (
      <div>
        <CompanyCard company={ALUMNI_COMPANIES[i]} />
      </div>
    );
    carouselItems.push(slide);
  }

  return (
    <SectionContainer>
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">Where Our Members Land</h2>

      <div className="bg-zinc-800/20 rounded-lg relative overflow-hidden">
        <div className="md:hidden p-6">
          <Carousel items={carouselItems} dotColor="bg-white" showArrows={true} showDots={true} />
        </div>

        {/* Desktop Grid (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 p-6 relative z-10">
            {ALUMNI_COMPANIES.map((company, i) => (
              <CompanyCard key={i} company={company} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AlumniCompanies;
