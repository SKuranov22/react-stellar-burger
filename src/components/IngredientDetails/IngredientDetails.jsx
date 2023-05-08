import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetailsStyles from './IngredientDetails.css'

// Создаем компонент IngredientDetails
const IngredientDetails = ({ ingredientsData }) => {
  // Деструктурируем данные ингредиента
  const { name, image_large, calories, proteins, fat, carbohydrates } = ingredientsData;

  // Возвращаем разметку компонента
  return (
    <div className="ingredient-details pt-10 pl-10 pr-10 pb-60">
      <h2 className="ingredient-header text text_type_main-large">Детали ингредиента</h2>
      <img className="ingredient-image" src={image_large} alt={`Изображение ингредиента ${name}`} />
      <h3 className="ingredient-name text text_type_main-medium pt-4 pb-8">{name}</h3>
      <ul className="nutritional-block mt-8 mb-15">
        <li className="nutritional-value">
          <h4 className="text text_type_main-default">Калории,ккал</h4>
          <p className="text text_type_digits-default">{calories}</p>
        </li>
        <li className="nutritional-value">
          <h4 className="text text_type_main-default">Белки, г</h4>
          <p className="text text_type_digits-default">{proteins}</p>
        </li>
        <li className="nutritional-value">
          <h4 className="text text_type_main-default">Жиры, г</h4>
          <p className="text text_type_digits-default">{fat}</p>
        </li>
        <li className="nutritional-value">
          <h4 className="text text_type_main-default">Углеводы, г</h4>
          <p className="text text_type_digits-default">{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

// Задаем пропсы для компонента
IngredientDetails.propTypes = {
  ingredientsData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
};

export default IngredientDetails;