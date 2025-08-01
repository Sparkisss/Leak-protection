import Input from '@/shared/ui/Input/Input';

const RegistrationForm = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center w-[80%] mx-auto">
      <Input placeholder="Name" />
      <Input placeholder="Surname" />
      <Input placeholder="Password" />
      <Input placeholder="Password confirm" />
    </section>
  );
};

export default RegistrationForm;
