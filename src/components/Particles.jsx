import { useEffect, useMemo, useRef } from 'react'

export default function Particles({ count = 60 }) {
  const canvasRef = useRef(null)
  const dpr = window.devicePixelRatio || 1
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 1.5 + 0.5,
    }))
  }, [count])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    function resize() {
      const { clientWidth: w, clientHeight: h } = canvas
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.scale(dpr, dpr)
    }
    const onResize = () => resize()
    resize()
    window.addEventListener('resize', onResize)
    const loop = () => {
      const { width: W, height: H } = canvas
      ctx.clearRect(0, 0, W, H)
      ctx.save()
      ctx.globalAlpha = 0.6
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        const x = p.x * canvas.clientWidth
        const y = p.y * canvas.clientHeight
        const r = p.r
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 6)
        grad.addColorStop(0, 'rgba(167, 139, 250, 0.55)') // violet-400
        grad.addColorStop(1, 'rgba(167, 139, 250, 0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(x, y, r * 6, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [dpr, particles])

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}


