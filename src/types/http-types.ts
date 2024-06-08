export type HTTPGetUser = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type HTTPLogin = {
  id: string;
  role: string;
};

export type Product = {
  id: string;
  name: string;
  short_desc: string;
  desc: string;
  photo: string;
  price: number;
};

export type Order = {
  orderId: string;
  clientId: string;
  name: string;
  creationDate: string;
  totalPayment: number;
  details: {
    shippingAddress: string;
    billingAddress: string;
    phoneNumber: string;
  };
  products: OrderProduct[];
};

export type OrderProduct = {
  product_id: string;
  quantity: number;
};

export type User = {
  name: string;
  email: string;
};
