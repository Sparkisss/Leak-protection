import Input from '@/shared/ui/Input/Input';

const RegistrationForm = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center w-[80%] mx-auto">
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Name"
      />
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Surname"
      />
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Password"
      />
      <Input
        className="md:w-70 lg:w-90 xl:w-120 2xl:w-140"
        placeholder="Password confirm"
      />
    </section>
  );
};

export default RegistrationForm;
