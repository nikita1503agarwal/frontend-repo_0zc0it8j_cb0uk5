import { Shield, Sparkles, Gauge, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trustworthy by design',
    desc: 'Thoughtful layouts, refined motion, and a flawless experience across devices.',
  },
  {
    icon: Sparkles,
    title: 'Polished animations',
    desc: 'Micro-interactions that feel natural and purposeful—never flashy, always elegant.',
  },
  {
    icon: Gauge,
    title: 'Performance focused',
    desc: 'Fast, accessible, and optimized so your audience never waits.',
  },
  {
    icon: Globe,
    title: 'Ready to grow',
    desc: 'A solid foundation for content, commerce, or community as you scale.',
  },
]

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white/10 p-2 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/80">{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built to impress</h2>
        <p className="mt-3 text-white/80">Subtle gradients, balanced spacing, and considered typography for a premium look.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}
