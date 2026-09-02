"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const breathStops = [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1];

export default function ScrollBreathRail() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.42,
  });

  // Repeated pressure -> release cycles are driven entirely by page position.
  // Stop scrolling and the rail stops; reverse direction and it reverses too.
  const lineScale = useTransform(
    smoothProgress,
    breathStops,
    [0.82, 1.08, 0.84, 1.08, 0.84, 1.08, 0.84, 1.08, 0.9],
  );

  const lineGap = useTransform(
    smoothProgress,
    breathStops,
    ["0.5rem", "0.8rem", "0.52rem", "0.8rem", "0.52rem", "0.8rem", "0.52rem", "0.8rem", "0.62rem"],
  );

  const highlightY = useTransform(
    smoothProgress,
    breathStops,
    ["-55%", "330%", "-55%", "330%", "-55%", "330%", "-55%", "330%", "90%"],
  );

  const pressureOpacity = useTransform(
    smoothProgress,
    breathStops,
    [1, 0.64, 1, 0.64, 1, 0.64, 1, 0.64, 0.82],
  );

  const releaseOpacity = useTransform(
    smoothProgress,
    breathStops,
    [0.66, 1, 0.66, 1, 0.66, 1, 0.66, 1, 0.82],
  );

  return (
    <aside className="scroll-breath-rail" aria-hidden="true">
      <motion.span
        className="scroll-rail-label scroll-rail-pressure"
        style={{ opacity: reduceMotion ? 1 : pressureOpacity }}
      >
        Pressure
      </motion.span>

      <motion.div
        className="scroll-rail-lines"
        style={{ gap: reduceMotion ? "0.62rem" : lineGap }}
      >
        {!reduceMotion && (
          <motion.span className="scroll-rail-highlight" style={{ y: highlightY }} />
        )}
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.i
            key={index}
            style={{
              width: `${40 + index * 6}%`,
              scaleX: reduceMotion ? 1 : lineScale,
            }}
          />
        ))}
      </motion.div>

      <motion.span
        className="scroll-rail-label scroll-rail-release"
        style={{ opacity: reduceMotion ? 1 : releaseOpacity }}
      >
        Release
      </motion.span>
      <span className="scroll-rail-cue">Scroll to exhale</span>
    </aside>
  );
}
