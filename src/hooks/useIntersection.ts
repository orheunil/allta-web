import { useEffect, useRef, useState } from "react";

export const useIntersection = (threshold = 0.75) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > threshold) {
          setIsIntersecting(true);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isIntersecting };
};
