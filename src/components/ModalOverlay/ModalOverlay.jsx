import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './modal-overlay.module.css';

// Компонент оверлея для модального окна
function ModalOverlay({handleClose}) {
  // Возвращает оверлей с функцией закрытия при клике
  return (
    <div className= {styles['modal-overlay']} onClick={handleClose}>
    </div>
  );
}

// Проверка типов пропсов
ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;