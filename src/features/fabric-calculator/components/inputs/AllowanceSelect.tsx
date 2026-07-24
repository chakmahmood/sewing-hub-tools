"use client";

import { ALLOWANCES } from "../../data";

interface AllowanceSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export function AllowanceSelect({ value, onChange }: AllowanceSelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="allowance"
        className="text-sm font-medium text-foreground"
      >
        Allowance
      </label>

      <select
        id="allowance"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {ALLOWANCES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Add extra fabric for seams, matching, and mistakes.
      </p>
    </div>
  );
}
