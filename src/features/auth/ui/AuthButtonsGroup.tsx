import Button from '@/shared/ui/Button/Button';
interface AuthButtonsGroupProps {
  setRegister: () => void;
}

const AuthButtonsGroup = ({ setRegister }: AuthButtonsGroupProps) => {
  return (
    <section className="flex justify-end pr-10 pb-10 gap-10 w-[80%] mx-auto">
      <Button onClick={setRegister}>Register</Button>
      <Button>Confirm</Button>
    </section>
  );
};

export default AuthButtonsGroup;
