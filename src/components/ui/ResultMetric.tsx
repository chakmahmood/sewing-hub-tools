import { ReactNode } from "react";

interface ResultMetricProps {
  title: string;

  value: ReactNode;

  subtitle?: string;
}

export function ResultMetric({ title, value, subtitle }: ResultMetricProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {title}
      </p>

      <div className="mt-2 text-3xl font-bold">{value}</div>

      {subtitle && (
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
