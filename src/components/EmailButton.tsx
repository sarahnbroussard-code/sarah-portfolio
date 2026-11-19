import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'

interface EmailButtonProps {
  label: string
  variant?: 'primary' | 'secondary' | 'bordered'
  className?: string
}

export default function EmailButton({ label, variant = 'primary', className = '' }: EmailButtonProps) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const encoded = ['s', 'a', 'r', 'a', 'h', '.', 'n', '.', 'b', 'r', 'o', 'u', 's', 's', 'a', 'r', 'd', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm']
    setEmail(encoded.join(''))
  }, [])

  const baseStyles = variant === 'bordered'
    ? "inline-flex items-center gap-3 border border-white/35 px-11 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-zinc-900 focus:outline-none"
    : "inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = variant === 'primary'
    ? "bg-white text-zinc-950 hover:bg-zinc-200 focus:ring-zinc-400"
    : variant === 'bordered'
    ? ""
    : "border border-white/20 text-white hover:border-[#aa3bff] hover:text-[#c084fc] focus:ring-[#c084fc]"

  return (
    <a
      href={`mailto:${email}`}
      aria-label="Send an email to Sarah"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <Mail className="h-4 w-4" />
      {label}
    </a>
  )
}
