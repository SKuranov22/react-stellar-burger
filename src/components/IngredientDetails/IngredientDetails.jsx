import React from 'react';
import styles from './IngredientDetails.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails() {
  // Получение информации об ингредиенте из Redux Store
  const ingredientInfo = useSelector((store) => store.ingredientInformation.information);

  return (
    <div className={`${styles.ingredientDetails} pt-10 pl-10 pr-10 pb-60`}>
      {/* Заголовок блока деталей ингредиента */}
      <h2 className={`${styles.ingredientHeader} text text_type_main-large`}>Детали ингредиента</h2>
      {/* Изображение ингредиента */}
      <img className={`${styles.ingredientImage}`} alt="картинка ингредиента" src={ingredientInfo.image_large} />
      {/* Название ингредиента */}
      <h3 className={`${styles.ingredientName} text text_type_main-medium pt-4 pb-8`}>{ingredientInfo.name}</h3>
      {/* Блок с пищевой ценностью ингредиента */}
      <ul className={`${styles.nutritionalBlock} mt-8 mb-15`}>
        <li className={`${styles.nutritionalValue}`}>
          <h4 className='text text_type_main-default'>Калории, ккал</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.calories}</p>
        </li>
        <li className={`${styles.nutritionalValue}`}>
          <h4 className='text text_type_main-default'>Белки, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.proteins}</p>
        </li>
        <li className={`${styles.nutritionalValue}`}>
          <h4 className='text text_type_main-default'>Жиры, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.fat}</p>
        </li>
        <li className={`${styles.nutritionalValue}`}>
          <h4 className='text text_type_main-default'>Углеводы, г</h4>
          <p className='text text_type_digits-default'>{ingredientInfo.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
