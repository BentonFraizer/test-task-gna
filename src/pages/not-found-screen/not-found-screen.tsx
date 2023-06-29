import React from 'react';
import { Link } from 'react-router-dom';
import {AppRoute} from "../../consts";

function NotFoundScreen(): JSX.Element {
  return (
    <div className="wrapper" style={{ textAlign: 'center', paddingTop: 100 }}>
      <main>
        <div className="page-message">
          <h1 className="page-message__title">404</h1>
          <p className="page-message__text">Страница не найдена</p>
          <Link className="page-message__link" to={AppRoute.Main}>
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
}
export default NotFoundScreen;
