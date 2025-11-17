import { Check } from 'lucide-react'

const tiers = [
  { id: 'bronze', name: 'Bronze', price: 9, features: ['Starter limits', 'Email support'], popular: false },
  { id: 'silver', name: 'Silver', price: 19, features: ['Increased quotas', 'Priority support'], popular: true },
  { id: 'gold', name: 'Gold', price: 49, features: ['High limits', 'Priority + SLA'], popular: false },
  { id: 'platinum', name: 'Platinum', price: 99, features: ['Max limits', 'Dedicated support'], popular: false },
]

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Pricing() {
  const checkout = async (plan) => {
    try {
      const res = await fetch(`${API_BASE}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan })
      })
      const data = await res.json()
      if (data.payment_url) {
        window.location.href = data.payment_url
      } else {
        alert('Checkout created: ' + JSON.stringify(data))
      }
    } catch (e) {
      alert('Error creating checkout')
      console.error(e)
    }
  }

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="text-sky-100/80 mt-3">Choose the plan that fits — upgrade any time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map(t => (
            <div key={t.id} className={`rounded-2xl border ${t.popular ? 'border-sky-400' : 'border-white/10'} bg-white/5 backdrop-blur p-6 flex flex-col`}>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">{t.name}</h3>
                  {t.popular && <span className="text-xs px-2 py-1 rounded-full bg-sky-500 text-white">Most popular</span>}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">${t.price}</span>
                  <span className="text-sky-100/70">/mo</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sky-100/90"><Check size={16} className="text-sky-400" /> {f}</li>
                  ))}
                </ul>
              </div>
              <button onClick={() => checkout(t.id)} className="mt-8 w-full px-4 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition">Get {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
