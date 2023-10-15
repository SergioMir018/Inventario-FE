import Blob from "../assets/Blob";
import LoginForm from "../components/login-form";

export default function Login() {
  return (
    <section className="flex overflow-hidden justify-center items-center max-w-screen min-h-screen">
      <div className="group flex justify-center items-center">
        <LoginForm />
        <Blob />
      </div>
    </section>
  )
}

