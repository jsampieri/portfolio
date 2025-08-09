import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scaleX, setScaleX] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0
      setScaleX(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="scroll-progress" style={{ transform: `scaleX(${scaleX})` }} />
}



