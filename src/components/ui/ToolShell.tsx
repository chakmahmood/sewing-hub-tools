import type { ReactNode } from "react";

interface ToolShellProps {
  title: string;
  tagline: string;
  children: ReactNode;
}

export function ToolShell({ title, tagline, children }: ToolShellProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="mb-10">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-seam
            bg-white
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-tomato
            shadow-sm
          "
        >
          Free Sewing Tool
        </span>

        <h1
          className="
            mt-5
            font-display
            text-4xl
            font-semibold
            leading-tight
            text-denim
            sm:text-5xl
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-4
            max-w-3xl
            text-base
            leading-8
            text-ink/70
            sm:text-lg
          "
        >
          {tagline}
        </p>
      </header>

      <div className="tape-divider mb-10" />

      <div>{children}</div>
    </div>
  );
}

export default ToolShell;
