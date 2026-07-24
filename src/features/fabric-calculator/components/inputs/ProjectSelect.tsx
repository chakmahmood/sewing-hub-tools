"use client";

import { PROJECTS } from "../../data";
import { ProjectId } from "../../types";

interface ProjectSelectProps {
  value: ProjectId;
  onChange: (value: ProjectId) => void;
}

export function ProjectSelect({ value, onChange }: ProjectSelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="project" className="text-sm font-medium text-foreground">
        Sewing Project
      </label>

      <select
        id="project"
        value={value}
        onChange={(e) => onChange(e.target.value as ProjectId)}
        className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
      >
        {PROJECTS.map((project) => (
          <option key={project.value} value={project.value}>
            {project.label}
          </option>
        ))}
      </select>

      <p className="text-xs text-muted-foreground">
        Choose the item you plan to sew.
      </p>
    </div>
  );
}
