import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modl.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal({ children, handleClose }) {
  // Закрытие модального окна при нажатии на клавишу Escape
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [handleClose]);

  // Создание портала для модального окна
  return ReactDOM.createPortal(
    <>
      {/* Контейнер модального окна */}
      <div className={`${styles.modal}`}>
        {/* Кнопка закрытия модального окна */}
        <button className={`${styles.closeButton}`} onClick={handleClose} />
        {/* Дочерние элементы, переданные в компонент Modal */}
        {children}
      </div>
      {/* Подложка для модального окна */}
      <ModalOverlay handleClose={handleClose} />
    </>,
    document.getElementById('portal')
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired, // Ожидаем дочерние элементы
  handleClose: PropTypes.func.isRequired, // Ожидаем функцию для закрытия модального окна
};

export default Modal;

