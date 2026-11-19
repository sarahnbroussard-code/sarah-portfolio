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

function TwoColumnGifs({ gifs, title }: { gifs: string[]; title: string }) {
  return (
    <div className="grid gap-[20px] md:grid-cols-2">
      {gifs.map((gif, index) => (
        <motion.div
          key={gif}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.22)]"
        >
          <img
            src={gif}
            alt={`${title} — VTO prototype walkthrough ${index + 1}`}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
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

// ─── Feature cards ────────────────────────────────────────────────────────────

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

// ─── Tabs showcase ─────────────────────────────────────────────────────────────

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

// ─── Photo gallery with lightbox ──────────────────────────────────────────────

function PhotoGallery({ label, title, body, images }: { label?: string; title: string; body: string; images: string[] }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIdx === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') setLightboxIdx(i => i === null ? null : (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIdx(i => i === null ? null : (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx, images.length])

  return (
    <div className="grid gap-8">
      <div className="grid gap-4">
        {label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {label}
          </p>
        )}
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {title}
        </h2>
        {body && <BodyText text={body} />}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {images.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setLightboxIdx(i)}
            className="aspect-square overflow-hidden rounded-xl bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <motion.img
              key={lightboxIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={images[lightboxIdx]}
              alt={`${title} ${lightboxIdx + 1}`}
              className="max-h-[88vh] max-w-[88vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + images.length) % images.length) }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % images.length) }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx(i) }}
                  className={`h-1.5 rounded-full transition-all ${i === lightboxIdx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Image modal ───────────────────────────────────────────────────────────────

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
    >
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

// ─── Feature grid (with optional card images/videos) ──────────────────────────

function FeatureGrid({ label, title, body, cards }: {
  label?: string
  title: string
  body?: string
  cards: { icon?: string; title: string; body: string; image?: string; video?: string }[]
}) {
  const [modalImage, setModalImage] = useState<string | null>(null)

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
              <div 
                className="overflow-hidden border-b border-zinc-100 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage(card.image || null)}
              >
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
      <AnimatePresence>
        {modalImage && (
          <ImageModal
            src={modalImage}
            alt="Enlarged view"
            onClose={() => setModalImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Split section ─────────────────────────────────────────────────────────────

function SplitSection({ section }: { section: { label?: string; title: string; body: string; image?: string; caption?: string; imagePosition?: string; features?: { title: string; body?: string; emoji?: string }[]; featureLayout?: 'accordion' | 'cards' } }) {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      <div className={section.imagePosition === 'right' ? 'order-1' : 'order-2'}>
        {section.label && (
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 mb-3" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
            {section.label}
          </p>
        )}
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {section.title}
        </h2>
        <BodyText text={section.body} />
        {section.features && (
          <div className="mt-4">
            {section.featureLayout === 'cards'
              ? <FeatureCards features={section.features} />
              : <FeatureAccordion features={section.features} />
            }
          </div>
        )}
      </div>
      <div className={section.imagePosition === 'right' ? 'order-2' : 'order-1'}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.14)] cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setModalImage(section.image || null)}
        >
          <img src={section.image} alt={section.title} className="w-full object-cover" />
        </motion.div>
        {section.caption && (
          <p className="text-center text-[14px] text-zinc-500 mt-3">{section.caption}</p>
        )}
      </div>
      <AnimatePresence>
        {modalImage && (
          <ImageModal
            src={modalImage}
            alt="Enlarged view"
            onClose={() => setModalImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Feature accordion ────────────────────────────────────────────────────────

function FeatureAccordion({ features }: { features: { title: string; body?: string; emoji?: string }[] }) {
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
            <span className="flex items-center gap-3 text-[15px] font-medium leading-tight text-zinc-900">
              {f.emoji && <span>{f.emoji}</span>}
              {f.title}
            </span>
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
            {open === i && f.body && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 pt-0">
                  <p className="text-[15px] leading-[1.7] text-zinc-500">{f.body}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
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
        <h2 className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {title}
        </h2>
        <p className="text-[18px] leading-[1.75] text-zinc-600">{body}</p>
        <button
          onClick={() => setVisible(v => !v)}
          aria-label={visible ? 'Hide section' : 'Show section'}
          className="mt-1 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-900"
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
            <div className="grid gap-3">
              {steps.map((step, i) => {
                const isActive = active === i
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border transition-all duration-200 ${
                      isActive
                        ? 'border-zinc-200 bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.10)]'
                        : 'border-zinc-100 bg-white/50 hover:border-zinc-200'
                    }`}
                  >
                    <button
                      onClick={() => setActive(i)}
                      className="flex w-full items-center gap-4 p-6 text-left"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          isActive
                            ? 'bg-zinc-900 text-white'
                            : 'border border-zinc-300 text-zinc-600'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <p
                        className={`text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          isActive ? 'text-zinc-900' : 'text-zinc-600'
                        }`}
                        style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}
                      >
                        {step.title}
                      </p>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-5 px-6 pb-6">
                            <p
                              className="text-[15px] leading-[1.65] text-zinc-600"
                              style={{ fontFamily: "'Manrope', 'Inter', sans-serif" }}
                            >
                              {step.body}
                            </p>
                            {step.image && (
                              <div className="overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50">
                                <img
                                  src={step.image}
                                  alt={step.title}
                                  className="w-full object-contain"
                                />
                                <p
                                  className="py-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400"
                                  style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}
                                >
                                  {step.title}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
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
  const isMiro = url.includes('miro.com')
  const platformName = isMiro ? 'Miro' : 'Mural'
  const platformUrl = isMiro ? 'miro.com' : 'app.mural.co'

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
            {platformUrl}
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
                  Open in {platformName} ↗
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
      className="text-[18px] leading-[1.75] text-zinc-600 whitespace-pre-line [&_strong]:font-semibold [&_strong]:text-zinc-900"
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

      <article className="w-full">

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

        {/* ─── HERO IMAGE ──────────────────────────────────────────────────── */}
        {caseStudy.heroImage && (
          <section className="w-full px-5 pt-16 sm:px-10 sm:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-content overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]"
            >
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full object-cover"
              />
            </motion.div>
          </section>
        )}

        {/* Sections — divider-separated, left-aligned editorial */}
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-10 sm:py-28">
          {caseStudy.sections.map((s, i) => {
            const isImpactSection = s.stats && s.stats.length > 0 && !s.features
            const isImageOnly = s.image && !s.body && !s.label && !s.stats && !s.features && !s.steps && !s.embedUrl
            if (isImageOnly) {
              return (
                <motion.div
                  key={`${s.title}-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="-mx-5 sm:-mx-10 my-14 overflow-hidden"
                >
                  <img src={s.image} alt={s.title} className="w-full object-cover" />
                </motion.div>
              )
            }
            return (
              <motion.section
                key={`${s.title}-${i}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-zinc-200 py-14 first:border-t-0 first:pt-0"
              >
                {s.layout === 'gallery' && s.images && s.images.length > 0 ? (
                  <PhotoGallery label={s.label} title={s.title} body={s.body} images={s.images} />
                ) : s.layout === 'tabs' && s.tabs ? (
                  <TabsShowcase label={s.label} title={s.title} body={s.body} tabs={s.tabs} />
                ) : s.layout === 'feature-grid' && s.cards ? (
                  <FeatureGrid label={s.label} title={s.title} body={s.body} cards={s.cards} />
                ) : s.layout === 'split' && s.image ? (
                  <SplitSection section={s} />
                ) : s.steps ? (
                  <StepsSection
                    label={s.label}
                    title={s.title}
                    body={s.body}
                    steps={s.steps}
                  />
                ) : s.images && s.images.length > 0 ? (
                  /* ── Multi-image: text left / images right ── */
                  <div className="grid gap-10 lg:grid-cols-2 [&>*]:min-w-0">
                    <div className="grid gap-5 content-start">
                      {s.label && (
                        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500" style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
                          {s.label}
                        </p>
                      )}
                      <h2
                        className="text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {s.title}
                      </h2>
                      <BodyText text={s.body} />
                    </div>
                    <div className={`grid gap-3 content-start ${s.images.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {s.images.map((img, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-8% 0px' }}
                          transition={{ duration: 0.6, delay: j * 0.07, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden rounded-xl"
                        >
                          <img src={img} alt={`${s.title} ${j + 1}`} className="w-full h-auto object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {s.label && (
                      <p className={`text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500 ${isImpactSection ? 'text-center' : ''}`} style={{ fontFamily: "'Jost', 'Inter', sans-serif" }}>
                        {s.label}
                      </p>
                    )}
                    <h2
                      className={`text-[clamp(26px,3vw,40px)] font-bold tracking-tight text-zinc-900 ${isImpactSection ? 'text-center' : ''}`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
                        {s.featureLayout === 'cards'
                          ? <FeatureCards features={s.features} />
                          : <FeatureAccordion features={s.features} />
                        }
                      </div>
                    ) : !isImpactSection ? (
                      <BodyText text={s.body} />
                    ) : null}

                    {s.gifs && s.gifs.length > 0 && (
                      <TwoColumnGifs gifs={s.gifs} title={s.title} />
                    )}

                    {s.image && (
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
                      s.embedUrl.includes('figma.com') || s.embedUrl.includes('vimeo.com') || s.embedUrl.includes('player.vimeo.com') ? (
                        <motion.div
                          initial={{ opacity: 0, y: 28 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-8% 0px' }}
                          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                          className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
                        >
                          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                              src={s.embedUrl}
                              allowFullScreen
                              title={s.title}
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <CanvasPreview url={s.embedUrl} />
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
              </motion.section>
            )
          })}
        </div>
      </article>
    </div>
  )
}
