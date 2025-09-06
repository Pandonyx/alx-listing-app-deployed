// Props for the Button component
export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "orange" | "white";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  className?: string;
}

// Interface for full property listings (from constants)
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

// Card-friendly shape (what API returns & UI consumes)
export interface PropertyCardData {
  id: string;
  title: string;
  thumbnailUrl?: string;
  pricePerNight?: number;
  rating?: number;
  beds?: number;
  baths?: number;
  city?: string;
  country?: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export type CardProps = PropertyProps;
