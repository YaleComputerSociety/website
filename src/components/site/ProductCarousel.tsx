'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PRODUCTS } from '@/content/site';

const INTERVAL_MS = 6000;

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
  </svg>
);

/** Logo dock on top, large product slide below; auto-advances every 6s. */
export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  const restart = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % PRODUCTS.length), INTERVAL_MS);
  }, []);

  useEffect(() => {
    restart();
    return () => clearInterval(timer.current);
  }, [restart]);

  const go = (i: number) => {
    setIndex((i + PRODUCTS.length) % PRODUCTS.length);
    restart();
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="text-[15px] font-semibold text-cream">
          {PRODUCTS.length} products, built and run by y/cs
        </p>
        <p className="font-mono text-xs text-muted">Select a product to explore · auto-plays</p>
      </div>

      <div
        role="tablist"
        aria-label="y/cs products"
        className="mb-5 grid grid-cols-2 gap-1.5 rounded-3xl border border-white/[0.08] bg-[#121212] p-2 sm:grid-cols-4 xl:grid-cols-8"
      >
        {PRODUCTS.map((product, i) => {
          const active = i === index;
          return (
            <button
              key={product.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="product-panel"
              onClick={() => go(i)}
              className={`relative flex min-h-[72px] items-center gap-2.5 overflow-hidden rounded-2xl px-2.5 py-3 sm:gap-3 sm:px-3.5 text-left transition-colors duration-200 xl:flex-col xl:justify-center xl:gap-2 xl:px-2 xl:py-3.5 xl:text-center ${
                active ? 'bg-paper text-[#141414]' : 'text-cream hover:bg-[#1C1C1C]'
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white sm:h-11 sm:w-11 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <Image
                  src={product.logo}
                  alt=""
                  className="h-6 w-6 object-contain sm:h-[30px] sm:w-[30px]"
                  sizes="30px"
                />
              </span>
              <span className="flex min-w-0 flex-col gap-0.5 xl:items-center">
                <span
                  className={`text-sm leading-tight sm:text-[15px] ${active ? 'font-extrabold' : 'font-semibold'}`}
                >
                  {product.name}
                </span>
                <span
                  className={`text-xs leading-tight ${active ? 'text-[#5C574F]' : 'text-muted'}`}
                >
                  {product.short}
                </span>
              </span>
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] bg-black/[0.08]"
                >
                  <span
                    key={index}
                    className="ycs-progress block h-full bg-accent"
                    style={{ ['--ycs-progress-duration' as string]: `${INTERVAL_MS}ms` }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <article
        id="product-panel"
        role="tabpanel"
        aria-live="polite"
        className="flex flex-wrap overflow-hidden rounded-[28px] border border-white/[0.08] bg-panel"
      >
        <div className="flex min-w-0 flex-[1_1_360px] flex-col justify-between gap-8 p-8 sm:p-12">
          {/* Every slide shares one grid cell so the panel keeps a stable height. */}
          <div className="grid">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.id}
                aria-hidden={i !== index}
                className={`[grid-area:1/1] transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
                  i === index ? 'opacity-100' : 'invisible translate-y-1 opacity-0'
                }`}
              >
                <p className="font-mono text-[13px] text-muted">{product.tag}</p>
                <h3 className="mt-3.5 text-[40px] font-extrabold tracking-[-0.02em] text-cream sm:text-[44px]">
                  {product.name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-soft">{product.desc}</p>
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center font-semibold text-accent hover:text-[#FFD2BF]"
                >
                  {product.cta} →
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => go(index - 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-cream hover:bg-white/5"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={() => go(index + 1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-cream hover:bg-white/5"
            >
              <ArrowIcon direction="right" />
            </button>
            <span className="font-mono text-sm text-muted">
              {String(index + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="relative h-[320px] min-w-0 flex-[1.6_1_520px] bg-[#1C1C1C] pl-6 pt-6 sm:h-[520px] sm:pl-8 sm:pt-8">
          <div className="relative h-full w-full overflow-hidden rounded-tl-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {PRODUCTS.map((product, i) => (
              <Image
                key={product.id}
                src={product.shot}
                alt={i === index ? product.alt : ''}
                aria-hidden={i !== index}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-cover object-left-top transition-opacity duration-500 ease-out ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
                placeholder="blur"
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
