import { useRef } from 'react'

export default function Tilt({ max = 12, children, className = '' }) {
  const ref = useRef(null)
  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * -2 * max
    const ry = (px - 0.5) * 2 * max
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }
  return (
    <div style={{ perspective: 800 }} className={className}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="h-full will-change-transform transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  )
}


