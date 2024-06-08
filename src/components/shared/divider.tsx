interface DividerProps {
  text: string;
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className='relative flex items-center justify-center my-4 mt-10'>
      <div
        className='absolute inset-0 flex items-center'
        aria-hidden='true'
      >
        <div className='w-full border-t border-white/30'></div>
      </div>
      <div className='relative px-2 bg-dark text-white'>
        <span>{text}</span>
      </div>
    </div>
  );
}
