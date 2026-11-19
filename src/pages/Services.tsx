import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import content from '../data/content.json'
import EmailButton from '../components/EmailButton'

const { coreServices: coreServicesSection, packages: packagesSection, whyWorkWithMe: whySection, faqs: faqsSection, hero: servicesHero, bottomCta } = content.services
const coreServices = coreServicesSection.items
const packages = packagesSection.items
const whyWorkWithMe = whySection.items
const faqs = faqsSection.items

export default function Services() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 px-5 pb-20 pt-28 sm:px-10 sm:pt-36">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[130px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/15 blur-[110px]" />
        </div>

        <motion.div
          className="relative mx-auto max-w-content text-left"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500"
          >
            {servicesHero.kicker}
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            className="mb-7 text-[clamp(24px,2.5vw,36px)] font-bold leading-[1.12] tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {servicesHero.headline}
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            className="text-[17px] leading-[1.7] text-zinc-400"
          >
            {servicesHero.subtitle}
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
            className="mt-8"
          >
            <EmailButton label={servicesHero.ctaLabel} variant="primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-content">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            {coreServicesSection.kicker}
          </p>
          <h2 className="mb-12 text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {coreServicesSection.heading}
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <motion.div
                key={service.goal}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-lg font-semibold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {service.goal}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] leading-[1.6] text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-content">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            {packagesSection.kicker}
          </p>
          <h2 className="mb-12 text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {packagesSection.heading}
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 backdrop-blur-sm"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-6 rounded-full bg-violet-500 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="mb-1 text-lg font-semibold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {pkg.name}
                </h3>
                <p className="mb-5 text-[13px] text-zinc-500">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] leading-[1.6] text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-content">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              {whySection.kicker}
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {whySection.heading}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {whyWorkWithMe.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 transition-all hover:border-zinc-700/60 hover:bg-zinc-900/50"
              >
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              {faqsSection.kicker}
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {faqsSection.heading}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 overflow-hidden transition-all hover:border-zinc-700/60"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="text-[15px] font-medium leading-tight text-white">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === faq.question ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0 text-zinc-500"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-0">
                        <p className="text-[15px] leading-[1.7] text-zinc-400">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-zinc-950 px-5 py-24 text-center sm:px-10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <h2 className="mb-6 text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {bottomCta.headline}
          </h2>
          <p className="mb-10 text-[15px] leading-relaxed text-zinc-400">
            {bottomCta.body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <EmailButton label={bottomCta.primaryCta} variant="primary" />
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition hover:border-zinc-500 hover:text-white"
            >
              {bottomCta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
