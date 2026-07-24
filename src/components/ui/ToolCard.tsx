import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  children: ReactNode;
  className?: string;
}

export function ToolCard({ children, className }: ToolCardProps) {
  return (
    <div className={cn("rounded-2xl border bg-card p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}
