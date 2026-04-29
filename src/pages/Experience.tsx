import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { TextCascade } from '../components/KineticText'

function Card({ cs, index }: { cs: (typeof import('../data/caseStudies').caseStudies)[number]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/experience/${cs.slug}`}
        className="group relative block h-full overflow-hidden rounded-3xl border border-zinc-800/30 bg-zinc-950 transition-all duration-500 hover:border-[oklch(0.85_0.18_140)] hover:scale-[1.02]"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight cursor effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, oklch(0.85 0.18 140 / 0.15), transparent 40%)`,
          }}
        />

        {/* Hero Image */}
        {cs.heroImage && (
          <div className="relative overflow-hidden">
            <motion.div
              className="relative"
              style={{ height: '200px' }}
            >
              <motion.img
                src={cs.heroImage}
                alt=""
                className="h-full w-full object-cover transition-all duration-700"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  filter: isHovered ? 'brightness(0.4)' : 'brightness(1)',
                }}
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="relative p-6 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
          >
            <div className="mb-3 flex flex-wrap gap-2">
              {cs.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: isHovered ? 0.15 + tagIndex * 0.05 : 0 }}
                  className="rounded-full border border-zinc-700/50 bg-zinc-900/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition-colors group-hover:border-[oklch(0.85_0.18_140)] group-hover:text-[oklch(0.85_0.18_140)]"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <motion.h2
              className="mb-2 text-xl font-semibold tracking-tight text-white transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
            >
              {cs.title}
            </motion.h2>

            <motion.p
              className="mb-4 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300"
              initial={{ opacity: 0, y: 10 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.25 : 0 }}
            >
              {cs.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-auto flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 transition-colors group-hover:text-[oklch(0.85_0.18_140)]"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: isHovered ? 0.3 : 0 }}
          >
            <span>View case study</span>
            <motion.span
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <div className="w-full bg-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-5 pb-20 pt-28 sm:px-10 sm:pt-36">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-[oklch(0.85_0.18_140)]/20 blur-[130px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.18_140)]/15 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-6xl text-left">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            EXPERIENCE
          </p>
          <h1 className="mb-7 max-w-2xl text-[clamp(24px,2.5vw,36px)] font-bold leading-[1.12] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <TextCascade>Case studies and product design work</TextCascade>
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.7] text-zinc-400">
            A collection of projects showcasing strategic design thinking, user-centered solutions, and measurable impact.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="relative bg-black px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Card key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
