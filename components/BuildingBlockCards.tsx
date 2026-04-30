import { site } from "@/content/site";

export function BuildingBlockCards() {
  const { blocks } = site.buildingBlocks;

  return (
    <div className="mt-10 space-y-6">
      {blocks.map((b) => (
        <article
          key={b.name}
          className="rounded-2xl border border-[var(--card-border)] bg-gradient-to-b from-[var(--card)] to-[var(--card-2)] p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="font-serif text-2xl text-[var(--ink)]">{b.name}</h3>
            {"href" in b && b.href ? (
              <a
                href={b.href}
                className="text-sm font-medium text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                Visit
              </a>
            ) : null}
          </div>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
            {b.body}
          </p>
        </article>
      ))}
    </div>
  );
}
