import React from 'react';
import { Constructor } from '../constructor/constructor';
import { Header } from '../header/header';
import { ConstructorProvider } from '../../providers/constructorProvider';
import appStyles from './app.module.css';

export const App = () => (
  <div className={appStyles.app}>
    <Header />
    <ConstructorProvider>
      <Constructor />
    </ConstructorProvider>
  </div>

);
