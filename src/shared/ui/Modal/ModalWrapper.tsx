import { useEffect, type ReactNode } from 'react';
import { IconClose } from '../icons/IconClose';
import cn from 'classnames';
import { createPortal } from 'react-dom';

type ModalProps = {
  width?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};
interface ModalModule {
  children?: ReactNode;
  className?: string;
}

const ModalWrapper = ({
  width = 'md',
  className,
  children,
  isOpen = false,
  setIsOpen,
}: ModalProps) => {
  const widthClasses = {
    sm: 'max-w-[440px] w-full h-fit',
    md: 'max-w-[640px] w-full h-fit',
    lg: 'w-full mx-20',
  };
  const classes = cn(
    'fixed inset-0 flex justify-center bg-slate-900/60 backdrop-blur-md w-full h-full p-4 z-[100] overflow-y-auto',
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  const rootElement = document.getElementById('root');

  if (!rootElement) {
    // Здесь можно вернуть null, показать ошибку, или ничего не делать.
    console.error('Root element with id "root" not found!');
    return null;
  }

  const modal = (
    <dialog open={isOpen} className={classes} onClick={handleClick}>
      <div
        className={`bg-white rounded-lg min-h-[320px] relative ${widthClasses[width]} flex flex-col`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 absolute top-0 left-[calc(100%+12px)]"
        >
          <IconClose className="w-5 h-5 cursor-pointer " />
        </button>
        {children}
      </div>
    </dialog>
  );
  return createPortal(modal, rootElement);
};

ModalWrapper.Header = function ModalWrapperHeader({
  children,
  className,
}: ModalModule) {
  return (
    <header className={cn(className, 'px-6 pt-6 pb-4 text-2xl')}>
      {children}
    </header>
  );
};
ModalWrapper.Body = function ModalWrapperBody({
  children,
  className,
}: ModalModule) {
  return <article className={cn(className, ' p-6')}>{children}</article>;
};
ModalWrapper.Footer = function ModalWrapperFooter({
  children,
  className,
}: ModalModule) {
  return (
    <footer className={cn(className, 'flex p-6 gap-14 justify-end mt-auto')}>
      {children}
    </footer>
  );
};

export default ModalWrapper;
