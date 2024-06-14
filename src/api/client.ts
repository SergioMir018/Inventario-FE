import axios from 'axios';
import { BASE_URL } from '../types/constants';
import { Category } from '../types/http-types';

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/product/categories`);

    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
