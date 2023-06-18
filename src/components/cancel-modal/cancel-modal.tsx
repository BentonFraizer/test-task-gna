import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import './cancel-modal.css';

type CancelModalProp = {
  disable: boolean;
  productsNames: string;
  cancelSubmit: () => void;
};

function CancelModal({ disable, productsNames, cancelSubmit }: CancelModalProp): JSX.Element {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

  useEffect(() => {
    setModalText(`Вы уверены что хотите аннулировать товар(ы): ${productsNames}`);
  }, [productsNames]);

  const showModal = (): void => {
    setOpen(true);
  };

  const handleOk = (): void => {
    setModalText('Выполняется удаление выбранных товаров.');
    setConfirmLoading(true);
    setDisableBtn(true);
    setTimeout(() => {
      cancelSubmit();
      setOpen(false);
      setConfirmLoading(false);
      setModalText(`Вы уверены что хотите аннулировать товар(ы): ${productsNames}`);
      setDisableBtn(false);
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
        cancelButtonProps={{ disabled: disableBtn }}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}

export default CancelModal;
