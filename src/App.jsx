import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Auth from './components/Auth'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-sky-100">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Pricing />
        <Shop />
        <Auth />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sky-200/70">© 2025 FinTech SaaS</footer>
    </div>
  )
}

export default App
