import { ACCESS_TOKEN } from '@/constants/access-token';
import { API_URL } from '@/constants/api_url';

export const fetchData = async (
  endpoint: string,
  method: 'GET' | 'POST',
  body: object | FormData | null = null,
  isFormData: boolean = false,
) => {
  const headers: HeadersInit = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };

  if (!isFormData) {
    headers['Content-Type'] = 'multipart/form-data';
  }

  const options: RequestInit = {
    method,
    headers,
    next: { revalidate: 60 },
    ...(body && {
      body: isFormData ? (body as FormData) : JSON.stringify(body),
    }),
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    console.log(res);

    if (!res.ok) {
      console.error(`Failed API call: ${res.status} - ${res.statusText}`);
      throw new Error(`API call failed: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error in fetchData: ', error);
    throw error;
  }
};
