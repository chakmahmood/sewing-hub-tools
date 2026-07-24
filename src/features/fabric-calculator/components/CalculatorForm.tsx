// features/fabric-yardage/components/CalculatorForm.tsx

"use client";

import { AllowanceSelect } from "./inputs/AllowanceSelect";
import { FabricTypeSelect } from "./inputs/FabricTypeSelect";
import { FabricWidthSelect } from "./inputs/FabricWidthSelect";
import { ProjectSelect } from "./inputs/ProjectSelect";
import { SizeSelect } from "./inputs/SizeSelect";
import { SleeveSelect } from "./inputs/SleeveSelect";

import { UseFabricCalculatorReturn } from "../types";

interface CalculatorFormProps {
  calculator: UseFabricCalculatorReturn;
}

export function CalculatorForm({ calculator }: CalculatorFormProps) {
  const {
    state,

    setProject,
    setFabricType,
    setSize,
    setSleeve,
    setFabricWidth,
    setAllowance,

    reset,
  } = calculator;

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
      {/* Header */}
      <div className="mb-6">
        <h2
          className="
            font-display
            text-2xl
            font-semibold
            text-ink
          "
        >
          Project Details
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-ink/70
          "
        >
          Select your sewing project and we&apos;ll estimate the fabric you
          need.
        </p>
      </div>

      {/* Inputs */}
      <div
        className="
          grid
          gap-5
          md:grid-cols-2
        "
      >
        <ProjectSelect value={state.project} onChange={setProject} />

        <FabricTypeSelect value={state.fabricType} onChange={setFabricType} />

        <SizeSelect value={state.size} onChange={setSize} />

        <SleeveSelect value={state.sleeve} onChange={setSleeve} />

        <FabricWidthSelect
          value={state.fabricWidth}
          onChange={setFabricWidth}
        />

        <AllowanceSelect value={state.allowance} onChange={setAllowance} />
      </div>

      {/* Footer */}
      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
          border-t
          border-seam
          pt-6
        "
      >
        <p
          className="
            text-sm
            text-ink/60
          "
        >
          Estimates include fabric type, fabric width, size, sleeve style, and
          sewing allowance adjustments.
        </p>

        <button
          type="button"
          onClick={reset}
          className="
            rounded-lg
            border
            border-seam
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-ink
            transition
            hover:bg-gray-50
          "
        >
          Reset Calculator
        </button>
      </div>
    </section>
  );
}
