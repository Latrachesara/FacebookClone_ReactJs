import { PostData, GetData } from "./../../Utils/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { AUTHTYPES } from "./../Reducer/AuthReducer";
//register actions
export const register = (UserData) => async (dispatch) => {
  //send data to the backEnd (register)
  console.log("this is the data in the actions :", UserData);
  await PostData("register", UserData)
    //response succed
    .then((res) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: false, msg: res.data.message },
      });
    })
    // There is an error
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response.data.message,
          type: "REGISTER",
        },
      });
    });
};

export const VerifIsLoggedIn = () => async (dispatch) => {
  await GetData("VerifiLoggedIn")
    .then((res) => {
      console.log(res);
      dispatch({ type: AUTHTYPES.LOGGEDIN, payload: res.data });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
    })
    .catch((err) => {
      dispatch({
        type: AUTHTYPES.NOTLOGGED,
        payload: { msg: err.response.data.message },
      });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
    });
};

export const Login = (data) => async (dispatch) => {
  console.log(data);
  await PostData("login", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: AUTHTYPES.LOGIN_SUCCED, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: true, msg: err.response.data.message, type: "LOGIN" },
      });
    });
};
