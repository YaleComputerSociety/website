// Shared by server and client components, so it must not be a 'use client' module.

// Height of the sticky header; full-bleed heroes pull themselves up underneath it by this much.
export const NAV_HEIGHT_CLASS = 'h-20';
export const UNDER_NAV_CLASS = '-mt-20';

export const SlashMark = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 18 28" aria-hidden="true" className={className}>
    <path d="M10 0h8L8 28H0z" fill="currentColor" />
  </svg>
);
