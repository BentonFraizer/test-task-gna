import { Middleware, AnyAction } from 'redux';
import browserHistory from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: AnyAction) => {
  if (action.type === 'site/redirectToRoute') {
    browserHistory.push(action.payload as string);
  }

  return next(action);
};
