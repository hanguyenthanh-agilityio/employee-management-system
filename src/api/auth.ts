'use server';

import { API_URL } from '@/constants/api_url';
import { LoginInput } from '@/utils/schemas/loginSchema';
import axios from 'axios';

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const loginAPI = async (data: LoginInput) => {
  console.log('Login payload:', data);
  const res = await API.post('/accounts/login/', data);
  return res.data;
};
