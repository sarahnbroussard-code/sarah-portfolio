import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { DashboardV1 } from '../components/DashboardV1'
import { DashboardV2 } from '../components/DashboardV2'
import { DashboardV3 } from '../components/DashboardV3'

const ACCENT = '#18181B'

// ── helpers ───────────────────────────────────────────────────────────────────

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

// ── Bullet list helpers ────────────────────────────────────────────────────────

function Bullet({ children, size = 'md' }: { children: React.ReactNode; size?: 'sm' | 'md' }) {
  return (
    <li className={`flex items-start gap-3 ${size === 'sm' ? 'text-[17px]' : 'text-[18px]'} leading-relaxed text-zinc-600`}>
      <span
        className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
        style={{ background: ACCENT }}
      />
      <span>{children}</span>
    </li>
  )
}

function BulletList({ items, size = 'md' }: { items: string[]; size?: 'sm' | 'md' }) {
  return (
    <ul className="space-y-2.5 p-0 list-none">
      {items.map((item, i) => (
        <Bullet key={i} size={size}>{item}</Bullet>
      ))}
    </ul>
  )
}

// ── Dashboard mockup ──────────────────────────────────────────────────────────

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.14)]"
    >
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <div className="ml-2 flex-1 rounded bg-zinc-100 px-3 py-1 text-xs text-zinc-400">
          sweatpals.app / dashboard
        </div>
      </div>
      <div className="flex bg-[#F2F2F7]">
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
              style={i === 0 ? { background: 'rgba(24,24,27,0.08)', color: ACCENT } : { color: '#636366' }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5">
            <span className="text-[11px] font-medium text-amber-800 flex-1">
              ⚠ <strong>3 members</strong> haven't attended in 45+ days — they may be at churn risk.
            </span>
            <span className="text-[11px] font-semibold whitespace-nowrap" style={{ color: ACCENT }}>View Members →</span>
          </div>
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
                  style={{ background: kpi.up ? '#30D15820' : '#FF453A20', color: kpi.up ? '#30D158' : '#FF453A' }}
                >
                  {kpi.up ? '↑' : '↓'} {kpi.delta}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-zinc-400">Revenue Trend · 6 months</p>
              <div className="flex h-20 items-end gap-1.5">
                {[55, 68, 60, 75, 84, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 5 ? ACCENT : '#E5E5EA', opacity: i === 5 ? 1 : 0.6 + i * 0.06 }} />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between">
                {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
                  <span key={m} className="text-[8px] text-zinc-400">{m}</span>
                ))}
              </div>
            </div>
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
                  <span className="rounded-full px-1.5 py-0.5 text-[8px] font-bold" style={{ background: `${m.color}20`, color: m.color }}>
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

// ── Walk-in flow card ─────────────────────────────────────────────────────────

function WalkInFlowCard({ n, title, desc, details, delay }: {
  n: number; title: string; desc: string; details: string[]; delay: number
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:border-zinc-400 hover:shadow-md">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: ACCENT }}>
            {n}
          </span>
          <h3 className="text-[19px] font-semibold text-zinc-900">{title}</h3>
        </div>
        <p className="mb-5 flex-1 text-[18px] leading-relaxed text-zinc-500">{desc}</p>
        <ul className="space-y-2.5 border-t border-zinc-100 pt-4 list-none p-0">
          {details.map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-[17px] text-zinc-600">
              <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

// ── MacBook frame ─────────────────────────────────────────────────────────────

function MacbookFrame({ src }: { src: string }) {
  return (
    <div className="relative mx-auto w-full select-none" style={{ maxWidth: 640 }}>
      {/* Lid / screen half */}
      <div
        className="relative rounded-t-[14px] px-[14px] pt-[14px] pb-0"
        style={{
          background: 'linear-gradient(160deg, #e4e4e4 0%, #d0d0d0 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85), 0 -1px 0 #b8b8b8',
        }}
      >
        {/* Apple logo silhouette */}
        <div className="absolute left-1/2 top-2.5 -translate-x-1/2 opacity-30">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M10.2 7.4c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.2.7-.7 0-1.7-.7-2.8-.7C1.6 2.7 0 3.8 0 6.1c0 1.4.5 2.8 1.2 3.8.6.8 1.3 1.8 2.2 1.7.9 0 1.2-.5 2.3-.5 1.1 0 1.4.5 2.3.5.9 0 1.6-.9 2.2-1.7.4-.6.6-1.1.7-1.1-.1 0-2.7-1-2.7-3.4zm-2.5-6c.5-.6.8-1.4.7-2.2-.7.1-1.6.5-2.1 1-.5.5-.9 1.3-.8 2.1.8.1 1.6-.4 2.2-0.9z" fill="#333"/>
          </svg>
        </div>

        {/* Screen bezel */}
        <div
          style={{
            background: '#121212',
            borderRadius: '8px 8px 0 0',
            padding: '8px 8px 0',
          }}
        >
          {/* Camera */}
          <div className="flex justify-center mb-[6px]">
            <div className="rounded-full" style={{ width: 7, height: 7, background: '#1e1e1e', boxShadow: 'inset 0 0 0 2px #2a2a2a' }}>
              <div className="rounded-full" style={{ width: 3, height: 3, background: '#0a0a0a', margin: '2px auto' }} />
            </div>
          </div>

          {/* Video */}
          <div style={{ borderRadius: '3px 3px 0 0', overflow: 'hidden', aspectRatio: '16/10', background: '#000' }}>
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div style={{ height: 5, background: 'linear-gradient(180deg, #aaa 0%, #c4c4c4 100%)', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />

      {/* Base */}
      <div
        style={{
          height: 30,
          background: 'linear-gradient(180deg, #d6d6d6 0%, #c0c0c0 60%, #b4b4b4 100%)',
          borderRadius: '0 0 10px 10px',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 24px rgba(0,0,0,0.18)',
          position: 'relative',
        }}
      >
        {/* Speaker grilles */}
        <div className="absolute left-[11%] top-1/2 -translate-y-1/2 flex gap-[2.5px]">
          {[0,1,2,3,4].map(i => <div key={i} style={{ width: 2, height: 9, background: 'rgba(0,0,0,0.13)', borderRadius: 1 }} />)}
        </div>
        <div className="absolute right-[11%] top-1/2 -translate-y-1/2 flex gap-[2.5px]">
          {[0,1,2,3,4].map(i => <div key={i} style={{ width: 2, height: 9, background: 'rgba(0,0,0,0.13)', borderRadius: 1 }} />)}
        </div>
      </div>

      {/* Drop shadow */}
      <div style={{ height: 4, background: 'linear-gradient(90deg, transparent 5%, rgba(0,0,0,0.14) 30%, rgba(0,0,0,0.14) 70%, transparent 95%)', filter: 'blur(3px)' }} />
    </div>
  )
}

// ── Persona carousel ──────────────────────────────────────────────────────────

const personas = [
  {
    name: 'Jamie Chen',
    role: 'Run Club Founder',
    type: 'Part-Time Host',
    age: 29,
    location: 'Austin, TX',
    initials: 'JC',
    accent: '#6366F1',
    quote: '"I love my run club — but I\'m drowning in spreadsheets. I need to see what\'s working without spending my whole Sunday on data."',
    goals: [
      'Grow membership from 45 to 100+ runners',
      'Earn consistent side income from events',
      'Keep events full without manual outreach',
    ],
    painPoints: [
      'No idea who\'s at churn risk until they ghost',
      'Can\'t compare which events drive revenue',
      'Manual RSVP tracking eats into her day-job time',
    ],
    context: 'Checks app 3×/week · Hosts 2–3 events/month · Side hustle income',
  },
  {
    name: 'Marcus Williams',
    role: 'CrossFit & HIIT Coach',
    type: 'Full-Time Host',
    age: 36,
    location: 'Brooklyn, NY',
    initials: 'MW',
    accent: '#18181B',
    quote: '"My members ARE my business. If someone\'s slipping, I need to know before they cancel — not after they\'re already gone."',
    goals: [
      'Replace studio salary with platform income',
      'Scale to 200+ paying members',
      'Predict monthly revenue 30 days out',
    ],
    painPoints: [
      'Churn catches him completely off guard',
      'No early warning system for disengaged members',
      'Can\'t see ROI of premium vs. free events',
    ],
    context: 'Daily dashboard user · Hosts 8–10 events/month · Full-time — every dollar counts',
  },
  {
    name: 'Sofia Reyes',
    role: 'Yoga Studio Owner',
    type: 'Studio Host',
    age: 42,
    location: 'Los Angeles, CA',
    initials: 'SR',
    accent: '#9333EA',
    quote: '"I\'ve built this community for 8 years. I need data that helps me protect it — not more noise to wade through."',
    goals: [
      'Reduce monthly churn below 5%',
      'Identify top members to convert to brand advocates',
      'Understand Sweatpals marketplace vs. direct revenue',
    ],
    painPoints: [
      'Data lives across 3 different tools today',
      'No single view of community health',
      'Admin time crowds out actual teaching',
    ],
    context: 'Checks weekly, acts monthly · 12–15 events/month · Has part-time admin',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: EASE } },
  exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, transition: { duration: 0.35, ease: EASE } }),
}

function PersonaCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  function goTo(idx: number) {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  function prev() {
    setDirection(-1)
    setCurrent(i => (i - 1 + personas.length) % personas.length)
  }
  function next() {
    setDirection(1)
    setCurrent(i => (i + 1) % personas.length)
  }

  const p = personas[current]

  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {/* Slide */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid gap-0 lg:grid-cols-[300px_1fr]"
          >
            {/* Left panel — identity */}
            <div
              className="flex flex-col items-start justify-between p-8 sm:p-10"
              style={{ background: p.accent }}
            >
              <div>
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  {p.type}
                </p>
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-[22px] font-bold text-white"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  {p.initials}
                </div>
                <h3 className="text-[26px] font-bold leading-tight text-white">{p.name}</h3>
                <p className="mt-1 text-[18px] text-white/70">{p.role}</p>
              </div>
              <div className="mt-8 space-y-1 text-left">
                <p className="text-[14px] text-white/60">Age {p.age} · {p.location}</p>
                <p className="text-[13px] italic text-white/50">{p.context}</p>
              </div>
            </div>

            {/* Right panel — content */}
            <div className="p-8 sm:p-10">
              {/* Quote */}
              <blockquote
                className="mb-8 border-l-4 pl-5 text-[20px] italic leading-[1.7] text-zinc-700"
                style={{ borderLeftColor: p.accent }}
              >
                {p.quote}
              </blockquote>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p
                    className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: p.accent }}
                  >
                    Goals
                  </p>
                  <BulletList items={p.goals} size="sm" />
                </div>
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                    Pain Points
                  </p>
                  <BulletList items={p.painPoints} size="sm" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav bar */}
        <div className="flex items-center justify-between border-t border-zinc-100 px-8 py-4">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {personas.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: i === current ? 24 : 8,
                  background: i === current ? p.accent : '#d4d4d8',
                }}
                aria-label={`Go to persona ${i + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-zinc-900"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-zinc-900"
            >
              →
            </button>
          </div>
          <p className="text-[12px] text-zinc-400">
            {current + 1} / {personas.length}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

// ── Final design section ──────────────────────────────────────────────────────

const FINAL_W = 1400  // dashboard's natural render width
const FINAL_H = 900   // dashboard's natural render height

function FinalDesignSection() {
  const frameRef          = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.7)

  useEffect(() => {
    if (!frameRef.current) return
    const measure = () => {
      const w = frameRef.current!.getBoundingClientRect().width
      if (w > 0) setScale(w / FINAL_W)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(frameRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <FadeIn>
      {/* Scoped — only targets dashboard-v3 inside this section */}
      <style>{`.final-design-wrap .dashboard-v3 { height: ${FINAL_H}px !important; }`}</style>

      <SectionLabel n="10" text="Final Design" />
      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <h2
            className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left text-zinc-900"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Community Overview Dashboard
          </h2>
          <p className="mt-3 max-w-xl text-[20px] leading-[1.75] text-zinc-500 text-left">
            The submitted design — a desktop-first dashboard that balances financial health,
            member attention, and quick actions in a single view.
          </p>
        </div>
        <div className="flex items-end gap-3 pb-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#8A3FFC]/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A3FFC]">
            ● Final submission
          </span>
        </div>
      </div>

      {/* Dark browser frame */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="final-design-wrap overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.35)]"
        style={{ background: '#12121A' }}
      >
        {/* macOS dark chrome */}
        <div
          className="flex items-center gap-3 border-b px-4 py-2.5"
          style={{ background: '#0E0E1A', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex shrink-0 gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/20" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/20" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/20" />
          </div>
          <div className="flex gap-1 text-[12px]" style={{ color: 'rgba(255,255,255,0.25)' }}>‹ ›</div>
          <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-white/35">
            🔒 sweatpals.app / dashboard
          </div>
          <div className="flex gap-2.5 text-[13px]" style={{ color: 'rgba(255,255,255,0.2)' }}>⊕ ≡</div>
        </div>

        {/* Content area — percentage sizing avoids fixed-pixel layout overflow */}
        <div
          ref={frameRef}
          style={{ height: scale > 0 ? Math.round(FINAL_H * scale) : 0, position: 'relative', overflow: 'hidden' }}
        >
          {scale > 0 && (
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width:  `${100 / scale}%`,
                height: `${100 / scale}%`,
              }}
            >
              <DashboardV3 />
            </div>
          )}
        </div>
      </motion.div>
    </FadeIn>
  )
}

// ── Dashboard iteration showcase ─────────────────────────────────────────────

const DASH_VERSIONS = [
  {
    id: 'v1',
    label: 'V1',
    title: 'Gamified · High-energy',
    caption: 'Strava-inspired: live ticker, streaks, leaderboard. Energetic but too dense — the data hierarchy was unclear.',
    url: 'sweatpals.app/dashboard — iteration 1',
    Component: DashboardV1,
  },
  {
    id: 'v2',
    label: 'V2',
    title: 'Refined · Tab nav',
    caption: 'Cleaner layout with tab navigation. Reduced visual noise while preserving data density. Better scannability.',
    url: 'sweatpals.app/dashboard — iteration 2',
    Component: DashboardV2,
  },
  {
    id: 'v3',
    label: 'V3',
    title: 'Final · Sidebar architecture',
    caption: 'Persistent sidebar, clear content hierarchy, alert-first layout. This became the submitted design.',
    url: 'sweatpals.app/dashboard — final',
    Component: DashboardV3,
  },
]

// Dashboards are designed at this viewport size
const DASH_W = 1400
const DASH_H = 700

function DashboardIterations() {
  const [active, setActive] = useState(0)
  const [dir, setDir]       = useState(1)
  const frameRef            = useRef<HTMLDivElement>(null)
  const [scale, setScale]   = useState(1)

  // Dynamically compute scale so the dashboard fills the frame edge-to-edge
  useEffect(() => {
    if (!frameRef.current) return
    const measure = () => {
      const w = frameRef.current!.getBoundingClientRect().width
      if (w > 0) setScale(w / DASH_W)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(frameRef.current)
    return () => ro.disconnect()
  }, [])

  function goTo(idx: number) {
    setDir(idx > active ? 1 : -1)
    setActive(idx)
  }

  const v = DASH_VERSIONS[active]
  const displayH = Math.round(DASH_H * scale)

  return (
    <FadeIn>
      {/* Scoped — only targets dashboards inside this iterations section */}
      <style>{`
        .iterations-wrap .dashboard-v1,
        .iterations-wrap .dashboard-v2,
        .iterations-wrap .dashboard-v3 { height: ${DASH_H}px !important; }
        @keyframes ticker-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes scroll-x     { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>

      {/* Version tabs */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {DASH_VERSIONS.map((dv, i) => (
          <button
            key={dv.id}
            onClick={() => goTo(i)}
            className={`rounded-lg px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
              i === active
                ? 'bg-zinc-900 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            {dv.label} <span className="font-normal normal-case tracking-normal opacity-60">— {dv.title}</span>
          </button>
        ))}
      </div>

      {/* Browser frame */}
      <div className="iterations-wrap overflow-hidden rounded-xl border border-zinc-200 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)]">
        {/* macOS-style chrome bar */}
        <div className="flex items-center gap-3 border-b border-zinc-300 bg-[#e8e8e8] px-4 py-2.5">
          <div className="flex shrink-0 gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
            <div className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
          </div>
          {/* Chevrons */}
          <div className="flex gap-1 text-zinc-400">
            <span className="text-[11px]">‹</span>
            <span className="text-[11px]">›</span>
          </div>
          {/* Address bar */}
          <div className="flex flex-1 items-center gap-1 rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-[11px] text-zinc-400 shadow-inner">
            <span className="text-zinc-300">🔒</span>
            <span className="truncate">{v.url}</span>
          </div>
          {/* Right icons */}
          <div className="flex gap-2 text-zinc-400 text-[13px]">⊕ ≡</div>
        </div>

        {/* Dashboard — percentage sizing avoids fixed-pixel layout overflow */}
        <div ref={frameRef} style={{ height: displayH, overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, x: dir < 0 ? 40 : -40, transition: { duration: 0.25 } }}
              style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
            >
              {/* transform creates stacking context → contains position:fixed glow elements */}
              {scale > 0 && (
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width:  `${100 / scale}%`,
                    height: `${100 / scale}%`,
                    pointerEvents: 'none',
                  }}
                >
                  <v.Component />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Caption + nav */}
      <div className="mt-4 flex items-start justify-between gap-6">
        <p className="text-[17px] leading-relaxed text-zinc-500">{v.caption}</p>
        <div className="flex shrink-0 items-center gap-2">
          {DASH_VERSIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-200 focus:outline-none"
              style={{
                width: i === active ? 20 : 8,
                height: 8,
                background: i === active ? ACCENT : '#d4d4d8',
              }}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SweatpalsCaseStudy() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, background: ACCENT }}
        className="fixed left-0 right-0 top-[52px] z-50 h-[2px] origin-left"
      />

      <article className="text-left text-zinc-900" style={{ background: '#fcfcfc', overflowX: 'hidden' }}>

        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-zinc-950 px-5 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full opacity-10 blur-[140px] bg-zinc-600" />
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
              <div className="text-left">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: ACCENT }}>
                  Design Challenge · Feb 2026
                </p>
                <h1
                  className="mb-6 text-[clamp(48px,8vw,96px)] font-bold leading-[0.95] tracking-tight text-white text-left"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Sweatpals
                </h1>
                <p className="max-w-xl text-[22px] leading-[1.65] text-zinc-400 text-left">
                  Designing a community dashboard that turns host data into actionable insight — and makes everyday host tasks effortless.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-left">
                {[
                  { label: 'Role', value: 'Product Designer' },
                  { label: 'Type', value: 'Paid Design Challenge' },
                  { label: 'Timeframe', value: '2–4 hours' },
                  { label: 'Year', value: '2026' },
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{item.label}</p>
                    <p className="text-[18px] font-medium text-zinc-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Consumer SaaS', 'Dashboard Design', 'Data Visualization', 'Action Flows'].map(tag => (
                <span key={tag} className="rounded-full border border-zinc-800 px-4 py-1.5 text-[11px] font-medium tracking-wide text-zinc-400">
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
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Community-first fitness, backed by the best
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-5 text-[20px] leading-[1.75] text-zinc-600 text-left">
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
                    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5 text-left">
                      <p
                        className="mb-1 text-[28px] font-bold tracking-tight"
                        style={{ color: ACCENT, fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[16px] leading-snug text-zinc-500">{stat.label}</p>
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
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Hosts are flying blind
            </h2>

            <div className="mb-8 rounded-2xl border-l-4 bg-zinc-50 p-8 text-left" style={{ borderLeftColor: ACCENT }}>
              <p className="text-[21px] leading-[1.75] text-zinc-700">
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
                  <div className="rounded-xl border border-zinc-200 bg-white p-5 text-left">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
                      <div>
                        <p className="mb-1 text-[19px] font-semibold text-zinc-900">{p.title}</p>
                        <p className="text-[17px] leading-relaxed text-zinc-500">{p.desc}</p>
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
              className="mb-6 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three questions. One dashboard.
            </h2>
            <p className="mb-10 max-w-2xl text-[20px] leading-[1.75] text-zinc-600 text-left">
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
                  <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 text-left">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>
                      Q{item.n}
                    </p>
                    <h3 className="mb-4 text-[20px] font-semibold text-zinc-900">{item.q}</h3>
                    <BulletList items={item.items} size="sm" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* 04 / Design Process */}
          <div>
            <FadeIn>
              <SectionLabel n="4" text="Design Process" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Discovery before solutions
              </h2>
            </FadeIn>

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_420px]">
              {/* MacBook with looping video */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <MacbookFrame src="/design-process.mp4" />
              </motion.div>

              {/* Explanatory copy */}
              <FadeIn delay={0.2}>
                <div className="space-y-5 text-[20px] leading-[1.8] text-zinc-600 text-left">
                  <p>
                    I kicked off discovery by using data to define the opportunity before moving into solutions. I gathered inputs across user feedback, support signals, workflow gaps, and business goals, then used Google Gemini to quickly synthesize those findings into a structured set of product requirements.
                  </p>
                  <p>
                    That output became the foundation for a focused PRD — aligning the team on the problem, target users, constraints, success metrics, and prioritization criteria. This helped us move from ambiguity into a clear product direction and gave design, product, and engineering a shared framework for evaluating next steps.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* 05 / The User — animated persona carousel */}
          <div>
            <FadeIn>
              <SectionLabel n="5" text="The User" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Who we're designing for
              </h2>
              <p className="mb-10 max-w-2xl text-[20px] leading-[1.75] text-zinc-600 text-left">
                Three distinct host archetypes — each with the same core need for visibility, but different stakes, cadences, and technical comfort levels.
              </p>
            </FadeIn>
            <PersonaCarousel />
          </div>

          {/* 06 / Key Design Challenges */}
          <div>
            <FadeIn>
              <SectionLabel n="6" text="Key Design Challenges" />
              <h2
                className="mb-10 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
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
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-7 text-left">
                    <span className="text-[28px]">{c.icon}</span>
                    <h3 className="text-[21px] font-semibold text-zinc-900">{c.title}</h3>
                    <p className="flex-1 text-[18px] leading-relaxed text-zinc-500">{c.desc}</p>
                    <div className="border-t border-zinc-100 pt-4">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                        My Decisions
                      </p>
                      <BulletList items={c.decisions} size="sm" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 06 / Dashboard */}
          <div>
            <FadeIn>
              <SectionLabel n="7" text="The Dashboard" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Community Overview
              </h2>
              <p className="mb-10 max-w-2xl text-[20px] leading-[1.75] text-zinc-600 text-left">
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
                  <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 text-left">
                    <h4 className="mb-2 text-[19px] font-semibold text-zinc-900">{d.title}</h4>
                    <p className="text-[17px] leading-relaxed text-zinc-500">{d.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* 07 / Walk-In Flow */}
          <div>
            <FadeIn>
              <SectionLabel n="8" text="Action Flow" />
              <h2
                className="mb-4 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Walk-in registration in 3 steps
              </h2>
              <blockquote
                className="mb-10 max-w-2xl border-l-2 pl-5 text-[20px] italic leading-[1.75] text-zinc-500 text-left"
                style={{ borderColor: ACCENT }}
              >
                "Imagine a customer comes to the front desk and would like to sign up for a class happening today. How does the dashboard provide easy access to this common day-to-day task?"
              </blockquote>
            </FadeIn>

            <div className="grid gap-5 sm:grid-cols-3">
              <WalkInFlowCard
                n={1}
                title="Find Member"
                desc="Search the member list by name or email. Results show event history and status to give hosts immediate context before registering."
                details={['Real-time name/email search', 'Attendance count and last seen', 'New member creation if not found']}
                delay={0}
              />
              <WalkInFlowCard
                n={2}
                title="Select Event"
                desc="Today's events with open spots are surfaced automatically. Hosts see capacity at a glance and pick the right class without navigating away."
                details={["Today-only event filter", 'Spots remaining prominently shown', 'Time and location at a glance']}
                delay={0.1}
              />
              <WalkInFlowCard
                n={3}
                title="Confirm & Register"
                desc="A clear summary — member, event, price — before committing. One tap completes registration and sends a confirmation to the member."
                details={['Full review before submitting', 'Automatic email confirmation', 'Payment method noted clearly']}
                delay={0.2}
              />
            </div>

            <FadeIn delay={0.3}>
              <div
                className="mt-8 flex items-start gap-4 rounded-2xl p-6 text-left"
                style={{ background: 'rgba(24,24,27,0.04)', border: '1px solid rgba(24,24,27,0.12)' }}
              >
                <span className="text-xl">⚡</span>
                <div>
                  <p className="mb-2 text-[19px] font-semibold text-zinc-900">Why this flow matters</p>
                  <p className="text-[18px] leading-relaxed text-zinc-600">
                    The walk-in scenario is a perfect test of the dashboard's actionability. A host shouldn't need to navigate away from their overview to handle a front-desk request. By surfacing "Check In Member" as a primary quick action — and triggering it directly from urgent notifications — the gap between insight and action closes in under 30 seconds.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Dashboard design iterations */}
            <div className="mt-12">
              <FadeIn delay={0.1}>
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                  Design Iterations
                </p>
              </FadeIn>
              <DashboardIterations />
            </div>
          </div>

          {/* 08 / Design Decisions */}
          <FadeIn>
            <SectionLabel n="9" text="Design Decisions" />
            <h2
              className="mb-10 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
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
                <div key={i} className="grid gap-4 py-7 text-left lg:grid-cols-[220px_1fr]">
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                      Decision
                    </p>
                    <h4 className="text-[19px] font-semibold leading-snug text-zinc-900">{item.decision}</h4>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Why</p>
                    <p className="text-[19px] leading-[1.7] text-zinc-600">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 10 / Final Design */}
          <FinalDesignSection />

          {/* 11 / Success Criteria */}
          <FadeIn>
            <SectionLabel n="11" text="Success Criteria" />

            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              {/* Left — framing question */}
              <div className="flex flex-col justify-start pt-1">
                <h2
                  className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-zinc-900 text-left"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  How do we know if we were successful?
                </h2>
                <p
                  className="mt-4 text-[20px] font-semibold leading-snug text-zinc-400 text-left"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  How do we know if the dashboard is performing effectively for the business and the host?
                </p>
              </div>

              {/* Right — numbered metrics */}
              <div className="space-y-0 divide-y divide-zinc-100">
                {[
                  {
                    n: 1,
                    title: 'Huddle Velocity',
                    body: 'The host spends less time looking at a screen and more time greeting their community. Measured by reduction in average time-to-check-in.',
                  },
                  {
                    n: 2,
                    title: 'Onboarding Speed',
                    body: 'Time elapsed from account creation to first ticket sold. Success = meaningfully reduced gap between "Account Created" and "First Ticket Sold."',
                  },
                  {
                    n: 3,
                    title: 'Interaction Rate',
                    body: '"High-Fives" (social kudos) sent per event. High interaction signals the dashboard is working as a social engagement surface, not just a report.',
                  },
                  {
                    n: 4,
                    title: 'Mitigate Churn',
                    body: 'Measurable increase in retention for at-risk members after hosts receive automated alerts from the "No Pal Left Behind" module.',
                  },
                  {
                    n: 5,
                    title: 'Marketplace Attribution Clarity',
                    body: 'Reduction in support tickets related to fees and revenue. Hosts can clearly see what percentage of new members came through Sweatpals discovery versus their own marketing.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.n}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-6 py-6 text-left"
                  >
                    <span
                      className="shrink-0 text-[clamp(32px,3.5vw,48px)] font-bold leading-none tabular-nums text-zinc-200"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", minWidth: 36 }}
                    >
                      {item.n}
                    </span>
                    <div>
                      <p className="mb-1.5 text-[19px] font-bold text-zinc-900">{item.title}</p>
                      <p className="text-[18px] leading-[1.75] text-zinc-500">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 12 / Reflection */}
          <FadeIn>
            <SectionLabel n="12" text="Reflection" />
            <h2
              className="mb-8 text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-left"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What I'd push further
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 text-left">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                  Given more time
                </p>
                <ul className="space-y-3 list-none p-0">
                  {[
                    'Run moderated sessions with actual Sweatpals hosts to validate the information hierarchy',
                    'Design the mobile companion view — hosts run events away from desks',
                    'Deepen the Marketplace contribution story (34% is compelling — how do you celebrate that?)',
                    'Build the "Message At-Risk Members" flow as a second action flow',
                    'Explore a personalized homepage that adapts based on the time of day and upcoming events',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[18px] text-zinc-600">
                      <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: ACCENT }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-7 text-left">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Key Insight
                </p>
                <p className="text-[20px] leading-[1.75] text-zinc-700">
                  The walk-in flow revealed something bigger than a task:{' '}
                  <strong className="font-semibold text-zinc-900">
                    the best dashboards are launchpads, not reports.
                  </strong>{' '}
                  Every data point should have a next action attached. Churn risk → message. Low fill rate → promote. Walk-in request → sign up. The tightest version of this dashboard blurs the line between analytics and operations.
                </p>
                <div
                  className="mt-6 rounded-xl p-4 text-[17px] leading-relaxed"
                  style={{ background: 'rgba(24,24,27,0.04)', color: '#3f3f46' }}
                >
                  This is what Sweatpals' values point toward too — <em>Be a Leader</em> and <em>Roll Up Our Sleeves</em> aren't passive stances. The product should match that energy.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ─── NEXT ──────────────────────────────────────────────────────────── */}
        <section className="border-t border-zinc-100 px-5 py-16 sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6">
            <div className="text-left">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Next Case Study
              </p>
              <Link
                to="/experience/atlassian-jira-align"
                className="text-[22px] font-bold tracking-tight transition-colors hover:text-zinc-500 text-left"
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
