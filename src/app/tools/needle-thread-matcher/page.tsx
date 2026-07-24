"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "@/components/ui/ToolShell";
import { AffiliateCard } from "@/components/ui/AffiliateCard";
import { affiliateProducts, type AffiliateProduct } from "@/lib/affiliate-links";

const FABRICS = {
  quilting_cotton: {
    label: "Quilting cotton / light woven",
    needle: "Universal 70/10 – 80/12",
    thread: "All-purpose polyester or cotton",
    product: "universalNeedles" as const,
  },
  jersey_knit: {
    label: "Jersey / knit",
    needle: "Ballpoint / Stretch 75/11",
    thread: "All-purpose polyester (has a bit of give)",
    product: "stretchNeedles" as const,
  },
  denim: {
    label: "Denim / canvas",
    needle: "Denim 90/14 – 100/16",
    thread: "Heavy-duty polyester or upholstery thread",
    product: "denimNeedles" as const,
  },
  silk_chiffon: {
    label: "Silk / chiffon / lightweight",
    needle: "Universal 60/8 – 70/10 (sharp)",
    thread: "Fine polyester or silk thread",
    product: "universalNeedles" as const,
  },
  leather_vinyl: {
    label: "Leather / vinyl / faux leather",
    needle: "Leather needle 90/14 – 100/16",
    thread: "Heavy-duty polyester",
    product: "denimNeedles" as const,
  },
} as const;

type FabricKey = keyof typeof FABRICS;

export default function NeedleThreadMatcherPage() {
  const [fabric, setFabric] = useState<FabricKey>("quilting_cotton");

  const rec = FABRICS[fabric];
  const products: AffiliateProduct[] = useMemo(
    () => [affiliateProducts[rec.product], affiliateProducts.allPurposeThread],
    [rec]
  );

  return (
    <ToolShell
      title="Needle & Thread Matcher"
      tagline="Tell us the fabric, we'll tell you the needle size and thread type that won't skip stitches or pucker."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-ink/80 mb-1.5">Fabric type</label>
          <select
            value={fabric}
            onChange={(e) => setFabric(e.target.value as FabricKey)}
            className="w-full rounded-md border border-seam bg-chalk px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-denim"
          >
            {Object.entries(FABRICS).map(([key, f]) => (
              <option key={key} value={key}>
                {f.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-seam bg-chalk p-5">
            <p className="text-xs uppercase tracking-widest text-ink/50">Needle</p>
            <p className="font-display text-2xl font-semibold text-denim mt-1">
              {rec.needle}
            </p>
          </div>
          <div className="rounded-xl border border-seam bg-chalk p-5">
            <p className="text-xs uppercase tracking-widest text-ink/50">Thread</p>
            <p className="font-display text-2xl font-semibold text-denim mt-1">
              {rec.thread}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
            Get the right supplies
          </p>
          {products.map((p) => (
            <AffiliateCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </ToolShell>
  );
}
