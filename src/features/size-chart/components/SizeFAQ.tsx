"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SIZE_CHART_FAQS } from "../faq";

export function SizeFAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-semibold">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-ink/70">
          Everything you need to know about sewing pattern sizes, body
          measurements and choosing the correct size.
        </p>
      </div>

      <div className="space-y-3">
        {SIZE_CHART_FAQS.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-xl border border-seam bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold">{faq.question}</span>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="border-t border-seam px-5 py-4">
                <p className="leading-7 text-ink/70">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SizeFAQ;
