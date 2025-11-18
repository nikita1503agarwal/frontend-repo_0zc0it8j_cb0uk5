import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 shadow-lg ring-1 ring-white/20"></div>
              <span className="font-semibold tracking-tight text-white">panchkalyan.store</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:block">
              <a href="#cta" className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:shadow-md">
                Get Started
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:shadow-md">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
