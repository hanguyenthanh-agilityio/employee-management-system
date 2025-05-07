import Form from '@/components/Form';
import { LeaveItem } from '@/types/components';

interface EditFormProps {
  leave: LeaveItem;
}

const EditForm = ({ leave }: EditFormProps) => {
  return (
    <form className="pt-5">
      <Form leave={leave} />
    </form>
  );
};

export default EditForm;
