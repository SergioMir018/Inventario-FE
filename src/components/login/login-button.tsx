import Github from "../../icons/github";

export default function LoginButton() {
  function loginWithGithub() {
    return window.location.assign("https://github.com/login/oauth/authorize?client_id=" +
      import.meta.env.VITE_CLIENT_ID)
  }

  return (
    <button 
    type="button" 
    className="text-white bg-gray hover:bg-gray/90
    focus:ring-4 focus:outline-none focus:ring-gray/50 font-gabarito-bold 
    rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center 
    dark:focus:ring-[#4285F4]/55"
    onClick={loginWithGithub}
    >
      <Github />
      Sing in with Github
    </button>
  )
}
