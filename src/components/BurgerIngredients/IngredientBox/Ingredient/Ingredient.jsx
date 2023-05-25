import React, { useMemo, useState } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../../utils/PropTypes';
import styles from './Ingredient.module.css';
import { addIngredientInfo, deleteIngredientInfo } from '../../../../services/reducers/ingredient';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import IngredientDetails from '../../../IngredientDetails/IngredientDetails';
import Modal from '../../../Modal/Modal';

const Ingredient = ({ data, mealType }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  // Получение списка ингредиентов и булок из Redux Store
  const constructorIngredients = useSelector((store) => store.constructorIngredients.ingredients);
  const constructorBuns = useSelector((store) => store.constructorIngredients.buns);

  // Подсчет количества данного ингредиента в бургере
  const count = useMemo(() => {
    const allIngredients = [...constructorIngredients, ...constructorBuns];
    return allIngredients.filter((item) => item._id === data._id).length;
  }, [constructorIngredients, constructorBuns]);

  // Закрытие модального окна и удаление информации об ингредиенте из Redux Store
  function handleClose() {
    setModalActive(false);
    dispatch(deleteIngredientInfo());
  }

  // Открытие модального окна и добавление информации об ингредиенте в Redux Store
  function handleClick() {
    setModalActive(true);
    dispatch(addIngredientInfo(data));
  }

  // Использование функциональности перетаскивания ингредиентов с помощью useDrag
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: data,
  });

  if (data.type === mealType) {
    return (
      <>
        {/* Рендеринг ингредиента */}
        <li ref={dragRef} className={`${styles.ingredient}`} onClick={handleClick}>
          {/* Отображение счетчика, если ингредиент уже добавлен в бургер */}
          {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
          <img className={`${styles.img} pl-4 pr-4 pb-1`} src={data.image} alt={data.name} />
          <div className={`${styles.price} pb-1`}>
            <p className="text text_type_digits-default">{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <h3 className="text text_type_main-default">{data.name}</h3>
        </li>
        {/* Отображение модального окна с деталями ингредиента */}
        {modalActive && (
          <Modal handleClose={handleClose}>
            <IngredientDetails />
          </Modal>
        )}
      </>
    );
  }

  return null;
};

Ingredient.propTypes = {
  data: ingredientPropTypes.isRequired,
  mealType: PropTypes.string.isRequired,
};

export default Ingredient;
