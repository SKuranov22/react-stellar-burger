import React, { useEffect } from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsData } from '../../services/actions/ingresients-data';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const itemsLoaded = useSelector((store) => store.ingredients.itemsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsData()); // Вызываем экшн для получения данных
  }, [dispatch]);

  return (
    <div className="App">
      <AppHeader /> {/* Компонент заголовка приложения */}
      {itemsLoaded === false ? (
        <div>Загрузка...</div> // Отображаем "Загрузка...", если данные еще не загружены
      ) : (
        <main className='App-main'>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients /> {/* Компонент списка ингредиентов */}
            <BurgerConstructor /> {/* Компонент конструктора бургера */}
          </DndProvider>
        </main>
      )}
    </div>
  );
}

export default App;
