import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';

const BurgerConstructor = ({ data }) => {
  const [modalActive, setModalActive] = useState(false); // Состояние для открытия/закрытия модального окна
  const buns = data.filter(item => item.type === 'bun');
  const bun = buns.length ? buns[0] : null;
  const fillings = data.filter(item => item.type !== 'bun');

  const handleOpenModal = () => {
    setModalActive(true); // Функция для открытия модального окна при клике на кнопку
  };

  const handleCloseModal = () => {
    setModalActive(false); // Функция для закрытия модального окна
  };

  return (
    <section className={styles['burger-constructor']}>
      <div className={`${styles['bun-element']} mr-4`}>
        {bun && (
          <ConstructorElement
            type="top"
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
      <ul className={`${styles['burger-constructor-filling']} mt-4 mb-4`}>
        {fillings.map(item => (
          <FillingElement key={item._id} data={item} />
        ))}
      </ul>
      <div className={`${styles['bun-element']} mr-4`}>
        {bun && (
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
      <div className={`${styles['order-confirmation']} mt-10 mr-4`}>
        <div className={styles['total-cost']}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={handleOpenModal} htmlType="button">
          Оформить заказ
        </Button>
      </div>
      {modalActive && (
        <Modal open={modalActive} handleClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;

