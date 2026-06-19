import { FC } from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

interface Props {
  /** 1-based position, rendered as a zero-padded eyebrow (01, 02, ...). */
  index: number;
  title: string;
  text: string;
  link?: string;
  icon?: React.ReactNode;
}

// Editorial, monochrome card: numbered eyebrow, white line-icon, hairline ring.
// Restrained at rest — the only color is the brand pink, which appears on hover.
export const LevelCard: FC<Props> = ({ index, title, text, link, icon }) => {
  const card = (
    <div className="group relative flex h-full flex-col rounded-2xl bg-white/[0.02] p-8 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:ring-white/20">
      <div className="mb-7 flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.3em] text-white/30 transition-colors duration-300 group-hover:text-white/50">
          {String(index).padStart(2, '0')}
        </span>
        {link && (
          <GoArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ycs-pink" />
        )}
      </div>

      {icon && <div className="mb-5 text-white/80">{icon}</div>}

      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <span className="mt-4 block h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-12 group-hover:bg-ycs-pink" />

      <p className="mt-4 text-base leading-relaxed text-white/60 lg:text-[1.0625rem]">{text}</p>
    </div>
  );

  if (!link) return card;

  // Internal routes use next/link; external URLs open in a new tab.
  return link.startsWith('http') ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </a>
  ) : (
    <Link href={link} className="block h-full">
      {card}
    </Link>
  );
};
