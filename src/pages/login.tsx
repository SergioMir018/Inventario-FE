import Blob from "../assets/Blob";
import LoginButton from "../components/login-button";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-w-screen relative">
      <section className="flex flex-col justify-center items-center gap-3 z-10 translate-y-[20vh] sm:translate-y-[25vh]">
        <h1 className="text-white text-5xl mr-0 font-gabarito-medium">
          Login
        </h1>
        <LoginButton />
      </section>
      <Blob />
    </div>
  )
}

