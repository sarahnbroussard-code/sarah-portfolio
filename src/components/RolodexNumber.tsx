import { useSpring, motion } from 'framer-motion'
import { useEffect } from 'react'

const DIGIT_H = 80

function DigitWheel({ target, delay = 0, light }: { target: number; delay?: number; light?: boolean }) {
  const y = useSpring(-DIGIT_H * 10, { stiffness: 55, damping: 14 })
  useEffect(() => {
    const t = setTimeout(() => { y.set(-(10 + target) * DIGIT_H) }, delay * 1000)
    return () => clearTimeout(t)
  }, [target, delay, y])
  const digits = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
  const bg = light ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-950 border-zinc-700/40'
  const fadeFrom = light ? 'from-zinc-100' : 'from-zinc-950'
  const line = light ? 'bg-zinc-900/10' : 'bg-white/10'
  const textColor = light ? 'text-zinc-900' : 'text-white'
  return (
    <div className={`relative overflow-hidden rounded-xl border ${bg}`} style={{ height: DIGIT_H, width: 58 }}>
      <div className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-gradient-to-b ${fadeFrom} to-transparent`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 bg-gradient-to-t ${fadeFrom} to-transparent`} />
      <div className={`pointer-events-none absolute inset-x-0 top-1/2 z-10 h-px -translate-y-1/2 ${line}`} />
      <motion.div style={{ y }} className="flex flex-col items-center">
        {digits.map((d, i) => (
          <span key={i} className={`flex items-center justify-center text-[52px] font-bold tabular-nums ${textColor}`} style={{ height: DIGIT_H, width: 58, fontFamily: "'Inter', monospace" }}>{d}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default function RolodexNumber({ value, label, suffix = '', delay = 0, light }: { value: string; label: string; suffix?: string; delay?: number; light?: boolean }) {
  const digits = value.split('').filter(c => /\d/.test(c)).map(Number)
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-end gap-1.5">
        {digits.map((d, i) => (
          <DigitWheel key={i} target={d} delay={delay + i * 0.15} light={light} />
        ))}
        {suffix && (
          <span className={`mb-2 text-[40px] font-bold ${light ? 'text-zinc-400' : 'text-white/60'}`}>{suffix}</span>
        )}
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">{label}</span>
    </div>
  )
}
