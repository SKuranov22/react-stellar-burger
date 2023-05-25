import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './TotalPrice.module.css';

const TotalPrice = ({ totalPrice }) => {

  return (
    <div className={styles.total}>
      {/* Отображение общей стоимости */}
      <p className='text text_type_digits-medium'>
        {totalPrice}
      </p>
      {/* Отображение иконки валюты */}
      <CurrencyIcon />
    </div>
  );
}

export default TotalPrice;
