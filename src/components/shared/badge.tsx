interface BadgeProps {
  text: string | undefined;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className='border text-sm flex justify-center items-center text-white/70 py-1 border-white/50 px-4 rounded-3xl font-gabarito'>
      <p>{text}</p>
    </div>
  );
}
