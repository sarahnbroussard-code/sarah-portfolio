import { Link } from 'react-router-dom'
import Page from '../components/Page'

export default function NotFound() {
  return (
    <Page>
      <div className="grid gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="text-sm font-medium underline-offset-4 hover:underline"
        >
          Back home
        </Link>
      </div>
    </Page>
  )
}
