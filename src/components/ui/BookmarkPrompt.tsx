"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bookmark-prompt-dismissed";
const DAYS = 30;

interface BookmarkPromptProps {
  enabled: boolean;
}

export function BookmarkPrompt({ enabled }: BookmarkPromptProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const expires = Number(saved);

      if (Date.now() < expires) {
        return;
      }
    }

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [enabled]);

  function close() {
    localStorage.setItem(
      STORAGE_KEY,
      String(Date.now() + DAYS * 24 * 60 * 60 * 1000),
    );

    setVisible(false);
  }

  if (!visible) return null;

  const shortcut = navigator.platform.toLowerCase().includes("mac")
    ? "⌘ + D"
    : "Ctrl + D";

  return (
    <div
      className="
        fixed
        bottom-6
        left-1/2
        z-50
        w-[92%]
        max-w-md
        -translate-x-1/2
        rounded-2xl
        border
        border-seam
        bg-white
        p-5
        shadow-2xl
        animate-in
        slide-in-from-bottom-5
      "
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">⭐</div>

        <div className="flex-1">
          <h3 className="font-semibold text-ink">Bookmark this tool</h3>

          <p className="mt-2 text-sm leading-6 text-ink/70">
            Save this calculator for your next sewing project.
          </p>

          <div className="mt-3 rounded-lg bg-linen px-3 py-2 text-sm font-medium text-denim">
            Press <strong>{shortcut}</strong> to bookmark this page.
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={close}
              className="
                rounded-lg
                bg-tomato
                px-4
                py-2
                text-sm
                font-semibold
                text-white
              "
            >
              Got it
            </button>

            <button
              onClick={close}
              className="
                rounded-lg
                border
                border-seam
                px-4
                py-2
                text-sm
              "
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
