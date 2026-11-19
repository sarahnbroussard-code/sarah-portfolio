import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const tools = [
  { name: 'MD Files with Rules', desc: 'Structured markdown documentation that captures design systems, user flows, and interaction patterns. These living documents serve as the foundation for consistent, scalable design implementation across projects.', icon: '🤖' },
  { name: 'Windsurf', desc: 'Next-generation development environment that accelerates the transition from design to code. Enables rapid prototyping and iteration with seamless integration between design thinking and technical implementation.', icon: '🌊' },
  { name: 'Figma MCP', desc: 'Model Context Protocol integration with Figma that enables seamless design-to-code workflows. I spend extensive time in Figma designing fragments, parts, components, and complete design systems that connect directly to development environments, ensuring pixel-perfect implementation and real-time collaboration.', icon: '🎨' },
  { name: 'Claude Code', desc: 'AI-powered coding assistant that transforms design specifications into production-ready code. Leverages advanced language models to generate clean, maintainable code that bridges the gap between design intent and technical execution.', icon: '💻' },
  { name: 'Claude Design', desc: 'AI-powered assistance that transforms abstract ideas into high-fidelity, interactive prototypes through simple conversational dialogue, eliminating the steep learning curve of traditional design software. By integrating your Figma design system or from MD files, it automatically aligns every generated asset with your specific brand colors and typography for instant professional consistency.', icon: '🎭' },
  { name: 'Design Push', desc: 'The fastest, simplest way to create a production-ready design system for your brand or product', icon: '🚀' },
  { name: 'NotebookLM', desc: 'Intelligent research synthesis', icon: '📓' },
  { name: 'V0', desc: 'Instant UI code from descriptions', icon: '⚡' },
]

const sprintSteps = [
  { label: '01', title: 'Map', body: 'Align teams on long-term goals and identify critical areas for AI integration in design workflows.' },
  { label: '02', title: 'Sketch', body: 'Generate diverse solutions using AI tools for rapid concept exploration and creative divergence.' },
  { label: '03', title: 'Decide', body: 'Evaluate and select the most promising AI-human collaboration approaches through structured review.' },
  { label: '04', title: 'Prototype', body: 'Build production-ready prototypes using AI-assisted tools in record time.' },
  { label: '05', title: 'Test', body: 'Validate with real teams, measure productivity gains, and refine based on quantitative results.' },
]

const statTiles = [
  { value: '2',   label: 'Public IPOs',       sub: 'Atlassian · CS DISCO' },
  { value: '60+', label: 'Products Shipped',  sub: 'Enterprise · SaaS · Consumer' },
  { value: '15+', label: 'Years Experience',  sub: 'Design leadership' },
  { value: 'AI',  label: 'Workflows',         sub: 'Powered by Claude · Windsurf' },
]

export default function Strategy() {
  return (
    <div className="w-full">

      {/* SECTION 1: Strategic Design Process */}
      <section className="relative overflow-hidden bg-zinc-950 px-5 pb-20 pt-28 text-center sm:px-10 sm:pt-36">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[130px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full bg-rose-500/15 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-content">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[clamp(32px,4vw,56px)] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Strategic design process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 max-w-2xl text-[17px] leading-[1.75] text-zinc-300"
          >
            A proven strategic framework for translating ambitious product visions into actionable, phased roadmaps. Used across multiple companies to align stakeholders, define user journeys, and drive measurable growth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-16 max-w-2xl text-[15px] leading-[1.75] text-zinc-400"
          >
            I build AI-augmented design sprint playbooks that compress weeks of work into days. By combining Windsurf with Claude for reasoning, Figma Make and V0.dev for rapid prototyping, and NotebookLM for research synthesis, my teams explore 10x more concepts and ship validated work in record time.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {statTiles.map((tile, i) => (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm"
              >
                <p className="mb-2 text-[32px] font-bold text-white">{tile.value}</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">{tile.label}</p>
                <p className="mt-1 text-[13px] text-zinc-600">{tile.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Career Impact Summary */}
      <section className="relative bg-zinc-950 px-5 py-24 text-center sm:px-10">
        <div className="mx-auto max-w-content">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            ENTERPRISE SCALE & BUSINESS IMPACT
          </p>
          <h2 className="mb-12 text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Career Impact Summary
          </h2>
          <div className="mx-auto flex flex-col items-center gap-6">
            <div className="flex items-start gap-4 text-left">
              <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
              <p className="text-[15px] leading-[1.75] text-zinc-400">
                Led design for <span className="font-medium text-zinc-300">Jira Align</span> enterprise agile planning, serving thousands of engineering teams across Fortune 500 companies.
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
              <p className="text-[15px] leading-[1.75] text-zinc-400">
                Shipped <span className="font-medium text-zinc-300">60+ products</span> across AI, legal tech, beauty, and developer tools — two of which reached public IPO.
              </p>
            </div>
            <div className="flex items-start gap-4 text-left">
              <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500" />
              <p className="text-[15px] leading-[1.75] text-zinc-400">
                Scaled design teams from 2 to 12+ while maintaining velocity, quality, and a culture of craft-first execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AI-Enhanced Design Sprint */}
      <section className="relative border-y border-zinc-800/60 bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-content">
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
                transition={{ duration: 0.6, delay: i * 0.1 }}
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

      {/* SECTION 4: AI-Powered Design Revolution */}
      <section className="relative bg-zinc-950 px-5 py-24 sm:px-10">
        <div className="mx-auto max-w-content text-center">
          <div className="mb-14">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
              AI-POWERED DESIGN REVOLUTION
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-bold leading-tight tracking-tight text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Empowering High-Performance Design Teams
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700/60 hover:bg-zinc-900/50"
              >
                <div className="mb-4 text-2xl text-zinc-600 transition-colors group-hover:text-white">{t.icon}</div>
                <h3 className="mb-1 text-base font-semibold tracking-tight text-white">{t.name}</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">{t.desc}</p>
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
            Explore the work.
          </h2>
          <p className="mb-10 text-[15px] leading-relaxed text-zinc-400">
            See how AI-powered design sprints and enterprise-scale thinking translate into shipped products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
            >
              View Case Studies
              <span className="text-sm">→</span>
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900"
            >
              View Detailed Experience
              <span className="text-sm">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
