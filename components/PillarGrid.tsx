import { site } from "@/content/site";

export function PillarGrid() {
  const { pillars } = site.orchestrator;

  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
      {pillars.map((p) => (
        <li
          key={p.title}
          className="group relative overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md"
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--accent)]/80 to-[var(--sage)]/60 opacity-0 transition-opacity group-hover:opacity-100" />
          <h3 className="font-serif text-lg font-medium text-[var(--ink)]">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
            {p.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
