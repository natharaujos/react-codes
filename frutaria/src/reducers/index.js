import { combineReducers } from "redux";
import { reducers as frutasReducers } from "./fruta.reducer";

const reducers = combineReducers({
  frutasReducers,
});

export { reducers };
