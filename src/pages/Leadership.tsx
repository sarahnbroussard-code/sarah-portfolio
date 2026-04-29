import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import ExpensiveCard from '../components/ExpensiveCard'
import RolodexNumber from '../components/RolodexNumber'
import { TextScramble, ShimmerText } from '../components/KineticText'
import { caseStudies } from '../data/caseStudies'

// ── animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

// ── data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: '15', suffix: '+', label: 'Years Experience', delay: 0 },
  { value: '2',  suffix: '',  label: 'Public IPOs',       delay: 0.2 },
  { value: '60', suffix: '+', label: 'Products Shipped',  delay: 0.4 },
  { value: '4',  suffix: '',  label: 'Industries',        delay: 0.6 },
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
    <section ref={ref} className="bg-zinc-950 px-8 py-24 sm:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500"
        >
          By the numbers
        </motion.p>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
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

function PhotoSection() {
  return (
    <section className="overflow-hidden bg-zinc-900 px-8 py-0 sm:px-0">
      <div className="mx-auto grid max-w-none items-center lg:grid-cols-2">
        {/* Photo */}
        <div className="relative flex items-end justify-center overflow-hidden bg-zinc-900" style={{ minHeight: 520 }}>
          {/* Glow */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: 440,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(170,59,255,0.22) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          <motion.img
            src="/Sarah_Photo.jpg"
            alt="Sarah Broussard"
            className="relative z-10 w-full max-w-lg select-none object-cover sm:max-w-xl"
            style={{
              filter: 'brightness(0.82) contrast(1.08) saturate(0.7)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -18, 0] }}
          />
        </div>

        {/* Copy */}
        <motion.div
          className="px-8 py-16 sm:px-16 lg:px-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500"
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-[clamp(28px,3vw,46px)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <TextScramble text="15 years shipping." className="block" />
            <span className="mt-1 block text-zinc-500">Still picking food</span>
            <span className="block">off my shirt.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mb-8 h-px w-16 bg-[#aa3bff]"
          />

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-[15px] leading-[1.85] text-zinc-400"
          >
            Lead Product Designer with{' '}
            <strong className="font-semibold text-white">15+ years</strong> driving enterprise
            and SaaS strategy across AI, legal tech, beauty, and developer tools. Two publicly
            traded companies. One acquisition. Shipped across{' '}
            <strong className="font-semibold text-white">four industries</strong>.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 border border-white/15 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-[#aa3bff] hover:text-[#c084fc]"
            >
              Download Resume ↓
            </a>
            <a
              href="mailto:sarah.n.broussard@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 transition hover:text-white"
            >
              Email →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  const [featured, ...rest] = caseStudies
  return (
    <section className="bg-zinc-950 px-8 py-24 sm:px-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(28px,3vw,44px)] font-bold leading-tight tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <ShimmerText className="text-[clamp(28px,3vw,44px)] font-bold leading-tight tracking-tight">
                Case Studies
              </ShimmerText>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/experience"
              className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 transition hover:text-white sm:block"
            >
              View all →
            </Link>
          </motion.div>
        </div>

        {/* Featured first card — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <ExpensiveCard
            title={featured.title}
            subtitle={featured.subtitle}
            tags={featured.tags}
            year={featured.year}
            heroImage={featured.heroImage}
            slug={featured.slug}
            index={0}
            featured
          />
        </motion.div>

        {/* Grid of remaining cards */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((cs, i) => (
            <ExpensiveCard
              key={cs.slug}
              title={cs.title}
              subtitle={cs.subtitle}
              tags={cs.tags}
              year={cs.year}
              heroImage={cs.heroImage}
              slug={cs.slug}
              index={i + 1}
            />
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

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: '945px', maxHeight: '945px' }}
        >
          <img
            src="/Leadership.webp"
            alt="Sarah Broussard working"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ width: '1418px', maxWidth: '100%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 sm:px-16 sm:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-md ring-1 ring-white/20"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70"
              >
                Product Design Leadership
              </motion.p>

              <h1
                className="mb-4 text-[clamp(36px,4.5vw,64px)] font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <TextScramble text="Sarah Broussard" className="block" />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="max-w-md text-[16px] leading-[1.75] text-white/80"
              >
                15+ years shipping enterprise software across AI, legal tech, beauty, and
                developer tools.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── PHOTO + BIO ───────────────────────────────────────────────────── */}
        <PhotoSection />

        {/* ── ROLODEX STATS ─────────────────────────────────────────────────── */}
        <StatsSection />

        {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
        <CaseStudiesSection />

        {/* ── RECOMMENDATIONS ───────────────────────────────────────────────── */}
        <section className="bg-white px-8 py-24 sm:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-16">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">
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
              Open to senior product design roles, advisory positions, and ambitious
              collaborations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sarah.n.broussard@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200"
              >
                Get in Touch
              </a>
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
