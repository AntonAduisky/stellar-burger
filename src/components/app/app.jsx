import React from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { Constructor } from '../constructor/constructor';
import { Header } from '../header/header';
// import { ConstructorProvider } from '../../providers/constructorProvider';
import appStyles from './app.module.css';

export const App = () => (
  <div className={appStyles.app}>
    <Header />
    {/* <DndProvider backend={HTML5Backend}> */}
    <Constructor />
    {/* </DndProvider> */}
  </div>

);
