'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

import { TitleSubtitle } from './TitleSubtitle';
import { PARTNERSHIPS } from '@data';

export const Sponsors: React.FC = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto">
      <TitleSubtitle title="Our Partners & Sponsors" subtitle="" />

      <div className="mt-8 relative">
        <div className="absolute inset-0 bg-zinc-800/50 rounded-lg -z-10" />

        <div className="grid grid-cols-6 md:grid-cols-6 p-6">
          <div className="col-span-6 col-start-2 col-end-6 grid grid-cols-4 gap-4">
            {PARTNERSHIPS.map((partner, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center w-full"
                onHoverStart={() => setHoveredSponsor(i)}
                onHoverEnd={() => setHoveredSponsor(null)}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-lg flex items-center justify-center w-full h-20 mb-2">
                  <div className="flex items-center justify-center w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      className={`transition-all duration-300 ${
                        hoveredSponsor === i ? 'scale-110' : 'scale-100'
                      }`}
                      width={80}
                      height={40}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <p className="text-zinc-300 text-center text-sm font-medium">{partner.name}</p>
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 text-xs mt-1 flex items-center"
                  >
                    Visit <GoArrowUpRight className="ml-1 w-2 h-2" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-zinc-800/30 rounded-lg p-4 border border-zinc-700/50 md:px-36 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          <p className="text-zinc-300 text-lg text-center md:text-left">
            Interested in partnering with Yale Computer Society?
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 sm:space-x-4">
            <Link
              href="mailto:yalecomputersociety@gmail.com"
              className="bg-zinc-700 hover:bg-zinc-600 text-white py-1.5 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="sponsorpacakge.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-700 hover:bg-zinc-600 text-white py-1.5 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center text-lg"
            >
              View our Package
              <GoArrowUpRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
