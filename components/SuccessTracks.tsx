import { site } from "@/content/site";

export function SuccessTracks() {
  const { tracks } = site.success;

  return (
    <div className="mt-10 space-y-6">
      {tracks.map((t) => (
        <article
          key={t.id}
          className="rounded-2xl border-2 border-[var(--accent)]/25 bg-[var(--card)] p-6 sm:p-8"
        >
          <h3 className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
            {t.name}
          </h3>
          <p className="mt-3 font-medium leading-relaxed text-[var(--ink)]">
            {t.target}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
            {t.why}
          </p>
        </article>
      ))}
    </div>
  );
}
