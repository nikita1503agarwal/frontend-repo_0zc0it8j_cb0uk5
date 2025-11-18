import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer id="contact" className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} panchkalyan.store. All rights reserved.</p>
            <div className="text-sm text-white/60">
              Crafted with care. Minimal by nature.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
