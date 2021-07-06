import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import SideBar from "./SideBar";
import Widgets from "./Widgets";

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
