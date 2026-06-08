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
  threshold = 0.4,
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

  const positionMap = {
    UP: { x: 0, y: distance },
    DOWN: { x: 0, y: -distance },
    LEFT: { x: distance, y: 0 },
    RIGHT: { x: -distance, y: 0 },
  };

  const initialPosition = positionMap[direction];

  useGSAP(
    () => {
      if (!elRef.current) return;

      if (!isIntersecting) {
        gsap.set(elRef.current, {
          ...initialPosition,
          opacity: 0,
        });
        return;
      }

      gsap.fromTo(
        elRef.current,
        {
          ...initialPosition,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          delay,
          overwrite: "auto",
        },
      );
    },
    {
      dependencies: [delay, direction, distance, duration, isIntersecting],
      revertOnUpdate: true,
    },
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
          width,
          opacity: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
