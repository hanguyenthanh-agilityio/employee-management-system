import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

const LoginPage = async () => {
  const token = (await cookies()).get('token')?.value;

  if (token) {
    redirect('/leave-applications');
  }

  return <LoginForm />;
};

export default LoginPage;
