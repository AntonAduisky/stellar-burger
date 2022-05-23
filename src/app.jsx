import React from 'react';
import { Constructor } from './components/constructor/constructor';
import { Header } from './components/header/header';
import { BurgerConstructorProvider } from './providers/BurgerConstructorProvider';
import appStyles from './app.module.css';

export const App = () => (
  <div className={appStyles.app}>
    <Header />
    <BurgerConstructorProvider>
      <Constructor />
    </BurgerConstructorProvider>
  </div>

);
