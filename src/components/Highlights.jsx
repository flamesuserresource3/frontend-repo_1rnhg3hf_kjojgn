import { Users, BookOpen, Calendar, Trophy, Mail } from 'lucide-react'

export default function Highlights() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-amber-50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What makes us roar
        </h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          From virtual meetups to leadership development, our culture builds confidence,
          connection, and real-world skills.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Users className="h-6 w-6 text-amber-700" />}
            title="Community"
            desc="Regional groups create an inclusive space to collaborate, share resources, and grow together."
          />
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-amber-700" />}
            title="Peer Learning"
            desc="Study circles, discussions, and mentorship to strengthen academics beyond the classroom."
          />
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-amber-700" />}
            title="Engagement"
            desc="Regular virtual meetups, interactive sessions, and house-wide activities all year round."
          />
          <FeatureCard
            icon={<Trophy className="h-6 w-6 text-amber-700" />}
            title="Leadership"
            desc="Elected Secretary & Deputy Secretary represent the house in the Upper House Council."
          />
        </div>

        <div className="mt-12 rounded-2xl border border-amber-200 bg-white/70 p-6 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-semibold text-gray-900">Get involved</div>
              <p className="text-gray-700">
                Have an idea or want to host a session? Reach out and we’ll help you make it happen.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:corbett-sec@ds.study.iitm.ac.in"
                className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 font-semibold text-white shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                Write to Secretary
              </a>
              <a
                href="mailto:corbett-ds@ds.study.iitm.ac.in"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-semibold text-amber-700 ring-1 ring-amber-200 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <Mail className="h-5 w-5" />
                Deputy Secretary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 inline-flex rounded-lg bg-amber-50 p-2 ring-1 ring-amber-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">{desc}</p>
    </div>
  )
}
