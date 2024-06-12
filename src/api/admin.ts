// api.js
import axios from 'axios';
import { HTTPOrderResponse, Order, Product } from '../types/http-types';
import { BASE_URL } from '../types/constants,';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/product/all`);

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/product/searchId`, {
      params: {
        id: id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/order/all`);

    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchCompletedOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/order/completed`);

    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

export const fetchOrderById = async (id: string): Promise<HTTPOrderResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/order/searchId`, {
      params: {
        id: id,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};
