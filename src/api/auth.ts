import { LoginInput } from '@/utils/schemas/loginSchema';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://human-resource.up.railway.app/api',
});

export const loginAPI = async (data: LoginInput) => {
  const res = await API.post('/auth/login', data);
  return res.data;
};
