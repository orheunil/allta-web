"use client";

import React, { useEffect, useRef } from "react";

interface Props {
  direction: "UP" | "DOWN";
  children: React.ReactNode;
}

export const NextIndexWrapper = ({ direction, children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    el.style.transition = "none";
    el.style.transform =
      direction === "DOWN"
        ? "translateY(200px) scale(0.4) rotateX(-20deg)"
        : "translateY(0)";
    el.style.opacity = direction === "DOWN" ? "0" : "1";

    requestAnimationFrame(() => {
      el.style.transition = "transform 0.7s ease, opacity 0.7s ease";
      el.style.transform =
        direction === "DOWN"
          ? "translateY(100px) scale(0.6) rotateX(-10deg)"
          : "translateY(100px) scale(0.6)  rotateX(-10deg)";
      el.style.opacity = direction === "DOWN" ? "0.2" : "0.2";
    });
  }, [children]);

  return (
    <div style={{ perspective: "300px" }} className="absolute">
      <div ref={ref}>{children}</div>
    </div>
  );
};
