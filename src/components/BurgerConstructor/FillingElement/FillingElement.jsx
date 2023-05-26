import React, { useRef } from 'react';
import styles from './FillingElement.module.css';
import { ingredientPropTypes } from '../../../utils/PropTypes';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { useDispatch } from 'react-redux';
import { moveIngredientInConstructor, deleteIngredient } from '../../../services/actions/ingredients-constructor';

const FillingElement = ({ data, index, id }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  // Обработчик события "сброс" для перетаскиваемого элемента
  const [, drop] = useDrop({
    accept: "filling",
    collect() {},
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index; // Индекс перетаскиваемого элемента
      const hoverIndex = index; // Индекс текущего элемента, над которым происходит перетаскивание

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveIngredientInConstructor({ dragIndex, hoverIndex })); // Вызываем экшн для обновления порядка элементов в конструкторе

      item.index = hoverIndex; // Обновляем индекс перетаскиваемого элемента
    },
  });

  // Обработчик события "перетаскивание" для элемента
  const [{ isDragging }, drag] = useDrag({
    type: "filling",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1; // Устанавливаем непрозрачность элемента при перетаскивании

  drag(drop(ref)); // Привязываем обработчики событий к элементу

  return (
    <li ref={ref} draggable={true} style={{ opacity }} className={`${styles.fillingElement}  mr-2`}>
      <DragIcon type="primary" />
      <ConstructorElement
        className={`${styles.constructorWidth}`}
        text={data.name} // Название ингредиента
        price={data.price} // Цена ингредиента
        thumbnail={data.image_mobile} // URL миниатюры ингредиента
        handleClose={() => dispatch(deleteIngredient(index))} // Обработчик удаления ингредиента из конструктора
      />
    </li>
  );
};

FillingElement.propTypes = {
  data: ingredientPropTypes.isRequired, // Проп-тайп для объекта ингредиента
};

export default FillingElement;
