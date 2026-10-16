'use client';

import { useEffect, useState } from 'react';

const TEXT = 'We are y/cs.';
const ACCENT_FROM = 'We are '.length; // "y/cs." renders in the accent color

/** "We are y/cs." typed out once on load, with a blinking caret. */
export default function TypedHeadline() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(TEXT.length);
      return;
    }
    let timer: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      timer = setInterval(() => {
        setCount((c) => {
          if (c >= TEXT.length) {
            clearInterval(timer);
            return c;
          }
          return c + 1;
        });
      }, 110);
    }, 400);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, []);

  const shown = TEXT.slice(0, count);

  return (
    <h1
      aria-label={TEXT}
      className="min-h-[1em] whitespace-nowrap text-[clamp(56px,8vw,116px)] font-extrabold leading-none tracking-[-0.04em] text-cream"
    >
      <span aria-hidden="true">{shown.slice(0, ACCENT_FROM)}</span>
      <span aria-hidden="true" className="text-accent">
        {shown.slice(ACCENT_FROM)}
      </span>
      <span
        aria-hidden="true"
        className="ycs-caret ml-[0.06em] inline-block h-[0.82em] w-[0.06em] bg-cream align-[-0.04em]"
      />
    </h1>
  );
}
