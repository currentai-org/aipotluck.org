import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--table)] px-6 py-16 text-center">
      <p className="font-mono text-sm text-[var(--ink-muted)]">
        {site.footer.credit}
      </p>
    </footer>
  );
}
