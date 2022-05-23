import React from 'react';
import { Constructor } from './components/constructor/Constructor';
import { Header } from './components/header/Header';
import { BurgerConstructorProvider } from './providers/BurgerConstructorProvider';
import appStyles from './App.module.css';

export const App = () => (
  <BurgerConstructorProvider>
    <div className={appStyles.app}>
      <Header />
      <Constructor />
    </div>
  </BurgerConstructorProvider>
);
