import React, { useEffect } from "react";
import "./Style/App.css";
import Register from "./Pages/Auth/Register";
import LoggedOutWarpper from "./Components/wrappers/LoggedOutrapperWrapper";
import Router from "./Utils/Router";
import Wrapper from "./Components/wrappers/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { VerifIsLoggedIn } from "./Redux/actions/AuthActions";
import { LoopCircleLoading } from "react-loadingg";
import { GLOBALTYPES } from "./Redux/actions/GlobalType";
function App() {
  const { Auth, Loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GLOBALTYPES.LOADING_ON });
    dispatch(VerifIsLoggedIn());
  }, [dispatch]);
  return (
    <>
      {Loading.Loading === false ? (
        <div className="app">
          {!Auth.isLoggedIn && (
            <LoggedOutWarpper>
              <Register />
            </LoggedOutWarpper>
          )}
          {Auth.isLoggedIn && (
            <>
              <Wrapper>
                <Router />
              </Wrapper>
            </>
          )}
        </div>
      ) : Loading.Loading === true ? (
        <LoopCircleLoading />
      ) : (
        <div />
      )}
    </>
  );
}

export default App;
