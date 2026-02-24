
export interface Brand {
  id: string;
  name: string;
  category: 'Fitness' | 'Bien-être' | 'Équipement' | 'Tech';
  description: string;
  image: string;
  color: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
}
