export default function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-8 backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white">Let’s bring panchkalyan.store to life</h3>
            <p className="mt-2 max-w-xl text-white/80">Tell us what you want on your site—content, products, and more. We’ll shape it with style and performance in mind.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="mailto:hello@panchkalyan.store"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:shadow-xl"
            >
              Contact us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              View demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
