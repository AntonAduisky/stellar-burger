import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../appHeader/AppHeader';
import Main from '../main/Main';

function App() {
  return (
    <div className={AppStyles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
