import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Users,
  Layers,
  Zap,
  Cpu,
  Cloud,
  BrainCircuit,
  TerminalSquare,
  Rocket,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <TerminalSquare className="h-5 w-5" />,
    title: "Web Development",
    description: "Fast, modern web apps with clean, maintainable code.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Mobile & Product UI",
    description: "Product-grade interfaces for mobile and desktop that feel premium.",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "DevOps & Infrastructure",
    description: "Cloud, CI/CD, monitoring, and reliability baked in from day one.",
  },
  {
    icon: <BrainCircuit className="h-5 w-5" />,
    title: "AI / ML Solutions",
    description: "Smart copilots, internal tools, and automation where it actually helps.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "MVP Development",
    description: "From zero to a credible MVP you can put in front of users.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "System Design & Scaling",
    description: "Architecture that can handle growth without a full rewrite — from MVP to enterprise.",
  },
];

const reasons = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "No full team to hire",
    description: "Skip job posts, interviews, and onboarding. Start building this week, not next quarter — or get expert architecture help for your scaling challenges.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Faster than in‑house",
    description: "You plug into a ready-made senior team that has shipped this before, from MVPs to enterprise-scale systems.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Proven engineers",
    description: "You work with builders who have seen real product, from early-stage MVPs to Series A scaling challenges.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "End‑to‑end ownership",
    description: "Design, backend, infra, and DevOps in one lane — no handoff chaos. Perfect for both new builds and system overhauls.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Built for growth",
    description: "Short cycles, tight feedback, and a constant push toward live users. Whether you're at idea stage or scaling to thousands.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "From MVP to scale",
    description: "We stay with you past launch as you iterate and grow — or help architect the next phase of your established product.",
  },
];

const StartupStudioSection = () => {
  const faqs = [
    {
      q: "Do we still need to hire engineers?",
      a: "No. You get access to top-tier engineers who have worked at Blinkit, Zomato, Google, Amazon, Microsoft, JioStar & Swiggy. Our dedicated studio squad covers design, backend, app/web, infra, and DevOps—so you can stay focused on growth.",
    },
    {
      q: "How fast can you deliver an MVP?",
      a: "Typically in weeks, depending on scope and integrations. We start with a clear plan (what we build first, what we ship next) so progress stays visible every iteration.",
    },
    {
      q: "Is it fixed scope or ongoing work?",
      a: "We run on milestones with a tight build loop. Early on, we lock the MVP path; after launch, we iterate toward the next set of user outcomes.",
    },
    {
      q: "What do you need from us to start?",
      a: "Your product goals, target users, success metrics, and any existing assets (brand, docs, code, or data). We’ll lead the discovery and turn that into a build-ready plan.",
    },
    {
      q: "Do you handle infrastructure, DevOps, and scaling?",
      a: "Yes. We set up CI/CD, environments, monitoring, and release processes so your product is production-ready—not a demo you need to rebuild later.",
    },
    {
      q: "Can you work with our existing stack or codebase?",
      a: "Yes when it fits the target architecture. If you already have code, we can integrate and ship on top of it; if not, we’ll build the right foundations from day one.",
    },
    {
      q: "How do you handle ownership and IP?",
      a: "We structure engagements with clear agreements around confidentiality and ownership. The goal is simple: your company owns the product you fund and validate.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background via-background to-background/95 text-foreground">
      {/* HERO */}
      <section className="border-y bg-gradient-to-b from-slate-950 via-slate-950/95 to-background pb-20 pt-32 sm:pb-24 lg:pt-40">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <motion.p
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Startup Studio for Builders & Scalers
              </motion.p>
              <motion.h1
                className="mb-4 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                Build Your Startup Idea or Scale Your Existing Product — Without Hiring Engineers
              </motion.h1>
              <motion.p
                className="mb-8 max-w-xl text-base text-slate-300 sm:text-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                Whether you're turning an idea into reality or scaling a seed/Series A startup, we provide elite engineering teams for design, development, architecture consulting, and scaling solutions. From MVP to enterprise — with one execution team.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
              >
                <Button asChild size="lg" className="gap-2 text-base">
                  <Link to="/startup-studio/contact">
                    Start Building
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 bg-slate-900/60 text-slate-100">
                  <Link to="/contact?interest=startup-studio">Talk to Us</Link>
                </Button>
                <p className="ml-1 text-sm text-slate-400">
                  <span className="font-semibold text-primary">MVPs in weeks, not months. Founder-friendly, no fluff.</span>
                </p>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/60 shadow-[0_18px_60px_-40px_rgba(15,23,42,1)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="/startup-studio/startup-studio-hero-coders.png"
                alt="Engineers collaborating to build your product"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs font-medium text-slate-100">From idea → MVP → production</p>
                <p className="mt-1 text-xs text-slate-300">
                  One studio team. No hiring ramp-up. Just shipping.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUILD IN ACTION */}
      <section className="border-b bg-background/95 py-16 sm:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Build in motion, not in theory
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
                Whiteboards, systems, code, and UI move together. You see your product taking shape every week — from first
                sketch to production deploy.
              </p>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm">
              From idea to production — <span className="font-medium text-foreground">we build everything.</span>
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              className="group relative overflow-hidden rounded-2xl border bg-card/80 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <img
                src="/startup-studio/startup-studio-hero-coders.png"
                alt="Engineers working on product"
                className="h-[260px] w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-slate-950/70 p-3">
                <p className="text-xs font-medium text-slate-100">From idea → build</p>
                <p className="mt-1 text-xs text-slate-300">Weekly iterations with visible progress.</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl border bg-card/80 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <img
                src="/startup-studio/startup-studio-architecture-whiteboard.png"
                alt="Team whiteboarding system architecture"
                className="h-[260px] w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-slate-950/70 p-3">
                <p className="text-xs font-medium text-slate-100">Architecture first</p>
                <p className="mt-1 text-xs text-slate-300">Design the system before we commit code.</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl border bg-card/80 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <img
                src="/startup-studio/startup-studio-devops-monitor.png"
                alt="Engineers configuring deployment and DevOps"
                className="h-[260px] w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-slate-950/70 p-3">
                <p className="text-xs font-medium text-slate-100">Deploy with confidence</p>
                <p className="mt-1 text-xs text-slate-300">CI/CD, monitoring, and reliability from day one.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Why Founders Choose Us</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              You don&apos;t need a headcount plan to get to product-market fit. You need a product that ships fast, stays
              reliable, and can grow with you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl border bg-card p-6 text-left shadow-sm transition-colors hover:border-primary/50"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-1 font-display text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Everything you need to ship</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Web, app, backend, infra, AI, DevOps — one team, one build loop, no silos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-3 rounded-xl border bg-card/90 p-6 text-left shadow-sm hover:border-primary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              A simple path from idea to something real users can touch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Share your vision",
                text: "We unpack your vision, target users, and constraints in a focused working session — whether it's a new idea or scaling an existing product.",
              },
              {
                step: "02",
                title: "Design & plan",
                text: "We map the solution: flows, architecture, and a build plan aligned to your goals, from MVP to enterprise scaling.",
              },
              {
                step: "03",
                title: "Build or optimize",
                text: "We build new features, refactor systems, or scale infrastructure in weekly iterations with visible progress.",
              },
              {
                step: "04",
                title: "Scale & iterate",
                text: "Ship to real users, measure, and evolve the product — with the same team from idea to IPO.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3 rounded-xl border bg-card/90 p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">{item.step}</span>
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Skip Hiring. Start Building or Scaling.</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Compare building a team from scratch with plugging into a Startup Studio that&apos;s ready to ship — for new products or scaling existing ones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h3 className="mb-3 font-display text-lg font-semibold">Hiring Engineers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Expensive and slow hiring cycles before you can ship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Multiple hires needed across backend, frontend, infra, and data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>You manage standups, reviews, and performance from day one.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                  <span>Risk of mismatched hires and a team that hasn&apos;t shipped together.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/50 bg-card/95 p-6 shadow-[0_18px_40px_-32px_rgba(59,130,246,1)]">
              <h3 className="mb-3 font-display text-lg font-semibold text-primary">Startup Studio</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Start immediately with a unified engineering squad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>One team that covers web, app, backend, infra, AI, and DevOps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>We handle delivery, process, and technical decisions; you focus on growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Engineers from Blinkit, Zomato, Google, Amazon, Microsoft, JioStar & Swiggy — enterprise-grade talent from day one.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-b bg-slate-950 py-14 text-slate-50">
        <div className="container">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  Top-tier engineering talent
                </p>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Engineers from Blinkit, Zomato, Google, Amazon, Microsoft, JioStar & Swiggy
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                  Our team brings battle-tested experience from the world's most demanding tech environments. The same engineers who scaled massive platforms at top companies now help your startup build and scale with enterprise-grade engineering.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:text-center">
                <div>
                  <p className="font-display text-xl font-semibold text-slate-50">Enterprise-grade</p>
                  <p className="text-xs text-slate-400">engineering</p>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-slate-50">FAANG-level</p>
                  <p className="text-xs text-slate-400">talent</p>
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-slate-50">Battle-tested</p>
                  <p className="text-xs text-slate-400">at massive scale</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 px-4 py-3 text-xs text-slate-200 sm:text-sm">
              <p className="mb-1 font-medium text-emerald-200">Built for founders at:</p>
              <div className="flex flex-wrap items-center gap-4 text-[0.75rem] sm:text-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Shoppin
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  PandaMoney
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Source Asia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING CLIENTS */}
      <section className="relative border-b bg-background py-16 sm:py-20">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Delivered Client Builds</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              We&apos;ve built end-to-end products with founders and teams like:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Shoppin",
                logo: "/startup-studio/client-logos/startup-studio-logo-shoppin.png",
                description:
                  "E-commerce workflows, checkout, and core product features—built with production-grade infra and reliable releases.",
              },
              {
                name: "PandaMoney",
                logo: "/startup-studio/client-logos/startup-studio-logo-pandamoney.png",
                description:
                  "Fintech-grade backend for payments and workflows—secure APIs, scalable services, and monitoring built for iteration.",
              },
              {
                name: "Source Asia",
                logo: "/startup-studio/client-logos/startup-studio-logo-source-asia.png",
                description:
                  "Web/app platform built for growth—clean architecture, stable deployments, analytics-ready workflows, and fast iteration.",
              },
            ].map((client) => (
              <div key={client.name} className="group relative min-h-[320px] overflow-hidden rounded-2xl p-[1px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/60 via-slate-800/20 to-emerald-500/40 opacity-50 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1rem] border border-white/10 bg-card/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60">
                  <div className="absolute inset-0">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/35" />
                  </div>

                  <div className="relative">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-primary">
                      Built with studio engineers
                    </div>
                    <h3 className="font-display text-lg font-semibold text-slate-50">{client.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">{client.description}</p>
                  </div>

                  <div className="relative mt-5 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-black/35 px-3 py-1 text-slate-100">MVP → Production</span>
                    <span className="rounded-full bg-black/35 px-3 py-1 text-slate-100">Backend + App + Infra</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Short answers to the questions founders ask before they commit.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card/95 p-8 text-center shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Stop hiring. Start building or scaling.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Tell us what you&apos;re trying to build or scale. We&apos;ll share a concrete plan, timeline, and stack recommendation —
              before anyone writes a line of code.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2 text-base">
                <Link to="/startup-studio/contact">
                  Build Your Startup Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/startup-studio/contact">See if we&apos;re a fit</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              No obligation. If we&apos;re not the right team, we&apos;ll tell you quickly and honestly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupStudioSection;
