"use client";

import { useEffect, useState } from "react";

export function CountdownTimer() {
  const weddingDate = new Date("2027-01-06T10:00:00");

  const calculate = () => {
    const diff = weddingDate.getTime() - Date.now();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <TimeCard value={time.days} label="Dias" big />

      <TimeCard value={time.hours} label="Horas" />

      <TimeCard value={time.minutes} label="Minutos" />

      <TimeCard value={time.seconds} label="Segundos" />
    </div>
  );
}

type CardProps = {
  value: number;
  label: string;
  big?: boolean;
};

function TimeCard({ value, label, big = false }: CardProps) {
  return (
    <div className={big ? "min-w-[180px]" : "min-w-[120px]"}>
      <div
        className={`font-[var(--font-heading)] ${
          big ? "text-8xl" : "text-5xl"
        }`}
      >
        {String(value).padStart(2, "0")}
      </div>

      <p className="mt-3 uppercase tracking-[0.35em] text-white/60 text-sm">
        {label}
      </p>
    </div>
  );
}