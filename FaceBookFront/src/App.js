import React from "react";
import "./Style/App.css";
import Feed from "./Pages/Feed/Feed";
import Header from "./Components/Header/Header";
import SideBar from "./Components/Sidebar/SideBar";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
