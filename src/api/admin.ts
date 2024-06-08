// api.js
import axios from 'axios';
import { Order, Product } from '../types/http-types';
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

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/order/all`);

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
