export default function WalletPreview() {
  return (
    <div className="group mt-3 overflow-hidden rounded-md border border-white/10 bg-white/5 p-3 text-xs">
      <div className="flex items-center justify-between text-white/70">
        <span>Balance</span>
        <span className="text-white">$1,245.00</span>
      </div>
      <div className="mt-2 space-y-1 text-[10px] text-white/70">
        <div className="wallet-row rounded bg-white/10 px-2 py-1">+ $120 · JWT auth</div>
        <div className="wallet-row rounded bg-white/10 px-2 py-1">- $45 · Validated</div>
        <div className="wallet-row rounded bg-white/10 px-2 py-1">+ $210 · Transfer</div>
      </div>
      <div className="mt-3 h-1 w-full origin-left scale-x-0 rounded bg-gradient-to-r from-emerald-400/60 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
    </div>
  )
}


