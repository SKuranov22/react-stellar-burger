import React from 'react';
import { Logo, BurgerIcon, ProfileIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuSection from './MenuSection/MenuSection';
import styles from './AppHeader.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${styles.appHeader} text text_type_main-default`}>
        <menu className={`${styles.appHeaderMenu}`}>
          <div className={`${styles.appHeaderMenuLeft}`}>
            {/* Раздел "Конструктор" */}
            <MenuSection text="Конструктор" active={true}>
              <BurgerIcon type="primary" />
            </MenuSection>

            {/* Раздел "Лента заказов" */}
            <MenuSection text="Лента заказов">
              <ListIcon type="secondary" />
            </MenuSection>
          </div>

          <div className={`${styles.appHeaderLogo}`}>
            <Logo />
          </div>

          <div className={`${styles.appHeaderMenuRight}`}>
            {/* Раздел "Личный кабинет" */}
            <MenuSection text="Личный кабинет">
              <ProfileIcon type="secondary" />
            </MenuSection>
          </div>
        </menu>
      </header>
    )
  }
}

export default AppHeader;
