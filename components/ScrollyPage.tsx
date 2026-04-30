"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { LenisRoot } from "@/components/LenisRoot";
import { Hero } from "@/components/Hero";
import { ScrollySection } from "@/components/ScrollySection";
import { PillarGrid } from "@/components/PillarGrid";
import { BuildingBlockCards } from "@/components/BuildingBlockCards";
import { AnchorColumns } from "@/components/AnchorColumns";
import { SuccessTracks } from "@/components/SuccessTracks";
import { WeCanWinBanner } from "@/components/WeCanWinBanner";
import { SiteFooter } from "@/components/SiteFooter";

export function ScrollyPage() {
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();

  const washOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.12, 0.28],
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.35, 0.7, 1],
    [
      "rgb(252, 251, 248)",
      "rgb(248, 244, 238)",
      "rgb(240, 232, 220)",
      "rgb(230, 218, 200)",
      "rgb(220, 205, 182)",
    ],
  );

  return (
    <LenisRoot>
      <a
        href="#main"
        className="sr-only left-4 top-4 z-[100] rounded-md bg-[var(--ink)] px-4 py-2 font-medium text-[var(--background)] focus:not-sr-only focus:fixed focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
      >
        Skip to main content
      </a>
      <motion.main
        id="main"
        className="relative min-h-full grain"
        style={
          reduce
            ? { backgroundColor: "rgb(248, 244, 238)" }
            : { backgroundColor, color: undefined }
        }
      >
        {!reduce ? (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 mix-blend-multiply"
            style={{
              opacity: washOpacity,
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(180, 100, 60, 0.15), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(90, 120, 80, 0.12), transparent 50%)",
            }}
          />
        ) : null}

        <div className="relative z-10">
          <Hero />

          <ScrollySection
            id={site.whoFor.id}
            title={site.whoFor.title}
            act="ii"
            titleClassName="text-balance"
          >
            <p className="text-balance">{site.whoFor.body}</p>
          </ScrollySection>

          <ScrollySection
            id={site.background.id}
            title={site.background.title}
            act="ii"
          >
            {site.background.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-pretty">
                {p}
              </p>
            ))}
          </ScrollySection>

          <ScrollySection
            id={site.potluck.id}
            title={site.potluck.title}
            act="ii"
          >
            <p className="text-pretty font-medium text-[var(--ink)]">
              {site.potluck.lead}
            </p>
            {site.potluck.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-pretty">
                {p}
              </p>
            ))}
          </ScrollySection>

          <ScrollySection
            id={site.resilience.id}
            title={site.resilience.title}
            act="ii"
          >
            {site.resilience.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-pretty">
                {p}
              </p>
            ))}
          </ScrollySection>

          <ScrollySection
            id={site.whyNow.id}
            title={site.whyNow.title}
            act="iii"
          >
            <p className="text-pretty text-[var(--ink)]">{site.whyNow.lead}</p>
          </ScrollySection>

          <ScrollySection
            id={site.orchestrator.id}
            title={site.orchestrator.title}
            act="iii"
            contentClassName="mx-auto max-w-6xl px-0"
            fullWidthBody
          >
            <p className="max-w-2xl text-pretty text-[var(--ink)]">
              {site.orchestrator.lead}
            </p>
            <PillarGrid />
          </ScrollySection>

          <ScrollySection
            id={site.rallyingCry.id}
            title={site.rallyingCry.title}
            act="iii"
          >
            <p className="text-pretty font-medium text-[var(--ink)]">
              {site.rallyingCry.body}
            </p>
            {site.rallyingCry.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-pretty">
                {p}
              </p>
            ))}
          </ScrollySection>

          <ScrollySection id={site.openClaude.id} title={site.openClaude.title} act="iii">
            <p className="text-pretty">{site.openClaude.body}</p>
          </ScrollySection>

          <ScrollySection
            id={site.buildingBlocks.id}
            title={site.buildingBlocks.title}
            act="iv"
            contentClassName="mx-auto max-w-6xl px-0"
            fullWidthBody
          >
            <p className="max-w-2xl text-pretty text-[var(--ink)]">
              {site.buildingBlocks.lead}
            </p>
            <div className="mx-auto max-w-3xl">
              <BuildingBlockCards />
            </div>
            <p className="mx-auto max-w-2xl text-pretty text-lg">
              {site.buildingBlocks.summary}
            </p>
          </ScrollySection>

          <ScrollySection id={site.roadmap.id} title={site.roadmap.title} act="iv">
            <p className="text-pretty">{site.roadmap.body}</p>
            {site.roadmap.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-pretty">
                {p}
              </p>
            ))}
          </ScrollySection>

          <ScrollySection
            id={site.anchorContributors.id}
            title={site.anchorContributors.title}
            act="iv"
            contentClassName="mx-auto max-w-6xl px-0"
            fullWidthBody
          >
            <p className="max-w-2xl text-pretty">{site.anchorContributors.lead}</p>
            <AnchorColumns />
          </ScrollySection>

          <ScrollySection id={site.weStarted.id} title={site.weStarted.title} act="v">
            <p className="text-pretty">{site.weStarted.body}</p>
          </ScrollySection>

          <ScrollySection
            id={site.success.id}
            title={site.success.title}
            act="v"
            contentClassName="mx-auto max-w-6xl px-0"
            fullWidthBody
          >
            <div className="max-w-2xl space-y-6">
              {site.success.intro.map((p) => (
                <p key={p.slice(0, 32)} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
            <div className="mx-auto max-w-3xl">
              <SuccessTracks />
            </div>
            <p className="mx-auto max-w-2xl text-pretty text-[var(--ink)]">
              {site.success.capability}
            </p>
          </ScrollySection>

          <WeCanWinBanner />
          <SiteFooter />
        </div>
      </motion.main>
    </LenisRoot>
  );
}
