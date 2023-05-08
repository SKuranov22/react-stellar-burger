import React from 'react';
import PropTypes from 'prop-types';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import FillingElementClass from './FillingElement.css'

// определяем компонент FillingElement, который принимает объект данных в качестве аргумента
const FillingElement = ({data}) => {
  // возвращаем элемент списка с иконкой перемещения и элементом конструктора, содержащим текст, цену и изображение
  return (
    <li className='filling-element'>
      <DragIcon type="primary"/> 
      <ConstructorElement className='filling-element'
          text={data.name}
          price={data.price}
          thumbnail={data.image_mobile}
      />
    </li>
  )
}

// задаем propTypes для компонента, чтобы указать, какие свойства ожидаются
FillingElement.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}

export default FillingElement;