'use client';
import React, { useState } from 'react';
import Pill from './Pill';

const FILTERS = [
  'All',
  'Top Villa',
  'Free Reschedule',
  'Book Now, Pay later',
  'Self Checkin',
  'Instant Book',
];

export default function FilterBar({
  onChange,
}: {
  onChange?: (label: string) => void;
}) {
  const [active, setActive] = useState('All');

  const handleClick = (label: string) => {
    setActive(label);
    onChange?.(label);           // lift to parent if needed
  };

  return (
    <div className="flex flex-wrap items-center gap-2 my-6 overflow-x-auto md:gap-3 no-scrollbar">
      {FILTERS.map((label) => (
        <Pill
          key={label}
          label={label}
          active={active === label}
          onClick={() => handleClick(label)}
        />
      ))}

      {/* spacer pushes optional right‑side pills if you add them */}
      <div className="flex-1" />
    </div>
  );
}