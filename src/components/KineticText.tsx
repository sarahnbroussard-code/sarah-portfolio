import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

function scrambleOnce(text: string, progress: number) {
  return text
    .split('')
    .map((char, idx) => {
      if (char === ' ') return ' '
      if (idx < progress) return char
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    })
    .join('')
}

export function TextScramble({ text, className = '' }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text.replace(/[^ ]/g, '\u00A0'))
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const totalFrames = text.length * 3 + 10
    const interval = setInterval(() => {
      const progress = Math.min((frame / totalFrames) * text.length, text.length)
      setDisplay(scrambleOnce(text, progress))
      frame++
      if (frame > totalFrames) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [inView, text])

  return <span ref={ref} className={className}>{display}</span>
}

export function TextCascade({
  children,
  className = '',
  stagger = 0.04,
}: {
  children: string
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    if (!inView) return
    let count = 0
    const total = children.length
    const timer = setInterval(() => {
      count++
      setRevealed(count)
      if (count >= total) clearInterval(timer)
    }, stagger * 1000)
    return () => clearInterval(timer)
  }, [inView, children, stagger])

  return (
    <span ref={ref} className={className} aria-label={children}>
      {children.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-300"
          style={{
            opacity: i < revealed ? 1 : 0,
            transform: i < revealed ? 'translateY(0)' : 'translateY(12px)',
            transitionDelay: `${i * stagger * 1000}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export function ShimmerText({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span
      className={`bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #a1a1aa 0%, #fff 40%, #a1a1aa 60%, #a1a1aa 100%)',
        animation: 'shimmer-sweep 4s linear infinite',
      }}
    >
      {children}
    </span>
  )
}
