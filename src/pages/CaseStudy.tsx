import { useEffect, useRef, useState, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion'

// ─── Placeholder ──────────────────────────────────────────────────────────────

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[360px] items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-zinc-400">Image placeholder</p>
        <p className="mt-1 max-w-[140px] text-xs text-zinc-300 dark:text-zinc-600">{label}</p>
      </div>
    </div>
  )
}

// ─── Animated stat counter ────────────────────────────────────────────────────

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [count, setCount] = useState(0)

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '').trim()
  const isDecimal = value.includes('.')

  useEffect(() => {
    if (!isInView || isNaN(numeric)) return
    const duration = 1500
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * numeric
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, numeric, isDecimal])

  const display = isNaN(numeric) ? value : `${count}${suffix}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="grid gap-3 text-center"
    >
      <p className="text-5xl font-light tracking-tight text-zinc-900 sm:text-6xl" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
        {display}
      </p>
      <p className="mx-auto max-w-xs text-sm leading-relaxed text-zinc-600" style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}>{label}</p>
    </motion.div>
  )
}

// ─── Feature accordion ────────────────────────────────────────────────────────

function FeatureAccordion({ features }: { features: { title: string; body?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mt-2">
      {features.map((f, i) => (
        <div key={i} className="border-t border-zinc-200">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center gap-5 py-6 text-left"
          >
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-light leading-none text-zinc-400"
            >
              +
            </motion.span>
            <span className="flex-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
              {f.title}
            </span>
          </button>
          <AnimatePresence>
            {open === i && f.body && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="pb-7 pl-11 text-[17px] leading-[1.7] text-zinc-600">
                  {f.body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div className="border-t border-zinc-200" />
    </div>
  )
}

// ─── Steps section ────────────────────────────────────────────────────────────

function StepsSection({
  label,
  title,
  body,
  steps,
}: {
  label?: string
  title: string
  body: string
  steps: { title: string; body: string; image?: string }[]
}) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  return (
    <div className="grid gap-8">
      <div className="grid gap-5">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {label}
          </p>
        )}
        <h2 className="text-balance text-2xl font-light uppercase leading-[1.2] tracking-[0.04em] text-zinc-900 sm:text-3xl" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
          {title}
        </h2>
        <p className="max-w-5xl text-[15px] leading-[1.7] text-zinc-700" style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}>{body}</p>
        <button
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Hide section' : 'Show section'}
          className="mx-auto mt-2 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-900"
        >
          {visible ? '\u2212 Hide' : '+ Show'}
        </button>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            key="steps"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 lg:grid-cols-[5fr_8fr] lg:gap-10">
              <div className="grid content-start gap-3">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-2xl border p-6 text-left transition-all duration-200 ${
                      active === i
                        ? 'border-zinc-900 bg-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]'
                        : 'border-zinc-200 bg-white/60 hover:border-zinc-300'
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          active === i
                            ? 'bg-zinc-900 text-white'
                            : 'bg-zinc-100 text-zinc-500'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="grid gap-2">
                        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-zinc-900" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
                          {step.title}
                        </p>
                        <AnimatePresence>
                          {active === i && (
                            <motion.p
                              key="step-body"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="overflow-hidden text-[15px] leading-[1.65] text-zinc-600"
                            >
                              {step.body}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]">
                {steps[active].image ? (
                  <img
                    src={steps[active].image}
                    alt={steps[active].title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderImage label={steps[active].title} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Canvas preview (Mural embed) ────────────────────────────────────────────

const SCALE_MIN = 0.5
const SCALE_MAX = 3
const SCALE_STEP = 0.25
const PAN_STEP = 80

function CanvasPreview({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    const handler = (e: WheelEvent) => {
      e.preventDefault()
      window.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: 'auto' })
    }
    el.addEventListener('wheel', handler, { passive: false })
    return () => el.removeEventListener('wheel', handler)
  }, [])

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const innerY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 300, damping: 30 })
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 300, damping: 30 })

  useEffect(() => {
    if (scale > 1) { mouseX.set(0.5); mouseY.set(0.5) }
  }, [scale, mouseX, mouseY])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (scale > 1) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }
  function onMouseLeave() { mouseX.set(0.5); mouseY.set(0.5) }

  function zoomIn() { setScale(s => Math.min(+(s + SCALE_STEP).toFixed(2), SCALE_MAX)) }
  function zoomOut() {
    setScale(s => {
      const next = Math.max(+(s - SCALE_STEP).toFixed(2), SCALE_MIN)
      if (next <= 1) setPan({ x: 0, y: 0 })
      return next
    })
  }
  function reset() { setScale(1); setPan({ x: 0, y: 0 }) }

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mt-4"
      style={{ perspective: 1200 }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); onMouseLeave() }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_28px_80px_-12px_rgba(0,0,0,0.14)] transition-shadow duration-500 hover:shadow-[0_40px_100px_-8px_rgba(139,92,246,0.18)] dark:border-zinc-800 dark:shadow-[0_28px_80px_-12px_rgba(0,0,0,0.5)]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="mx-3 flex-1 rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
            app.mural.co
          </div>
        </div>

        {/* Hover strip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="strip"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="overflow-hidden border-b border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex items-center justify-between px-4 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                  Value Proposition Canvas
                </span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-900 transition hover:text-violet-600 dark:text-zinc-100"
                >
                  Open in Mural ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Canvas */}
        <div className="relative h-[520px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <motion.div style={{ y: innerY }} className="absolute inset-0 h-[115%] w-full">
            <div
              className="h-full w-full origin-center transition-transform duration-200 ease-out"
              style={{ transform: `scale(${scale}) translate(${pan.x}px, ${pan.y}px)` }}
            >
              <iframe
                src={url}
                className="h-full w-full border-0"
                title="Value Proposition Canvas"
                sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
              />
              <div ref={overlayRef} className="absolute inset-0 z-10" />
            </div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-100 to-transparent dark:from-zinc-900" />

          {/* Zoom toolbar */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-zinc-200/80 bg-white/90 px-2 py-1.5 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/90">
            {scale > 1 && (
              <>
                <button onClick={() => setPan(p => ({ ...p, x: p.x + PAN_STEP }))} className="rounded-full p-1.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800" aria-label="Pan left">←</button>
                <button onClick={() => setPan(p => ({ ...p, y: p.y + PAN_STEP }))} className="rounded-full p-1.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800" aria-label="Pan up">↑</button>
                <button onClick={() => setPan(p => ({ ...p, y: p.y - PAN_STEP }))} className="rounded-full p-1.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800" aria-label="Pan down">↓</button>
                <button onClick={() => setPan(p => ({ ...p, x: p.x - PAN_STEP }))} className="rounded-full p-1.5 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800" aria-label="Pan right">→</button>
                <div className="mx-1 h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
              </>
            )}
            <button onClick={zoomOut} disabled={scale <= SCALE_MIN} className="rounded-full px-2 py-1 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 dark:hover:bg-zinc-800">−</button>
            <button onClick={reset} className="min-w-[3.5rem] rounded-full px-2 py-1 text-center text-xs font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800">
              {Math.round(scale * 100)}%
            </button>
            <button onClick={zoomIn} disabled={scale >= SCALE_MAX} className="rounded-full px-2 py-1 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-30 dark:hover:bg-zinc-800">+</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Body text renderer (supports **bold**) ───────────────────────────────────

function BodyText({ text }: { text: string }) {
  return (
    <div
      className="max-w-5xl text-[15px] leading-[1.75] text-zinc-700 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-zinc-900"
      style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
      dangerouslySetInnerHTML={{
        __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
      }}
    />
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const { scrollYProgress } = useScroll()

  const caseStudy = useMemo(
    () => caseStudies.find(c => c.slug === slug),
    [slug]
  )

  if (!caseStudy) {
    return (
      <div className="grid gap-4 px-5 py-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Not found</h1>
        <p className="text-zinc-600 dark:text-zinc-400">That case study doesn't exist yet.</p>
        <Link to="/experience" className="text-sm font-medium underline-offset-4 hover:underline">
          ← Back to Experience
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-[#fcfcfc] text-left">
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-[52px] z-50 h-[2px] origin-left bg-zinc-900"
      />

      <article className="w-full px-5 py-20 sm:px-10 sm:py-28">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/experience"
            className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-900"
          >
            ← Experience
          </Link>
        </motion.div>

        {/* Header — left-aligned editorial */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            Atlassian
          </p>
          <h1 className="mb-6 text-balance text-4xl font-light uppercase tracking-[0.02em] text-zinc-900 sm:text-6xl" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {caseStudy.title}
          </h1>
          <p className="max-w-5xl text-pretty text-base leading-[1.7] text-zinc-600" style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}>
            {caseStudy.subtitle}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            <span>{caseStudy.role}</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-400 sm:inline-block" />
            <span>{caseStudy.year}</span>
          </div>
        </motion.header>

        {/* Hero image */}
        {caseStudy.heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]"
          >
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full object-cover"
            />
          </motion.div>
        )}

        {/* Sections — divider-separated, left-aligned editorial */}
        <div>
          {caseStudy.sections.map((s, i) => {
            const isImpactSection = s.stats && s.stats.length > 0 && !s.features
            return (
              <motion.section
                key={`${s.title}-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-zinc-200 py-14 first:border-t-0 first:pt-0"
              >
                {s.steps ? (
                  <StepsSection
                    label={s.label}
                    title={s.title}
                    body={s.body}
                    steps={s.steps}
                  />
                ) : (
                  <div className="grid gap-6">
                    {s.label && (
                      <p className={`text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 ${isImpactSection ? 'text-center' : ''}`} style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
                        {s.label}
                      </p>
                    )}
                    <h2
                      className={`text-balance text-2xl font-light uppercase leading-[1.2] tracking-[0.04em] text-zinc-900 sm:text-3xl ${isImpactSection ? 'text-center' : ''}`}
                      style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}
                    >
                      {s.title}
                    </h2>

                    {/* Stats prominently displayed (editorial style) */}
                    {isImpactSection && s.stats && (
                      <div className="mx-auto mt-4 grid w-full max-w-3xl gap-12 sm:grid-cols-2">
                        {s.stats.map((stat, j) => (
                          <StatCounter key={j} value={stat.value} label={stat.label} index={j} />
                        ))}
                      </div>
                    )}

                    {s.features ? (
                      <div className="w-full">
                        {s.body && !s.body.startsWith('🔑') && (
                          <div className="mb-2">
                            <BodyText text={s.body} />
                          </div>
                        )}
                        <FeatureAccordion features={s.features} />
                      </div>
                    ) : !isImpactSection ? (
                      <BodyText text={s.body} />
                    ) : null}

                    {s.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-8% 0px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-4 overflow-hidden"
                      >
                        <img src={s.image} alt={s.title} className="w-full object-cover" />
                      </motion.div>
                    )}

                    {s.embedUrl && <CanvasPreview url={s.embedUrl} />}

                    {s.stats && s.stats.length > 0 && s.features && (
                      <div className="mt-2 grid w-full gap-10 sm:grid-cols-2">
                        {s.stats.map((stat, j) => (
                          <StatCounter key={j} value={stat.value} label={stat.label} index={j} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.section>
            )
          })}
        </div>

        {/* Footer divider */}
        <div className="mt-32 border-t border-zinc-200 pt-12 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500 transition hover:text-zinc-900"
          >
            ← Back to all work
          </Link>
        </div>
      </article>
    </div>
  )
}
