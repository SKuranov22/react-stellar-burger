import React, { useEffect } from 'react';
import ReactDom from "react-dom";
import styles from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { FC } from 'react';

// Получаем элемент портала из DOM
const portal = document.getElementById('portal') as HTMLElement;

// Определяем тип пропсов для компонента Modal
type TModal = {
  children: JSX.Element, // Дочерние элементы модального окна
  handleClose: (() => void) // Функция для закрытия модального окна
}

const Modal: FC<TModal> = ({ children, handleClose }) => {
  // Добавляем обработчик события при монтировании компонента
  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null); // Закрытие модального окна при нажатии на Esc
    document.addEventListener('keydown', closeEsc); // Добавляем обработчик события нажатия клавиши
    return () => document.removeEventListener('keydown', closeEsc); // Удаляем обработчик события при размонтировании компонента
  }, [handleClose]);

  // Создаем портал для отображения модального окна
  return ReactDom.createPortal(
    <>
      <div className={`${styles.modal}`}>
        <button className={`${styles.closeButton}`} onClick={handleClose} /> {/* Кнопка для закрытия модального окна */}
        {children} {/* Дочерние элементы, переданные в компонент */}
      </div>
      <ModalOverlay handleClose={handleClose} /> {/* Подложка под модальным окном */}
    </>,
    portal // Элемент, в котором будет отображаться портал
  )
}

export default Modal;

