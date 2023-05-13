import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  // Инициализируем состояние приложения
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);

  // Функция, которая будет вызываться при загрузке компонента
  useEffect(() => {
    // Объявляем асинхронную функцию getData, которая получает данные с сервера
    const getData = async () => {
      setIsLoading(true); // Устанавливаем isLoading в значение true перед отправкой запроса

      try {
        const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

        // Проверяем ответ от сервера на корректность
        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}`);
        }

        const { data } = await response.json();
        setData(data);
        setHasError(false);
      } catch (error) {
        setHasError(true);
        console.error(error); // Выводим ошибку в консоль для отладки и обработки ошибок
      } finally {
        setIsLoading(false); // Устанавливаем isLoading в значение false после получения ответа с сервера
      }
    };

    getData(); // Вызываем функцию getData
  }, []);

  return (
    <div className={styles.app}>
      {/* Выводим заголовок приложения */}
      <AppHeader />
      <main className={styles['app-main']}>
        {/* Если isLoading установлено в true, то выводим сообщение о загрузке */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* Если hasError установлено в true, то выводим сообщение об ошибке */}
            {hasError ? (
              <p>Error occurred!</p>
            ) : (
              <>
                {/* Если данные получены успешно, передаем их компонентам BurgerIngredients и BurgerConstructor */}
                <BurgerIngredients data={data} />
                <BurgerConstructor data={data} />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
