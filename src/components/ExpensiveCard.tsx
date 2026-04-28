import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface ExpensiveCardProps {
  title: string
  subtitle: string
  tags: string[]
  year: string
  heroImage?: string
  slug: string
  index: number
  light?: boolean
  featured?: boolean
}

export default function ExpensiveCard({ title, subtitle, tags, year, heroImage, slug, index, light, featured }: ExpensiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rx, setRx] = useState(0)
  const [ry, setRy] = useState(0)
  const [gx, setGx] = useState(50)
  const [gy, setGy] = useState(50)

  const onMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    setRx((y - 0.5) * -18)
    setRy((x - 0.5) * 18)
    setGx(x * 100)
    setGy(y * 100)
  }
  const onLeave = () => { setRx(0); setRy(0); setGx(50); setGy(50) }

  const cardBg = light ? 'border-zinc-200 bg-white shadow-sm' : 'border-zinc-800/60 bg-zinc-950'
  const gradientOverlay = light
    ? 'bg-gradient-to-t from-white/90 via-white/20 to-transparent'
    : 'bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent'
  const tagStyle = light
    ? 'border-zinc-200 bg-zinc-100 text-zinc-600'
    : 'border-zinc-700/40 bg-zinc-900/60 text-zinc-400'
  const yearColor = light ? 'text-zinc-400' : 'text-zinc-600'
  const titleColor = light ? 'text-zinc-900 group-hover:text-zinc-700' : 'text-white group-hover:text-zinc-200'
  const subtitleColor = light ? 'text-zinc-500' : 'text-zinc-500'
  const hoverGlow = light
    ? `radial-gradient(600px circle at ${gx}% ${gy}%, rgba(0,0,0,0.04), transparent 40%)`
    : `radial-gradient(600px circle at ${gx}% ${gy}%, rgba(255,255,255,0.07), transparent 40%)`

  return (
    <Link to={`/case-study/${slug}`} className="block h-full" style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
        animate={{ rotateX: rx, rotateY: ry }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${cardBg}`}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: hoverGlow }}
        />
        {/* Hero image */}
        <div className={`relative w-full shrink-0 overflow-hidden ${featured ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}>
          {heroImage && (
            <img src={heroImage} alt={title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          )}
          <div className={`absolute inset-0 ${gradientOverlay}`} />
          {/* Featured: overlay title directly on image */}
          {featured && (
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${tagStyle}`}>{t}</span>
                ))}
              </div>
              <h3
                className={`text-[clamp(24px,3vw,46px)] font-bold leading-tight tracking-tight transition-colors ${titleColor}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {title}
              </h3>
              <p className={`mt-2 text-[14px] italic leading-relaxed ${subtitleColor}`}
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {subtitle}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className={`text-[10px] font-medium uppercase tracking-[0.2em] ${yearColor}`}>{year}</span>
                <motion.span
                  className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c084fc] opacity-0 transition-opacity group-hover:opacity-100"
                >
                  View Case Study →
                </motion.span>
              </div>
            </div>
          )}
        </div>
        {/* Normal card body — only shown when not featured */}
        {!featured && (
          <div className="relative flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-2.5">
              {tags.slice(0, 2).map(t => (
                <span key={t} className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm ${tagStyle}`}>{t}</span>
              ))}
              <span className={`text-[11px] ${yearColor}`}>{year}</span>
            </div>
            <h3 className={`text-lg font-semibold tracking-tight transition-colors ${titleColor}`}>{title}</h3>
            <p className={`mt-1 text-sm leading-relaxed ${subtitleColor}`}>{subtitle}</p>
          </div>
        )}
      </motion.div>
    </Link>
  )
}
