interface FormButtonProps {
  text: string,
  useSubmit?: boolean,
  action?: () => void,
}

export default function FormButton({ text, useSubmit, action }: FormButtonProps) {
  return (
    <button 
      type={useSubmit ? "submit" : "button"}
      className="text-white bg-black font-gabarito-bold w-full h-10 text-lg rounded-md hover:bg-dark transition ease-in-out duration-100"
      onClick={action}
    >
      {text}
    </button>
  )
}
