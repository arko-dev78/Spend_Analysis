import { TerminalHeader } from '@/components/terminal-header'
import { Terminal } from '@/components/terminal'
import { Waitlist } from '@/components/waitlist'

export default function Page() {
  return (
    <div className="crt-scanlines min-h-dvh bg-black">
      <TerminalHeader />

      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        {/* boot banner */}
        <div className="mb-8">
          <pre className="overflow-x-auto whitespace-pre text-[10px] leading-tight text-neon-green glow-green sm:text-xs">
{`  ____   _   ___ ___ _   _
 / ___| /_\\ / __/ __| | | |
 \\___ \\//_\\\\\\__ \\__ \\ |_| |
  ___) /  _  \\__ \\__ \\  _  |
 |____/_/ \\_\\___/___/_| |_|  FINANCE_OS`}
          </pre>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 text-pretty sm:text-base">
            An AI that audits your impulse purchases and roasts you with zero
            emotional support. Confess below. It will hurt.
          </p>
          <p className="mt-2 text-xs text-muted cursor-blink">
            initializing judgment_engine
          </p>
        </div>

        <div className="space-y-6">
          <Terminal />
          <Waitlist />
        </div>

        <footer className="mt-10 border-t border-neon-green/30 pt-4">
          <p className="text-xs text-muted">
            {'// SASSY_FINANCE_OS © 2026 — built for the financially delulu'}
          </p>
        </footer>
      </main>
    </div>
  )
}
