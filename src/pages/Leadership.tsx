import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Page from '../components/Page'
import RolodexNumber from '../components/RolodexNumber'
import EmailButton from '../components/EmailButton'

// ── animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

// ── data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '15', suffix: '+', label: 'Years Experience', delay: 0 },
  { value: '2',  suffix: '',  label: 'Public IPOs',       delay: 0.2 },
  { value: '60', suffix: '+', label: 'Products Shipped',  delay: 0.4 },
  { value: '4',  suffix: '',  label: 'Industries',        delay: 0.6 },
  { value: '1',  suffix: '',  label: 'Acquisition',       delay: 0.8 },
]

const recommendations = [
  {
    name: 'Magen Russell',
    title: 'Principal Product Designer',
    company: 'Realtor.com',
    initials: 'MR',
    color: 'bg-violet-100 text-violet-700',
    quote:
      'The magic of Sarah is her ability to unite and create incredible bonds with people. She uses these connections to lead with clarity and achieve fantastic results. Her capacity for empathy and compassion alongside her drive and focus to break down complex business problems make her an incredible force.',
  },
  {
    name: 'Lindsey Boyer',
    title: 'Senior Product Designer',
    company: '',
    initials: 'LB',
    color: 'bg-rose-100 text-rose-700',
    quote:
      'Sarah Broussard is truly an exceptional thinker, art director and all-around creative brain. When presented with a challenge, she tackles it with a keen eye for design, a ridiculous sense of humor and ideas that will make you wish you had thought of them first.',
  },
  {
    name: 'Dennis Chatham',
    title: 'Product & Design Leader',
    company: '',
    initials: 'DC',
    color: 'bg-sky-100 text-sky-700',
    quote:
      'Sarah is a thoughtful, talented designer who is strong in both visual and information design. She is also one of the kindest people you can work with. I hope to work with her again in the future.',
  },
  {
    name: 'Jonathan Spies',
    title: 'VP of Engineering',
    company: 'Cloudflare',
    initials: 'JS',
    color: 'bg-orange-100 text-orange-700',
    quote:
      'Sarah is a pleasure to work with. She produces great quality, great looking design and branding both from spec and a clean slate. Always delivers when needed.',
  },
  {
    name: 'Josh Dale',
    title: 'Engineering Manager II',
    company: 'onXmaps',
    initials: 'JD',
    color: 'bg-emerald-100 text-emerald-700',
    quote:
      "Sarah helped bridge the gap between mobile developer and designer with her detail oriented designs, ability to make adjustments on the fly for screen specifications, and her awesome creativity.",
  },
]

// ── sub-components ────────────────────────────────────────────────────────────

function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-zinc-950 py-24 px-5 sm:px-10">
      <div className="mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500"
        >
          By the numbers
        </motion.p>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3"
            >
              <RolodexNumber
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={s.delay}
                light={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Leadership() {
  return (
    <Page>
      <div className="w-full">

        {/* ── HERO — matches Home page first section layout ──────────────────── */}
        <section className="relative bg-black pt-28 sm:pt-36">
          <div className="mx-auto grid w-full max-w-content items-start gap-10 px-5 sm:px-10 lg:grid-cols-2">

            {/* Left: text */}
            <motion.div
              className="grid gap-4 pb-16 text-left"
              variants={heroStagger}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60"
              >
                Product Design Leader
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(22px,2.6vw,36px)] font-bold leading-[1.2] tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                15+ years driving enterprise and SaaS strategy across AI, legal tech, beauty, and developer tools. Two publicly traded companies. One acquisition. Shipped across four industries.
              </motion.h1>

              <motion.div variants={fadeUp} className="h-px w-16 bg-white/20" />
            </motion.div>

            {/* Right: leadership photo */}
            <motion.div
              className="hidden items-start justify-end pb-16 lg:flex"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <img
                src="/leadership-hero.jpg"
                alt="Sarah Broussard"
                className="w-full max-w-lg select-none rounded-sm object-cover"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                }}
                loading="eager"
              />
            </motion.div>
          </div>
        </section>

        {/* ── VIBE-CODE ABOUT ───────────────────────────────────────────────── */}
        <section className="relative bg-zinc-900 py-24 text-center shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.span
                variants={fadeUp}
                className="block text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400"
              >
                About
              </motion.span>
              <motion.p
                variants={fadeUp}
                className="mt-10 text-[19px] font-light leading-[1.85] text-white/85"
              >
                As a professional vibe-code designer, I bridge the gap between creative design
                vision and technical implementation through AI-powered development workflows. With{' '}
                <strong className="font-medium text-white">15+ years</strong> of experience across
                multiple industries and two successful IPOs, I specialize in crafting exceptional
                digital experiences using modern tools and methodologies. My approach integrates
                strategic design thinking with cutting-edge technologies like{' '}
                <strong className="font-medium text-white">Windsurf, Claude AI, and Figma MCP</strong>{' '}
                to deliver production-ready solutions that combine aesthetic excellence with
                functional perfection. I excel at establishing scalable processes that empower
                teams to work smarter, collaborate better, and deliver outstanding results while
                maintaining the highest standards of user experience and code quality.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── ROLODEX STATS ─────────────────────────────────────────────────── */}
        <StatsSection />

        {/* ── RECOMMENDATIONS ───────────────────────────────────────────────── */}
        <section className="bg-white py-24 px-5 sm:px-10">
          <div className="mx-auto w-full max-w-content">
            <div className="mb-16">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                Recommendations
              </p>
              <h2
                className="text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What colleagues say
              </h2>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {recommendations.map((rec, i) => (
                <motion.div
                  key={rec.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-5 break-inside-avoid rounded-2xl bg-zinc-100 p-7"
                >
                  <div className="mb-5 text-[48px] font-serif leading-none text-zinc-300">"</div>
                  <p className="mb-6 text-[14px] leading-[1.8] text-zinc-600">{rec.quote}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${rec.color}`}
                    >
                      {rec.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-zinc-900">{rec.name}</p>
                      <p className="text-[11px] text-zinc-500">
                        {rec.title}
                        {rec.company ? ` · ${rec.company}` : ''}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-zinc-900 px-8 py-28 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#aa3bff]/10 blur-[150px]" />
          </div>
          <motion.div
            className="relative mx-auto max-w-2xl"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-[clamp(28px,3.5vw,52px)] font-bold italic leading-tight tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let's build something extraordinary.
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-[15px] leading-relaxed text-zinc-400">
              Open to senior product design roles, advisory positions, and ambitious collaborations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <EmailButton label="Get in Touch" variant="primary" />
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border border-white/20 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#aa3bff] hover:text-[#c084fc]"
              >
                Resume ↓
              </a>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </Page>
  )
}
