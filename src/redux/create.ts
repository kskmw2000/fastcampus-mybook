import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSage from './modules/rootSaga';
import { routerMiddleware } from 'connected-react-router';
import history from '../history';
import TokenService from '../services/TokenService';

const create = () => {
  const token = TokenService.get();

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(rootSage);

  return store;
};

export default create;
