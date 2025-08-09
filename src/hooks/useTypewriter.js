import { useEffect, useRef, useState } from 'react'

export function useTypewriter(fullText, options = {}) {
  const { speed = 28, startDelay = 250 } = options
  const [text, setText] = useState('')
  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    // reset when text changes (e.g., language switch)
    setText('')
    indexRef.current = 0
    if (timerRef.current) clearTimeout(timerRef.current)

    const tick = () => {
      if (indexRef.current <= fullText.length) {
        setText(fullText.slice(0, indexRef.current))
        indexRef.current += 1
        timerRef.current = setTimeout(tick, speed)
      }
    }

    timerRef.current = setTimeout(tick, startDelay)
    return () => timerRef.current && clearTimeout(timerRef.current)
  }, [fullText, speed, startDelay])

  const isDone = text.length >= fullText.length
  return { text, isDone }
}


