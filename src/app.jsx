import React from 'react';
import { Constructor } from './components/constructor/constructor';
import { Header } from './components/header/header';
import { ConstructorProvider } from './providers/constructorProvider';
import appStyles from './app.module.css';

export const App = () => (
  <div className={appStyles.app}>
    <Header />
    <ConstructorProvider>
      <Constructor />
    </ConstructorProvider>
  </div>

);
