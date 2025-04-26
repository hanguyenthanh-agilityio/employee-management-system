import { LoginInput } from '@/utils/schemas/loginSchema';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://human-resource.up.railway.app/api',
});

export const loginAPI = async (data: LoginInput) => {
  const res = await API.post('/accounts/login/', data);
  return res.data;
};

export const getUserData = async (token: string) => {
  try {
    const res = await API.get('/data', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error response:', error.response?.data);

      if (error.response?.status === 404) {
        return { success: false, message: 'Data not found' };
      }
    }
    throw error;
  }
};
