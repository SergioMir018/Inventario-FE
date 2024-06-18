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

export type HTTPLoginError = {
  errorType: string;
  reason: string;
}

export type Product = {
  id: string;
  name: string;
  short_desc: string;
  desc: string;
  photo: string;
  price: number;
  category: string;
};

export type Category = {
  id: string;
  name: string;
}

export type Order = {
  orderId: string;
  status: string;
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

export type HTTPOrderResponse = {
  orderId: string;
  clientId: string;
  creationDate: string;
  name: string;
  billingAddress: string;
  phoneNumber: string;
  products: OrderProduct[];
  shippingAddress: string;
  status: string;
  totalPayment: number;
};

export type OrderProduct = {
  productId: string;
  quantity: number;
};

export type User = {
  name: string;
  email: string;
};

export type Visit = {
  date: string;
}
