import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from 'store/cart/cart.reducer';

export const middleware = [thunk];

const persistConfig = {
    key: 'persist-config',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ cart: cartReducer }));

const initState = {};

export const store = createStore(persistedReducer, initState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
