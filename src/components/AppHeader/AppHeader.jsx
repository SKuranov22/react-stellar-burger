import React from 'react';
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuSection from './MenuSection/MenuSection';
import AppHeaderStyles from './AppHeader.css';

function AppHeader() {
  // определяем массив пунктов меню с текстом и иконкой для каждого пункта
  const menuItems = [
    { text: "Конструктор", icon: <BurgerIcon type="secondary" /> },
    { text: "Лента заказов", icon: <ListIcon type="secondary" /> },
    { text: "Личный кабинет", icon: <ProfileIcon type="secondary" /> }
  ];

  // создаем массив секций меню, используя массив пунктов меню
  const menuSections = menuItems.map((item) => (
    <MenuSection key={item.text} text={item.text}>
      {item.icon}
    </MenuSection>
  ));

  // возвращаем верстку для шапки приложения, содержащую логотип и меню
  return (
    <header className="app-header text text_type_main-default">
      <menu className="app-header-menu">
        <div className="app-header-menu-left">{menuSections.slice(0, 2)}</div>
        <div className="app-header-logo">
          <Logo />
        </div>
        <div className="app-header-menu-right">{menuSections.slice(2)}</div>
      </menu>
    </header>
  );
}

export default AppHeader;
