import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TextCascade } from '../components/KineticText'

const coreServices = [
  {
    goal: 'Diagnose & Discover',
    items: [
      'Usability check – Find out what\'s confusing your users.',
      'Experience audit – Get a detailed review with actionable fixes.',
      'Customer feedback – Learn directly from your customers.',
      'Competitive comparison – See how you stack up against others.',
    ],
  },
  {
    goal: 'Improve & Redesign',
    items: [
      'Website refresh (Basic & Full) – From light updates to full redesigns.',
      'Visual updates – Modernize the look and feel.',
      'Customer journey improvements – Make navigation easier and engagement stronger.',
      'Screen designs – Professional, polished page designs.',
    ],
  },
  {
    goal: 'Test & Scale',
    items: [
      'Landing pages that convert – Pages that drive action.',
      'Growth-focused design – Boost leads, sales, or sign-ups.',
      'Prototyping & testing – Gather real user feedback.',
      'Consistent look & feel – Ensure everything stays polished and on-brand.',
    ],
  },
]

const packages = [
  {
    name: 'Quick UX Wins',
    price: 'starting at $2.5k',
    items: [
      'UX Audit → Actionable recommendations in a week',
      'UX Research Study → Real user insights for better conversion',
      'Rapid Design Experiments → Homepage redesigns, A/B tests, and fast iterations for conversion wins',
    ],
    badge: 'Most popular',
  },
  {
    name: 'Redesign Packages',
    price: 'starting at $5k',
    items: [
      'Essentials → Lean UX approach that uses existing data and insights (no new research or testing cycles)',
      'Comprehensive → Full UX process that includes research and usability testing to validate decisions',
    ],
    badge: 'Long-term impact',
  },
  {
    name: 'Ongoing Support',
    price: 'pricing varies',
    items: [
      'UX Retainer → Ongoing strategy + design support',
      'Hourly Support → Flexible help for smaller needs',
    ],
    badge: null,
  },
]

const whyWorkWithMe = [
  {
    title: 'Tailored, business-driven UX',
    description: 'Not just aesthetics—real impact on engagement & conversion.',
  },
  {
    title: 'Efficiency & flexibility',
    description: 'No bloated agency processes, no junior hand-offs.',
  },
  {
    title: 'Strategic guidance',
    description: 'I don\'t just execute—I help you make smarter UX decisions.',
  },
  {
    title: 'A true partner',
    description: 'I collaborate, adapt, and find the right solutions for your budget & goals.',
  },
]

const faqs = [
  {
    question: 'How do I know which service is right for me?',
    answer: 'During our free discovery call, I\'ll assess your needs, goals, and project scope to recommend the best fit. Each package is designed for different stages—from quick wins to comprehensive redesigns.',
  },
  {
    question: 'How does payment work?',
    answer: 'I typically work with a 50% deposit to start and 50% on delivery. For ongoing support, we can set up monthly retainer arrangements. All terms are clearly outlined in the Scope of Work.',
  },
  {
    question: 'I have a limited budget—can I still work with you?',
    answer: 'Absolutely. I offer flexible options including the Quick UX Wins package starting at $2.5k, and hourly support for smaller needs. Let\'s discuss your budget during our discovery call to find the right approach.',
  },
  {
    question: 'Why does UX cost this much? Can\'t I get it cheaper elsewhere?',
    answer: 'Good UX is an investment, not an expense. It directly impacts conversion, retention, and customer satisfaction. My pricing reflects senior-level expertise without agency overhead—you get strategic guidance and polished deliverables that drive measurable results.',
  },
  {
    question: 'What\'s the timeline for a typical project?',
    answer: 'Timelines vary by scope. Quick UX Wins typically complete in 1-2 weeks, redesign packages range from 4-8 weeks depending on complexity. I\'ll provide a detailed timeline in your proposal.',
  },
  {
    question: 'Do you do branding or coding?',
    answer: 'I focus on UX and product design. For branding, I can collaborate with your brand team or recommend partners. For coding, I work closely with developers and provide design specs, but development is typically handled by your team or a partner agency.',
  },
  {
    question: 'Why should I hire you over using AI myself?',
    answer: 'AI is a powerful tool, and I use it extensively in my workflow. But AI lacks strategic context, business understanding, and the ability to navigate complex stakeholder dynamics. I bring 15+ years of experience, strategic thinking, and a human-centered approach that AI alone can\'t match.',
  },
  {
    question: 'Do you use AI in your workflow?',
    answer: 'Yes! I leverage AI tools for research synthesis, rapid prototyping, and ideation. This allows me to deliver results faster and explore more concepts. However, all strategic decisions and final deliverables are crafted with human expertise and quality assurance.',
  },
  {
    question: 'How involved do I need to be in the process?',
    answer: 'I believe in collaboration. You\'ll be involved at key checkpoints—discovery, concept review, and delivery. The level of involvement is flexible based on your preference and availability. I keep communication clear and efficient.',
  },
  {
    question: 'Wait... how do I know if I even need UX help?',
    answer: 'Signs you might need UX help: users are confused by your interface, conversion rates are low, customer feedback mentions usability issues, or you\'re launching a new product. Even if you\'re unsure, a free discovery call can help identify opportunities.',
  },
]

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

        <div className="relative mx-auto max-w-6xl text-left">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            SERVICES
          </p>
          <h1 className="mb-7 max-w-2xl text-[clamp(24px,2.5vw,36px)] font-bold leading-[1.12] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <TextCascade>Get strategic UX & product design without the agency price tag.</TextCascade>
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.7] text-zinc-400">
            I can help you transform your digital product with expert UX design. Let's create something cool together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200"
            >
              Book a free discovery call
            </Link>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            CORE DESIGN SERVICES
          </p>
          <h2 className="mb-12 text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Strategic design solutions for every stage
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
      <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              PACKAGES AND RATES
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Budget-friendly options
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 transition-all hover:border-zinc-700/60 hover:bg-zinc-900/50"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-6 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{pkg.name}</h3>
                <p className="mb-6 text-sm text-zinc-400">{pkg.price}</p>
                <ul className="mb-8 flex-grow space-y-3 text-center">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-center justify-center gap-3 text-[13px] leading-[1.6] text-zinc-500">
                      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-zinc-600 group-hover:bg-violet-400 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition hover:border-zinc-500 hover:text-white"
                >
                  Let's chat
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              WHY WORK WITH ME
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Strategic design that drives results
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
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              FAQs
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
            Ready to transform your product?
          </h2>
          <p className="mb-10 text-[15px] leading-relaxed text-zinc-400">
            Let's discuss how we can work together to achieve your design goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200"
            >
              Book a free discovery call
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition hover:border-zinc-500 hover:text-white"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
