import { site } from "@/content/site";

export function Hero() {
  const { hero } = site;

  return (
    <header
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-16 pt-20"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,0,0,0.02),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p
          className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[var(--ink-muted)]"
          aria-hidden
        >
          {hero.label}
        </p>
        <h1
          id="hero-title"
          className="font-serif text-[clamp(2.75rem,9vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.02em] text-[var(--ink)]"
        >
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
          {hero.subtitle}
        </p>
        <div
          className="mx-auto mt-16 h-px w-16 bg-[var(--ink)]/15"
          role="presentation"
          aria-hidden
        />
        <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
          {hero.attribution}
        </p>
      </div>
    </header>
  );
}
