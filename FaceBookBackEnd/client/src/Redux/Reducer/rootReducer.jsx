import { combineReducers } from "redux";
import alert from "./AlertReduer";
import Auth from "./AuthReducer";
import Loading from "./LoadingReducer";
export default combineReducers({
  alert,
  Auth,
  Loading,
});
