'use client';
import React from 'react';
import Image from 'next/image';
import LocationField from './LocationField';
import DateRangeField from './DateRangeField';
import GuestsField from './GuestsField';
import { DateRange, Guests } from './types';

export default function SearchBar() {
  const [location, setLocation] = React.useState('');
  const [dates, setDates] = React.useState<DateRange>({});
  const [guests, setGuests] = React.useState<Guests>({ adults: 0, children: 0, infants: 0, pets: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, dates ,guests });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-stretch w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-full shadow-sm sm:flex-row"
    >
      <LocationField value={location} onChange={setLocation} />

      <div className="hidden w-px h-10 bg-gray-200 sm:block" />

      <DateRangeField value={dates} onChange={setDates} />

      <div className="hidden w-px h-10 bg-gray-200 sm:block" />

      <GuestsField value={guests} onChange={setGuests} />

      <button
        type="submit"
        className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange hover:bg-[#ffa000] focus:outline-none"
        aria-label="Search"
      >
        <Image src="/assets/icons/Magnifer.svg" alt="" width={18} height={18} />
      </button>
    </form>
  );
}
