import { Link } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

const ACCENT = '#18181B'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: ACCENT }}>
        {n.padStart(2, '0')} /
      </span>
      <span className="text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase">{text}</span>
    </div>
  )
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.14)]"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <div className="ml-2 flex-1 rounded bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
          sweatpals.app / dashboard
        </div>
      </div>

      {/* Sidebar + main layout */}
      <div className="flex bg-[#F2F2F7]">
        {/* Sidebar */}
        <div className="hidden w-44 flex-shrink-0 border-r border-zinc-200 bg-white p-4 sm:block">
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white" style={{ background: ACCENT }}>
              S
            </div>
            <span className="text-[12px] font-bold text-zinc-900">sweatpals</span>
          </div>
          {['Community', 'Events', 'Members', 'Revenue', 'Analytics'].map((item, i) => (
            <div
              key={item}
              className="mb-1 rounded-md px-3 py-1.5 text-[11px] font-medium"
              style={
                i === 0
                  ? { background: 'rgba(24,24,27,0.08)', color: ACCENT }
                  : { color: '#636366' }
              }
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-4">
          {/* Alert */}
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5">
            <span className="text-[11px] font-medium text-amber-800 flex-1">
              ⚠ <strong>3 members</strong> haven't attended in 45+ days — they may be at churn risk.
            </span>
            <span className="text-[11px] font-semibold whitespace-nowrap" style={{ color: ACCENT }}>View Members →</span>
          </div>

          {/* KPI row */}
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Monthly Revenue', value: '$4,820', delta: '+18%', up: true },
              { label: 'Total Members', value: '312', delta: '+24 this mo.', up: true },
              { label: 'Retention Rate', value: '78%', delta: '−3%', up: false },
              { label: 'Total RSVPs', value: '1,047', delta: '+11%', up: true },
            ].map(kpi => (
              <div key={kpi.label} className="rounded-xl border border-zinc-100 bg-white p-3 shadow-sm">
                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-zinc-400">{kpi.label}</p>
                <p className="text-[18px] font-bold leading-none tracking-tight text-zinc-900">{kpi.value}</p>
                <span
                  className="mt-1.5 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold"
                  style={{
                    background: kpi.up ? '#30D15820' : '#FF453A20',
                    color: kpi.up ? '#30D158' : '#FF453A',
                  }}
                >
                  {kpi.up ? '↑' : '↓'} {kpi.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Mid row */}
          <div className="grid grid-cols-3 gap-3">
            {/* Revenue chart */}
            <div className="col-span-2 rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-zinc-400">Revenue Trend · 6 months</p>
              <div className="flex h-20 items-end gap-1.5">
                {[55, 68, 60, 75, 84, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 5 ? ACCENT : '#E5E5EA',
                      opacity: i === 5 ? 1 : 0.6 + i * 0.06,
                    }}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between">
                {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
                  <span key={m} className="text-[8px] text-zinc-400">{m}</span>
                ))}
              </div>
            </div>

            {/* Member attention */}
            <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-zinc-400">Members</p>
              {[
                { name: 'Kayla M.', status: '⭐ Top', color: '#FF9F0A' },
                { name: 'Devon P.', status: '⚠ Risk', color: '#FF453A' },
                { name: 'Sam R.', status: '◦ New', color: '#30D158' },
                { name: 'Alex J.', status: '⭐ Top', color: '#FF9F0A' },
                { name: 'Taylor W.', status: '⚠ Risk', color: '#FF453A' },
              ].map(m => (
                <div key={m.name} className="flex items-center justify-between border-b border-zinc-50 py-1.5 last:border-0">
                  <span className="text-[10px] font-medium text-zinc-800">{m.name}</span>
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[8px] font-bold"
                    style={{ background: `${m.color}20`, color: m.color }}
                  >
                    {m.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function WalkInFlowCard({
  n,
  title,
  desc,
  details,
  delay,
}: {
  n: number
  title: string
  desc: string
  details: string[]
  delay: number
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:border-zinc-400 hover:shadow-md">
        <div className="mb-5 flex items-center gap-3">
          <span
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ background: ACCENT }}
          >
            {n}
          </span>
          <h3 className="text-[15px] font-semibold text-zinc-900">{title}</h3>
        </div>
        <p className="mb-5 flex-1 text-[14px] leading-relaxed text-zinc-500">{desc}</p>
        <ul className="space-y-2 border-t border-zinc-100 pt-4">
          {details.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-600">
              <span
                className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                style={{ background: ACCENT }}
              />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

export default function SweatpalsCaseStudy() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: scrollYProgress, background: ACCENT }}
        className="fixed left-0 right-0 top-[52px] z-50 h-[2px] origin-left"
      />

      <article className="text-zinc-900" style={{ background: '#fcfcfc' }}>
        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-zinc-950 px-5 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full opacity-10 blur-[140px] bg-zinc-600"
            />
            <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <Link
              to="/experience"
              className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-300"
            >
              ← Experience
            </Link>

            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p
                  className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: ACCENT }}
                >
                  Design Challenge · Feb 2026
                </p>
                <h1
                  className="mb-6 text-[clamp(48px,8vw,96px)] font-bold leading-[0.95] tracking-tight text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Sweatpals
                </h1>
                <p className="max-w-xl text-[18px] leading-[1.65] text-zinc-400">
                  Designing a community dashboard that turns host data into actionable insight — and makes everyday host tasks effortless.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { label: 'Role', value: 'Product Designer' },
                  { label: 'Type', value: 'Paid Design Challenge' },
                  { label: 'Timeframe', value: '2–4 hours' },
                  { label: 'Year', value: '2026' },
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      {item.label}
                    </p>
                    <p className="text-[14px] font-medium text-zinc-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Consumer SaaS', 'Dashboard Design', 'Data Visualization', 'Action Flows'].map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-4 py-1.5 text-[11px] font-medium tracking-wide text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTENT ───────────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl grid gap-24 px-5 py-20 sm:px-10">

          {/* 01 / Context */}
          <FadeIn>
            <SectionLabel n="1" text="Context" />
            <h2
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Community-first fitness, backed by the best
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-[16px] leading-[1.75] text-zinc-600">
                <p>
                  Sweatpals is a fitness platform turning workouts into social experiences — connecting hundreds of thousands of "pals," hosts, and gyms through events, memberships, and social features. Backed by a16z, Kevin Hart, Pear VC, and the founders of Instacart and Dreamworks.
                </p>
                <p>
                  The platform gives local leaders — run club organizers, pilates instructors, cold plunge enthusiasts — the tools to grow their fitness communities from side hustles into full-time businesses.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '100k+', label: 'Community members' },
                  { value: '$1M+', label: 'Host businesses enabled' },
                  { value: 'a16z', label: 'Lead backer' },
                  { value: '€50/hr', label: 'Challenge rate' },
                ].map((stat, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
                      <p
                        className="mb-1 text-[28px] font-bold tracking-tight"
                        style={{ color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[12px] leading-snug text-zinc-500">{stat.label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 02 / Problem */}
          <FadeIn>
            <SectionLabel n="2" text="The Problem" />
            <h2
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hosts are flying blind
            </h2>

            <div
              className="mb-8 rounded-2xl border-l-4 bg-zinc-50 p-8"
              style={{ borderLeftColor: ACCENT }}
            >
              <p className="text-[17px] leading-[1.75] text-zinc-700">
                "Community hosts currently lack comprehensive visibility into their community's health, engagement, financial trends and member behavior. Without actionable insights, they cannot optimize event performance, identify their most engaged members, track community growth, or understand what's working."
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
                — Sweatpals Design Brief
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Optimize event performance',
                  desc: 'Which events drive revenue? Which are underperforming? Hosts have no way to compare or act.',
                },
                {
                  title: 'Identify member health',
                  desc: 'Who is a champion? Who is at churn risk? This intelligence lives nowhere actionable.',
                },
                {
                  title: 'Track community growth',
                  desc: 'Quantity, quality, and retention metrics to measure success are scattered or absent.',
                },
                {
                  title: "Understand what's working",
                  desc: 'Content and event performance data that could replicate success is inaccessible.',
                },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="rounded-xl border border-zinc-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      <div>
                        <p className="mb-1 text-[15px] font-semibold text-zinc-900">{p.title}</p>
                        <p className="text-[13px] leading-relaxed text-zinc-500">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* 03 / The Brief */}
          <FadeIn>
            <SectionLabel n="3" text="The Brief" />
            <h2
              className="mb-6 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three questions. One dashboard.
            </h2>
            <p className="mb-10 max-w-2xl text-[16px] leading-[1.75] text-zinc-600">
              Design a "Community Overview" Dashboard — the primary screen hosts see when they log in — that helps them quickly answer three key questions. Then design a short action flow (2–3 screens) for a task taken directly from that data.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  n: '01',
                  q: 'Financial performance',
                  items: ['Revenue & MRR', 'Conversion rates', 'Payout status', 'Revenue trend over time'],
                },
                {
                  n: '02',
                  q: 'Member engagement',
                  items: ['Event attendance patterns', 'Participation trends', 'RSVP conversion', 'Community growth rate'],
                },
                {
                  n: '03',
                  q: 'Who needs attention',
                  items: ['Highly engaged members', 'Churn risk signals', 'Actionable notifications', 'Walk-in requests'],
                },
              ].map((item, i) => (
                <FadeIn key={item.n} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6">
                    <p
                      className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]"
                      style={{ color: ACCENT }}
                    >
                      Q{item.n}
                    </p>
                    <h3 className="mb-4 text-[16px] font-semibold text-zinc-900">{item.q}</h3>
                    <ul className="space-y-2">
                      {item.items.map(d => (
                        <li key={d} className="flex items-start gap-2 text-[13px] text-zinc-500">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-300" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* 04 / Key Challenges */}
          <div>
            <FadeIn>
              <SectionLabel n="4" text="Key Design Challenges" />
              <h2
                className="mb-10 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The hard problems to solve
              </h2>
            </FadeIn>

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: '◫',
                  title: 'Information Density',
                  desc: 'How do you surface comprehensive financial and experience data without creating cognitive overload? Every data point competes for attention.',
                  decisions: [
                    'Lead with high-stakes signals (alerts, urgent actions)',
                    'KPI cards as scannable entry points',
                    'Progressive disclosure for deeper data',
                  ],
                },
                {
                  icon: '⚡',
                  title: 'Taking Action',
                  desc: 'Beyond a static set of data, hosts should be able to make decisions from what they see. The dashboard should be a launchpad, not just a report.',
                  decisions: [
                    'Contextual "Quick Actions" panel',
                    'Notifications with inline CTAs',
                    'Walk-in flow accessible in 2 taps',
                  ],
                },
                {
                  icon: '◷',
                  title: 'Time Context',
                  desc: 'Hosts need to understand "how am I doing right now" and "how am I trending over time" — two very different mental models in one view.',
                  decisions: [
                    'Period selector (7D / 30D / 90D / 1Y)',
                    'Sparklines for micro-trends on each KPI',
                    'Revenue chart with 6-month history',
                  ],
                },
              ].map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-7">
                    <span className="text-[28px]">{c.icon}</span>
                    <h3 className="text-[17px] font-semibold text-zinc-900">{c.title}</h3>
                    <p className="flex-1 text-[14px] leading-relaxed text-zinc-500">{c.desc}</p>
                    <div className="border-t border-zinc-100 pt-4">
                      <p
                        className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: ACCENT }}
                      >
                        My Decisions
                      </p>
                      <ul className="space-y-2">
                        {c.decisions.map(d => (
                          <li key={d} className="flex items-start gap-2 text-[12px] text-zinc-600">
                            <span
                              className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                              style={{ background: ACCENT }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 05 / Dashboard */}
          <div>
            <FadeIn>
              <SectionLabel n="5" text="The Dashboard" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Community Overview
              </h2>
              <p className="mb-10 max-w-2xl text-[16px] leading-[1.75] text-zinc-600">
                A desktop-first dashboard organized to deliver immediate signal — financial health, member attention, and today's schedule — with the tools to act, all on one screen.
              </p>
            </FadeIn>

            <DashboardMockup />

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                {
                  title: 'KPI Cards with Sparklines',
                  desc: 'Revenue, members, retention, RSVPs — each with a mini trend and delta so hosts see movement, not just a static number.',
                },
                {
                  title: 'Alert Bar',
                  desc: 'Urgent items (churn risks, walk-in requests, payout ready) surface at the top with inline actions. Context before chrome.',
                },
                {
                  title: 'Event Performance',
                  desc: 'Fill rates and revenue per event at a glance — helps hosts see which formats drive results and which need a push.',
                },
              ].map((d, i) => (
                <FadeIn key={d.title} delay={i * 0.08}>
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-5">
                    <h4 className="mb-2 text-[15px] font-semibold text-zinc-900">{d.title}</h4>
                    <p className="text-[13px] leading-relaxed text-zinc-500">{d.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 06 / Walk-In Flow */}
          <div>
            <FadeIn>
              <SectionLabel n="6" text="Action Flow" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Walk-in registration in 3 steps
              </h2>
              <blockquote className="mb-10 max-w-2xl border-l-2 pl-5 text-[16px] italic leading-[1.75] text-zinc-500" style={{ borderColor: ACCENT }}>
                "Imagine a customer comes to the front desk and would like to sign up for a class happening today. How does the dashboard provide easy access to this common day-to-day task?"
              </blockquote>
            </FadeIn>

            <div className="grid gap-5 sm:grid-cols-3">
              <WalkInFlowCard
                n={1}
                title="Find Member"
                desc="Search the member list by name or email. Results show event history and status to give hosts immediate context before registering."
                details={[
                  'Real-time name/email search',
                  'Attendance count and last seen',
                  'New member creation if not found',
                ]}
                delay={0}
              />
              <WalkInFlowCard
                n={2}
                title="Select Event"
                desc="Today's events with open spots are surfaced automatically. Hosts see capacity at a glance and pick the right class without navigating away."
                details={[
                  'Today-only event filter',
                  'Spots remaining prominently shown',
                  'Time and location at a glance',
                ]}
                delay={0.1}
              />
              <WalkInFlowCard
                n={3}
                title="Confirm & Register"
                desc="A clear summary — member, event, price — before committing. One tap completes registration and sends a confirmation to the member."
                details={[
                  'Full review before submitting',
                  'Automatic email confirmation',
                  'Payment method noted clearly',
                ]}
                delay={0.2}
              />
            </div>

            <FadeIn delay={0.3}>
              <div
                className="mt-8 flex items-start gap-4 rounded-2xl p-6"
                style={{ background: 'rgba(24,24,27,0.04)', border: '1px solid rgba(24,24,27,0.12)' }}
              >
                <span className="text-xl">⚡</span>
                <div>
                  <p className="mb-1 font-semibold text-zinc-900">Why this flow matters</p>
                  <p className="text-[14px] leading-relaxed text-zinc-600">
                    The walk-in scenario is a perfect test of the dashboard's actionability. A host shouldn't need to navigate away from their overview to handle a front-desk request. By surfacing "Check In Member" as a primary quick action — and triggering it directly from urgent notifications — the gap between insight and action closes in under 30 seconds.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 07 / Design Decisions */}
          <FadeIn>
            <SectionLabel n="7" text="Design Decisions" />
            <h2
              className="mb-10 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why these choices
            </h2>
            <div className="space-y-0 divide-y divide-zinc-100">
              {[
                {
                  decision: 'Alert bar above the fold',
                  why: "The most urgent items — churn risks, walk-in requests, pending payouts — should surface before a host has to scroll. Hosts run events in real time; the dashboard has to match that cadence.",
                },
                {
                  decision: 'Period selector, not date picker',
                  why: '7D / 30D / 90D / 1Y covers 90% of host mental models. A date picker creates cognitive overhead where a toggle removes it. Hosts think in weeks and months, not arbitrary date ranges.',
                },
                {
                  decision: 'Member "attention" panel, not a full list',
                  why: 'A full member roster belongs on its own page. What belongs on the dashboard is the signal: who is thriving (top members), who is slipping (at risk), who just joined (new). Status tags replace the need for filters.',
                },
                {
                  decision: 'Dark Quick Actions panel',
                  why: 'The contrast creates a visual hierarchy endpoint — the eye arrives at the actions panel last, by which point the host has absorbed the data they need. It also reinforces urgency: these are actions, not labels.',
                },
                {
                  decision: 'Marketplace contribution as a secondary metric',
                  why: "Sweatpals brings 34% of hosts' customers through its marketplace. That's a powerful retention and value argument — but it lives below the fold. It's contextual evidence, not a primary signal.",
                },
              ].map((item, i) => (
                <div key={i} className="grid gap-4 py-7 lg:grid-cols-[220px_1fr]">
                  <div>
                    <p
                      className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: ACCENT }}
                    >
                      Decision
                    </p>
                    <h4 className="text-[15px] font-semibold leading-snug text-zinc-900">{item.decision}</h4>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Why</p>
                    <p className="text-[15px] leading-[1.7] text-zinc-600">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 08 / Reflection */}
          <FadeIn>
            <SectionLabel n="8" text="Reflection" />
            <h2
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What I'd push further
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7">
                <p
                  className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: ACCENT }}
                >
                  Given more time
                </p>
                <ul className="space-y-3">
                  {[
                    'Run moderated sessions with actual Sweatpals hosts to validate the information hierarchy',
                    'Design the mobile companion view — hosts run events away from desks',
                    'Deepen the Marketplace contribution story (34% is compelling — how do you celebrate that?)',
                    'Build the "Message At-Risk Members" flow as a second action flow',
                    'Explore a personalized homepage that adapts based on the time of day and upcoming events',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-zinc-600">
                      <span
                        className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-7">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Key Insight
                </p>
                <p className="text-[16px] leading-[1.75] text-zinc-700">
                  The walk-in flow revealed something bigger than a task:{' '}
                  <strong className="font-semibold text-zinc-900">
                    the best dashboards are launchpads, not reports.
                  </strong>{' '}
                  Every data point should have a next action attached. Churn risk → message. Low fill rate → promote. Walk-in request → sign up. The tightest version of this dashboard blurs the line between analytics and operations.
                </p>
                <div
                  className="mt-6 rounded-xl p-4 text-[13px] leading-relaxed"
                  style={{ background: 'rgba(24,24,27,0.04)', color: '#3f3f46' }}
                >
                  This is what Sweatpals' values point toward too — <em>Be a Leader</em> and <em>Roll Up Our Sleeves</em> aren't passive stances. The product should match that energy.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ─── NEXT CASE STUDY ───────────────────────────────────────────────── */}
        <section className="border-t border-zinc-100 px-5 py-16 sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Next Case Study
              </p>
              <Link
                to="/experience/atlassian-jira-align"
                className="text-[22px] font-bold tracking-tight transition-colors hover:text-zinc-500"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Atlassian Jira Align →
              </Link>
            </div>
            <Link
              to="/experience"
              className="text-[12px] font-medium uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-900"
            >
              ← All Case Studies
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
