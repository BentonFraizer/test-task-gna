import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks';
// import { getProducts1, getProducts2, getIsDataLoadedStatus } from '../../store/site-data/selectors';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { fetchProducts1Action, fetchProducts2Action } from '../../store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  // const isDataLoaded = useAppSelector(getIsDataLoadedStatus);

  useEffect(() => {
    dispatch(fetchProducts1Action());
    dispatch(fetchProducts2Action());
  }, []);

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default App;
