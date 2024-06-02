import FormButton from "./login-button";

export default function LoginForm() {
  return (
    <form action="none" className="w-full">
      <label htmlFor="loginNameOrEmail" className="text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out">Nombre o Email</label>
      <input type="text" className="w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-2 rounded-sm" />
      <label htmlFor="loginNameOrEmail" className="text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out">Contraseña</label>
      <input type="text" className="w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-5 rounded-sm" />
      <FormButton text="Login" />
    </form>
  )
}
