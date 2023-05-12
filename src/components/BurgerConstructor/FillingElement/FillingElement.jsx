import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './filling-element.module.css'


// определяем компонент FillingElement, который принимает объект данных в качестве аргумента
const FillingElement = ({data}) => {
  // возвращаем элемент списка с иконкой перемещения и элементом конструктора, содержащим текст, цену и изображение
  return (
    <li className= {styles['filling-element']}>
      <DragIcon type="primary"/> 
      <ConstructorElement className= {styles['filling-element']}
          text={data.name}
          price={data.price}
          thumbnail={data.image_mobile}
      />
    </li>
  )
}

// задаем propTypes для компонента, чтобы указать, какие свойства ожидаются
FillingElement.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image_mobile: PropTypes.string,
  }),
};

export default FillingElement;