import Button from '@/shared/ui/Button/Button';
import { TYPOGRAPHY } from '@/shared/const/typography';
import cn from 'classnames';
import ModalWrapper from '@/shared/ui/Modal/ModalWrapper';
import { useState } from 'react';

type ModalType = 'add' | 'edit' | null;

const DashboardHeader = () => {
  const headClasses = cn('mb-4', TYPOGRAPHY.h2);
  const textClasses = cn('mb-14', TYPOGRAPHY.body);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleClose = () => setModalType(null);

  return (
    <section className="w-4/5 mb-12 sm:mb-0 sm:w-3/6">
      <div className={headClasses}>
        YOU PROTECTION YOU SECURITY YOU SMART HOUSE
      </div>
      <div className={textClasses}>
        Shihami is the World’s first and largest NFT/Avatar marketplace
      </div>
      <div className="flex gap-10 flex-col sm:flex-row">
        <Button onClick={() => setModalType('add')}>Add</Button>
        <Button onClick={() => setModalType('edit')}>Edit</Button>
        <Button>Delete</Button>
      </div>
      <ModalWrapper
        width="lg"
        isOpen={modalType === 'add'}
        setIsOpen={handleClose}
      >
        <ModalWrapper.Header>Add item</ModalWrapper.Header>
        <ModalWrapper.Body>
          <p>Тут форма добавления</p>
        </ModalWrapper.Body>
        <ModalWrapper.Footer>
          <Button>Save</Button>
          <Button secondary onClick={handleClose}>
            Cancel
          </Button>
        </ModalWrapper.Footer>
      </ModalWrapper>

      {/* Модалка для Edit */}
      <ModalWrapper
        width="md"
        isOpen={modalType === 'edit'}
        setIsOpen={handleClose}
      >
        <ModalWrapper.Header>Edit item</ModalWrapper.Header>
        <ModalWrapper.Body>
          <p>Тут форма редактирования</p>
        </ModalWrapper.Body>
        <ModalWrapper.Footer>
          <Button>Update</Button>
          <Button secondary onClick={handleClose}>
            Cancel
          </Button>
        </ModalWrapper.Footer>
      </ModalWrapper>
    </section>
  );
};

export default DashboardHeader;
