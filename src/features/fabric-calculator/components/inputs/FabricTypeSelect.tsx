// features/fabric-yardage/components/inputs/FabricTypeSelect.tsx

"use client";

import { FABRIC_TYPE_OPTIONS } from "../../data/fabricTypes";

import { FabricTypeId } from "../../types";

interface FabricTypeSelectProps {
  value: FabricTypeId;

  onChange: (value: FabricTypeId) => void;
}

export function FabricTypeSelect({ value, onChange }: FabricTypeSelectProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="fabric-type"
        className="text-sm font-medium text-foreground"
      >
        Fabric Type
      </label>

      <select
        id="fabric-type"
        value={value}
        onChange={(event) => onChange(event.target.value as FabricTypeId)}
        className="
          w-full
          rounded-md
          border
          border-seam
          bg-chalk
          px-3
          py-2.5
          text-ink
          focus:outline-none
          focus:ring-2
          focus:ring-denim
        "
      >
        {FABRIC_TYPE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Choose the fabric material because different fabrics require different
        yardage.
      </p>
    </div>
  );
}
