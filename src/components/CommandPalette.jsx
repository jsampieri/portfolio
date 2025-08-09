import { useEffect, useState } from 'react'

const commands = [
  { k: 'about', label: 'Go to About', href: '#about' },
  { k: 'skills', label: 'Go to Skills', href: '#skills' },
  { k: 'projects', label: 'Go to Projects', href: '#projects' },
  { k: 'contact', label: 'Go to Contact', href: '#contact' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const list = commands.filter(c => c.label.toLowerCase().includes(q.toLowerCase()))
  return open ? (
    <div className="fixed inset-0 z-[999] grid place-items-start pt-24">
      <div className="glass mx-auto w-[min(640px,92vw)] overflow-hidden rounded-xl">
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command..."
          className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/40"
        />
        <div className="max-h-64 overflow-auto">
          {list.map((c) => (
            <a
              key={c.k}
              href={c.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              {c.label}
            </a>
          ))}
          {list.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-white/50">No results</div>
          )}
        </div>
      </div>
    </div>
  ) : null
}


