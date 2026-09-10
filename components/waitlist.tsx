'use client'

import { useState } from 'react'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <section
      aria-label="Join the waitlist"
      className="box-glow-green border border-neon-green bg-black p-4 sm:p-6"
    >
      {!joined ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <label
            htmlFor="email"
            className="block text-sm leading-relaxed text-neon-green glow-green sm:text-base"
          >
            {'> ENTER_EMAIL_TO_JOIN_WAITLIST:'}
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center gap-2 border border-neon-green/50 bg-black px-3 py-2 focus-within:box-glow-green">
              <span aria-hidden="true" className="text-neon-green glow-green">
                @
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="broke_but_hopeful@gmail.com"
                className="w-full bg-transparent text-neon-green caret-neon-green placeholder:text-muted focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="border border-neon-green bg-neon-green px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-neon-green hover:box-glow-green"
            >
              EXECUTE
            </button>
          </div>
          <p className="text-xs text-muted">
            {'// no spam. just financial trauma updates.'}
          </p>
        </form>
      ) : (
        <div className="glitch-in space-y-2">
          <p className="text-sm text-neon-green glow-green sm:text-base">
            {'> ACCESS_GRANTED. You are now on the list.'}
          </p>
          <p className="break-words text-xs text-muted">
            {`// welcome to the queue, ${email}. we'll email you when the roasting begins.`}
          </p>
        </div>
      )}
    </section>
  )
}
