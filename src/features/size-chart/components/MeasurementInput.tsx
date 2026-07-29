"use client";

interface MeasurementInputProps {
  label: string;

  value: string;

  onChange: (value: string) => void;

  helper?: string;

  placeholder?: string;

  unit: "cm" | "in";

  required?: boolean;

  min?: number;

  max?: number;
}

export function MeasurementInput({
  label,
  value,
  onChange,
  helper,
  placeholder = "0",

  unit,

  required = false,

  min = 0,

  max = 300,
}: MeasurementInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          className="
            text-sm
            font-medium
            text-ink
          "
        >
          {label}

          {required && <span className="ml-1 text-tomato">*</span>}
        </label>

        <span
          className="
            rounded-full
            bg-linen
            px-2.5
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-ink/70
          "
        >
          {unit}
        </span>
      </div>

      <div
        className="
          relative
        "
      >
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step="0.1"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            rounded-xl
            border
            border-seam
            bg-white
            px-4
            py-3
            pr-14
            text-lg
            font-mono
            text-ink
            outline-none
            transition

            focus:border-denim
            focus:ring-2
            focus:ring-denim/20
          "
        />

        <span
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-sm
            font-semibold
            text-ink/40
          "
        >
          {unit}
        </span>
      </div>

      {helper && (
        <p
          className="
            text-xs
            leading-5
            text-ink/60
          "
        >
          {helper}
        </p>
      )}
    </div>
  );
}

export default MeasurementInput;
