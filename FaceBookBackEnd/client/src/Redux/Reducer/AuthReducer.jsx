import { GLOBALTYPES } from "./../actions/GlobalType";

const inistialState = {
  accessToken: "",
  user: {},
  isLoggedIn: false,
  error: null,
  msg: "",
};
export const AUTHTYPES = {
  LOGGEDIN: "LOGGEDIN",
  NOTLOGGED: "NOTLOGGEDIN",
  LOGIN_SUCCED: "LOGIN_SUCCED",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const AuthReducer = (state = inistialState, action) => {
  switch (action.type) {
    case AUTHTYPES.LOGGEDIN:
      return {
        ...state,
        accessToken: action.payload.token,
        user: action.payload.User,
        isLoggedIn: true,
      };
    case AUTHTYPES.NOTLOGGED:
      return {
        ...state,
        error: true,
        msg: action.payload.msg,
      };
    case AUTHTYPES.LOGIN_SUCCED:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
