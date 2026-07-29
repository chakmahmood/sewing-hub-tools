"use client";

import {
  MEN_SIZE_CHART,
  WOMEN_SIZE_CHART,
  type MenSize,
  type WomenSize,
} from "../data";

interface SizeTableProps {
  gender: "women" | "men";
}

export function SizeTable({ gender }: SizeTableProps) {
  const chart = gender === "men" ? MEN_SIZE_CHART : WOMEN_SIZE_CHART;
  const measurementLabel = gender === "men" ? "Chest" : "Bust";

  return (
    <section
      className="
        rounded-2xl
        border
        border-seam
        bg-chalk
        p-6
        shadow-sm
      "
    >
      <div className="mb-6">
        <h2
          className="
            font-display
            text-2xl
            font-semibold
            text-ink
          "
        >
          {gender === "men" ? "Men's" : "Women's"} Sewing Pattern Size Chart
        </h2>

        <p
          className="
            mt-2
            max-w-3xl
            text-sm
            leading-7
            text-ink/70
          "
        >
          Compare body measurements with standard sewing pattern sizes.
          Measurements are shown in centimeters and provide an approximate
          conversion between US, UK and EU pattern sizing.
        </p>
      </div>

      <div
        className="
          overflow-x-auto
          rounded-xl
          border
          border-seam
          bg-white
        "
      >
        <table className="min-w-full border-collapse">
          <thead
            className="
              sticky
              top-0
              bg-denim
              text-white
            "
          >
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold">
                Letter
              </th>

              <th className="px-5 py-3 text-center text-sm font-semibold">
                US
              </th>

              <th className="px-5 py-3 text-center text-sm font-semibold">
                UK
              </th>

              <th className="px-5 py-3 text-center text-sm font-semibold">
                EU
              </th>

              <th className="px-5 py-3 text-right text-sm font-semibold">
                {measurementLabel} (cm)
              </th>

              <th className="px-5 py-3 text-right text-sm font-semibold">
                Waist (cm)
              </th>

              <th className="px-5 py-3 text-right text-sm font-semibold">
                Hip (cm)
              </th>
            </tr>
          </thead>

          <tbody>
            {chart.map((row, index) => (
              <tr
                key={`${row.us}-${row.eu}`}
                className={`
                  border-t
                  border-seam
                  transition-colors
                  hover:bg-linen/40

                  ${index % 2 === 0 ? "bg-white" : "bg-chalk"}
                `}
              >
                <td
                  className="
                    px-5
                    py-3
                    font-semibold
                    text-denim
                  "
                >
                  {row.letter}
                </td>

                <td className="px-5 py-3 text-center">{row.us}</td>

                <td className="px-5 py-3 text-center">{row.uk}</td>

                <td className="px-5 py-3 text-center">{row.eu}</td>

                <td className="px-5 py-3 text-right font-mono">
                  {gender === "men"
                    ? (row as MenSize).chest
                    : (row as WomenSize).bust}
                </td>

                <td className="px-5 py-3 text-right font-mono">{row.waist}</td>

                <td className="px-5 py-3 text-right font-mono">{row.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="
          mt-5
          rounded-xl
          border
          border-seam
          bg-white
          p-5
        "
      >
        <h3
          className="
            font-semibold
            text-denim
          "
        >
          How to use this chart
        </h3>

        <ul
          className="
            mt-3
            space-y-2
            text-sm
            leading-7
            text-ink/70
            list-disc
            pl-5
          "
        >
          <li>Measure yourself while wearing light clothing.</li>

          <li>
            Use a flexible sewing measuring tape held comfortably against your
            body.
          </li>

          <li>
            If your measurements fall between two sizes, choose the larger
            pattern size and adjust during fitting.
          </li>

          <li>
            Always compare these measurements with the size chart provided by
            the pattern manufacturer before cutting fabric.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SizeTable;
