import { useSpring, motion } from 'framer-motion'
import { useEffect } from 'react'

const DIGIT_H = 80

function DigitWheel({ target, delay = 0 }: { target: number; delay?: number }) {
  const y = useSpring(-DIGIT_H * 10, { stiffness: 55, damping: 14 })
  useEffect(() => {
    const t = setTimeout(() => { y.set(-(10 + target) * DIGIT_H) }, delay * 1000)
    return () => clearTimeout(t)
  }, [target, delay, y])
  const digits = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-700/40 bg-zinc-950" style={{ height: DIGIT_H, width: 58 }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-gradient-to-b from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 bg-gradient-to-t from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 h-px -translate-y-1/2 bg-white/10" />
      <motion.div style={{ y }} className="flex flex-col items-center">
        {digits.map((d, i) => (
          <span key={i} className="flex items-center justify-center text-[52px] font-bold tabular-nums text-white" style={{ height: DIGIT_H, width: 58, fontFamily: "'Inter', monospace" }}>{d}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default function RolodexNumber({ value, label, suffix = '', delay = 0 }: { value: string; label: string; suffix?: string; delay?: number }) {
  const digits = value.split('').filter(c => /\d/.test(c)).map(Number)
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-end gap-1.5">
        {digits.map((d, i) => (
          <DigitWheel key={i} target={d} delay={delay + i * 0.15} />
        ))}
        {suffix && (
          <span className="mb-2 text-[40px] font-bold text-white/60">{suffix}</span>
        )}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{label}</span>
    </div>
  )
}
