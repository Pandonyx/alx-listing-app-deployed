export type Destination = {
  label: string;
  description: string;
};

export type DateRange = {
  from?: string;
  to?: string;
};

export type Guests = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};