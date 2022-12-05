import { compose, createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

// import { rootSaga } from './root-saga';
import { rootReducer } from './root.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);