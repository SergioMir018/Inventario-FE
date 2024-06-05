// api.js
import axios from 'axios';
import { User } from '../types/http-types';
import { BASE_URL } from '../types/constants,';

export const fetchUser = async (searchId: string): Promise<User> => {
  try {
    const response = await axios.get(`${BASE_URL}/user/searchId`, {
      params: {
        id: searchId,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
