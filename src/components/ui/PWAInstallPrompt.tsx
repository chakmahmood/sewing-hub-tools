"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "pwa-install-dismissed";
const DAYS = 30;

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expires = localStorage.getItem(STORAGE_KEY);

    if (expires && Date.now() < Number(expires)) {
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();

      setDeferredPrompt(e as BeforeInstallPromptEvent);

      setTimeout(() => {
        setVisible(true);
      }, 5000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function install() {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    setVisible(false);
  }

  function close() {
    localStorage.setItem(
      STORAGE_KEY,
      String(Date.now() + DAYS * 24 * 60 * 60 * 1000),
    );

    setVisible(false);
  }

  if (!visible || !deferredPrompt) return null;

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-90
        rounded-2xl
        border
        border-seam
        bg-white
        p-6
        shadow-2xl
      "
    >
      <div className="text-3xl">🧵</div>

      <h3 className="mt-3 text-lg font-semibold text-ink">
        Install Sewing Hub
      </h3>

      <p className="mt-2 text-sm leading-6 text-ink/70">
        Add Sewing Hub to your home screen for instant access to all sewing
        calculators, converters, and guides.
      </p>

      <div className="mt-5 flex gap-3">
        <button
          onClick={install}
          className="
            flex-1
            rounded-xl
            bg-tomato
            px-4
            py-3
            font-semibold
            text-white
            transition
            hover:bg-tomato-dark
          "
        >
          Install
        </button>

        <button
          onClick={close}
          className="
            rounded-xl
            border
            border-seam
            px-4
            py-3
          "
        >
          Later
        </button>
      </div>
    </div>
  );
}
