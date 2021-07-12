import React from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import "./../../Style/App.css";
import Widgets from "./../Widgets/Widgets";
function Warpper(props) {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <SideBar />
        {props.children}
        <Widgets />
      </div>
    </div>
  );
}

export default Warpper;
