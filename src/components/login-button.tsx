import Google from "../icons/Google";

export default function LoginButton() {
  return (
    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90
    focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-gabarito-bold 
    rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center 
    dark:focus:ring-[#4285F4]/55">
      <Google />
      Sing in with Google
    </button>
  )
}
