import Input from '@/shared/ui/Input/Input';

const LoginForm = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 place-items-center w-[80%] mx-auto">
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Name"
      />
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Password"
      />
    </form>
  );
};

export default LoginForm;
