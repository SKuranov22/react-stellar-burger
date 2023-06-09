import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import emptyBurger from '../../../images/empty-burger.png';

const BunElement = ({ type, isLocked }) => {
  const buns = useSelector((store) => store.constructorIngredients.buns);
  const isEmpty = buns.length === 0;

  // Определение свойств компонента ConstructorElement в зависимости от наличия булок
  const constructorProps = {
    type,
    isLocked,
    text: isEmpty ? 'Добавь булку!' : `${buns[0].name} ${type === 'top' ? '(верх)' : '(низ)'}`,
    price: isEmpty ? 0 : buns[0].price,
    thumbnail: isEmpty ? emptyBurger : buns[0].image_mobile,
  };

  return (
    <ConstructorElement {...constructorProps} />
  );
};

BunElement.propTypes = {
  type: PropTypes.string.isRequired, // Тип булки (верхняя или нижняя)
  isLocked: PropTypes.bool.isRequired, // Флаг блокировки элемента
};

export default BunElement;
