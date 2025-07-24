import { ReactNode } from 'react';

export const PageContainer = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mb-20 px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-24 ${className}`}>
    {children}
  </div>
);

export const SectionContainer = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 lg:mb-32 ${className}`}
  >
    {children}
  </section>
);

export const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
