'use client';

import { useState, ReactNode } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { motion } from 'framer-motion';

interface CarouselProps {
  items: ReactNode[];
  dotColor?: string;
  className?: string;
  containerClassName?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  dotColor = 'bg-gray-400',
  className = '',
  containerClassName = '',
  showArrows = true,
  showDots = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Don't render carousel if there are no items
  if (items.length === 0) return null;

  // If only one item, render it directly without carousel controls
  if (items.length === 1) {
    return (
      <div className={`w-full ${containerClassName}`}>
        <div className={`px-4 ${className}`}>{items[0]}</div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${containerClassName}`}>
      <div className="overflow-hidden rounded-lg">
        <motion.div
          className="flex transition-transform duration-300 ease-in-out"
          animate={{
            x: `${-currentSlide * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className={`w-full flex-shrink-0 px-4 ${className}`}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white p-2 rounded-full backdrop-blur-sm border border-zinc-600/50 transition-all duration-200 z-10"
            aria-label="Previous item"
          >
            <GoChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white p-2 rounded-full backdrop-blur-sm border border-zinc-600/50 transition-all duration-200 z-10"
            aria-label="Next item"
          >
            <GoChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index ? dotColor : 'bg-zinc-600 hover:bg-zinc-500'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
