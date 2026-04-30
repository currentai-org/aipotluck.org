import { site } from "@/content/site";

export function AnchorColumns() {
  const { anchors } = site.anchorContributors;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
      {anchors.map((a) => (
        <article
          key={a.id}
          className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 sm:p-8"
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
            {a.tag}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-[var(--ink)]">
            {a.place}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
            {a.body}
          </p>
          {"followUp" in a && a.followUp ? (
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
              {a.followUp}
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
