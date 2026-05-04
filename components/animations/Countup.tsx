"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export default function CountUp({
  to,
  duration = 1.5,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const fps = 60;
    const increment = to / (duration * fps);

    const counter = window.setInterval(() => {
      start += increment;

      if (start >= to) {
        setValue(to);
        window.clearInterval(counter);
      } else {
        setValue(Math.floor(start));
      }
    }, 1000 / fps);

    return () => window.clearInterval(counter);
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}