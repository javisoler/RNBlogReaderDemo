import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducer from './reducer';

export default function configureStore() {
  const middleware = [thunk];

  if (__DEV__) {
    const logger = createLogger({collapsed: true});
    middleware.push(logger);
  }

  const store = createStore(reducer, compose(applyMiddleware(...middleware)));

  return store;
}
