import { Plane } from 'lucide-react'

export default function BoardingPass() {
  return (
    <div className="group mt-3 overflow-hidden rounded-md border border-white/10 bg-white/5 p-3 text-xs text-white/80">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-white">EZE</span>
          <span>→</span>
          <span className="text-base font-semibold text-white">MIA</span>
        </div>
        <span className="rounded bg-[--color-brand]/20 px-2 py-0.5 text-[10px]">Gate A4</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div className="rounded bg-white/5 px-2 py-1">Seat 12A</div>
        <div className="rounded bg-white/5 px-2 py-1">Flight UY123</div>
        <div className="rounded bg-white/5 px-2 py-1">Board 18:35</div>
      </div>
      <div className="mt-3 relative h-6 w-full overflow-hidden rounded bg-white/5">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="h-px w-full border-t border-dashed border-white/20" />
        </div>
        <div className="plane-dot absolute left-0 top-1/2 -translate-y-1/2 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
          <Plane size={14} />
        </div>
      </div>
    </div>
  )
}


