import React from 'react';
import { useSelector } from '../../../types/hooks';
import styles from './OrderIngredient.module.css';
import { FC } from 'react';

type TOrderIngredient = {
  intersection: boolean,
  id: string,
  counter?: number | undefined
}

const OrderIngredient: FC<TOrderIngredient> = ({ intersection, id, counter }) => {

  const allIngredients = useSelector((store) => store.ingredients.items);
  const ingredientData = allIngredients!.filter(item => item._id === id)[0]


  let className;
  switch (intersection) {
    case true:
      className = styles.intersection
      break;
    case false:
      className = null
      break;
    default:
      break;
  }

  return (
    <div className={`${styles.frame} ${className}`}>
      <img className={`${styles.img} `} src={ingredientData ? ingredientData.image : undefined} ></img>
      {counter! >= 2
        ? (<div className={`${styles.counter} text text_type_main-default`}>+{counter}</div>)
        : null
      }
    </div>
  );
}

export default OrderIngredient;
