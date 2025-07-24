'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

import { TitleSubtitle } from './TitleSubtitle';
import { Carousel } from './Carousel';
import { PARTNERSHIPS } from '@data';
import type { StaticImageData } from 'next/image';

const sponsorTiers = [
  {
    name: 'Obsidian',
    bgColor: 'bg-gradient-to-r from-purple-900/20 to-gray-900/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-300',
    dotColor: 'bg-purple-400',
    sponsors: PARTNERSHIPS.filter((p) => p.tier === 'obsidian'),
  },
  {
    name: 'Gold',
    bgColor: 'bg-gradient-to-r from-yellow-900/20 to-amber-900/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-300',
    dotColor: 'bg-yellow-400',
    sponsors: PARTNERSHIPS.filter((p) => p.tier === 'gold'),
  },
  {
    name: 'Silver',
    bgColor: 'bg-gradient-to-r from-gray-700/20 to-slate-700/20',
    borderColor: 'border-gray-400/30',
    textColor: 'text-gray-300',
    dotColor: 'bg-gray-400',
    sponsors: PARTNERSHIPS.filter((p) => p.tier === 'silver'),
  },

  // {
  //   name: 'Partner',
  //   bgColor: 'bg-gradient-to-r from-green-900/20 to-emerald-900/20',
  //   borderColor: 'border-green-500/30',
  //   textColor: 'text-green-300',
  //   dotColor: 'bg-green-400',
  //   sponsors: PARTNERSHIPS.filter((p) => p.tier === 'partner'),
  // },
];

export const Sponsors: React.FC = () => {
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);

  interface Partner {
    name: string;
    image: string | StaticImageData;
    url?: string;
    tier?: string;
  }

  const createSponsorCard = (
    partner: Partner,
    tierName: string,
    tierTextColor: string,
    index: number,
    isMobile = false
  ) => (
    <motion.div
      className="flex flex-col items-center justify-center"
      onHoverStart={() => setHoveredSponsor(`${tierName}-${isMobile ? 'mobile-' : ''}${index}`)}
      onHoverEnd={() => setHoveredSponsor(null)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`rounded-lg flex items-center justify-center w-full ${isMobile ? 'h-28' : 'h-24'} ${isMobile ? 'mb-4' : 'mb-3'} bg-white/5 backdrop-blur-sm border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300`}
      >
        <div className="flex items-center justify-center w-full px-4">
          <Image
            src={partner.image}
            alt={partner.name}
            className={`transition-all duration-300 ${
              hoveredSponsor === `${tierName}-${isMobile ? 'mobile-' : ''}${index}`
                ? 'scale-110 brightness-110'
                : 'scale-100'
            }`}
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <p
        className={`text-zinc-300 text-center ${isMobile ? 'text-base' : 'text-sm md:text-base'} font-medium ${isMobile ? 'mb-2' : 'mb-1'}`}
      >
        {partner.name}
      </p>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${tierTextColor} hover:text-white ${isMobile ? 'text-sm' : 'text-xs'} flex items-center transition-colors duration-200`}
        >
          Visit <GoArrowUpRight className={`ml-1 ${isMobile ? 'w-4 h-4' : 'w-3 h-3'}`} />
        </a>
      )}
    </motion.div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TitleSubtitle title="Our Sponsors" subtitle="The organizations that make y/cs possible" />

      <div className="mt-8 space-y-8">
        {sponsorTiers.map(
          (tier, tierIndex) =>
            tier.sponsors.length > 0 && (
              <motion.div
                key={tier.name}
                className={`relative rounded-xl border ${tier.borderColor} ${tier.bgColor} backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: tierIndex * 0.1 }}
              >
                <div className="flex items-center justify-center gap-3 py-4 px-6 border-b border-zinc-700/50">
                  <div className="text-center">
                    <h3 className={`text-xl md:text-2xl font-bold ${tier.textColor}`}>
                      {tier.name} Sponsors
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div
                    className={`hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
                      tier.sponsors.length >= 4
                        ? 'lg:grid-cols-4'
                        : `lg:grid-cols-${tier.sponsors.length}`
                    } gap-6`}
                  >
                    {tier.sponsors.map((partner, i) =>
                      createSponsorCard(partner, tier.name, tier.textColor, i, false)
                    )}
                  </div>

                  <div className="lg:hidden">
                    <Carousel
                      items={tier.sponsors.map((partner, i) =>
                        createSponsorCard(partner, tier.name, tier.textColor, i, true)
                      )}
                      dotColor={tier.dotColor}
                      showArrows={true}
                      showDots={true}
                    />
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>

      <motion.div
        className="mt-8 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-zinc-300 text-lg md:text-xl mb-2">
              Interested in partnering with Yale Computer Society?
            </p>
            <p className="text-zinc-400 text-sm">
              Join our community of innovators and tech leaders
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
            <Link
              href="mailto:yalecomputersociety@gmail.com"
              className="bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center text-base font-medium hover:shadow-lg hover:shadow-zinc-900/25"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
