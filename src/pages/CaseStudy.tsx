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
    const duration = 1300
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="grid gap-2 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-purple-50/50 p-7 dark:border-violet-900/30 dark:from-violet-950/20 dark:to-purple-950/15"
    >
      <p className="bg-gradient-to-br from-violet-600 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
        {display}
      </p>
      <p className="text-sm leading-snug text-zinc-600 dark:text-zinc-400">{label}</p>
    </motion.div>
  )
}

// ─── Feature accordion ────────────────────────────────────────────────────────

function FeatureAccordion({ features }: { features: { title: string; body?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mt-1">
      {features.map((f, i) => (
        <div key={i} className="border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center gap-5 py-5 text-left"
          >
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-light leading-none text-zinc-400 dark:text-zinc-600"
            >
              +
            </motion.span>
            <span className="flex-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
              {f.title}
            </span>
            {open === i && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />}
          </button>
          <AnimatePresence>
            {open === i && f.body && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="pb-6 pl-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {f.body}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
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
    <div className="grid gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="grid gap-3">
          {label && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400">
              {label}
            </p>
          )}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{body}</p>
        </div>
        <button
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Hide section' : 'Show section'}
          className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
            visible ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-200 dark:bg-zinc-700'
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
              visible ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
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
            <div className="grid gap-4 lg:grid-cols-[5fr_8fr] lg:gap-8">
              <div className="grid content-start gap-3">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-xl border p-5 text-left transition-all duration-200 ${
                      active === i
                        ? 'border-violet-400/50 bg-violet-50/60 shadow-sm dark:border-violet-500/30 dark:bg-violet-950/30'
                        : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          active === i
                            ? 'bg-violet-600 text-white'
                            : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="grid gap-2">
                        <p className="font-semibold text-zinc-900 dark:text-white">{step.title}</p>
                        <AnimatePresence>
                          {active === i && (
                            <motion.p
                              key="step-body"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="overflow-hidden text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
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

              <div className="overflow-hidden rounded-2xl">
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
      className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-zinc-900 dark:[&_strong]:text-zinc-100"
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
    <>
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-[52px] z-50 h-[2px] origin-left bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500"
      />

      <article className="mx-auto max-w-3xl grid gap-16 px-1 py-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-6"
        >
          <Link
            to="/experience"
            className="inline-flex w-fit items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            ← Experience
          </Link>

          <div className="grid gap-5">
            {caseStudy.heroImage && (
              <div className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)] dark:border-zinc-800">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="grid gap-3">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                {caseStudy.title}
              </h1>
              <p className="max-w-2xl text-pretty text-xl text-zinc-500 dark:text-zinc-400">
                {caseStudy.subtitle}
              </p>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                {caseStudy.year}
              </span>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                {caseStudy.role}
              </span>
              {caseStudy.tags.map(tag => (
                <span key={tag} className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-600 dark:border-violet-900/40 dark:bg-violet-950/30 dark:text-violet-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Sections */}
        <section className="grid gap-16">
          {caseStudy.sections.map((s, i) => (
            <motion.section
              key={`${s.title}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {s.steps ? (
                <StepsSection
                  label={s.label}
                  title={s.title}
                  body={s.body}
                  steps={s.steps}
                />
              ) : (
                <div className="grid gap-5">
                  {s.label && (
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400">
                      {s.label}
                    </p>
                  )}
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                    {s.title}
                  </h2>

                  {s.features ? (
                    <>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        {s.body}
                      </p>
                      <FeatureAccordion features={s.features} />
                    </>
                  ) : (
                    <BodyText text={s.body} />
                  )}

                  {s.image && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-8% 0px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden rounded-2xl border border-zinc-200/80 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.1)] dark:border-zinc-800"
                    >
                      <img src={s.image} alt={s.title} className="w-full object-cover" />
                    </motion.div>
                  )}

                  {s.embedUrl && <CanvasPreview url={s.embedUrl} />}

                  {s.stats && s.stats.length > 0 && (
                    <div className="mt-2 grid gap-4 sm:grid-cols-2">
                      {s.stats.map((stat, j) => (
                        <StatCounter key={j} value={stat.value} label={stat.label} index={j} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.section>
          ))}
        </section>
      </article>
    </>
  )
}
