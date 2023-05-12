import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import { Typography, Box, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ open, children, handleClose }) {
  useEffect(() => {
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  }, [handleClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles['close-button']} onClick={handleClose}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById('portal') // Рендер модального окна в портал с id 'portal'
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired, // Обязательное булевое значение, определяющее, открыто ли модальное окно
  children: PropTypes.object.isRequired, // Обязательный компонент, являющийся содержимым модального окна
  handleClose: PropTypes.func.isRequired, // Обязательная функция обратного вызова для закрытия модального окна
};

export default Modal;



