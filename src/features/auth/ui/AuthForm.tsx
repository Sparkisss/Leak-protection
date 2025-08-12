import Input from '@/shared/ui/Input/Input';
import { useAuthForm } from '../lib/useAuthForm';
import Button from '@/shared/ui/Button/Button';

interface FieldsUI {
  name: string;
  placeholder: string;
  type?: string;
}

interface AuthFormProps {
  fields: FieldsUI[];
  onSubmit: (data: { [key: string]: string }) => void;
}

const AuthForm = ({ fields, onSubmit }: AuthFormProps) => {
  const { formData, handleChange } = useAuthForm(fields);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid grid-cols-1 h-85 sm:grid-cols-2 place-items-center w-[80%] mx-auto"
    >
      {fields.map(({ name, placeholder, type }) => (
        <Input
          key={name}
          className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
          type={type || 'text'}
          value={formData[name]}
          onChange={e => handleChange(name, e.target.value)}
          placeholder={placeholder}
        />
      ))}
      <div className="absolute right-18 bottom-4 md:bottom-10 translate-x-full sm:translate-x-8">
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default AuthForm;
