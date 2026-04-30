/**
 * Source copy for the AI Potluck one-pager (May 2026).
 */

export const site = {
  meta: {
    title: "AI Potluck",
    description:
      "A collective roadmap for the public interest AI stack — an invitation and blueprint for anchor partners and governments.",
  },
  hero: {
    title: "AI Potluck",
    subtitle: "A collective roadmap for the public interest AI stack",
    attribution: "Ayah Bdeir et al, Current AI · May 2026",
  },
  whoFor: {
    id: "who-for",
    title: "Who this document is for",
    body: `This document is addressed to the technical leadership of anchor partner organizations and governments. It is both an invitation and a blueprint, an argument for why the public interest AI stack is worth building together, and a clear account of what we are building, who is building it, and what we need from each partner.`,
  },
  background: {
    id: "background",
    title: "Background",
    paragraphs: [
      `The public interest AI movement has more talent, more institutional goodwill, and more political momentum than at any point in its history. It is also, right now, spending most of that momentum on itself: the same conversations, the same funders, the same governments, approached independently by a dozen organisations that broadly want the same thing. What the movement lacks is not talent or intent or another organization. It lacks an orchestrator and a roadmap.`,
      `The dominant metaphor for AI development is the race. Races produce winners and losers. They require every participant to hoard resources, move in secret, and treat collaboration as a competitive risk. The AI race metaphor ends up being prescriptive: it shapes strategy, funding logic, and the behaviour of institutions. It is also, for the public interest movement, a trap. By the logic of a race, we are way behind. We cannot win, and we should not bother trying.`,
    ],
  },
  potluck: {
    id: "the-potluck",
    title: "The AI Potluck",
    lead: `We propose a different metaphor and radically different way of working.`,
    paragraphs: [
      `Every culture in the world has a version of the shared meal. The Persian sofreḥ, the Lebanese mezza, the Indian thali, the West African ugali spread, the Japanese kaiseki, the Spanish tapas. Long before states and institutions existed, humans had technologies for coordination — and the shared table was chief among them. In the breaking of bread, in the act of everyone bringing their best, something greater than any individual contribution is assembled.`,
      `This is our proposed approach to a fast v1 of an integrated public interest AI stack. A host issues a curated invitation to like-minded organisations and governments who have something to contribute. Contributions can be large or small: a foundation model, fine-tuning capabilities, a benchmarking framework, safety tooling, a compute commitment. V1 does not need to be perfect. It just needs to get us up and running.`,
      `Fundamentally, a potluck is not zero sum. It is a system in which individual excellence produces collective abundance, without a single chef, a single funder, or a single owner.`,
      `There are rules at a potluck, but they are mostly unspoken. You bring your best. You do not bring what someone else is already bringing (which means you have to pay attention to the whole table, not just your dish). You do not hold back a secret ingredient to maintain competitive advantage. And critically: no single guest can ruin the meal by withdrawing. If the chicken does not show, someone passes more salad. The system is resilient by design.`,
    ],
  },
  resilience: {
    id: "resilience",
    title: "Resilience in AI",
    paragraphs: [
      `Resilience matters enormously in AI infrastructure. The current proprietary stack is fragile: one company’s policy change, one geopolitical shift, one data centre outage propagates instantly to millions of dependent users and institutions. The potluck model is more equitable and resilient: distributed contributions, open interfaces, no single point of failure.`,
      `There is also a deeper point about trust. A potluck works because the guests trust each other enough to show up with food they made. That trust is not assumed or imposed, it is built through contribution. Every time someone shows up with something real, the table grows more valuable and the norms of reciprocity strengthen. This is exactly how open-source ecosystems work at their best: Linux, the web, Wikipedia. Not through altruism, but through a contribution culture where showing up well is the price of admission.`,
      `The public interest AI ecosystem can model a different behavior for the future we want to see. One of sharing, of breaking bread, of nourishing each other and ourselves. We’ve all been at a potluck table when the meal hits a snag: everyone naturally steps up to help. And not surprisingly, it makes the evening more fun.`,
      `The AI Potluck is a bet that this oldest model of collective abundance is also the right one for the moment we are in.`,
    ],
  },
  whyNow: {
    id: "why-now",
    title: "Why now",
    lead: `The window for coordinated public interest infrastructure is open. The next move is to assemble the table — not to run a race against closed labs, but to ship something real, together, on a deadline the world can see.`,
  },
  orchestrator: {
    id: "orchestrator",
    title: "The case for Current AI as orchestrator",
    lead: `Current AI is uniquely positioned to serve as the orchestrator for AI Potluck. Since 2025 we have been investing in the foundation for this exact purpose: the governance structure, deployable capital, public and private partners around the table and most importantly no side missions competing for attention. Ultimately, our goal is not to claim credit or ownership, but to help accelerate and supercharge the Public Interest AI movement.`,
    pillars: [
      {
        title: "No side missions",
        body: `Built for exactly this: no competing priorities, no previous product line or strategy. Our only mission is building the public interest AI stack.`,
      },
      {
        title: "Deployable capital",
        body: `$400M in pledged funding: $150M direct and deployable, ~$200M aligned philanthropic and public capital. AI Collaborative has committed $100M, available 1-1 matched.`,
      },
      {
        title: "Multi-stakeholder governance",
        body: `Founding members span philanthropy, government, private sector, and civil society. No single actor owns the table.`,
      },
      {
        title: "11 government partners",
        body: `MOUs or charter endorsements: Chile, Finland, France, Germany, India, Japan, Kenya, Morocco, Nigeria, Slovenia, Switzerland. France and India are active build-and-fund partners.`,
      },
      {
        title: "Philanthropic alignment",
        body: `Macarthur, Ford Foundation, AI Collaborative and many others coming. Philanthropic foundations bring their aligned + direct funding and can help be orchestrators sotto voce in the field, influencing the conversation behind the scenes with capital.`,
      },
      {
        title: "Global, not US-centered",
        body: `Current AI is based in Europe and brings together a global set of stakeholders and perspectives.`,
      },
      {
        title: "Builder leadership",
        body: `CEO has a proven track record shipping a technology stack and product line at scale, plus deep ecosystem intelligence across the open-source AI landscape.`,
      },
    ],
  },
  rallyingCry: {
    id: "rallying-cry",
    title: "Our rallying cry: a working prototype by the Swiss AI Summit",
    body: `Our target: show up in Geneva with the first working prototype of the Public Interest AI Stack.`,
    paragraphs: [
      `The global AI summit series began in France, where Current AI was first announced. Switzerland is the third. The Summit is valuable to us not primarily as a convening but as a deadline: it creates political conditions under which governments will crystallise vague intentions into concrete, named, public commitments. We will work backwards from that moment.`,
      `Summits are commitment machines. We can leverage the fact that governments want something to announce. Our job in the weeks before is to make it as easy as possible for them to say yes to something specific, and to build enough momentum and visibility that this movement becomes impossible to ignore.`,
    ],
  },
  openClaude: {
    id: "open-claude",
    title: "Concept: Open Claude — a public interest Claude clone",
    body: `Think of it as a Claude-class product suite built on public infrastructure. A conversational assistant with web search, document analysis, multimodal input, and agentic capabilities — the full feature set people now expect from frontier AI. The difference from Claude is not the feature list, which is deliberately similar, but what runs underneath: a foundation model no corporation owns, compute no single government controls, and a privacy-by-default architecture that never trains on user data. Not a research demo. A working prototype you can deploy, audit, and fork.`,
  },
  buildingBlocks: {
    id: "building-blocks",
    title: "The core building blocks exist",
    lead: `We are not starting from scratch. Two strong building blocks already exist, and together they constitute a more advanced starting point than most people in the movement realise.`,
    blocks: [
      {
        name: "Apertus",
        body: `One of the only fully open, ethically-sourced foundation models in existence. Developed by ETH Zurich, EPFL, and the Swiss National Supercomputing Centre, it is a long-term public investment — five years, one to two releases per year — with fully open training data, alignment methodology, and development roadmap. Apertus 8B already benchmarks directly against Google's and Alibaba's open models. Apertus 1.5, with multimodal support and improved tool calling, ships late spring 2026. A large MoE model follows by end of year. This is not a research project waiting to become real. It is a production-grade capability trajectory.`,
      },
      {
        name: "chat.publicai.co",
        href: "https://chat.publicai.co",
        body: `The Public AI inference utility — a working open-source inference platform built and operated by Public AI, the open-source collective that Current AI is in talks of stewarding. It has 42,000 registered users, around 500 daily active users, and 2,000 developers on the API, none of whom were acquired through marketing. These are people who found it and stayed because they wanted an open alternative. The codebase is fully forkable and auditable, the inference layer is distributed across sovereign compute providers in Switzerland and Finland with no single cloud dependency, and a developer API is live at platform.publicai.co.`,
      },
    ],
    summary: `What we have, in short, is a foundation model with a clear roadmap, a live product with a real user base, and infrastructure that any government or institution can deploy, inspect, and own. The MVP is not a plan. It already exists. Our job is to harden it, extend it, and bring the right partners to the table to take it to scale.`,
  },
  roadmap: {
    id: "roadmap",
    title: "Roadmap",
    body: `With the core building blocks as our base, we will continuously expand the user experience and toolkit. Current AI's role is to build as little as possible while ensuring the critical clue points between ecosystem partners creates best-in-class public AI. Code is cost. We put money and resources toward the connective tissue: APIs, tutorials, benchmarks, and maintainer support.`,
    paragraphs: [
      `The goal is not to out-ship OpenAI or out-fund Google. The goal is to make the public interest AI stack so legible, so functional, and so well-resourced that the next institution, government, or funder looking to act in this space finds Current AI as the first, obvious port of call.`,
      `We are building the drumbeat, and a consistent source to follow: the one that shows up every month with something real: a grant deployed, a model improved, a country onboarded, a benchmark published.`,
    ],
  },
  anchorContributors: {
    id: "anchor-contributors",
    title: "Anchor contributors: standing on the shoulders of giants",
    lead: `The public interest AI stack rests on the most important open infrastructure efforts of the past 50 years. Therefore the countries that made those efforts possible are natural anchor partners. The provenance argument is important: the institutions and governments that gave the world open computing and the open web are best positioned to spearhead open source AI.`,
    anchors: [
      {
        id: "ch",
        place: "Switzerland",
        tag: "Birthplace of the World Wide Web",
        body: `In 1989, Tim Berners-Lee, a British scientist working at CERN in Geneva, invented the World Wide Web not to build a business, but to make information open and free. He didn't patent it, that single decision was a gift to humanity, and the web remains the largest open infrastructure project ever built. Switzerland's contribution to this stack inherits that legacy directly: CERN is still in Geneva, ETH Zurich remains one of the world's leading technical universities, and the Swiss AI research community has produced Apertus — a state-of-the-art open-weights model built with a commitment to open development and European digital sovereignty.`,
      },
      {
        id: "fi",
        place: "Finland",
        tag: "Birthplace of Linux",
        body: `In 1991, Linus Torvalds, a 21-year-old student at the University of Helsinki, posted a message to a Usenet newsgroup: "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)." Linux now runs more than 90% of all servers, every Android phone, the International Space Station, and the world's top supercomputers.`,
        followUp: `Linux succeeded not because of a single institution, but because of a model: open contribution, meritocratic governance, and infrastructure shared as a global commons. Finland's culture of open infrastructure, combined with its world-class HPC and AI research institutions, makes it the natural home for the evaluation layer of the public interest AI stack.`,
      },
    ],
  },
  weStarted: {
    id: "we-started",
    title: "We already started",
    body: `Current AI already has ongoing projects and conversations with multiple anchor governments. With India we launched an offline AI computing device at the India AI Summit. With Germany we are launching a challenge on Missing Data to create pipelines for unique and underserved health use cases. With Finland we are in the process of designing the accountability toolkit. And we are advising Switzerland on the Swiss AI Summit.`,
  },
  success: {
    id: "success",
    title: "What success looks like",
    intro: [
      `Our first goal is specific and achievable: to build the public interest AI stack to the point where it is a real alternative for real users, and where that alternative changes the terms of the conversation for everyone.`,
      `The larger goal is to inspire people in the open source and public interest AI community — and to make public infrastructure the obvious place to build.`,
    ],
    tracks: [
      {
        id: "track-1",
        name: "Track 1: The startup economy",
        target: "By June 2027, 100 European AI startups are using the public interest AI stack as their primary infrastructure to build and ship products.",
        why: `This matters because it demonstrates that the stack is production-quality and developer-friendly, and because it creates a constituency of builders whose commercial success depends on the open ecosystem thriving. It also generates the kind of activity and innovation diversity that proprietary platforms cannot match.`,
      },
      {
        id: "track-2",
        name: "Track 2: The public interest",
        target: `By June 2027, 100 civil society organisations, public agencies, and NGOs are using the stack to build outcomes-based AI for the people they serve.`,
        why: `This matters because it makes the 'public interest' claim concrete and measurable. It is not enough to build infrastructure that could in principle be used for good. We need to show that it is, in practice, being used for good — and at a scale that makes the case for sustained investment.`,
      },
    ],
    capability: `On capability: we do not need to match the frontier labs on every benchmark. We need to be close enough that the cost-governance-sovereignty tradeoff lands clearly in favour of the open stack for the use cases that matter to our users. Being 12 months behind on a capability leaderboard is not fatal. Being 12 months behind on usability and cost would be.`,
  },
  weCanWin: {
    id: "we-can-win",
    placeholder: "[INSERT WE CAN WIN]",
    note: "Final phrase to be added.",
  },
  footer: {
    credit: "AI Potluck · Current AI",
  },
} as const;
