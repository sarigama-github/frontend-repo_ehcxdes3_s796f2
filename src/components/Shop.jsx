const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

import { useEffect, useState } from 'react'

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/products`).then(r => r.json()).then(d => setProducts(d.products || [])).catch(() => {})
  }, [])

  const buy = async (id) => {
    const res = await fetch(`${API_BASE}/api/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan: id }) })
    const data = await res.json()
    if (data.payment_url) window.location.href = data.payment_url
  }

  return (
    <section id="shop" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Shop</h2>
          <p className="text-sky-100/80 mt-3">Pick a plan and checkout instantly.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6">
              <h3 className="text-white text-xl font-semibold">{p.name}</h3>
              <p className="text-sky-100/80 mt-2">{p.features?.join(' • ')}</p>
              <div className="mt-4 text-white text-3xl font-bold">${(p.price/100).toFixed(0)}<span className="text-sky-100/70 text-base">/mo</span></div>
              <button onClick={() => buy(p.id)} className="mt-6 w-full px-4 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
