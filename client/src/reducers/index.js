import { combineReducers } from "redux";
import stockReducer from "./stockReducer";

export const reducers = combineReducers({
  stocks: stockReducer,
});

export default reducers;
