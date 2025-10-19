export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  description?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
  avatar?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: {
    weekdays: string;
    weekend: string;
  };
}

export interface FormData {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  target?: string;
  rel?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface CompanyInfo {
  name: string;
  fullName: string;
  description: string;
  founded: string;
  experience: string;
  completedJobs: string;
  satisfiedClients: string;
}

