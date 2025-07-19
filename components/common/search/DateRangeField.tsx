'use client';
import React, { useState, useRef, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { DateRange } from './types';

interface Props {
  value: DateRange;
  onChange: (v: DateRange) => void;
}

export default function DateRangeField({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

  const handleClick = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClick);
  return () => document.removeEventListener('mousedown', handleClick);
}, [open]);

    // selection range for the date picker
  const selectionRange = {
    startDate: value.from ? new Date(value.from) : new Date(),
    endDate:   value.to   ? new Date(value.to)   : addDays(new Date(), 1),
    key: 'selection',
  };

  const format = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'Add date';

  return (
    <div className="relative flex">
      {/* Check‑in button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none sm:min-w-[110px]"
      >
        <span className="text-xs font-semibold">Check&nbsp;in</span>
        <span className="text-sm text-gray-400">{format(value.from)}</span>
      </button>

      <div className="w-px bg-gray-200" />

      {/* Check‑out button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none sm:min-w-[110px]"
      >
        <span className="text-xs font-semibold">Check&nbsp;out</span>
        <span className="text-sm text-gray-400">{format(value.to)}</span>
      </button>

      {/* pop‑over calendar */}
      {open && (
        <div
          tabIndex={-1}
          onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setOpen(false)}
          className="absolute z-20 p-4 mt-3 -translate-x-1/2 bg-white border border-gray-200 shadow-xl left-1/2 top-full w-max rounded-2xl"
          ref={popoverRef}
        >
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={['#34967C']}
            minDate={new Date()}
            months={2}
            direction="horizontal"
            showDateDisplay={false}
            staticRanges={[]}
            inputRanges={[]}
            onChange={(ranges) => {
              const { startDate, endDate } = ranges.selection;
              onChange({
                from: startDate.toISOString().split('T')[0],
                to:   endDate.toISOString().split('T')[0],
              });
            }}
          />

          {/* action buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              className="text-sm text-gray-500 hover:underline"
              onClick={() => {
                onChange({});
                setOpen(false);
              }}
            >
              Clear
            </button>
            <button
              type="button"
              className="rounded-md bg-brand-teal px-6 py-1.5 text-sm font-medium text-white hover:bg-[#1e844a]"
              onClick={() => setOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
