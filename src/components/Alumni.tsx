'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import google from '@assets/partnerships/google.png';
import netflix from '@assets/partnerships/netflix.png';
import amazon from '@assets/partnerships/amazon.png';
import meta from '@assets/partnerships/meta.avif';
import bloomberg from '@assets/partnerships/bloomberg.png';
import microsoft from '@assets/partnerships/microsoft.png';
import nvida from '@assets/partnerships/nvidia.png';
import sig from '@assets/partnerships/sig.png';
import { SectionContainer } from './Container';
import { Carousel } from './Carousel';

const ALUMNI_COMPANIES = [
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
  },
  {
    name: 'Netflix',
    logo: netflix,
    count: 2,
  },
  {
    name: 'NVIDIA',
    logo: nvida,
    count: 2,
  },
  {
    name: 'Susquehanna International Group',
    logo: sig,
    count: 2,
  },
];

const CompanyCard = ({ company }: { company: (typeof ALUMNI_COMPANIES)[0] }) => (
  <motion.div className="bg-zinc-800/20 rounded-lg p-7 flex flex-col items-center">
    <div className="h-16 flex items-center justify-center mb-3 w-full bg-white/10 rounded-md">
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
    </div>
    <div className="text-white text-center">{company.name}</div>
  </motion.div>
);

const AlumniCompanies = () => {
  const carouselItems = [];
  for (let i = 0; i < ALUMNI_COMPANIES.length; i += 2) {
    const slide = (
      <div className="grid grid-cols-2 gap-4">
        <CompanyCard company={ALUMNI_COMPANIES[i]} />
        {ALUMNI_COMPANIES[i + 1] && <CompanyCard company={ALUMNI_COMPANIES[i + 1]} />}
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
