import { useRef } from 'react'

export default function Magnetic({ strength = 0.25, children }) {
  const ref = useRef(null)
  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }
  return (
    <span onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block will-change-transform">
      <span ref={ref} className="inline-block">{children}</span>
    </span>
  )
}


