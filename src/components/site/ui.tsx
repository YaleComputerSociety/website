import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { GridPhoto, Logo } from '@/content/site';

/** Centered page column used by every redesigned section. */
export const Shell = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[72px] ${className}`}>
    {children}
  </div>
);

export const Eyebrow = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`mb-4 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent ${className}`}
  >
    {children}
  </p>
);

export const SectionTitle = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    data-reveal
    className={`text-[clamp(34px,4.1vw,56px)] font-extrabold leading-[1.02] tracking-[-0.03em] text-cream ${className}`}
  >
    {children}
  </h2>
);

export const PillLink = ({
  href,
  children,
  variant = 'accent',
  size = 'md',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'accent' | 'outline' | 'dark' | 'outline-dark';
  size?: 'md' | 'sm';
  className?: string;
}) => {
  const sizing =
    size === 'sm' ? 'min-h-[46px] px-[22px] text-[14px]' : 'min-h-[52px] px-7 text-[16px]';
  const styles = {
    accent: 'bg-accent text-accent-ink font-bold hover:-translate-y-0.5',
    outline: 'border border-white/35 text-cream font-medium hover:bg-white/5',
    dark: 'bg-[#141414] text-cream font-bold hover:-translate-y-0.5',
    'outline-dark': 'border border-[#141414]/40 text-[#141414] font-semibold hover:bg-black/5',
  }[variant];
  const external = href.startsWith('http') || href.startsWith('mailto:');
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2.5 rounded-full transition-all duration-200 ${sizing} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
};

/** A row of monochrome logos that flows onto more lines on small screens. */
export const LogoRow = ({ logos, minWidth = 100 }: { logos: Logo[]; minWidth?: number }) => (
  <ul
    className="grid flex-1 items-center gap-6"
    style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))` }}
  >
    {logos.map((logo) => (
      <li key={logo.name} className="flex items-center justify-center">
        <Image
          src={logo.src}
          alt={logo.name}
          className={`w-full object-contain opacity-80 ${logo.alreadyWhite ? '' : 'logo-white'}`}
          style={{ height: logo.height }}
          sizes="160px"
        />
      </li>
    ))}
  </ul>
);

/** Mixed-size photo mosaic with optional captions. */
export const PhotoGrid = ({
  photos,
  rowHeight = 280,
}: {
  photos: GridPhoto[];
  rowHeight?: number;
}) => (
  <div
    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    style={{ gridAutoRows: `${rowHeight}px` }}
  >
    {photos.map((photo) => (
      <figure
        data-reveal
        key={photo.alt}
        className={`relative m-0 overflow-hidden rounded-[22px] ${photo.wide ? 'sm:col-span-2' : ''} ${
          photo.tall ? 'sm:row-span-2' : ''
        }`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          placeholder="blur"
        />
        {photo.caption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-10 text-sm font-medium text-cream">
            {photo.caption}
          </figcaption>
        )}
      </figure>
    ))}
  </div>
);

/** Peach call-to-action panel used at the bottom of pages. */
export const CtaPanel = ({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: ReactNode;
}) => (
  <div
    data-reveal
    className="flex flex-wrap items-center justify-between gap-8 rounded-[28px] bg-accent p-8 text-accent-ink sm:p-14"
  >
    <div className="min-w-0 flex-[1_1_420px]">
      <h2 className="text-[clamp(30px,3.2vw,41px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
        {title}
      </h2>
      <p className="mt-4 max-w-[560px] text-lg leading-relaxed">{body}</p>
    </div>
    <div className="flex flex-wrap gap-2.5">{children}</div>
  </div>
);

export const StatRow = ({ stats }: { stats: { value: string; label: string }[] }) => (
  <dl data-reveal className="grid grid-cols-2 border-t border-white/[0.14] lg:grid-cols-4">
    {stats.map((stat) => (
      <div key={stat.label} className="py-7 pr-6">
        <dt className="sr-only">{stat.label}</dt>
        <dd className="text-[clamp(34px,3.7vw,48px)] font-extrabold tracking-[-0.03em] text-cream">
          {stat.value}
        </dd>
        <dd className="mt-1.5 text-[14px] text-muted">{stat.label}</dd>
      </div>
    ))}
  </dl>
);
