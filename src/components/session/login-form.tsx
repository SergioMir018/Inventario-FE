import FormButton from "./form-button";
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { HTTPLoginResponse } from "../../types/http-types";
import { BASE_URL } from "../../types/constants,";

interface ILoginForm {
  identifier: string;
  password: string;
}

export default function LoginForm() {

  const navigate = useNavigate();

  const {register, handleSubmit} = useForm<ILoginForm>()

  const loginFormAction: SubmitHandler<ILoginForm> = async (data: { identifier: string, password: string }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, null, {
        params: {
          q: data.identifier,
          p: data.password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const {id, role}: HTTPLoginResponse = response.data;

      navigate(`/id=${id}/${role}/home`);

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(loginFormAction)}>
      <label htmlFor="loginNameOrEmail" className="text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out">Nombre o Email</label>
      <input {...register("identifier")} type="text" className="w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-2 rounded-sm" />
      <label htmlFor="loginNameOrEmail" className="text-white font-gabarito group-hover:text-black transition-colors duration-150 ease-in-out">Contraseña</label>
      <input {...register("password")} type="text" className="w-full p-1 font-gabarito outline-none ring ring-black/50 focus:ring focus:ring-black mt-1 mb-5 rounded-sm" />
      <FormButton text="Login" useSubmit={true} />
    </form>
  )
}
