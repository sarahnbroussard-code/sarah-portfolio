import { NavLink } from 'react-router-dom'

const navLinkBase =
  'text-[11px] font-light uppercase tracking-[0.18em] transition-colors'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[#fcfcfc]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-10">
        <NavLink
          to="/"
          className="text-[11px] font-light uppercase tracking-[0.18em] text-zinc-950 dark:text-zinc-50"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Sarah Broussard
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'text-zinc-950 dark:text-zinc-50'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`
            }
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience
          </NavLink>
          <NavLink
            to="/strategy"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'text-zinc-950 dark:text-zinc-50'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`
            }
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Strategy
          </NavLink>
          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              `${navLinkBase} ${
                isActive
                  ? 'text-zinc-950 dark:text-zinc-50'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`
            }
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Leadership
          </NavLink>
          <a
            href="/resume.pdf"
            className={`${navLinkBase} border-b border-zinc-900/40 pb-0.5 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-50/40 dark:text-zinc-400 dark:hover:border-zinc-50 dark:hover:text-zinc-200`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Resume
            <span className="ml-1 inline-block text-[10px] leading-none">↓</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
