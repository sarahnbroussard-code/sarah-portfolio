import { NavLink } from 'react-router-dom'

const navLinkBase =
  'text-[11px] font-light uppercase tracking-[0.18em] transition-colors pb-0.5 border-b rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-50'

const fontStyle = { fontFamily: "'Inter', sans-serif" }

function navClass({ isActive }: { isActive: boolean }) {
  return `${navLinkBase} ${
    isActive
      ? 'text-zinc-950 border-zinc-950 dark:text-zinc-50 dark:border-zinc-50'
      : 'text-zinc-600 border-transparent hover:text-zinc-900 hover:border-zinc-900/40 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-200/40'
  }`
}

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fcfcfc] px-5 sm:px-10">
      <div className="mx-auto flex w-full max-w-content items-center justify-between gap-6 py-5 overflow-x-auto">
        <NavLink
          to="/"
          className="shrink-0 text-[11px] font-light uppercase tracking-[0.18em] text-zinc-950 dark:text-zinc-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
          style={fontStyle}
        >
          Sarah <span className="max-[720px]:hidden">Broussard</span>
        </NavLink>

        <nav className="flex shrink-0 items-center gap-6">
          <NavLink to="/experience" className={navClass} style={fontStyle}>
            Experience
          </NavLink>
          <NavLink to="/services" className={navClass} style={fontStyle}>
            Services
          </NavLink>
          <NavLink to="/strategy" className={navClass} style={fontStyle}>
            Strategy
          </NavLink>
          <NavLink to="/leadership" className={navClass} style={fontStyle}>
            Leadership
          </NavLink>
          <a
            href="/resume.pdf"
            className={`${navLinkBase} border-zinc-900/40 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-50/40 dark:text-zinc-400 dark:hover:border-zinc-50 dark:hover:text-zinc-200`}
            style={fontStyle}
          >
            <span className="max-[720px]:hidden">Resume</span>
            <span className="ml-1 inline-block text-[10px] leading-none max-[720px]:ml-0">↓</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
