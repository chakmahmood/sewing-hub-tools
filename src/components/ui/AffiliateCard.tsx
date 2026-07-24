import type { AffiliateProduct } from "@/lib/affiliate-links";

export function AffiliateCard({ product }: { product: AffiliateProduct }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex items-center justify-between gap-4 rounded-lg border border-seam/70 bg-chalk px-4 py-3 transition-colors hover:border-tomato"
    >
      <div>
        <p className="font-medium text-ink">{product.label}</p>
        <p className="text-sm text-ink/60">{product.note}</p>
      </div>
      <span className="shrink-0 text-sm font-semibold text-tomato group-hover:text-tomato-dark">
        Shop →
      </span>
    </a>
  );
}
