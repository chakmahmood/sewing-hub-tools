"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  description?: string;
  faqs: readonly FAQItem[];
}

export default function FAQAccordion({
  title = "Frequently Asked Questions",
  description = "Everything you need to know before buying fabric for your next sewing project.",
  faqs,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
      <div className="mb-8">
        <span className="rounded-full bg-denim px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Help Center
        </span>

        <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const open = index === openIndex;

          return (
            <article
              key={faq.question}
              className={`
                overflow-hidden
                rounded-xl
                border
                transition-all
                duration-300

                ${
                  open
                    ? "border-denim bg-white shadow-md"
                    : "border-seam bg-white hover:border-denim/40 hover:shadow-sm"
                }
              `}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-6
                  px-6
                  py-5
                  text-left
                "
              >
                <h3 className="text-lg font-semibold leading-7 text-ink">
                  {faq.question}
                </h3>

                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    transition-all

                    ${
                      open
                        ? "bg-denim text-white rotate-180"
                        : "bg-linen text-denim"
                    }
                  `}
                >
                  <svg
                    className={`
                      h-5
                      w-5
                      transition-transform
                      duration-300

                      ${open ? "rotate-180" : ""}
                    `}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`
                  grid
                  transition-all
                  duration-300

                  ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-seam bg-linen/40 px-6 py-5">
                    <p className="leading-8 text-ink/75">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-seam bg-white p-5">
        <p className="text-sm leading-7 text-ink/70">
          <strong>Still have questions?</strong> This calculator is designed to
          provide fast estimates for common sewing projects. For quilts,
          upholstery, curtains, or projects with large pattern repeats, always
          compare the estimate with your pattern manufacturer&apos;s
          recommendations.
        </p>
      </div>
    </section>
  );
}
