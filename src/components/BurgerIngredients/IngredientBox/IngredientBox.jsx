import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './IngredientBox.css'
import Modal from '../../Modal/Modal';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../../IngredientDetails/IngredientDetails';

function IngredientBox({ title, mealType, data }) {

  // Создаем состояние, чтобы хранить выбранный ингредиент
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  // Обработчик клика на ингредиенте - устанавливаем выбранный ингредиент
  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  // Обработчик закрытия модального окна - сбрасываем выбранный ингредиент
  const handleCloseModal = () => {
    setSelectedIngredient(null);
  };

  return (
    <div>
      <h2 className='text text_type_main-medium'>{title}</h2>
      <ul className='ml-4 mr-4 ingredients-box'>
        {data
        // Фильтруем ингредиенты по типу блюда
          .filter((ingredient) => ingredient.type === mealType)
          .map((ingredient) => (
            // Обработчик клика на ингредиенте
            <li className='ingredient' key={ingredient._id} onClick={() => handleIngredientClick(ingredient)}>
              <Counter count={1} size='default' extraClass='m-1' />
              <img className='ingredient-img pl-4 pr-4 pb-1' src={ingredient.image} alt={ingredient.name} />
              <div className='ingredient-price pb-1'>
                <p className='text text_type_digits-default'>{ingredient.price}</p>
                <CurrencyIcon type='primary' />
              </div>
              <h3 className='text text_type_main-default'>{ingredient.name}</h3>
            </li>
          ))}
      </ul>
      {/* Если выбран ингредиент, открываем модальное окно */}
      {selectedIngredient && (
        <Modal open={!!selectedIngredient} handleClose={handleCloseModal}>
          <IngredientDetails ingredientsData={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
}

// Задаем пропсы, которые должны быть переданы в компонент
IngredientBox.propTypes = {
  title: PropTypes.string.isRequired, // заголовок
  mealType: PropTypes.string.isRequired, // тип блюда
  data: PropTypes.array.isRequired, // массив ингредиентов
};

export default IngredientBox;


