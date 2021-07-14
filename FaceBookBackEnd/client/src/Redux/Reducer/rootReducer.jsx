import { combineReducers } from "redux";
import alert from "./AlertReduer";
import Auth from "./AuthReducer";
import Loading from "./LoadingReducer";
import Post from "./PostReducer";
export default combineReducers({
  alert,
  Auth,
  Loading,
  Post,
});
