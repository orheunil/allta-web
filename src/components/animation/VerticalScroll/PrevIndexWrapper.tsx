"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  direction: "UP" | "DOWN";
  children: React.ReactNode;
}

export const PrevIndexWrapper = ({ direction, children }: Props) => {
  if (direction === "UP") return;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    el.style.transition = "none";
    el.style.transform =
      direction === "DOWN" ? "translateY(0)" : "translateY(-100px) scale(0.4)";
    el.style.opacity = direction === "DOWN" ? "1" : "0";

    requestAnimationFrame(() => {
      el.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      el.style.transform =
        direction === "DOWN"
          ? "translateY(-100px) scale(0.6) rotateX(30deg)"
          : "translateY(0)";
      el.style.opacity = direction === "DOWN" ? "0" : "1";
    });
  }, [children]);

  return (
    <div style={{ perspective: "300px" }} className="absolute">
      <div ref={ref}>{children}</div>
    </div>
  );
};
