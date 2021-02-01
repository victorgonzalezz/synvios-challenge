import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// const sagaMonitor = null;
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// const enhancer = __DEV__
//   ? compose(
//       console.tron.createEnhancer(),
//       applyMiddleware(sagaMiddleware)
//     )
//   : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer);

// sagaMiddleware.run(rootSaga);

export default store;