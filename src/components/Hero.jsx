import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[84vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        <div className="relative">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            Welcome to panchkalyan.store
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Clean. Classy. Effortlessly Modern.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A refined landing experience with subtle motion, interactive depth, and a crystal-clear call to action.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:shadow-xl"
          >
            Start your journey
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  )
}
