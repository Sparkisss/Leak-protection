import Button from '@/shared/ui/Button/Button';

const AuthButtonsGroup = () => {
  return (
    <section className="flex justify-end pr-10 pb-10 gap-10 w-[80%] mx-auto">
      <Button>Register</Button>
      <Button>Confirm</Button>
    </section>
  );
};

export default AuthButtonsGroup;
