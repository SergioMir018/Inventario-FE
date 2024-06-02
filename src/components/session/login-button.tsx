interface FormButtonProps {
  text: string,
  action?: () => void,
}

export default function FormButton({ text, action }: FormButtonProps) {
  return (
    <button 
      type="button" 
      className="text-white bg-black font-gabarito-bold w-full h-10 text-lg rounded-md hover:bg-dark transition ease-in-out duration-100"
      onClick={action}
    >
      {text}
    </button>
  )
}
