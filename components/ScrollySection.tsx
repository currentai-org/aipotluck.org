"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type ScrollySectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  /** When true, body text spans the full content width (e.g. max-w-6xl). */
  fullWidthBody?: boolean;
  tableEdge?: boolean;
  act?: "i" | "ii" | "iii" | "iv" | "v";
};

export function ScrollySection({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "mx-auto max-w-2xl",
  fullWidthBody = false,
  tableEdge = true,
  act,
}: ScrollySectionProps) {
  const reduce = usePrefersReducedMotion();

  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={[
        "scroll-mt-8 px-6 py-20 sm:px-10 sm:py-24",
        tableEdge ? "border-t border-[var(--table)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      initial={reduce ? false : { opacity: 0.86, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={contentClassName}>
        <div className="max-w-2xl">
          {act ? (
            <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              Act {act}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className={[
              "font-serif text-3xl font-medium tracking-tight text-[var(--ink)] sm:text-4xl",
              titleClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </h2>
        </div>
        <div
          className={[
            "mt-8 space-y-6 text-[1.05rem] leading-[1.75] text-[var(--ink-soft)] sm:text-lg",
            fullWidthBody ? "" : "max-w-2xl",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </div>
    </motion.section>
  );
}
