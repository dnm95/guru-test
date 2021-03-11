import { combineReducers } from "redux";
import places from "./places";
import user from "./user";

export default combineReducers({
  places,
  user,
});