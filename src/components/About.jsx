export default function About() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Corbett House
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Corbett House is one of the twelve student houses under the IIT Madras BS Degree
            Programme, named after the renowned Corbett National Park. Built for learners
            spread across India, our house system nurtures community, collaboration, and
            peer support—helping students connect, grow, and thrive together.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-amber-100 bg-amber-50/50 p-6 sm:grid-cols-3">
          <div>
            <div className="text-3xl font-extrabold text-amber-700">~30</div>
            <div className="text-sm font-medium text-gray-600">Active groups</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-700">~20</div>
            <div className="text-sm font-medium text-gray-600">Students per group</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-700">12</div>
            <div className="text-sm font-medium text-gray-600">Houses in the programme</div>
          </div>
        </div>

        <p className="mt-6 text-gray-700">
          We bring together learners from similar regions to collaborate on academics and
          extracurriculars, exchange resources, and support each other. Every year, members
          elect a Secretary and Deputy Secretary to represent the house in the Upper House
          Council—coordinating initiatives that enrich student life across the programme.
        </p>
      </div>
    </section>
  )
}
