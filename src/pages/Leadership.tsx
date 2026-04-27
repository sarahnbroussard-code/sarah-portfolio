import Page from '../components/Page'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ExpensiveCard from '../components/ExpensiveCard'
import { TextCascade } from '../components/KineticText'
import { caseStudies } from '../data/caseStudies'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2',   label: 'Public IPOs' },
  { value: '60+', label: 'Products Shipped' },
  { value: '4',   label: 'Industries' },
]

const recommendations = [
  {
    name: 'Magen Russell',
    title: 'Principal Product Designer',
    company: 'Realtor.com',
    initials: 'MR',
    color: 'bg-violet-100 text-violet-700',
    quote: "The magic of Sarah is her ability to unite and create incredible bonds with people. She uses these connections to lead with clarity and achieve fantastic results. Her capacity for empathy and compassion alongside her drive and focus to break down complex business problems make her an incredible force. She continually advocated for her team and her mentorship was so impactful to me and my career.",
  },
  {
    name: 'Lindsey Boyer',
    title: 'Senior Product Designer',
    company: '',
    initials: 'LB',
    color: 'bg-rose-100 text-rose-700',
    quote: "Sarah Broussard is truly an exceptional thinker, art director and all-around creative brain. When presented with a challenge, she tackles it with a keen eye for design, a ridiculous sense of humor and ideas that will make you wish you had thought of them first. She is never afraid to say exactly what she's thinking, and her honesty and passion for new ideas are something to be admired.",
  },
  {
    name: 'Dennis Chatham',
    title: 'Product & Design Leader',
    company: '',
    initials: 'DC',
    color: 'bg-sky-100 text-sky-700',
    quote: "Sarah is a thoughtful, talented designer who is strong in both visual and information design. She is also one of the kindest people you can work with. I hope to work with her again in the future.",
  },
  {
    name: 'Jonathan Spies',
    title: 'VP of Engineering',
    company: 'Cloudflare',
    initials: 'JS',
    color: 'bg-orange-100 text-orange-700',
    quote: "Sarah is a pleasure to work with. She produces great quality, great looking design and branding both from spec and a clean slate. She's easy to work with and communicate with and always delivers when needed.",
  },
  {
    name: 'Josh Dale',
    title: 'Engineering Manager II',
    company: 'onXmaps',
    initials: 'JD',
    color: 'bg-emerald-100 text-emerald-700',
    quote: "Sarah helped bridge the gap between mobile developer and designer with her detail oriented designs, ability to make adjustments on the fly for screen specifications, and her awesome creativity. I would recommend her work to anyone looking to take their mobile application to the next level.",
  },
]

export default function Leadership() {
  return (
    <Page>
      <div className="w-full">

        {/* HERO — full bleed image with text overlay */}
        <section className="relative w-full overflow-hidden" style={{ height: '945px', maxHeight: '945px' }}>
          <img
            src="/Leadership.webp"
            alt="Sarah Broussard working"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ width: '1418px', maxWidth: '100%' }}
            loading="eager"
          />
          {/* dark gradient scrim for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

          {/* overlay text — white frosted pill */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 sm:px-16 sm:pb-20">
            <div className="inline-block max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-md ring-1 ring-white/20">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
                Product Design Leadership
              </p>
              <h1
                className="mb-4 text-[clamp(36px,4.5vw,64px)] font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                <TextCascade>Sarah Broussard</TextCascade>
              </h1>
              <p className="max-w-md text-[16px] leading-[1.75] text-white/80">
                15+ years shipping enterprise software across AI, legal tech, beauty, and developer tools.
              </p>
            </div>
          </div>
        </section>

        {/* BY THE NUMBERS — card grid inspired by reference */}
        <section className="bg-white px-8 py-20 sm:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-400">(About)</p>
                <h2
                  className="text-[clamp(28px,3vw,44px)] font-bold leading-tight tracking-tight text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  The Designer Behind<br className="hidden sm:block" /> the Work
                </h2>
              </div>
              <p className="text-[13px] font-medium tracking-wide text-zinc-400">Achievements That Speak</p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 lg:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-2xl bg-zinc-100 p-8"
                >
                  <div
                    className="mb-3 text-[clamp(40px,4vw,60px)] font-bold leading-none tracking-tight text-zinc-900"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CASE STUDY PREVIEWS */}
        <section className="relative bg-zinc-50 px-8 py-24 sm:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">
                  Selected Work
                </p>
                <h2
                  className="text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-zinc-900"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Case Studies
                </h2>
              </div>
              <Link
                to="/experience"
                className="hidden text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-400 transition hover:text-zinc-900 sm:block"
              >
                View all →
              </Link>
            </div>
            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  light
                />
              ))}
            </div>
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="bg-white px-8 py-24 sm:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-16">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">Recommendations</p>
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
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${rec.color}`}>
                      {rec.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-zinc-900">{rec.name}</p>
                      <p className="text-[11px] text-zinc-500">{rec.title}{rec.company ? ` · ${rec.company}` : ''}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-zinc-900 px-8 py-24 text-center sm:px-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-[150px]" />
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
              className="mb-6 text-[clamp(28px,3vw,42px)] font-bold leading-tight tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Let's build something extraordinary.
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-[15px] leading-relaxed text-zinc-400">
              Open to senior product design roles, advisory positions, and ambitious collaborations.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="mailto:sarah.n.broussard@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </Page>
  )
}
