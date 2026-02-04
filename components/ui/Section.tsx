import React, { forwardRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, className = "", id, noPadding = false }, ref) => {
  return (
    <section ref={ref} id={id} className={`w-full relative ${noPadding ? '' : 'py-24 md:py-40'} ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export const Grid = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(({ children, className = "" }, ref) => {
  return (
    <div ref={ref} className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-16 ${className}`}>
      {children}
    </div>
  );
});

Grid.displayName = "Grid";