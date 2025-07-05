// Props for the Card component
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
  location?: string;
}

// Props for the Button component  
export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'orange';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

// Interface for property listings
export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  image: string;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  guests: number;
}