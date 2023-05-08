import React, { useEffect } from 'react';
import ReactDom from "react-dom";
import PropTypes from 'prop-types';
import modalStyles from './Modal.css'
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

function Modal ({ open, children, handleClose }) {

  // Эффект, который добавляет слушатель события keydown
  useEffect(() => {
    const closeEsc = (e) => (e.key === 'Escape' ? handleClose() : null);
    document.addEventListener('keydown', closeEsc);
    return () => document.removeEventListener('keydown', closeEsc);
  });

  // Если значение open равно false, ничего не рендерим
  if (!open) return null;

  // Используем метод createPortal из ReactDOM для рендера модального окна вне главного контейнера
  return ReactDom.createPortal( 
    <>
      <div className="Modal">
        <button className='close-button' onClick={handleClose} />
        {children}
      </div>
      <ModalOverlay handleClose={handleClose} />
    </>,
   document.getElementById('portal')
   )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired, 
  handleClose: PropTypes.func.isRequired
}

export default Modal ;

