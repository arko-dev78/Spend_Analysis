export function TerminalHeader() {
  return (
    <header className="border-b border-neon-green/40 bg-black">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <span className="text-sm font-bold tracking-widest text-neon-green glow-green crt-flicker sm:text-base">
          SASSY_FINANCE_OS v1.0
        </span>
        <span className="flex items-center gap-2 text-xs text-neon-green">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 bg-neon-green box-glow-green"
          />
          <span className="glow-green">ONLINE</span>
        </span>
      </div>
    </header>
  )
}
