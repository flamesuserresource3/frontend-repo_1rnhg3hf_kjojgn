import { Instagram, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Tiger stripe background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #000000 0px, #000000 10px, #f59e0b 10px, #f59e0b 26px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
              IIT Madras BS • Student House
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Corbett House
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              A vibrant community inspired by the spirit of the tiger—bold, inclusive, and
              unstoppable. We bring learners together across India to collaborate, grow, and
              lead with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/corbett_iitm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 font-semibold text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 font-semibold text-amber-700 ring-1 ring-amber-200 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:corbett-sec@ds.study.iitm.ac.in"
                className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-2 font-semibold text-amber-700 ring-1 ring-amber-200 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                Contact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-yellow-400/20 blur-2xl" />
            <div className="relative rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-xl backdrop-blur">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-700">
                House Snapshot
              </div>
              <dl className="grid grid-cols-2 gap-4 text-gray-800">
                <div>
                  <dt className="text-sm text-gray-500">Groups</dt>
                  <dd className="text-2xl font-bold">~30</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Students / group</dt>
                  <dd className="text-2xl font-bold">~20</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Focus</dt>
                  <dd className="text-lg font-semibold">Community & Leadership</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Theme</dt>
                  <dd className="text-lg font-semibold">Tiger</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
