import { Hero } from "@/components/Hero";

export function ScrollyPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only left-4 top-4 z-[100] rounded-md bg-[var(--ink)] px-4 py-2 font-medium text-[var(--background)] focus:not-sr-only focus:fixed focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
      >
        Skip to main content
      </a>
      <main id="main" className="relative min-h-full grain">
        <Hero />
      </main>
    </>
  );
}
