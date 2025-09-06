declare module 'react-date-range' {
  // Minimal types to satisfy TS without full @types
  import * as React from 'react';

  export interface Range {
    startDate?: Date;
    endDate?: Date;
    key?: string;
  }

  export interface DateRangePickerProps {
    ranges: Range[];
    onChange?: (ranges: { selection: Range } & Record<string, Range>) => void;
    minDate?: Date;
    maxDate?: Date;
    moveRangeOnFirstSelection?: boolean;
    months?: number;
    direction?: 'vertical' | 'horizontal';
    showDateDisplay?: boolean;
    className?: string;
    rangeColors?: string[];
    editableDateInputs?: boolean;
    staticRanges?: unknown[];
    inputRanges?: unknown[];
  }

  export class DateRangePicker extends React.Component<DateRangePickerProps> {}
}
