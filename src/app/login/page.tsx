import { Button } from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Link from 'next/link';

const inputFields = [
  { label: 'E-mail Address', type: 'email' },
  { label: 'Password', type: 'password' },
];

const LoginPage = () => (
  <>
    <h1 className="text-[56px] font-semibold text-[#253D90] mb-2">Login</h1>
    <p className="text-[30px] text-[#969696] my-6">Login to your account.</p>

    <form className="flex flex-col gap-6">
      {inputFields.map((field, index) => (
        <Input
          key={index}
          label={field.label}
          type={field.type}
          labelColor="text-[#253D90]"
        />
      ))}

      <div className="flex justify-between pt-4">
        <Checkbox label=" Remember me" id="" />
        <Link
          href="/reset-password"
          className="text-[#253D90] font-bold text-xl"
        >
          Reset Password?
        </Link>
      </div>

      <Button customClass="justify-center">Sign In</Button>

      <p className="text-center text-xl text-[#8F8F8F] mt-8">
        Don’t have an account yet?{' '}
        <Link href="/register" className="text-[#253D90] font-bold">
          Join KRIS today.
        </Link>
      </p>
    </form>
  </>
);

export default LoginPage;
