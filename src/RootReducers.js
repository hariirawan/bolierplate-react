import { combineReducers } from "redux";
import ModuleReducers from "./modules/Module/Module.reducers";
import LoginReducers from "./modules/Login/Login.reducers";
import LayoutReducers from "./modules/AdminPage/Layout/Layout.reducers";

const RootReducers = combineReducers({
  ModuleReducers,
  login: LoginReducers,
  LayoutReducers
});

export default RootReducers;
