import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import styles from './IngredientBox.module.css';
import Ingredient from './Ingredient/Ingredient';

const IngredientBox = ({ titleId, title, mealType, data, innerRef }) => {
  return (
    <>
      <h2 ref={innerRef} id={titleId} className='text text_type_main-medium'>
        {title}
      </h2>
      <ul className={`${styles.ingredientsBox} ml-4 mr-4`}>
        {data.map((item) => (
          <Ingredient data={item} mealType={mealType} key={item._id} />
        ))}
      </ul>
    </>
  );
};

IngredientBox.propTypes = {
  titleId: PropTypes.string.isRequired, // Идентификатор заголовка
  title: PropTypes.string.isRequired, // Заголовок
  mealType: PropTypes.string.isRequired, // Тип мяса
  data: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired, // Массив данных ингредиентов
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), // Ref для заголовка
};

export default IngredientBox;

