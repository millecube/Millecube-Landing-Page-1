import { LucideIcon } from 'lucide-react';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlight?: boolean;
  cta: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AudienceSegment {
  title: string;
  description: string;
  painPoints: string[];
  icon: LucideIcon;
}