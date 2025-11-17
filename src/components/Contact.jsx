import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API_BASE}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state) })
    const data = await res.json()
    if (data.ok) setSent(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 p-8">
          <h2 className="text-white text-3xl font-bold">Contact sales</h2>
          <p className="text-sky-100/80 mt-2">Tell us about your use case. We'll get back within a day.</p>
          {sent ? (
            <p className="mt-6 text-green-300">Thanks! We'll be in touch shortly.</p>
          ) : (
            <form onSubmit={submit} className="mt-6 grid gap-4">
              <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" value={state.name} onChange={(e)=>setState(s=>({...s, name: e.target.value}))}/>
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" value={state.email} onChange={(e)=>setState(s=>({...s, email: e.target.value}))}/>
              <textarea required rows={5} placeholder="Message" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white" value={state.message} onChange={(e)=>setState(s=>({...s, message: e.target.value}))}></textarea>
              <button className="px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition w-full">Send</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
