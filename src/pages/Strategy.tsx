import Page from '../components/Page'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TextCascade } from '../components/KineticText'

const tools = [
  { name: 'Windsurf', desc: 'AI-native IDE for rapid prototyping', icon: '⚡' },
  { name: 'Claude', desc: 'Conversational AI for design reasoning', icon: '◆' },
  { name: 'Figma Make', desc: 'AI-generated design from prompts', icon: '◇' },
  { name: 'V0.dev', desc: 'Instant UI code from descriptions', icon: '○' },
  { name: 'NotebookLM', desc: 'Intelligent research synthesis', icon: '◎' },
]

const sprintSteps = [
  { label: '01', title: 'Map', body: 'Align teams on long-term goals and identify critical areas for AI integration in design workflows.' },
  { label: '02', title: 'Sketch', body: 'Generate diverse solutions using AI tools for rapid concept exploration and creative divergence.' },
  { label: '03', title: 'Decide', body: 'Evaluate and select the most promising AI-human collaboration approaches through structured review.' },
  { label: '04', title: 'Prototype', body: 'Build production-ready prototypes using AI-assisted tools in record time.' },
  { label: '05', title: 'Test', body: 'Validate with real teams, measure productivity gains, and refine based on quantitative results.' },
]

export default function Strategy() {
  return (
    <Page>
      <div className="w-full">
        {/* HERO */}
        <section className="relative overflow-hidden bg-zinc-950 px-5 pb-20 pt-28 sm:px-10 sm:pt-36">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[130px]" />
            <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/15 blur-[110px]" />
          </div>

          <div className="relative mx-auto max-w-6xl text-left">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              DESIGN LEADERSHIP JOURNEY
            </p>
            <h1 className="mb-7 max-w-4xl text-[clamp(36px,4.2vw,58px)] font-bold leading-[1.06] tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              <TextCascade>Over 15+ years leading design teams through two IPOs and multiple acquisitions</TextCascade>
            </h1>
            <p className="max-w-2xl text-[17px] leading-[1.7] text-zinc-400">
              Specializing in AI-powered workflows and enterprise-scale product design. I bridge creative vision with technical implementation through modern AI-assisted development.
            </p>
          </div>
        </section>

        {/* APPROACH */}
        <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  CURRENT ROLE
                </p>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Senior Product Designer at Atlassian
                </h2>
                <p className="text-[15px] leading-[1.75] text-zinc-400">
                  Leading enterprise-scale initiatives for Jira Align, an agile planning platform serving thousands of engineering teams. I drive AI integration strategy and cross-functional alignment across product, engineering, and design.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm">
                  <p className="mb-2 text-[32px] font-bold text-white">2</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Public IPOs</p>
                  <p className="mt-1 text-[13px] text-zinc-600">Atlassian · CS DISCO</p>
                </div>
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm">
                  <p className="mb-2 text-[32px] font-bold text-white">60+</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Products Shipped</p>
                  <p className="mt-1 text-[13px] text-zinc-600">Enterprise · SaaS · Consumer</p>
                </div>
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm">
                  <p className="mb-2 text-[32px] font-bold text-white">15+</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Years Experience</p>
                  <p className="mt-1 text-[13px] text-zinc-600">Design leadership</p>
                </div>
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm">
                  <p className="mb-2 text-[32px] font-bold text-white">AI</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">Workflows</p>
                  <p className="mt-1 text-[13px] text-zinc-600">Powered by Claude · Windsurf</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-POWERED REVOLUTION */}
        <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  AI-POWERED DESIGN REVOLUTION
                </p>
                <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Empowering High-Performance Design Teams
                </h2>
              </div>
            </div>

            <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700/60 hover:bg-zinc-900/50"
                >
                  <div className="mb-4 text-2xl text-zinc-600 transition-colors group-hover:text-white">{t.icon}</div>
                  <h3 className="mb-1 text-base font-semibold tracking-tight text-white">{t.name}</h3>
                  <p className="text-[13px] leading-relaxed text-zinc-500">{t.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="max-w-3xl text-[15px] leading-[1.75] text-zinc-400">
              I build AI-augmented design sprint playbooks that compress weeks of work into days. By combining 
              <span className="text-zinc-300"> Windsurf</span> with 
              <span className="text-zinc-300"> Claude</span> for reasoning, 
              <span className="text-zinc-300"> Figma Make</span> and 
              <span className="text-zinc-300"> V0.dev</span> for rapid prototyping, and 
              <span className="text-zinc-300"> NotebookLM</span> for research synthesis, my teams explore 10x more concepts and ship validated work in record time.
            </p>
          </div>
        </section>

        {/* SPRINT METHODOLOGY */}
        <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              AI-ENHANCED DESIGN SPRINT
            </p>
            <h2 className="mb-14 text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              A Five-Day Methodology
            </h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {sprintSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group relative rounded-2xl border border-zinc-800/40 bg-zinc-900/20 p-7 transition-all duration-500 hover:border-zinc-700/60 hover:bg-zinc-900/40"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700/50 bg-zinc-900 text-[11px] font-bold text-zinc-500 group-hover:border-zinc-500 group-hover:text-white">
                      {step.label}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-zinc-500">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE SCALE */}
        <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
                  ENTERPRISE SCALE & BUSINESS IMPACT
                </p>
                <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Career Impact Summary
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <p className="text-[15px] leading-[1.75] text-zinc-400">
                    Led design for <span className="font-medium text-zinc-300">Jira Align</span> enterprise agile planning, serving thousands of engineering teams across Fortune 500 companies.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <p className="text-[15px] leading-[1.75] text-zinc-400">
                    Shipped <span className="font-medium text-zinc-300">60+ products</span> across AI, legal tech, beauty, and developer tools — two of which reached public IPO.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <p className="text-[15px] leading-[1.75] text-zinc-400">
                    Scaled design teams from 2 to 12+ while maintaining velocity, quality, and a culture of craft-first execution.
                  </p>
                </div>
              </div>
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
              Explore the work.
            </h2>
            <p className="mb-10 text-[15px] leading-relaxed text-zinc-400">
              See how AI-powered design sprints and enterprise-scale thinking translate into shipped products.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-zinc-950 transition hover:bg-zinc-200"
              >
                View Case Studies
                <span>→</span>
              </Link>
              <Link
                to="/leadership"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-zinc-400 transition hover:border-zinc-500 hover:text-white"
              >
                Leadership
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
