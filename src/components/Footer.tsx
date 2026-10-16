import Link from 'next/link';

import { SlashMark } from '@components/site/brand';

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Join', href: '/join' },
  { name: 'Email', href: 'mailto:yalecomputersociety@gmail.com' },
  { name: 'GitHub', href: 'https://github.com/yalecomputersociety' },
  { name: 'Instagram', href: 'https://www.instagram.com/yalecomputersociety/' },
];

interface Props {
  className?: string;
}

export const Footer = ({ className = '' }: Props) => {
  return (
    <footer className={`border-t border-white/[0.08] ${className}`}>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-4 py-12 text-[15px] text-muted sm:px-8 lg:px-[72px]">
        <div className="flex items-center gap-3">
          <SlashMark className="h-5 w-3" />
          <span>Yale Computer Society © {new Date().getFullYear()}</span>
        </div>
        <ul className="flex flex-wrap gap-7">
          {footerLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-[#D8D4CC] transition-colors hover:text-cream">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
