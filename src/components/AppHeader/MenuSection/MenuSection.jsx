import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './MenuSection.module.css';

// определяем компонент MenuSection, который принимает два аргумента: текст и дочерние элементы
function MenuSection({text, children}){

  // определяем классы стилей для секции и текста
  const sectionClass = `${styles.section} link`;
  const textClass = `${styles.text} text text_type_main-default`;

  // возвращаем верстку для секции меню, содержащую иконку и текст
  return (
    <a href='#' className={sectionClass}>
      {children}
      <p className={textClass}>{text}</p>
    </a>
  )

}

export default MenuSection;
