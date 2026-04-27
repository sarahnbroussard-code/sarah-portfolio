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
}

export default function ExpensiveCard({ title, subtitle, tags, year, heroImage, slug, index }: ExpensiveCardProps) {
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

  return (
    <Link to={`/case-study/${slug}`} className="block" style={{ perspective: '1000px' }}>
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
        className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950"
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `radial-gradient(600px circle at ${gx}% ${gy}%, rgba(255,255,255,0.07), transparent 40%)` }}
        />
        <div className="relative aspect-[16/10] overflow-hidden">
          {heroImage && (
            <img src={heroImage} alt={title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
        </div>
        <div className="relative p-6">
          <div className="mb-3 flex items-center gap-2.5">
            {tags.slice(0, 2).map(t => (
              <span key={t} className="rounded-full border border-zinc-700/40 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 backdrop-blur-sm">{t}</span>
            ))}
            <span className="text-[11px] text-zinc-600">{year}</span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-zinc-200">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500">{subtitle}</p>
        </div>
      </motion.div>
    </Link>
  )
}
