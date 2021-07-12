import React from "react";
import "./Style/App.css";
import Register from "./Pages/Auth/Register";
import LoggedOutWarpper from "./Components/wrappers/LoggedOutrapperWrapper";
import Router from "./Utils/Router";
import Wrapper from "./Components/wrappers/Wrapper";
function App() {
  const IsLoggedIn = true;
  return (
    <div className="app">
      {!IsLoggedIn && (
        <LoggedOutWarpper>
          <Register />
        </LoggedOutWarpper>
      )}

      {IsLoggedIn && (
        <>
          <Wrapper>
            <Router />
          </Wrapper>
        </>
      )}
    </div>
  );
}

export default App;
