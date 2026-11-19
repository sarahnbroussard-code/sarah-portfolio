import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useInView } from 'framer-motion'
import { caseStudies } from '../data/caseStudies'

// ─── Helpers (copied from CaseStudy.tsx for standalone preview) ──────────────

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[360px] items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50">
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100">
          <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-zinc-400">Image placeholder</p>
        <p className="mt-1 max-w-[140px] text-xs text-zinc-300">{label}</p>
      </div>
    </div>
  )
}

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

function FeatureAccordion({ features }: { features: { title: string; body?: string; video?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="mt-2 space-y-4">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-8 py-6 text-left"
          >
            <span className="text-[15px] font-medium leading-tight text-zinc-900">{f.title}</span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 flex-shrink-0 text-zinc-400"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (f.body || f.video) && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-0">
                  {f.body && (
                    <p className="mb-5 text-[15px] leading-[1.7] text-zinc-500">{f.body}</p>
                  )}
                  {f.video && (
                    <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]">
                      <video
                        src={f.video}
                        controls
                        playsInline
                        className="w-full"
                        style={{ display: 'block' }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90 transition hover:bg-white/20 hover:text-white sm:right-8 sm:top-8"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" strokeWidth={1.8} strokeLinecap="round" />
        </svg>
      </button>
      <motion.img
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        className="max-h-[92vh] max-w-[96vw] rounded-lg object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
      />
    </motion.div>
  )
}

function StepsSection({
  label,
  title,
  body,
  steps,
}: {
  label?: string
  title: string
  body: string
  steps: { title: string; body: string; image?: string; images?: string[]; embedUrl?: string; screenshot?: string }[]
}) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="grid gap-8">
      <div className="grid gap-5">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {label}
          </p>
        )}
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {title}
        </h2>
        <p className="text-[18px] leading-[1.75] text-zinc-600">{body}</p>
        <button
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Hide section' : 'Show section'}
          className="mt-2 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-900"
        >
          {visible ? '− Hide' : '+ Show'}
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
                          active === i ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500'
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
                            <motion.div
                              key="step-body"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="overflow-hidden"
                            >
                              <p className="text-[15px] leading-[1.65] text-zinc-600">{step.body}</p>

                              {/* Screenshot below body text */}
                              {step.screenshot && (
                                <button
                                  onClick={() => setLightbox({ src: step.screenshot!, alt: step.title })}
                                  className="group relative mt-4 block w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)]"
                                  style={{ background: '#F8F9FA', borderRadius: 16 }}
                                >
                                  <img
                                    src={step.screenshot}
                                    alt={step.title}
                                    className="h-auto w-full object-cover"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-950/30 group-hover:opacity-100">
                                    <span className="rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-900 shadow-lg">
                                      View full size ↗
                                    </span>
                                  </div>
                                </button>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {steps[active].images && steps[active].images!.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {steps[active].images!.map((img, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]"
                      style={{ height: 380, borderRadius: 16 }}
                    >
                      {/* Scrollable map area */}
                      <div className="h-full overflow-auto">
                        <img
                          src={img}
                          alt={`${steps[active].title} — map ${i + 1}`}
                          className="h-auto w-full"
                          style={{ minWidth: '100%' }}
                        />
                      </div>

                      {/* Magnifying glass — full screen button */}
                      <button
                        onClick={() => setLightbox({ src: img, alt: `${steps[active].title} — map ${i + 1}` })}
                        aria-label="View full screen"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/90 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg"
                      >
                        <svg className="h-4 w-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <circle cx="11" cy="11" r="7" />
                          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                          <path d="M8 11h6M11 8v6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.12)]">
                  {steps[active].image ? (
                    <button
                      onClick={() => setLightbox({ src: steps[active].image!, alt: steps[active].title })}
                      className="group block w-full"
                    >
                      <img src={steps[active].image} alt={steps[active].title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
                    </button>
                  ) : !steps[active].embedUrl ? (
                    <PlaceholderImage label={steps[active].title} />
                  ) : null}
                </div>
              )}
            </div>

            {/* Full-width interactive embed — below step list when active step has embedUrl */}
            {steps[active].embedUrl && (
              <motion.div
                key={`embed-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18)]"
                style={{ borderRadius: 16 }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-zinc-200 bg-[#e8e8e8] px-4 py-2.5">
                  <div className="flex shrink-0 gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                    <div className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                    <div className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
                  </div>
                  <div className="ml-2 flex-1 truncate rounded-md border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-400 shadow-inner">
                    {steps[active].embedUrl}
                  </div>
                  <a
                    href={steps[active].embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-900"
                  >
                    Open ↗
                  </a>
                </div>
                <iframe
                  src={steps[active].embedUrl}
                  className="w-full border-0"
                  style={{ height: 700, background: '#F8F9FA', display: 'block' }}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
                  title={steps[active].title}
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

function BodyText({ text }: { text: string }) {
  return (
    <div
      className="text-[18px] leading-[1.75] text-zinc-600 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-zinc-900"
      dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
    />
  )
}

// ─── Feature Cards ────────────────────────────────────────────────────────────

function FeatureCards({ features }: { features: { title: string; body?: string; emoji?: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-7 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_32px_-6px_rgba(0,0,0,0.13)]"
        >
          {f.emoji && <span className="text-[30px] leading-none">{f.emoji}</span>}
          <h3 className="text-[17px] font-semibold leading-snug text-zinc-900">{f.title}</h3>
          {f.body && <p className="text-[15px] leading-[1.7] text-zinc-500">{f.body}</p>}
        </motion.div>
      ))}
    </div>
  )
}

// ─── Layout: Tabs ─────────────────────────────────────────────────────────────

function TabsShowcase({
  label,
  title,
  body,
  tabs,
}: {
  label?: string
  title: string
  body?: string
  tabs: { label: string; title: string; body?: string; linkText?: string; linkUrl?: string; image?: string; video?: string; embedUrl?: string }[]
}) {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <div className="grid gap-10">
      <div className="grid gap-4 text-center">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {label}
          </p>
        )}
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {title}
        </h2>
        {body && (
          <p className="mx-auto max-w-2xl text-[18px] leading-[1.75] text-zinc-600">{body}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-200 ${
              i === active ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900'
            }`}
            style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8"
        >
          {/* Text row — side-by-side with image/video, or full-width above embed */}
          <div className={tab.embedUrl && !tab.image && !tab.video ? 'grid gap-5' : 'grid items-center gap-10 lg:grid-cols-[5fr_7fr]'}>
            <div className="grid gap-5">
              <h3 className="text-[clamp(22px,2.5vw,32px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {tab.title}
              </h3>
              {tab.body && <p className="text-[17px] leading-[1.75] text-zinc-600">{tab.body}</p>}
              {tab.linkText && (
                <a
                  href={tab.linkUrl ?? '#'}
                  className="inline-flex w-fit items-center gap-1 text-[14px] font-semibold text-zinc-900 underline-offset-4 hover:underline"
                >
                  {tab.linkText} →
                </a>
              )}
            </div>

            {tab.image && (
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]">
                <img src={tab.image} alt={tab.title} className="w-full object-cover" />
              </div>
            )}
            {tab.video && !tab.image && (
              <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]">
                <video src={tab.video} autoPlay loop muted playsInline className="w-full" style={{ display: 'block' }} />
              </div>
            )}
          </div>

          {/* Embed — full width below text */}
          {tab.embedUrl && !tab.image && !tab.video && (
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-[#e8e8e8] px-4 py-2.5">
                <div className="flex shrink-0 gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
                </div>
                <div className="ml-2 flex-1 truncate rounded-md border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-400 shadow-inner">
                  {tab.embedUrl}
                </div>
                <a href={tab.embedUrl} target="_blank" rel="noreferrer" className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-900">
                  Open ↗
                </a>
              </div>
              <iframe
                src={tab.embedUrl}
                className="w-full border-0"
                style={{ height: 360, display: 'block' }}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
                title={tab.title}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Layout: Feature Grid ──────────────────────────────────────────────────────

function FeatureGrid({
  label,
  title,
  body,
  cards,
}: {
  label?: string
  title: string
  body?: string
  cards: { icon?: string; title: string; body: string; image?: string; video?: string }[]
}) {
  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {label}
          </p>
        )}
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {title}
        </h2>
        {body && <p className="max-w-2xl text-[18px] leading-[1.75] text-zinc-600">{body}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
          >
            {card.video && (
              <div className="overflow-hidden border-b border-zinc-100">
                <video src={card.video} autoPlay loop muted playsInline className="w-full" style={{ display: 'block' }} />
              </div>
            )}
            {card.image && !card.video && (
              <div className="overflow-hidden border-b border-zinc-100">
                <img src={card.image} alt={card.title} className="w-full object-cover" />
              </div>
            )}
            <div className="grid gap-3 p-7">
              {card.icon && <span className="text-[28px] leading-none">{card.icon}</span>}
              <h3 className="text-[20px] font-bold text-zinc-900">{card.title}</h3>
              <p className="text-[16px] leading-[1.7] text-zinc-500">{card.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Layout: Split ────────────────────────────────────────────────────────────

function SplitSection({
  label,
  title,
  body,
  image,
  imagePosition = 'right',
  bulletSections,
}: {
  label?: string
  title: string
  body?: string
  image?: string
  imagePosition?: 'left' | 'right'
  bulletSections?: { title: string; body: string }[]
}) {
  const textCol = (
    <div className="grid gap-6 content-center">
      {label && (
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
          {label}
        </p>
      )}
      <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {title}
      </h2>
      {body && <p className="text-[18px] leading-[1.75] text-zinc-600">{body}</p>}
      {bulletSections && bulletSections.length > 0 && (
        <div className="mt-2 grid gap-6">
          {bulletSections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="mb-1.5 text-[20px] font-bold text-zinc-900">{s.title}</h3>
              <p className="text-[17px] leading-[1.7] text-zinc-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )

  const imageCol = image ? (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]"
    >
      <img src={image} alt={title} className="w-full object-cover" />
    </motion.div>
  ) : null

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {imagePosition === 'left' ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function JiraAlignCaseStudy() {
  const { scrollYProgress } = useScroll()
  const caseStudy = caseStudies.find(c => c.slug === 'atlassian-jira-align')

  if (!caseStudy) {
    return (
      <div className="grid gap-4 px-5 py-10">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Not found</h1>
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

      {/* ─── DARK HERO HEADER ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 px-5 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full opacity-10 blur-[140px] bg-zinc-600" />
        </div>
        <motion.div
          className="relative mx-auto max-w-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="text-left">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                {caseStudy.company}
              </p>
              <h1
                className="mb-6 text-[clamp(48px,8vw,96px)] font-bold leading-[0.95] tracking-tight text-white text-left"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {caseStudy.title}
              </h1>
              <p className="max-w-xl text-[22px] leading-[1.65] text-zinc-400 text-left">
                {caseStudy.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-left">
              {[
                { label: 'Role', value: caseStudy.role },
                { label: 'Year', value: caseStudy.year },
              ].filter(item => item.value).map(item => (
                <div key={item.label}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">{item.label}</p>
                  <p className="text-[18px] font-medium text-zinc-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          {caseStudy.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {caseStudy.tags.map(tag => (
                <span key={tag} className="rounded-full border border-zinc-800 px-4 py-1.5 text-[11px] font-medium tracking-wide text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* ─── HERO IMAGE ───────────────────────────────────────────────────── */}
      {caseStudy.heroImage && (
        <section className="w-full px-5 pt-16 sm:px-10 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-content overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]"
          >
            <img src={caseStudy.heroImage} alt={caseStudy.title} className="w-full object-cover" />
          </motion.div>
        </section>
      )}

      {/* ─── CONTENT BAND ─────────────────────────────────────────────────── */}
      <div className="w-full bg-[#fcfcfc]">
        {caseStudy.sections.map((s, i) => {
          const isImpactSection = s.stats && s.stats.length > 0 && !s.features
          const isImageOnly = s.image && !s.body && !s.label && !s.stats && !s.features && !s.steps && !s.embedUrl
          const isFirst = i === 0
          const isLast = i === caseStudy.sections.length - 1
          return (
            <section
              key={`${s.title}-${i}`}
              className={`w-full ${isImageOnly ? 'px-0' : 'px-5 sm:px-8'} ${isFirst ? 'pt-20 sm:pt-28' : 'pt-14'} ${isLast ? 'pb-20 sm:pb-28' : 'pb-14'}`}
            >
              <div className={isImageOnly ? 'w-full' : 'mx-auto max-w-5xl'}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={!isFirst && !isImageOnly ? 'border-t border-zinc-200 pt-14' : ''}
                >
                  {isImageOnly ? (
                    <img src={s.image} alt={s.title} className="w-full object-cover" />
                  ) : s.layout === 'tabs' && s.tabs ? (
                    <TabsShowcase label={s.label} title={s.title} body={s.body} tabs={s.tabs} />
                  ) : s.layout === 'feature-grid' && s.cards ? (
                    <FeatureGrid label={s.label} title={s.title} body={s.body} cards={s.cards} />
                  ) : s.layout === 'split' ? (
                    <SplitSection label={s.label} title={s.title} body={s.body} image={s.image} imagePosition={s.imagePosition} bulletSections={s.bulletSections} />
                  ) : s.steps ? (
                    <StepsSection label={s.label} title={s.title} body={s.body} steps={s.steps} />
                  ) : (
                    <div className="grid gap-6">
                      {s.label && (
                        <p
                          className={`text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 ${isImpactSection ? 'text-center' : ''}`}
                          style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}
                        >
                          {s.label}
                        </p>
                      )}
                      <h2
                        className={`text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900 ${isImpactSection ? 'text-center' : ''}`}
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {s.title}
                      </h2>

                      {isImpactSection && s.stats && (
                        <div className="mx-auto mt-4 grid w-full gap-12 sm:grid-cols-2">
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
                          {s.featureLayout === 'cards'
                            ? <FeatureCards features={s.features} />
                            : <FeatureAccordion features={s.features} />
                          }
                        </div>
                      ) : !isImpactSection ? (
                        <BodyText text={s.body} />
                      ) : null}

                      {s.image && s.secondImage && (
                        <motion.div
                          initial={{ opacity: 0, y: 28 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-8% 0px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-4 grid gap-4 sm:grid-cols-2"
                        >
                          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]">
                            <img src={s.image} alt={s.title} className="w-full object-cover" />
                          </div>
                          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]">
                            <img src={s.secondImage} alt={s.title} className="w-full object-cover" />
                          </div>
                        </motion.div>
                      )}

                      {s.image && !s.secondImage && (
                        <motion.div
                          initial={{ opacity: 0, y: 28 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-8% 0px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-4 overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)]"
                        >
                          <img src={s.image} alt={s.title} className="w-full object-cover" />
                        </motion.div>
                      )}

                      {s.embedUrl && (
                        s.embedUrl.includes('figma.com') ? (
                          <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-8% 0px' }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
                          >
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                              <iframe
                                src={s.embedUrl}
                                allowFullScreen
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  border: 'none',
                                }}
                              />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-8% 0px' }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
                          >
                            <div className="flex items-center gap-2 border-b border-zinc-200 bg-[#e8e8e8] px-4 py-2.5">
                              <div className="flex shrink-0 gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
                                <div className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
                                <div className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
                              </div>
                              <div className="ml-2 flex-1 truncate rounded-md border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-400 shadow-inner">
                                app.mural.co
                              </div>
                            </div>
                            <div className="overflow-x-auto">
                              <iframe
                                src={s.embedUrl}
                                width="100%"
                                height="480px"
                                style={{ minWidth: 640, minHeight: 480, backgroundColor: '#f4f4f4', border: 'none', display: 'block' }}
                                sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox"
                                title={s.title}
                              />
                            </div>
                          </motion.div>
                        )
                      )}

                      {s.stats && s.stats.length > 0 && s.features && (
                        <div className="mt-2 grid w-full gap-10 sm:grid-cols-2">
                          {s.stats.map((stat, j) => (
                            <StatCounter key={j} value={stat.value} label={stat.label} index={j} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
