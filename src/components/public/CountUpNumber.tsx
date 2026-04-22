"use client";

import { useEffect, useMemo, useState } from "react";

type CountUpNumberProps = {
  value: number;
  durationMs?: number;
  suffix?: string;
};

export function CountUpNumber({
  value,
  durationMs = 1200,
  suffix = ""
}: CountUpNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const start = performance.now();

    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [durationMs, value]);

  const formattedValue = useMemo(
    () => `${new Intl.NumberFormat("vi-VN").format(displayValue)}${suffix}`,
    [displayValue, suffix]
  );

  return <>{formattedValue}</>;
}
