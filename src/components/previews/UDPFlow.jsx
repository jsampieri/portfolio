import { Server, Laptop, KeyRound, Mail } from 'lucide-react'

export default function UDPFlow() {
  return (
    <div className="group relative mt-3 h-32 overflow-hidden rounded-md border border-white/10 bg-white/5 p-3">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70"><Laptop size={18} /></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/70"><Server size={18} /></div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70"><Laptop size={18} /></div>

      <div className="udp-track absolute left-8 right-8 top-1/2 -translate-y-1/2">
        <div className="h-px border-t border-dashed border-white/20" />
        <div className="udp-packet absolute top-1/2 -translate-y-1/2 text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]" style={{ left: 0 }}>
          <Mail size={14} />
        </div>
      </div>

      <div className="absolute left-[55%] top-[calc(50%-28px)] hidden -translate-x-1/2 items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80 shadow-sm group-hover:flex">
        <KeyRound size={12} /> RSA
      </div>
      <div className="absolute left-[85%] top-[calc(50%+10px)] hidden -translate-x-1/2 items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80 shadow-sm group-hover:flex">
        <KeyRound size={12} /> AES
      </div>
    </div>
  )
}


