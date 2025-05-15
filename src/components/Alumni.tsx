'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import google from '@assets/partnerships/google.png';
import netflix from '@assets/partnerships/netflix.png';
import amazon from '@assets/partnerships/amazon.png';
import meta from '@assets/partnerships/meta.png';
import bloomberg from '@assets/partnerships/bloomberg.jpeg';
import microsoft from '@assets/partnerships/microsoft.png';
import nvida from '@assets/partnerships/nvidia.png';
import sig from '@assets/partnerships/sig.png';
// Sample company data - replace with your actual alumni company data
const ALUMNI_COMPANIES = [
  {
    name: 'Google',
    logo: google, // Replace with actual logo path
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
    name: 'SIG',
    logo: sig,
    count: 2,
  },
];

const AlumniCompanies = () => {
  // Display top 8 companies by default, or all if viewAll is true

  return (
    <section className="max-w-7xl mx-auto mt-24 md:mt-32">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">Where Our Members Land</h2>

      <div className="bg-zinc-800/20 rounded-lg relative overflow-hidden">
        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {ALUMNI_COMPANIES.map((company, i) => (
            <motion.div
              key={i}
              className="bg-zinc-800/20 rounded-lg p-4 flex flex-col items-center"
            >
              <div className="h-16 flex items-center justify-center mb-3 w-full bg-white/10 rounded-md">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 transition-all duration-300"
                />
              </div>
              <div>{company.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniCompanies;
