import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Page from '../components/Page'
import content from '../data/content.json'

const { hero: homeHero, marquee, about, stats, experience: homeExp, cta } = content.home

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-medium text-white">{part}</strong> : part
  )
}

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
  show: { transition: { staggerChildren: 0.09 } },
}

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

export default function Home() {
  return (
    <Page>
      <div className="w-full">
        <section className="relative mesh-gradient bg-[#fcfcfc] pt-28 shadow-[0_4px_24px_rgba(0,0,0,0.03)] sm:pt-36">
          <div className="mx-auto grid w-full max-w-content items-start gap-10 px-5 sm:px-10 lg:grid-cols-2">
            <motion.div
              className="grid gap-4 pb-16 text-left"
              variants={heroStagger}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600"
              >
                {homeHero.kicker}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(44px,5vw,72px)] font-bold uppercase leading-[1.05] tracking-[0.02em] text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {homeHero.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600"
              >
                {homeHero.tags}
              </motion.p>

              <motion.div variants={fadeUp} className="h-px w-16 bg-zinc-900/10" />

              <motion.p
                variants={fadeUp}
                className="max-w-[380px] text-[clamp(17px,1.6vw,21px)] italic leading-snug text-zinc-600"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                {homeHero.taglineLine1}
                <br />
                {homeHero.taglineLine2}
              </motion.p>
            </motion.div>

            <motion.div
              className="hidden items-start justify-center pb-16 lg:flex"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <img
                src="/sarah-photo.png"
                alt="Sarah Broussard"
                className="w-[72%] max-w-md select-none object-contain"
                style={{ mixBlendMode: 'multiply' }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-zinc-100 bg-white py-5 shadow-[0_-4px_24px_rgba(0,0,0,0.03)]">
          <div className="marquee-track flex w-max items-center gap-16 whitespace-nowrap px-8">
            {[...marquee, ...marquee].flatMap((brand, i) => {
              const logoMap: Record<string, string> = {
                'Atlassian':  '/logos/atlassian.svg',
                'CS DISCO':   '/logos/csdisco.svg',
                'Shiseido':   '/logos/shiseido.svg',
                'F44':        '/logos/f44.svg',
                'Sweatpals':  '/logos/sweatpals.svg',
                'Full Story': '/logos/fullstory.svg',
                'Nars':       '/logos/nars.svg',
                'IDERA':      '/logos/idera.svg',
                'AgileCraft': '/logos/agilecraft.svg',
              }
              const src = logoMap[brand]
              return [
                src
                  ? <img key={`b${i}`} src={src} alt={brand} className="h-6 w-auto select-none opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
                  : <span key={`b${i}`} className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">{brand}</span>,
                <span key={`d${i}`} className="h-1 w-1 rounded-full bg-zinc-300 flex-shrink-0" />,
              ]
            })}
          </div>
        </section>

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
              {about.kicker}
            </motion.span>
            <motion.p
              variants={fadeUp}
              className="mt-10 text-[19px] font-light leading-[1.85] text-white/85"
            >
              {renderBold(about.body)}
            </motion.p>
          </motion.div>
          </div>
        </section>

        <section className="relative bg-zinc-50 py-24 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
          <div className="mx-auto w-full max-w-content px-5 sm:px-10">
            <motion.p
              className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {stats.kicker}
            </motion.p>

            <motion.div
              className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {stats.items.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="text-center lg:px-7">
                  <div
                    className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                    {stat.sublabelLine1}
                    <br />
                    {stat.sublabelLine2}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative bg-white py-24 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-10">
            <motion.div
              className="mb-14 flex items-baseline justify-between gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                {homeExp.kicker}
              </span>
              <span
                className="text-[13px] italic text-zinc-600"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {homeExp.eyebrow}
              </span>
            </motion.div>

            <motion.div
              className="grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {homeExp.entries.map((entry, i) => (
                <motion.div
                  key={entry.company}
                  variants={fadeUp}
                  className={`grid grid-cols-1 items-center gap-6 py-7 sm:grid-cols-[1fr_auto] ${
                    i === homeExp.entries.length - 1
                      ? 'border-y border-zinc-900/10'
                      : 'border-t border-zinc-900/10'
                  }`}
                >
                  <div className="text-left">
                    <div className="text-2xl font-semibold tracking-[-0.01em] text-zinc-900">
                      {entry.company}
                    </div>
                    <div className="text-[13px] text-zinc-600">{entry.role}</div>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                      {entry.years}
                    </span>
                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {entry.badges.map((badge) => (
                        <span
                          key={badge.text}
                          className={`inline-flex items-center rounded border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${
                            badge.prominent
                              ? 'border-zinc-900/60 text-zinc-900'
                              : 'border-zinc-900/20 text-zinc-600'
                          }`}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-10 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 border-b border-zinc-500/30 pb-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-900"
              >
                {homeExp.resumeLabel}
                <span className="text-[13px]">↓</span>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-zinc-900 py-28 text-center shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
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
              {cta.kicker}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-8 text-[clamp(34px,3.5vw,52px)] italic leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {cta.headline}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
              >
                {cta.primaryBtn.label}
                <span className="text-sm">→</span>
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
              >
                {cta.secondaryBtn.label}
                <span className="text-sm">→</span>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.08em] text-zinc-400"
            >
              {cta.contact.map((link) => (
                <a
                  key={link.label}
                  className="transition hover:text-white"
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
          </div>
        </section>
      </div>
    </Page>
  )
}
