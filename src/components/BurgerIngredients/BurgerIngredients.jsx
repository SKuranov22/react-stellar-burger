import React, { useState, useRef, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import IngredientBox from './IngredientBox/IngredientBox';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

function BurgerIngredients() {
  const data = useSelector((store) => store.ingredients.items); // Получаем данные из стора

  const [current, setCurrent] = useState('buns'); // Состояние активной вкладки

  function handleButtonClick(tab) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к выбранной вкладке
  }

  const [bunsRef, bunsInView] = useInView({ threshold: 0 }); // Обнаружение видимости элемента "Булки"
  const [saucesRef, saucesInView] = useInView({ threshold: 0 }); // Обнаружение видимости элемента "Соусы"
  const [mainRef, mainInView] = useInView({ threshold: 0 }); // Обнаружение видимости элемента "Начинки"

  useEffect(() => {
    // Определение видимой вкладки на основе обнаруженных элементов
    if (bunsInView) {
      setCurrent('buns');
    } else if (saucesInView) {
      setCurrent('sauces');
    } else if (mainInView) {
      setCurrent('main');
    }
  }, [bunsInView, saucesInView, mainInView]);

  return (
    <section className={`${styles.burgerIngredients} pt-10`}>
      <h1 className="text text_type_main-large p-5">Соберите бургер</h1>
      <div className={`${styles.tabsContainer} pb-10`}>
        {/* Вкладки */}
        <Tab className="text text_type_main-medium" value="buns" active={current === 'buns'} onClick={() => handleButtonClick('buns')}>
          Булки
        </Tab>
        <Tab className="text text_type_main-medium" value="sauces" active={current === 'sauces'} onClick={() => handleButtonClick('sauces')}>
          Соусы
        </Tab>
        <Tab className="text text_type_main-medium" value="main" active={current === 'main'} onClick={() => handleButtonClick('main')}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.blockWithScroll}`}>
        {/* Контейнеры с ингредиентами */}
        <IngredientBox innerRef={bunsRef} titleId="buns" title="Булки" mealType="bun" data={data} />
        <IngredientBox innerRef={saucesRef} titleId="sauces" title="Соусы" mealType="sauce" data={data} />
        <IngredientBox innerRef={mainRef} titleId="main" title="Начинки" mealType="main" data={data} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
