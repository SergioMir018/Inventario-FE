interface BadgeProps {
  text: string;
}

export default function Badge({text}: BadgeProps) {
  return (
    <div className="border text-white/70 py-1 border-white/50 px-4 rounded-3xl font-gabarito">{text}</div>
  )
}
