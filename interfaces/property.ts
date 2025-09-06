export type Property = {
  id: string | number;
  title: string;
  thumbnailUrl?: string | null;
  pricePerNight?: number | null;
  rating?: number | null;
  beds?: number | null;
  baths?: number | null;
  city?: string;
  country?: string;
};

