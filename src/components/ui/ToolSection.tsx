import { ReactNode } from "react";

interface ToolSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ToolSection({
  title,
  description,
  children,
}: ToolSectionProps) {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {children}
    </section>
  );
}
