"use client";

import clsx from "clsx";

interface ConverterCardProps {
  /**
   * Card title
   *
   * Example:
   * Centimeters
   */
  title: string;

  /**
   * Converted value
   *
   * Example:
   * 2.54
   */
  value: string | number;

  /**
   * Unit
   *
   * cm
   * mm
   * yd
   * m
   */
  unit: string;

  /**
   * Optional helper text
   */
  subtitle?: string;

  /**
   * Highlight card
   */
  highlight?: boolean;

  /**
   * Optional icon
   */
  icon?: React.ReactNode;

  className?: string;
}

export function ConverterCard({
  title,
  value,
  unit,
  subtitle,
  highlight = false,
  icon,
  className,
}: ConverterCardProps) {
  return (
    <div
      className={clsx(
        `
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        `,
        highlight
          ? `
            border-denim
            ring-1
            ring-denim/15
          `
          : `
            border-seam
          `,
        className,
      )}
    >
      {/* Header */}

      <div className="flex items-center justify-between gap-3">
        <div>
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-ink/55
            "
          >
            {title}
          </p>

          {subtitle && (
            <p
              className="
                mt-1
                text-xs
                text-ink/55
              "
            >
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div
            className="
              text-denim
            "
          >
            {icon}
          </div>
        )}
      </div>

      {/* Value */}

      <div className="mt-5 flex items-end gap-2">
        <span
          className="
            font-mono
            text-3xl
            font-bold
            leading-none
            text-denim
          "
        >
          {value}
        </span>

        <span
          className="
            pb-1
            text-sm
            font-medium
            uppercase
            text-ink/60
          "
        >
          {unit}
        </span>
      </div>
    </div>
  );
}

export default ConverterCard;
