export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 animate-pulse">
      {/* Header */}
      <div className="mb-10">
        <div className="h-10 w-80 rounded-lg bg-seam" />

        <div className="mt-4 h-5 w-full max-w-2xl rounded bg-seam" />

        <div className="mt-2 h-5 w-3/4 rounded bg-seam" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Left */}
        <div className="space-y-8">
          {/* Calculator */}
          <section className="rounded-2xl border border-seam bg-chalk p-6">
            <div className="h-7 w-56 rounded bg-seam mb-6" />

            <div className="space-y-5">
              <div className="h-4 w-32 rounded bg-seam" />
              <div className="h-12 rounded-xl bg-seam" />

              <div className="h-4 w-40 rounded bg-seam" />
              <div className="h-12 rounded-xl bg-seam" />

              <div className="h-4 w-36 rounded bg-seam" />
              <div className="h-12 rounded-xl bg-seam" />

              <div className="h-12 w-full rounded-xl bg-seam" />
            </div>
          </section>

          {/* Results */}
          <section className="rounded-2xl border border-seam bg-chalk p-6">
            <div className="mb-5 h-7 w-52 rounded bg-seam" />

            <div className="grid gap-4 sm:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-seam bg-white p-5"
                >
                  <div className="h-4 w-20 rounded bg-seam" />

                  <div className="mt-5 h-10 w-24 rounded bg-seam" />
                </div>
              ))}
            </div>
          </section>

          {/* Table */}
          <section className="rounded-2xl border border-seam bg-chalk p-6">
            <div className="h-7 w-56 rounded bg-seam mb-6" />

            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-6 gap-4 border-b border-seam py-4"
              >
                {[...Array(6)].map((_, j) => (
                  <div key={j} className="h-4 rounded bg-seam" />
                ))}
              </div>
            ))}
          </section>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <section
              key={i}
              className="rounded-2xl border border-seam bg-chalk p-6"
            >
              <div className="h-6 w-36 rounded bg-seam mb-5" />

              <div className="space-y-3">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="h-4 rounded bg-seam" />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
