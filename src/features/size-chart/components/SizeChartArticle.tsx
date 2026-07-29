"use client";

export function SizeChartArticle() {
  return (
    <article className="mt-10 rounded-2xl border border-seam bg-chalk p-8 shadow-sm">
      <div className="prose prose-stone max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink/80 prose-li:text-ink/80">
        <h2>How to Measure Yourself for Sewing Patterns</h2>

        <p>
          Choosing the correct sewing pattern size starts with accurate body
          measurements—not your ready-to-wear clothing size. Pattern companies
          use standardized body measurements, while clothing brands often use
          vanity sizing. Measuring yourself correctly ensures better fitting
          garments and reduces the amount of alterations needed later.
        </p>

        <p>
          For the most accurate results, use a flexible dressmaker&apos;s
          measuring tape, stand naturally without holding your breath, and wear
          lightweight clothing or measure over undergarments.
        </p>

        <h3>1. Bust Measurement</h3>

        <p>
          Wrap the measuring tape around the fullest part of your bust while
          keeping the tape level around your back. The tape should be snug but
          not tight. This measurement is the primary reference for most sewing
          pattern companies.
        </p>

        <h3>2. Waist Measurement</h3>

        <p>
          Measure around your natural waist, which is usually the narrowest part
          of your torso. Avoid sucking in your stomach, as this will produce an
          inaccurate size recommendation.
        </p>

        <h3>3. Hip Measurement</h3>

        <p>
          Stand with your feet together and measure around the fullest part of
          your hips. Keep the measuring tape parallel to the floor throughout
          the measurement.
        </p>

        <hr />

        <h2>Why Sewing Pattern Sizes Differ from Store Clothing</h2>

        <p>
          One of the most common mistakes beginners make is choosing a sewing
          pattern based on the size they buy in stores. Unfortunately, clothing
          manufacturers use different sizing systems, and many brands practice
          vanity sizing to make garments appear smaller.
        </p>

        <p>
          Sewing patterns are based on body measurements instead of finished
          garment measurements. This is why someone who normally wears a US size
          8 dress may discover that a sewing pattern recommends a size 12 or 14.
          This is completely normal.
        </p>

        <h2>Understanding Wearing Ease</h2>

        <p>
          Wearing ease is the extra space intentionally added to a garment so
          you can move comfortably. Design ease is additional fullness added for
          style. Loose dresses, oversized jackets, and relaxed shirts all
          include more ease than fitted garments.
        </p>

        <p>
          Before cutting your fabric, compare your measurements with both the
          body measurement chart and the finished garment measurements if they
          are provided by the pattern manufacturer.
        </p>

        <h2>How to Choose Between Two Pattern Sizes</h2>

        <p>
          Many sewists fall between two sizes. This is perfectly normal because
          very few people match a standard size chart exactly.
        </p>

        <ul>
          <li>Choose based on bust for tops and dresses.</li>
          <li>Choose based on hip for skirts and pants.</li>
          <li>Blend between sizes when necessary.</li>
          <li>Check finished garment measurements whenever possible.</li>
        </ul>

        <h2>US, UK and EU Sewing Size Conversion</h2>

        <p>
          Different countries use different numbering systems. Our calculator
          converts your measurements into equivalent US, UK and EU sewing sizes,
          making it easier to purchase international sewing patterns without
          guessing.
        </p>

        <table className="w-full border-collapse overflow-hidden rounded-lg border border-seam">
          <thead className="bg-denim text-white">
            <tr>
              <th className="border border-seam px-3 py-2 text-left">Region</th>
              <th className="border border-seam px-3 py-2 text-left">
                Common Sizes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-seam px-3 py-2">US</td>
              <td className="border border-seam px-3 py-2">0–22+</td>
            </tr>
            <tr>
              <td className="border border-seam px-3 py-2">UK</td>
              <td className="border border-seam px-3 py-2">4–26+</td>
            </tr>
            <tr>
              <td className="border border-seam px-3 py-2">EU</td>
              <td className="border border-seam px-3 py-2">32–54+</td>
            </tr>
          </tbody>
        </table>

        <h2>Common Mistakes When Measuring Yourself</h2>

        <ul>
          <li>Pulling the measuring tape too tightly.</li>
          <li>Measuring over bulky clothing.</li>
          <li>Holding your breath.</li>
          <li>Using clothing size instead of body measurements.</li>
          <li>Ignoring hip measurements for skirts and pants.</li>
          <li>Ignoring the pattern company&apos;s size chart.</li>
        </ul>

        <h2>Tips for Better Sewing Pattern Fit</h2>

        <ul>
          <li>Measure yourself every few months.</li>
          <li>Always sew a muslin before cutting expensive fabric.</li>
          <li>Compare finished garment measurements.</li>
          <li>Read the pattern instructions before cutting.</li>
          <li>Keep your measurements written in a sewing notebook.</li>
        </ul>

        <h2>Frequently Asked Questions About Sewing Sizes</h2>

        <h3>Should I use my clothing size?</h3>

        <p>
          No. Always use your actual body measurements because clothing brands
          and sewing pattern companies use different sizing standards.
        </p>

        <h3>Which measurement is most important?</h3>

        <p>
          For dresses and tops, bust is usually the primary measurement. For
          skirts and pants, hip measurements are generally more important.
        </p>

        <h3>Can I blend multiple sizes?</h3>

        <p>
          Absolutely. Many experienced sewists blend between sizes at the bust,
          waist and hips to achieve a better fit.
        </p>

        <h2>Use Our Free Sewing Pattern Size Calculator</h2>

        <p>
          Instead of manually comparing multiple size charts, simply enter your
          bust, waist and hip measurements into the calculator above. It
          instantly recommends your closest sewing pattern size and converts it
          between US, UK and EU sizing systems, making it easier to choose the
          correct pattern before purchasing fabric.
        </p>
      </div>
    </article>
  );
}

export default SizeChartArticle;
