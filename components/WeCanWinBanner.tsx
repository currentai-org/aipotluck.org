import { site } from "@/content/site";

export function WeCanWinBanner() {
  const { weCanWin } = site;

  return (
    <aside
      id={weCanWin.id}
      className="mx-6 my-8 rounded-2xl border-2 border-dashed border-[var(--ink)]/20 bg-[var(--ink)]/[0.03] px-6 py-10 text-center sm:mx-auto sm:max-w-2xl"
      aria-label="Placeholder for closing statement"
    >
      <p className="font-serif text-2xl font-medium tracking-tight text-[var(--ink)]/90 sm:text-3xl">
        {weCanWin.placeholder}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
        {weCanWin.note}
      </p>
    </aside>
  );
}
