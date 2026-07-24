"use client";

import { FABRIC_WIDTHS } from "../../data";

interface FabricWidthSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export function FabricWidthSelect({ value, onChange }: FabricWidthSelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="fabric-width"
        className="text-sm font-medium text-foreground"
      >
        Fabric width
      </label>

      <select
        id="fabric-width"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {FABRIC_WIDTHS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Select the width of your fabric bolt.
      </p>
    </div>
  );
}
