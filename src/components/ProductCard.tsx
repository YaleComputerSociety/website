'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import slash from '@assets/ycs-slash.png';

const StatusBadge = ({ live }: { live?: boolean }) => (
  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-white/50">
    <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-emerald-400' : 'bg-amber-400'}`} />
    {live ? 'Live' : 'In Development'}
  </span>
);

export const ProductCard = ({ product }: { product: Product }) => (
  <Link
    href={product.link || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-full flex-col rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:ring-white/20 md:p-8"
  >
    {product.link && (
      <GoArrowUpRight
        aria-hidden="true"
        className="absolute right-5 top-5 h-5 w-5 text-white/20 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-white/60 group-hover:opacity-100"
      />
    )}

    <div className="mb-6 flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
        <Image
          className={`h-9 w-9 object-contain ${product.shouldIconBeRounded ? 'rounded-full' : 'rounded-md'}`}
          src={product.logo || slash}
          alt={product.name}
          width={40}
          height={40}
        />
      </div>
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
        <StatusBadge live={product.live} />
      </div>
    </div>

    <p className="text-lg leading-relaxed text-white/60">{product.description}</p>
  </Link>
);

interface Product {
  name: string;
  description: string;
  logo?: string;
  link?: string;
  shouldIconBeRounded?: boolean;
  live?: boolean;
}

export const FeaturedProduct = ({ product }: { product: Product }) => {
  return (
    <div className="relative mb-16">
      <div className="rounded-lg overflow-hidden">
        <div className="relative h-80 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <div className="flex items-center mb-4">
            <div className="bg-zinc-800/80 rounded-lg p-3 mr-4">
              <Image
                className={`object-contain w-10 h-10 ${product.shouldIconBeRounded ? 'rounded-full' : 'rounded-lg'}`}
                src={product.logo || slash}
                alt={product.name}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{product.name}</h2>
            </div>

            {product.link && (
              <Link
                href={product.link}
                className="ml-auto bg-zinc-800/80 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
              >
                Visit Project
                <GoArrowUpRight className="ml-2" />
              </Link>
            )}
          </div>

          <p className="text-white/90 text-lg max-w-2xl">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
