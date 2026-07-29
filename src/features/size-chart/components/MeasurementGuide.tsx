"use client";

export function MeasurementGuide() {
  const measurements = [
    {
      title: "Bust",
      color: "bg-rose-500",
      description:
        "Wrap the measuring tape around the fullest part of your bust while keeping it level across your back. Wear a well-fitting bra for the most accurate result.",
    },
    {
      title: "Waist",
      color: "bg-emerald-500",
      description:
        "Measure around your natural waistline, which is usually the narrowest part of your torso. Stand naturally without holding your breath.",
    },
    {
      title: "Hip",
      color: "bg-sky-500",
      description:
        "Measure around the fullest part of your hips and seat while keeping the tape parallel to the floor.",
    },
  ];

  return (
    <section className="rounded-2xl border border-seam bg-chalk p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-ink">
          How to Measure Yourself
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-7 text-ink/70">
          Accurate body measurements are the key to choosing the correct sewing
          pattern size. Always use a flexible measuring tape and measure over
          lightweight clothing or undergarments.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Illustration */}

        <div className="flex items-center justify-center">
          <svg width="220" height="420" viewBox="0 0 220 420" fill="none">
            {/* Head */}
            <circle cx="110" cy="42" r="24" stroke="#374151" strokeWidth="3" />

            {/* Body */}
            <path
              d="M110 66
                 C90 95 82 125 82 165
                 C82 225 92 280 92 350

                 M110 66
                 C130 95 138 125 138 165
                 C138 225 128 280 128 350"
              stroke="#374151"
              strokeWidth="3"
              fill="none"
            />

            {/* Arms */}
            <path d="M82 130 L45 220" stroke="#374151" strokeWidth="3" />

            <path d="M138 130 L175 220" stroke="#374151" strokeWidth="3" />

            {/* Legs */}
            <path d="M92 350 L72 410" stroke="#374151" strokeWidth="3" />

            <path d="M128 350 L148 410" stroke="#374151" strokeWidth="3" />

            {/* Bust */}
            <line
              x1="60"
              x2="160"
              y1="132"
              y2="132"
              stroke="#ef4444"
              strokeWidth="5"
              strokeDasharray="8 6"
            />

            {/* Waist */}
            <line
              x1="68"
              x2="152"
              y1="188"
              y2="188"
              stroke="#10b981"
              strokeWidth="5"
              strokeDasharray="8 6"
            />

            {/* Hip */}
            <line
              x1="58"
              x2="162"
              y1="248"
              y2="248"
              stroke="#0ea5e9"
              strokeWidth="5"
              strokeDasharray="8 6"
            />

            {/* Labels */}
            <text x="168" y="136" fontSize="12" fill="#ef4444" fontWeight="600">
              Bust
            </text>

            <text x="160" y="192" fontSize="12" fill="#10b981" fontWeight="600">
              Waist
            </text>

            <text x="168" y="252" fontSize="12" fill="#0ea5e9" fontWeight="600">
              Hip
            </text>
          </svg>
        </div>

        {/* Instructions */}

        <div className="space-y-5">
          {measurements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-seam bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${item.color}`} />

                <h3 className="font-semibold text-denim">{item.title}</h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-ink/70">
                {item.description}
              </p>
            </div>
          ))}

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-800">Measuring Tips</h3>

            <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900/80">
              <li>• Keep the tape snug but not tight.</li>

              <li>• Stand naturally with relaxed posture.</li>

              <li>• Keep the measuring tape parallel to the floor.</li>

              <li>• Ask someone to help for better accuracy.</li>

              <li>
                • Compare your measurements with the pattern brand&apos;s own
                size chart before cutting fabric.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeasurementGuide;
