import React from "react";
import "./Style/App.css";
import Feed from "./Pages/Feed/Feed";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/SideBar";
import Widgets from "./Components/Widgets/Widgets";
import Register from "./Pages/Auth/Register";
import Warpper from "./Components/wrappers/Wrapper";
import LoggedOutWarpper from "./Components/wrappers/LoggedOutrapperWrapper";
function App() {
  const IsLoggedIn = false;
  return (
    <div className="app">
      {!IsLoggedIn && (
        <LoggedOutWarpper>
          <Register />
        </LoggedOutWarpper>
      )}

      {IsLoggedIn && (
        <>
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
