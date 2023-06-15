import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import Register from '../../pages/register/register';
import Page404 from '../../pages/page404/page404';
import Modal from '../Modal/Modal';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ResetPassword from '../../pages/reset-password/reset-password';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import Ingredient from '../../pages/ingredient/ingredient';
import { getItemsData } from '../../services/actions/ingresients-data';
import { useSelector, useDispatch } from '../../types/hooks';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserData } from '../../services/actions/login';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const userData = useSelector((store) => store.userInfo);
  const itemsLoaded = useSelector((store) => store.ingredients.items);

  useEffect(() => {
    dispatch(getItemsData());
    dispatch(getUserData());
  }, [dispatch])

  function closePopup() {
    navigate(-1)
  };

  return (
    <div className={styles.App}>
      <AppHeader />

      {/* Проверяем, загружены ли данные или пользователь уже авторизован */}
      {!itemsLoaded && userData ? (
        <p>Загрузка</p>
      ) : (
        <Routes location={background || location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<ProtectedRoute anonymous><Login /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>}>
            <Route path="" element={<ProfileInfo />} />
          </Route>
          <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
          <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
          <Route path="/ingredients/:id" element={<Ingredient />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      )}

      {/* Проверяем, есть ли background и загружены ли данные о ингредиентах */}
      {background && itemsLoaded && (
        <Routes>
          <Route path="/ingredients/:id" element={<Modal handleClose={closePopup}><IngredientDetails data={itemsLoaded} /></Modal>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
