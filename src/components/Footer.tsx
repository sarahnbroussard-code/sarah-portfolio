export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 text-sm text-zinc-600 dark:border-zinc-800/70 dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-content flex-col gap-3 px-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Sarah Broussard</span>
          <div className="flex items-center gap-4">
            <a
              className="underline-offset-4 hover:underline"
              href="mailto:sarah.n.broussard@gmail.com"
            >
              Email
            </a>
            <a
              className="underline-offset-4 hover:underline"
              href="https://linkedin.com/in/sarah-broussard-2b678912"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="underline-offset-4 hover:underline"
              href="https://www.instagram.com/sarah_broussard/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
