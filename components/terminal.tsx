'use client'

import { useState, useRef, useEffect } from 'react'

const ROASTS = [
  'ERROR: DELULU_BEHAVIOR_DETECTED. ₹4000 on Zara? Beta, Sarojini market mein yahi cheez ₹400 mein milti. Ab poora mahina Maggi khao.',
  'FATAL: SWIGGY_ADDICTION_CONFIRMED. Aapne itne mein 47 baar biryani order ki hogi. Kitchen hai ghar mein, chala lo kabhi.',
  'WARNING: MIDDLE_CLASS_GUILT_OVERFLOW. Papa ne ye sunke AC band kar diya "current ka bill aayega" wale voice mein. Sharam karo.',
  'CRITICAL: MAIN_CHARACTER_SYNDROME. Sharma ji ka beta abhi SIP kar raha hai, aur aap Nykaa pe "sale" dekh rahe ho. Priorities?',
  'SEGFAULT: EMI_TRAP_ACTIVATED. "No cost EMI" ka matlab free nahi hota, genius. Ab 6 mahine tak yaad rahega.',
  '404: SAVINGS_NOT_FOUND. Myntra ne aapko VIP bana diya, aur bank balance ne "insufficient funds" bana diya. Balanced life.',
  'FATAL: RENT_MONEY_MISALLOCATED. Landlord uncle 3 tareekh se WhatsApp pe "blue tick" dekh rahe hain. Bhaago.',
  'WARNING: CHAI_SUTTA_ECONOMY_DETECTED. Roz ₹200 ki online shopping, phir bolte ho "yaar mahina end mein tang ho jaata hai." Aashcharya.',
]

type Line = {
  id: number
  type: 'input' | 'roast'
  text: string
}

export function Terminal() {
  const [confession, setConfession] = useState('')
  const [lines, setLines] = useState<Line[]>([])
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const roastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (submitted) {
      roastRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [submitted])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = confession.trim()
    if (!value) return

    const roast = ROASTS[Math.floor(Math.random() * ROASTS.length)]
    const now = Date.now()
    setLines([
      { id: now, type: 'input', text: value },
      { id: now + 1, type: 'roast', text: roast },
    ])
    setSubmitted(true)
  }

  function reset() {
    setConfession('')
    setLines([])
    setSubmitted(false)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  return (
    <section
      aria-label="Interactive roast terminal"
      className="box-glow-green border border-neon-green bg-black"
    >
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-neon-green/40 bg-neon-green-dim/30 px-3 py-2">
        <span className="text-xs tracking-widest text-neon-green glow-green">
          root@sassy-finance:~/confessions
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 border border-neon-green/70" />
          <span className="h-3 w-3 border border-neon-green/70" />
          <span className="h-3 w-3 border border-neon-red/70 bg-neon-red/30" />
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        <p className="text-xs text-muted">
          {'// last login: today. financial dignity: not found.'}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label
              htmlFor="confession"
              className="block text-sm leading-relaxed text-neon-green glow-green sm:text-base"
            >
              {'> Enter your worst recent purchase & amount:'}
            </label>
            <div className="flex items-center gap-2 border border-neon-green/50 bg-black px-3 py-2 focus-within:box-glow-green">
              <span aria-hidden="true" className="text-neon-green glow-green">
                $
              </span>
              <input
                ref={inputRef}
                id="confession"
                name="confession"
                type="text"
                autoComplete="off"
                value={confession}
                onChange={(e) => setConfession(e.target.value)}
                placeholder="e.g. ₹4000 on Zara at 2am"
                className="w-full bg-transparent text-neon-green caret-neon-green placeholder:text-muted focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-neon-green bg-neon-green px-4 py-3 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-neon-green hover:box-glow-green sm:w-auto"
            >
              [ RUN_DIAGNOSTIC ]
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {lines.map((line) =>
              line.type === 'input' ? (
                <p
                  key={line.id}
                  className="break-words text-sm text-neon-green glow-green sm:text-base"
                >
                  <span className="text-muted">{'> '}</span>
                  {line.text}
                </p>
              ) : (
                <div
                  key={line.id}
                  ref={roastRef}
                  className="glitch-in box-glow-red border border-neon-red bg-neon-red-dim/30 p-4"
                >
                  <p className="mb-2 text-xs uppercase tracking-widest text-neon-red glow-red">
                    {'// AI_JUDGMENT.exe --no-mercy'}
                  </p>
                  <p className="break-words text-base font-bold leading-relaxed text-neon-red glow-red sm:text-lg">
                    {line.text}
                  </p>
                </div>
              )
            )}
            <button
              type="button"
              onClick={reset}
              className="border border-neon-green/60 px-3 py-2 text-xs uppercase tracking-widest text-neon-green transition-colors hover:bg-neon-green hover:text-black"
            >
              {'> confess_again'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
