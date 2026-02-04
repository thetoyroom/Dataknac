import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export enum SectionType {
  Hero = 'HERO',
  Editorial = 'EDITORIAL',
  Grid = 'GRID',
  Full = 'FULL'
}