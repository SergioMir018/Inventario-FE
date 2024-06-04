export type HTTPGetUserResquest = {
  name: string;
  email: string;
  password: string;
  role: string;
}

export type HTTPLoginResponse = {
  id: string;
  role: string;
}

