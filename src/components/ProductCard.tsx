'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

import nologoproduct1 from '../assets/products/logos/ycs.png';

export const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative w-full transition-all duration-300 hover:translate-y-[-8px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-zinc-800/50 rounded-lg overflow-hidden border-l-4 border-zinc-700 h-full">
        {product.link && (
          <div
            className={`absolute top-4 right-4 bg-zinc-700 rounded-full p-2 z-10 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
          >
            <GoArrowUpRight className="text-white w-4 h-4" />
          </div>
        )}

        <Link
          href={product.link || '#'}
          className="block h-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-6 md:p-8 flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="bg-zinc-700/70 rounded-lg p-3 mr-4">
                <Image
                  className={`object-contain w-10 h-10 ${product.shouldIconBeRounded ? 'rounded-full' : 'rounded-lg'}`}
                  src={product.logo || nologoproduct1}
                  alt={product.name}
                  width={40}
                  height={40}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  {product.live && (
                    <span className="ml-3 text-xs bg-ycs-green/20 text-ycs-green px-2 py-1 rounded-full">
                      Live
                    </span>
                  )}
                  {!product.live && (
                    <span className="ml-3 text-xs bg-ycs-blue/20 text-ycs-blue px-2 py-1 rounded-full">
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="text-zinc-300 text-lg flex-grow">{product.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

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
                src={product.logo || nologoproduct1}
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
