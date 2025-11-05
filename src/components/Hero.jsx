import Spline from '@splinetool/react-spline'
import { Instagram, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Spline animated cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_0%,rgba(255,115,0,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-200 ring-1 ring-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-pulse" />
            Tiger House • IITM BS
          </div>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Corbett House
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-orange-50/90">
            A modern student community inspired by the tiger — bold, inclusive, and unstoppable.
            We connect learners across India to collaborate, grow, and lead with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com/corbett_iitm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 px-4 py-2 font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Instagram className="h-5 w-5" />
              Follow
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Linkedin className="h-5 w-5" />
              Connect
            </a>
            <a
              href="mailto:corbett-sec@ds.study.iitm.ac.in"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Mail className="h-5 w-5" />
              Contact
            </a>
          </div>
        </div>

        {/* Snapshot card */}
        <div className="relative ml-auto w-full max-w-md">
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/25 via-amber-400/20 to-red-500/25 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-200">House Snapshot</div>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs text-orange-200/80">Groups</dt>
                <dd className="text-2xl font-bold">~30</dd>
              </div>
              <div>
                <dt className="text-xs text-orange-200/80">Students / group</dt>
                <dd className="text-2xl font-bold">~20</dd>
              </div>
              <div>
                <dt className="text-xs text-orange-200/80">Focus</dt>
                <dd className="text-base font-semibold">Community & Leadership</dd>
              </div>
              <div>
                <dt className="text-xs text-orange-200/80">Theme</dt>
                <dd className="text-base font-semibold">Tiger</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
