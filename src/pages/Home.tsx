import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Page from '../components/Page'

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
        <section className="relative mesh-gradient bg-[#fcfcfc] px-5 pt-28 shadow-[0_4px_24px_rgba(0,0,0,0.03)] sm:px-10 sm:pt-36">
          <div className="mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-2">
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
                Product Design Leader
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(44px,5vw,72px)] font-bold uppercase leading-[1.05] tracking-[0.02em] text-zinc-900"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Sarah Broussard
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600"
              >
                Enterprise · SaaS · AI · Design Strategy
              </motion.p>

              <motion.div variants={fadeUp} className="h-px w-16 bg-zinc-900/10" />

              <motion.p
                variants={fadeUp}
                className="max-w-[380px] text-[clamp(17px,1.6vw,21px)] italic leading-snug text-zinc-600"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
              >
                15 years shipping enterprise software.
                <br />
                Still picking food off my shirt.
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
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Atlassian</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">CS DISCO</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Shiseido</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">F44</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Sweatpals</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Full Story</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Nars</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">IDERA</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">AgileCraft</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            {/* duplicate for seamless loop */}
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Atlassian</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">CS DISCO</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Shiseido</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">F44</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Sweatpals</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Full Story</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">Nars</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">IDERA</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">AgileCraft</span>
            <span className="h-1 w-1 rounded-full bg-zinc-300" />
          </div>
        </section>

        <section className="relative bg-zinc-900 px-5 py-24 text-center shadow-[0_-4px_24px_rgba(0,0,0,0.06)] sm:px-10">
          <motion.div
            className="mx-auto w-full max-w-3xl"
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
              Lead Product Designer with{' '}
              <strong className="font-medium text-white">15+ years</strong> driving enterprise
              and SaaS product strategy across AI, legal tech, beauty, and developer tools. I
              partner with product, engineering, and business leadership to turn ambiguous,
              complex problems into experiences that{' '}
              <strong className="font-medium text-white">drive adoption, reduce churn, and scale.</strong>{' '}
              My work has contributed to two publicly traded companies and one acquisition — and
              I've shipped across healthcare, fintech, enterprise software, and consumer platforms.
            </motion.p>
          </motion.div>
        </section>

        <section className="relative bg-zinc-50 px-5 py-24 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] sm:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <motion.p
              className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              By the numbers
            </motion.p>

            <motion.div
              className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={fadeUp} className="text-center lg:px-7">
                <div
                  className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  15+
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                  Years Experience
                </div>
                <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                  Enterprise &amp; SaaS
                  <br />
                  product design leadership
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center lg:px-7">
                <div
                  className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  2
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                  Public / IPO Companies
                </div>
                <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                  Atlassian (NASDAQ: TEAM)
                  <br />
                  CS DISCO (IPO 2021, ~$2.2B)
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center lg:px-7">
                <div
                  className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  1
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                  Acquisition
                </div>
                <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                  AgileCraft → Atlassian (2019)
                  <br />
                  Became Jira Align
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center lg:px-7">
                <div
                  className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  $2.2B
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                  CS DISCO Valuation
                </div>
                <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                  IPO 2021
                  <br />
                  Legal tech platform
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center lg:px-7">
                <div
                  className="text-[clamp(44px,4.5vw,68px)] font-bold leading-none text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  60+
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900">
                  Enterprise Products
                </div>
                <div className="mt-2 text-[12px] leading-relaxed text-zinc-600">
                  IDERA Software
                  <br />
                  Design leadership
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-white px-5 py-24 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] sm:px-10">
          <div className="mx-auto w-full max-w-3xl">
            <motion.div
              className="mb-14 flex items-baseline justify-between gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                Professional Experience
              </span>
              <span
                className="text-[13px] italic text-zinc-600"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Selected companies
              </span>
            </motion.div>

            <motion.div
              className="grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 items-center gap-6 border-t border-zinc-900/10 py-7 sm:grid-cols-[1fr_auto]"
              >
                <div className="text-left">
                  <div className="text-2xl font-semibold tracking-[-0.01em] text-zinc-900">
                    Atlassian
                  </div>
                  <div className="text-[13px] text-zinc-600">
                    Senior Product Designer — Jira Align
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                    2021 — Present
                  </span>
                  <span className="inline-flex items-center rounded border border-zinc-900/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-900">
                    NASDAQ: TEAM
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 items-center gap-6 border-t border-zinc-900/10 py-7 sm:grid-cols-[1fr_auto]"
              >
                <div className="text-left">
                  <div className="text-2xl font-semibold tracking-[-0.01em] text-zinc-900">
                    FullStory
                  </div>
                  <div className="text-[13px] text-zinc-600">Senior Product Designer</div>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                    2020 — 2021
                  </span>
                  <span className="inline-flex items-center rounded border border-zinc-900/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                    $1.8B Valuation
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 items-center gap-6 border-t border-zinc-900/10 py-7 sm:grid-cols-[1fr_auto]"
              >
                <div className="text-left">
                  <div className="text-2xl font-semibold tracking-[-0.01em] text-zinc-900">
                    Shiseido
                  </div>
                  <div className="text-[13px] text-zinc-600">Senior Product Designer</div>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                    2019 — 2020
                  </span>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="inline-flex items-center rounded border border-zinc-900/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                      Global Brand
                    </span>
                    <span className="inline-flex items-center rounded border border-zinc-900/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                      TYO: 4911
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 items-center gap-6 border-y border-zinc-900/10 py-7 sm:grid-cols-[1fr_auto]"
              >
                <div className="text-left">
                  <div className="text-2xl font-semibold tracking-[-0.01em] text-zinc-900">
                    CS DISCO
                  </div>
                  <div className="text-[13px] text-zinc-600">Senior Product Designer</div>
                </div>
                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                    2016 — 2019
                  </span>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <span className="inline-flex items-center rounded border border-zinc-900/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-900">
                      IPO 2021
                    </span>
                    <span className="inline-flex items-center rounded border border-zinc-900/60 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-900">
                      NYSE: LAW
                    </span>
                    <span className="inline-flex items-center rounded border border-zinc-900/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                      $2.2B Valuation
                    </span>
                  </div>
                </div>
              </motion.div>
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
                Show Earlier Experience
                <span className="text-[13px]">↓</span>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="relative bg-zinc-900 px-5 py-24 text-center shadow-[0_-4px_24px_rgba(0,0,0,0.12)] sm:px-10">
          <motion.div
            className="mx-auto w-full max-w-3xl"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400"
            >
              Ready to go deeper?
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-8 text-[clamp(34px,3.5vw,52px)] italic leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Explore the full experience.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mt-14 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
              >
                View case studies
                <span className="text-sm">→</span>
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
              >
                View Detailed Experience
                <span className="text-sm">→</span>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.08em] text-zinc-400"
            >
              <a className="transition hover:text-white" href="mailto:sarah.n.broussard@gmail.com">
                Email
              </a>
              <a
                className="transition hover:text-white"
                href="https://linkedin.com/in/sarahbroussard"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="transition hover:text-white"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </Page>
  )
}
