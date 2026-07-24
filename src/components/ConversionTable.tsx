"use client";

interface TableRow {
  [key: string]: string | number;
}

interface ConversionTableProps {
  title: string;
  description?: string;
  rows: readonly TableRow[];
}

export function ConversionTable({
  title,
  description,
  rows,
}: ConversionTableProps) {
  if (!rows.length) return null;

  const headers = Object.keys(rows[0]);

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
        <h2 className="font-display text-2xl font-semibold text-ink">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-6 text-ink/70">{description}</p>
        )}
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
          <thead className="bg-denim text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="
                    px-5
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    capitalize
                  "
                >
                  {header.replace(/([A-Z])/g, " $1")}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`
                  border-t
                  border-seam
                  transition-colors
                  hover:bg-linen/50

                  ${index % 2 === 0 ? "bg-white" : "bg-chalk"}
                `}
              >
                {headers.map((header) => (
                  <td
                    key={header}
                    className="
                      px-5
                      py-3
                      text-sm
                      text-ink
                    "
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ConversionTable;
