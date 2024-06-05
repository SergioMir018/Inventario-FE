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

export type Product = {
  id: string;
  name: string;
  short_desc: string;
  desc: string;
  photo: string;
};

