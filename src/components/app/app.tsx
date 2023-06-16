import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
