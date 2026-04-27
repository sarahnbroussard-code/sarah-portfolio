import Page from '../components/Page'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import RolodexNumber from '../components/RolodexNumber'
import ExpensiveCard from '../components/ExpensiveCard'
import { TextScramble, TextCascade, ShimmerText } from '../components/KineticText'
import { caseStudies } from '../data/caseStudies'

function AnimatedPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useTransform(
    useSpring(my, { stiffness: 150, damping: 20 }),
    [-0.5, 0.5] as [number, number],
    [10, -10] as [number, number]
  )
  const ry = useTransform(
    useSpring(mx, { stiffness: 150, damping: 20 }),
    [-0.5, 0.5] as [number, number],
    [-10, 10] as [number, number]
  )

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry }}
        className="relative mx-auto w-[260px] sm:w-[320px]"
      >
        <div className="animate-[float-gentle_6s_ease-in-out_infinite]">
          <div className="relative rounded-2xl border border-zinc-800/50 bg-zinc-950 p-2 shadow-2xl">
            <img
              src="/sarah-photo.png"
              alt="Sarah Broussard"
              className="w-full rounded-xl object-contain"
              style={{ mixBlendMode: 'multiply' }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Leadership() {
  return (
    <Page>
      <div className="w-full">
        <section className="relative overflow-hidden bg-zinc-950 px-5 pb-24 pt-28 sm:px-10 sm:pt-36">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />
            <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <AnimatedPhoto />
            </div>
            <div className="order-1 text-left lg:order-2">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                <TextScramble text="PRODUCT DESIGN LEADERSHIP" />
              </p>
              <h1 className="mb-5 text-[clamp(40px,4.5vw,64px)] font-bold leading-[1.05] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                <TextCascade>Sarah Broussard</TextCascade>
              </h1>
              <p className="mb-8 max-w-lg text-[17px] leading-[1.7] text-zinc-400">
                <TextScramble text="15+ years shipping enterprise software across AI, legal tech, beauty, and developer tools." />
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-7 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition hover:border-zinc-500 hover:bg-zinc-800">
                  Download Resume
                  <span className="text-sm">↓</span>
                </a>
                <Link to="/experience" className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 transition hover:text-white">
                  View Case Studies
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ROLODEX STATS */}
        <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto w-full max-w-5xl">
            <p className="mb-16 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              <ShimmerText>By the numbers</ShimmerText>
            </p>
            <div className="grid gap-12 sm:grid-cols-3">
              <RolodexNumber value="15" suffix="+" label="Years Experience" delay={0.2} />
              <RolodexNumber value="2" label="Public IPOs" delay={0.5} />
              <RolodexNumber value="60" suffix="+" label="Products Shipped" delay={0.8} />
            </div>
          </div>
        </section>

        {/* CASE STUDY PREVIEWS */}
        <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  <TextScramble text="SELECTED WORK" />
                </p>
                <h2 className="text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Case Studies
                </h2>
              </div>
              <Link to="/experience" className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 transition hover:text-white sm:block">
                View all →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs, i) => (
                <ExpensiveCard
                  key={cs.slug}
                  title={cs.title}
                  subtitle={cs.subtitle}
                  tags={cs.tags}
                  year={cs.year}
                  heroImage={cs.heroImage}
                  slug={cs.slug}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-center sm:px-10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-[150px]" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="mb-6 text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Let's build something extraordinary.
            </h2>
            <p className="mb-10 text-[15px] leading-relaxed text-zinc-400">
              Open to senior product design roles, advisory positions, and ambitious collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:sarah.n.broussard@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200">
                Get in Touch
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition hover:border-zinc-500 hover:text-white">
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
