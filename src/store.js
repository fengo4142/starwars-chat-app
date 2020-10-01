import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './redux/saga';
import reducer from './redux/reducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) || compose;

const reduxStore = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default reduxStore;
