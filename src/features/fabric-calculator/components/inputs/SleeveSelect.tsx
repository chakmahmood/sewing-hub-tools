"use client";

import { SLEEVES } from "../../data";
import { SleeveId } from "../../types";

interface SleeveSelectProps {
  value: SleeveId;
  onChange: (value: SleeveId) => void;
}

export function SleeveSelect({ value, onChange }: SleeveSelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="sleeve" className="text-sm font-medium text-foreground">
        Sleeve Length
      </label>

      <select
        id="sleeve"
        value={value}
        onChange={(event) => onChange(event.target.value as SleeveId)}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {SLEEVES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Choose the sleeve style for your project.
      </p>
    </div>
  );
}
