/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

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
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState;

  }
  return rootReducer(state, action)
}

export const makeStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddlewares = isDev ? config.dev : config.prod;
  const store = createStore(reducer, initialState || {}, applyMiddlewares(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  if (isDev && module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: isDev });
