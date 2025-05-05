import LoginForm from '@/components/LoginForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const token = (await cookies()).get('token')?.value;

  if (token) {
    redirect('/leave-applications');
  }

  return <LoginForm />;
};

export default LoginPage;
