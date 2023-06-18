import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import './cancel-modal.css';

type CancelModalProp = {
  disable: boolean;
  productsNames: string;
};

function CancelModal({ disable, productsNames }: CancelModalProp): JSX.Element {
  console.log('productsNames:', productsNames);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    setModalText(`Вы уверены что хотите аннулировать товар(ы): ${productsNames}`);
  }, [productsNames]);

  const showModal = (): void => {
    setOpen(true);
  };

  const handleOk = (): void => {
    setModalText('Выполняется удаление выбранных товаров.');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      setModalText(`Вы уверены что хотите аннулировать товар(ы): ${productsNames}`);
    }, 2000);
  };

  const handleCancel = (): void => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button className="cancel-btn" type="primary" onClick={showModal} disabled={!disable}>
        Аннулировать
      </Button>
      <Modal
        title="Внимание"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText="Отклонить"
        okText="Применить"
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}

export default CancelModal;
