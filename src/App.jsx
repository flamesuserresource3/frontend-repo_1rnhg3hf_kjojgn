import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Hero />
      <About />
      <Highlights />
      <Footer />
    </div>
  )
}

export default App
