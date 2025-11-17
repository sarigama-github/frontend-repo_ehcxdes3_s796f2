import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">FinTech</span> SaaS
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sky-100/90">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#auth" className="hover:text-white">Login</a>
        </nav>
        <button className="md:hidden text-white/90" aria-label="Open menu"><Menu /></button>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
    </header>
  )
}
