"use client";

import { SIZES } from "../../data";
import { SizeId } from "../../types";

interface SizeSelectProps {
  value: SizeId;
  onChange: (value: SizeId) => void;
}

export function SizeSelect({ value, onChange }: SizeSelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="size" className="text-sm font-medium text-foreground">
        Size
      </label>

      <select
        id="size"
        value={value}
        onChange={(event) => onChange(event.target.value as SizeId)}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {SIZES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Select the size you are sewing.
      </p>
    </div>
  );
}
