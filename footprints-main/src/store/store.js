import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const intiState = {}

const middleware = [thunk]

export const store = createStore(persistedReducer, intiState, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store)