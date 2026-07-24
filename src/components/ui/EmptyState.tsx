import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;

  description: string;

  icon?: ReactNode;
}

export function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed p-10 text-center">
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
