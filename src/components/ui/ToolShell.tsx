export function ToolShell({
  title,
  tagline,
  children,
}: {
  title: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-widest text-tomato mb-2">
        Sewing Hub tool
      </p>
      <h1 className="font-display text-4xl font-semibold text-denim">{title}</h1>
      <p className="mt-2 text-ink/70">{tagline}</p>
      <div className="tape-divider my-8" />
      {children}
    </div>
  );
}
