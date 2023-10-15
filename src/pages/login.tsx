import Blob from "../assets/Blob";
import LoginButton from "../components/login-button";

export default function Login() {
  return (
    <section className="flex overflow-hidden justify-center items-center max-w-screen min-h-screen">
      <div className="group flex justify-center items-center">
        <form className="flex flex-col absolute w-full sm:w-72 justify-center items-center gap-3 z-10">
          <h1 className="inline-block text-white text-5xl mr-0 font-gabarito-medium">
            Login
          </h1>
          <LoginButton />
        </form>
        <Blob />
      </div>
    </section>
  )
}

