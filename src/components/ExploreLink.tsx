import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

interface ExploreLinkProps {
  href: string;
  text?: string;
  className?: string;
}

export default function ExploreLink({
  href,
  text = 'Explore our products',
  className = '',
}: ExploreLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center text-ycs-pink hover:text-white hover:underline transition-colors duration-300 mt-4 group cursor-pointer ${className} text-xl`}
    >
      <span>{text}</span>
      <GoArrowUpRight size={30} className="ml-3" />
    </Link>
  );
}
