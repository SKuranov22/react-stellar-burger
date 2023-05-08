import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import BurgerConstructorClass from './BurgerConstructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {Box} from '@ya.praktikum/react-developer-burger-ui-components';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import FillingElement from './FillingElement/FillingElement';


// Компонент BurgerConstructor принимает пропс data, который содержит информацию о выбранных пользователем ингредиентах.
const BurgerConstructor = ({data}) => {
  // Компонент использует хук useState для управления отображением модального окна оформления заказа.
  // Затем происходит фильтрация ингредиентов на булки, начинки и соусы.
  const [modalActive, setModalActive] = useState(false);
  const buns = data.filter(item => item.type === 'bun');
  // Переменная bun содержит информацию о булке. Если булка не выбрана, то значение bun будет равно null.
  const bun = buns.length ? buns[0] : null;
  const fillings = data.filter(item => item.type !== 'bun');

  return (
    // Компонент отображает верхнюю булку с помощью ConstructorElement.
    <section className="burger-constructor">
      <div className="bun-element mr-4">
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
      <ul className="burger-constructor-filling mt-4 mb-4">
        {fillings.map(item => (
          // Далее происходит отображение начинки с помощью компонента FillingElement, который принимает данные об ингредиенте.
          <FillingElement key={item._id} data={item} />
        ))}
      </ul>
      <div className="bun-element mr-4">
        {bun && (
          // Наконец, отображается нижняя булка с помощью ConstructorElement.
          <ConstructorElement
            type="bottom"
            isLocked
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        )}
      </div>
      <div className="order-confirmation mt-10 mr-4">
        <div className="total-cost">
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" onClick={() => setModalActive(true)}>
          Оформить заказ
        </Button>
      </div>
      <Modal open={modalActive} handleClose={() => setModalActive(false)}>
        <OrderDetails />
      </Modal>
    </section>
    // Модальное окно отображает компонент OrderDetails, который содержит информацию о заказе.
  );
};

export default BurgerConstructor;