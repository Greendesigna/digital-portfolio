import { useEffect } from 'react'
import { capabilities, projects, tools } from './content/portfolio'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export default function App() {
  // The page is drawn after it loads, so the browser can't jump to a #section link by itself.
  // Scroll to it once the sections exist, so links like /#work land in the right place.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
          <a className="text-sm font-semibold tracking-[-0.01em]" href="#top">
            Sara Yusuf
          </a>
          <nav
            aria-label="Portfolio sections"
            className="hidden items-center gap-7 text-sm text-[var(--muted)] sm:flex"
          >
            <a className="transition hover:text-[var(--ink)]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#about">
              About
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            download
            href={assetUrl('sara-yusuf-selected-portfolio-2026.pdf')}
          >
            Download PDF
          </a>
        </div>
      </header>

      <section
        className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12"
        id="top"
      >
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-[var(--accent-strong)] uppercase">
            Product, Service & Systems Designer
          </p>
          <h1 className="max-w-4xl text-6xl leading-[0.93] font-medium tracking-[-0.065em] text-balance sm:text-7xl lg:text-[6.4rem]">
            Connecting people, products and services.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            15+ years connecting user needs, business goals and technical realities across B2B SaaS,
            consumer products and complex services, from discovery through delivery.
          </p>
          <a
            className="mt-10 inline-flex min-h-12 items-center rounded-full bg-[var(--ink)] px-7 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            href="#work"
          >
            Explore selected work
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--surface)]">
          <img
            alt="Sara Yusuf"
            className="absolute inset-0 h-full w-full object-cover"
            src={assetUrl('sara-profile.jpg')}
          />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/90 p-5 backdrop-blur-md">
            <p className="text-xs font-semibold tracking-[0.15em] text-[var(--muted)] uppercase">
              Current focus
            </p>
            <p className="mt-2 text-lg font-medium">
              Design systems, complex services and accessible product experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] py-24 text-white sm:py-32" id="work">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-2">
            <h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Selected work</h2>
            <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">
              Bringing together research, strategy, design systems and front-end thinking to solve
              meaningful user and business challenges.
            </p>
          </div>

          <div className="mt-14 space-y-20">
            {projects.map((project, index) => (
              <article
                className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
                key={project.title}
              >
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-white/5">
                  <img
                    alt={project.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    src={assetUrl(project.image)}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-xs font-semibold tracking-[0.17em] text-[var(--accent-light)] uppercase">
                      {project.eyebrow}
                    </p>
                    <p className="text-sm text-white/35">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                  <h3 className="mt-5 text-4xl leading-tight font-medium tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-white/62">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/65"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 border-t border-white/15 pt-6">
                    <p className="text-xs font-semibold tracking-[0.13em] text-white/40 uppercase">
                      Impact
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">{project.impact}</p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                    {project.links.map((link) => (
                      <a
                        className="border-b border-white/30 pb-1 text-sm font-semibold transition hover:border-white"
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32" id="about">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-strong)] uppercase">
              About
            </p>
            <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
              Making complexity feel clear.
            </h2>
          </div>
          <div>
            <div className="space-y-6 text-xl leading-9 text-[var(--muted)]">
              <p>
                I help teams make complex products and services easier to understand, use and
                deliver. I connect user needs, business goals and technical
                realities to create practical experiences that move from design into implementation.
              </p>
              <p>
                My work spans product discovery, research, service design, interaction design,
                prototyping, front-end implementation and design systems.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-3">
              {[
                ['35+', 'Projects delivered'],
                ['3', 'UI libraries managed'],
                ['15+', 'Years of experience'],
              ].map(([value, label]) => (
                <div className="rounded-2xl bg-[var(--surface)] p-5 sm:p-7" key={label}>
                  <p className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">{value}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)] sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-24 sm:py-32" id="skills">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-strong)] uppercase">
              Skills
            </p>
            <h2 className="mt-4 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">
              From framing the problem to shipping the experience.
            </h2>
          </div>
          <div className="mt-14 grid border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                className="border-b border-[var(--line)] py-8 md:px-8 md:first:pl-0 lg:nth-[3n+1]:pl-0"
                key={capability.number}
              >
                <p className="text-xs font-semibold text-[var(--accent-strong)]">
                  {capability.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <p className="mr-4 text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              Tools
            </p>
            {tools.map((tool) => (
              <span
                className="rounded-full bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]"
                key={tool}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12" id="contact">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--accent-strong)] px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
            Start a conversation
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-5xl leading-[1.02] font-medium tracking-[-0.055em] sm:text-7xl">
                Let’s make something useful, clear and lasting.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                Whether you’re shaping a product, transforming a service or scaling a design system,
                I’d love to hear what you’re working on.
              </p>
            </div>
            <div className="space-y-3 lg:justify-self-end">
              <a
                className="block border-b border-white/25 py-3 text-lg font-medium transition hover:border-white"
                href="mailto:sarayusuf@mail.com"
              >
                sarayusuf@mail.com ↗
              </a>
              <a
                className="block border-b border-white/25 py-3 text-lg font-medium transition hover:border-white"
                href="https://linkedin.com/in/syusuf23"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <a
                className="block border-b border-white/25 py-3 text-lg font-medium transition hover:border-white"
                href="https://github.com/Greendesigna"
                rel="noreferrer"
                target="_blank"
              >
                Github ↗
              </a>
              <a
                className="block border-b border-white/25 py-3 text-lg font-medium transition hover:border-white"
                download
                href={assetUrl('sara-yusuf-cv-2026.pdf')}
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-5 py-8 text-sm text-[var(--muted)] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Sara Yusuf</p>
          <p>Product · Service · Systems</p>
        </div>
      </footer>
    </main>
  )
}
