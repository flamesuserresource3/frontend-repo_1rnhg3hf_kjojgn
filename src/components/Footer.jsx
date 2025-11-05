export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <div className="font-semibold text-gray-900">Corbett House • IIT Madras BS</div>
          <p className="text-sm text-gray-600">
            Built by students, for students — inspired by the tiger.
          </p>
        </div>
        <div className="text-sm text-gray-700">
          <a href="mailto:corbett-sec@ds.study.iitm.ac.in" className="hover:text-amber-700">corbett-sec@ds.study.iitm.ac.in</a>
          <span className="mx-2">•</span>
          <a href="mailto:corbett-ds@ds.study.iitm.ac.in" className="hover:text-amber-700">corbett-ds@ds.study.iitm.ac.in</a>
        </div>
      </div>
    </footer>
  )
}
