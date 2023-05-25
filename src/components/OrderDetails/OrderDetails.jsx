import React from 'react';
import styles from './OrderDetails.module.css'

import confirmImg from '../../images/confirm.svg';
import { useSelector } from 'react-redux';

function OrderDetails() {
  const zeroLength = 6;
  const orderInfo = useSelector((store) => store.orderInformation.orderNumber); // Данные заказа
  const orderNumber = String(orderInfo).padStart(zeroLength, '0');

  // Проверка, загружаются ли данные заказа
  const isLoading = orderInfo === null;

  return (
    <div className={`${styles.orderDetales}`}>
      {isLoading ? (
        // Отображение сообщения "Загрузка" во время загрузки данных заказа
        <p className='text text_type_main-large pb-8'>Загрузка</p>
      ) : (
        <>
          {/* Отображение номера заказа */}
          <p className='text text_type_digits-large pb-8'>{orderNumber}</p>
          <h3 className='text text_type_main-medium'>идентификатор заказа</h3>
          <img src={confirmImg} alt='знак подтверждения заказа' className='pt-15 pb-15' type="primary" />
          <p className='text text_type_main-default pb-2'>Ваш заказ начали готовить</p>
          <p className='text text_type_main-default order-detales-text-color'>Дождитесь готовности на орбитальной станции</p>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
