import { cookies } from 'next/headers';

export const getTokenFromCookies = async (): Promise<string> => {
  const token = (await cookies()).get('token')?.value;
  if (!token) throw new Error('Token not found');
  return token;
};
