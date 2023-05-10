import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';
import { Box } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-Ingredients.module.css';
import IngredientBox from './IngredientBox/IngredientBox'

function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState("one"); // текущий выбранный таб

  // табы, каждый содержит идентификатор, заголовок и тип блюда, соответствующий табу
  const tabs = [
    { id: "one", title: "Булки", mealType: "bun" },
    { id: "two", title: "Соусы", mealType: "sauce" },
    { id: "three", title: "Начинки", mealType: "main" },
  ];

  return (
    <section className= {`${styles["burger-ingredients"]} pt-10`}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1> {/* Заголовок раздела */}
      <div style={{ display: "flex" }} className="pb-10"> {/* Блок с табами */}
                                                                                <div className= {`${styles['order-confirmation']} mt-10 mr-4`}></div>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className="text text_type_main-medium"
            value={tab.id}
            active={current === tab.id}
            onClick={() => setCurrent(tab.id)}
          >
            {tab.title}
          </Tab>
        ))}
      </div>
      <div className= {styles["block-with-scroll"]}> {/* Блок с ингредиентами */}
        {tabs.map((tab) => (
          <IngredientBox
            key={tab.id}
            title={tab.title}
            mealType={tab.mealType}
            data={data}
          />
        ))}
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BurgerIngredients;
