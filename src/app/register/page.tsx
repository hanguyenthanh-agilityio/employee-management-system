import { Button } from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import Link from 'next/link';

const inputFields = [
  { label: 'First Name' },
  { label: 'Last Name' },
  { label: 'E-mail Address', type: 'email' },
  { label: 'Phone Number' },
  { label: 'Password', type: 'password' },
  { label: 'Confirm Password', type: 'password' },
];

const checkboxes = [
  { id: 'newsletter', label: 'Yes, I want to receive KRIS newsletters' },
  {
    id: 'terms',
    label: 'I agree to all the ',
    subLabel: 'Terms, Privacy Policy',
  },
];

const RegisterPage = () => (
  <>
    <h1 className="text-[56px] font-semibold text-[#253D90] mb-2">
      Welcome to XCELTECH
    </h1>
    <p className="text-[30px] text-[#969696] my-6">Register your account</p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {inputFields.map((field, index) => (
        <Input
          key={index}
          label={field.label}
          type={field.type}
          labelColor="text-[#253D90]"
        />
      ))}

      <div className="col-span-2 space-y-2 pt-4">
        {checkboxes.map((cb) => (
          <Checkbox
            key={cb.id}
            id={cb.id}
            label={cb.label}
            subLabel={cb.subLabel}
          />
        ))}
      </div>

      <Button customClass="max-w-[300px] justify-center py-3 text-xl my-2">
        Create Account
      </Button>
    </form>

    <p className="text-xl text-[#000] mt-8">
      Already have an account?
      <Link href="/login" className="text-[#253D90] font-bold">
        Log In
      </Link>
    </p>
  </>
);

export default RegisterPage;
