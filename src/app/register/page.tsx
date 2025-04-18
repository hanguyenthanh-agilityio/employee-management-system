import { AuthLayout } from '@/components/AuthLayout';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import Input from '@/components/Input';
import Link from 'next/link';

const RegisterPage = () => (
  <AuthLayout type="register">
    <h1 className="text-2xl font-semibold text-[#0A278F] mb-1">
      Welcome to XCELTECH
    </h1>
    <p className="text-sm text-gray-500 mb-6">Register your account</p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="E-mail Address" type="email" />
      <Input label="Phone Number" />
      <Input label="Password" type="password" />
      <Input label="Confirm Password" type="password" />

      <div className="col-span-2 space-y-2">
        <Checkbox
          id="newsletter"
          label="Yes, I want to receive KRIS newsletters"
        />
        <Checkbox id="terms" label="I agree to all the Terms, Privacy Policy" />
      </div>

      <Button>Create Account</Button>
    </form>

    <p className="text-sm text-gray-500 mt-4">
      Already have an account?
      <Link href="/login" className="text-blue-600 underline">
        Log In
      </Link>
    </p>
  </AuthLayout>
);

export default RegisterPage;
