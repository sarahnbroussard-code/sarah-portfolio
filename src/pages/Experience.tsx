import Page from '../components/Page'
import { caseStudies } from '../data/caseStudies'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <Page>
      <section className="grid gap-8">
        <header className="grid gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-zinc-900">
            Experience
          </h1>
          <p className="max-w-2xl text-zinc-700">
            Case studies and product design work.
          </p>
        </header>

        <div className="grid gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              to={`/experience/${cs.slug}`}
              className="group block"
            >
              <div className="grid gap-4">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {cs.title}
                </h2>
                <p className="text-sm text-zinc-700">
                  {cs.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  )
}
