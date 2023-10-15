import LoginButton from "./login-button";

export default function LoginForm() {
  return (
    <form className="flex flex-col absolute w-full sm:w-72 justify-center items-center gap-3 z-10">
      <h1 className="inline-block text-white text-5xl mr-0 font-gabarito-medium">
        Login
      </h1>
      <LoginButton />
    </form>
  )
}
