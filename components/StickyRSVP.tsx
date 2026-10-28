
"use client";

import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";

export function StickyRSVP() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const section = document.getElementById("confirmacao");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  if (!showButton) return null;

  return (
    <a
      href="#confirmacao"
      className="fixed bottom-5 left-4 right-4 z-50 flex items-center justify-center gap-3 rounded-full bg-[#6d1f32] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:hidden"
    >
      <CalendarCheck className="h-5 w-5" aria-hidden="true" />
      Confirmar presença
    </a>
  );
}
