import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducers from "../RootReducers";

const persistConfig = {
  key: "root",
  storage
};

const loggerMiddleware = createLogger();
const persistedReducer = persistReducer(persistConfig, RootReducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export const persistor = persistStore(store);
