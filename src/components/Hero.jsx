import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8">
          <span className="text-xs uppercase tracking-widest text-sky-300">Fintech • Modern • Minimal</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Accept payments with a beautiful, modern SaaS
          </h1>
          <p className="mt-4 text-sky-100/80 text-lg">
            Glassmorphic 3D design meets real commerce. Discord login, shop, analytics, and Revolut Business payments — out of the box.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition">View pricing</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">Contact sales</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900"></div>
    </section>
  )
}
