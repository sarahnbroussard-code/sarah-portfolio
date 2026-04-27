import type { PropsWithChildren } from 'react'
import BackToTop from './BackToTop'
import Footer from './Footer'
import NavBar from './NavBar'

type LayoutProps = PropsWithChildren<{ fullWidth?: boolean }>

export default function Layout({ children, fullWidth }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <NavBar />
      <main
        className={
          fullWidth
            ? 'w-full'
            : 'mx-auto w-full max-w-6xl px-5 py-10'
        }
      >
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
