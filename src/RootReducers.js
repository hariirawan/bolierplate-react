import { combineReducers } from "redux";
import ModuleReducers from "./modules/Module/Module.reducers";

const RootReducers = combineReducers({
  ModuleReducers
});

export default RootReducers;
