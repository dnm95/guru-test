/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const isDev = process.env.NODE_ENV !== "production";

const config = {
  dev(sagaMiddleware) {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...[sagaMiddleware]));
  },

  prod(sagaMiddleware) {
    return compose(applyMiddleware(...[sagaMiddleware]));
  },
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState;

  }
  return rootReducer(state, action)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddlewares = isDev ? config.dev : config.prod;
  const store = createStore(reducer, applyMiddlewares(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: isDev });
