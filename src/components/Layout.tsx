import type { PropsWithChildren } from 'react'
import BackToTop from './BackToTop'
import Footer from './Footer'
import NavBar from './NavBar'

type LayoutProps = PropsWithChildren

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}
