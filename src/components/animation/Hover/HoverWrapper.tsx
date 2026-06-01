"use client";

import React, { CSSProperties, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useIntersection } from "@/hooks";

interface Props {
  distance?: number;
  delay?: number;
  threshold?: number;
  duration?: number;
  direction?: "UP" | "DOWN" | "RIGHT" | "LEFT";
  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  flex?: CSSProperties["flex"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: CSSProperties["width"];
  children: React.ReactNode;
}

export const HoverWrapper = ({
  distance = 100,
  delay = 0,
  threshold = 0.9,
  duration = 1,
  direction = "UP",
  display,
  flexDirection,
  flex,
  justifyContent,
  alignItems,
  width,
  children,
}: Props) => {
  const { ref, isIntersecting } = useIntersection(threshold);

  const elRef = useRef<HTMLDivElement | null>(null);

  const transformMap = {
    UP: `translateY(${distance}px)`,
    DOWN: `translateY(-${distance}px)`,
    LEFT: `translateX(${distance}px)`,
    RIGHT: `translateX(-${distance}px)`,
  };

  const transform = transformMap[direction];

  useGSAP(
    () => {
      if (!elRef.current) return;

      if (isIntersecting) {
        gsap.to(elRef.current, {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          delay,
        });
      }
    },
    { dependencies: [isIntersecting] },
  );

  return (
    <div
      ref={ref}
      style={{
        flex,
        width,
      }}
    >
      <div
        ref={elRef}
        style={{
          display,
          flexDirection,
          justifyContent,
          alignItems,
          transform,
          opacity: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
