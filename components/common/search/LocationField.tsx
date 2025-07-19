'use client';
import React from 'react';
import { Destination } from './types';

const DESTINATIONS: Destination[] = [
  { label: 'Nearby',             description: 'Find what’s around you' },
  { label: 'Marrakesh, Morocco', description: 'For sights like Majorelle Garden' },
  { label: 'Paris, France',      description: 'For its bustling nightlife' },
  { label: 'Istanbul, Türkiye',  description: 'For its stunning architecture' },
  { label: 'Madrid, Spain',      description: 'For its top‑notch dining' },
  { label: 'Barcelona, Spain',   description: 'Popular beach destination' },
  { label: 'Rome, Italy',        description: 'Ancient history & pasta' },
  { label: 'New York, USA',      description: 'The city that never sleeps' },
  { label: 'Tokyo, Japan',       description: 'Where tradition meets tech' },
];

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function LocationField({ value, onChange }: Props) {
  const [open, setOpen] = React.useState(false);

  const filtered = DESTINATIONS.filter((d) =>
    d.label.toLowerCase().includes(value.toLowerCase())
  ).slice(0, 8);

  return (
    <div className="relative flex flex-col flex-1 px-6 py-4">
      <label htmlFor="loc" className="text-xs font-semibold">Location</label>

      <input
        id="loc"
        type="text"
        placeholder="Search for destination"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="text-sm placeholder-gray-400 bg-transparent focus:outline-none"
      />

      {open && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mt-2 overflow-y-auto bg-white border border-gray-200 shadow-lg top-full max-h-60 rounded-xl">
          {filtered.map((d) => (
            <li
              key={d.label}
              onMouseDown={() => {
                onChange(d.label);
                setOpen(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-gray-100"
            >
              <p className="text-sm font-semibold">{d.label}</p>
              <p className="text-xs text-gray-500">{d.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
