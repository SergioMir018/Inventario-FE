import GitHub from "../../icons/github";

export default function LoginButton() {
  function loginWithGithub() {
    return window.location.assign("https://github.com/login/oauth/authorize?client_id=" +
      import.meta.env.VITE_CLIENT_ID)
  }

  return (
    <button 
    type="button" 
    className="text-white bg-gray-700 hover:bg-gray-700/90
    focus:ring-4 focus:outline-none focus:ring-gray-700/50 font-gabarito-bold 
    rounded-lg text-lg px-5 py-2.5 text-center flex items-center 
    dark:focus:ring-gray-700/55"
    onClick={loginWithGithub}
    >
      <GitHub />
      Sing in with GitHub
    </button>
  )
}
