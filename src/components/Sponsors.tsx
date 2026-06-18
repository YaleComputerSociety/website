'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import type { StaticImageData } from 'next/image';

import { TitleSubtitle } from './TitleSubtitle';
import { PARTNERSHIPS } from '@data';

interface Partner {
  name: string;
  image: StaticImageData;
  url?: string;
  tier?: string;
}

interface Tier {
  key: string;
  label: string;
  tile: string; // tile box sizing
  logo: string; // logo box height (object-contain inside)
}

// Tiers are conveyed by size + order + a muted label — not by colored cards.
const TIERS: Tier[] = [
  {
    key: 'obsidian',
    label: 'Lead Sponsors',
    tile: 'h-32 w-[260px] md:h-36 md:w-[300px]',
    logo: 'h-16 md:h-20',
  },
  {
    key: 'gold',
    label: 'Gold',
    tile: 'h-28 w-[210px] md:w-[240px]',
    logo: 'h-12 md:h-14',
  },
  {
    key: 'silver',
    label: 'Silver',
    tile: 'h-24 w-[160px] sm:w-[185px]',
    logo: 'h-12 md:h-14',
  },
];

// Per-logo image-size overrides for marks that read optically smaller than the
// tier default (keyed by partner name). Tunes the logo image, not the tile.
const LOGO_OVERRIDE: Record<string, string> = {
  QNX: 'h-20 md:h-24',
  'Tsai CITY': 'h-14 md:h-16',
};

const SponsorTile = ({ partner, tier }: { partner: Partner; tier: Tier }) => {
  const inner = (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#f7f7f5] px-5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:ring-black/10 ${tier.tile}`}
    >
      <div className={`relative w-full ${LOGO_OVERRIDE[partner.name] ?? tier.logo}`}>
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          sizes="300px"
          className="object-contain"
        />
      </div>
      {partner.url && (
        <GoArrowUpRight
          aria-hidden="true"
          className="absolute right-3 top-3 h-4 w-4 text-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
    >
      {partner.url ? (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${partner.name} (opens in a new tab)`}
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  );
};

export const Sponsors: React.FC = () => {
  const groups = TIERS.map((tier) => ({
    tier,
    sponsors: PARTNERSHIPS.filter((p) => p.tier === tier.key) as Partner[],
  })).filter((group) => group.sponsors.length > 0);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <TitleSubtitle title="Our Sponsors" subtitle="The organizations that make y/cs possible" />

      <div className="mt-14 space-y-12">
        {groups.map(({ tier, sponsors }) => (
          <div key={tier.key}>
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-white/15 sm:w-12" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                {tier.label}
              </span>
              <span className="h-px w-8 bg-white/15 sm:w-12" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {sponsors.map((partner) => (
                <SponsorTile key={partner.name} partner={partner} tier={tier} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="mt-16 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-10 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-lg text-white md:text-xl">
          Interested in partnering with Yale Computer Society?
        </p>
        <p className="text-sm text-white/50">Join our community of innovators and tech leaders.</p>
        <Link
          href="mailto:yalecomputersociety@gmail.com"
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
        >
          Become a Sponsor
          <GoArrowUpRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
};
