const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Auth() {
  const loginDiscord = async () => {
    const res = await fetch(`${API_BASE}/auth/discord/login`)
    const data = await res.json()
    if (data.login_url) window.location.href = data.login_url
    else if (data.mock && data.login_url) window.location.href = data.login_url
  }

  return (
    <section id="auth" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl font-bold">Sign in</h2>
        <p className="text-sky-100/80 mt-2">Use your Discord account to continue.</p>
        <div className="mt-6">
          <button onClick={loginDiscord} className="px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition">Login with Discord</button>
        </div>
      </div>
    </section>
  )
}
