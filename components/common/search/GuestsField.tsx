'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Guests } from './types';

interface Props {
  value: Guests;
  onChange: (v: Guests) => void;
}

const GROUPS: { key: keyof Guests; label: string; sub: string }[] = [
  { key: 'adults',   label: 'Adults',   sub: 'Ages 13 or above' },
  { key: 'children', label: 'Children', sub: 'Ages 2 – 12' },
  { key: 'infants',  label: 'Infants',  sub: 'Under 2' },
  { key: 'pets',     label: 'Pets',     sub: 'Bringing a service animal?' },
];

export default function GuestsField({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) =>
      popRef.current && !popRef.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const total =
    value.adults + value.children + value.infants + value.pets;

  const label = total ? `${total} guest${total > 1 ? 's' : ''}` : 'Add guest';

  const adjust = (key: keyof Guests, delta: number) => {
    const next = Math.max(0, value[key] + delta);
    onChange({ ...value, [key]: next });
  };

  return (
    <div className="relative">
      {/* People button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none sm:min-w-[110px]"
      >
        <span className="text-xs font-semibold">People</span>
        <span className="text-sm text-gray-400">{label}</span>
      </button>

      {/* pop‑over */}
      {open && (
        <div
          ref={popRef}
          className="absolute z-20 p-6 mt-3 -translate-x-1/2 bg-white border border-gray-200 shadow-xl left-1/2 top-full rounded-2xl w-80"
        >
          {GROUPS.map(({ key, label, sub }) => (
            <div key={key} className="flex items-center justify-between py-4 first:pt-0">
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-sm text-gray-500">{sub}</p>
              </div>

              <div className="flex items-center gap-4">
                {/* minus */}
                <button
                  type="button"
                  disabled={value[key] === 0}
                  onClick={() => adjust(key, -1)}
                  className="w-8 h-8 text-gray-600 border border-gray-400 rounded-full disabled:opacity-30"
                >
                  –
                </button>

                <span className="w-4 text-center">{value[key]}</span>

                {/* plus */}
                <button
                  type="button"
                  onClick={() => adjust(key, +1)}
                  className="w-8 h-8 text-gray-600 border border-gray-400 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* footer buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => {
                onChange({ adults: 0, children: 0, infants: 0, pets: 0 });
                setOpen(false);
              }}
              className="text-sm text-gray-500 hover:underline"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md bg-emerald-600 px-6 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
