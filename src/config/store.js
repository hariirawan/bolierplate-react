import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import RootReducers from "../RootReducers";

const loggerMiddleware = createLogger();

const store = createStore(
  RootReducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
