export interface ToolSelectOption {
  value: string;
  label: string;
}

interface ToolSelectProps {
  label: string;
  placeholder?: string;

  value: string;

  options: ToolSelectOption[];

  helperText?: string;

  onChange: (value: string) => void;
}

export function ToolSelect({
  label,
  placeholder,
  value,
  options,
  helperText,
  onChange,
}: ToolSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
