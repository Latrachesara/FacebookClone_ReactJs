import React from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
function Warpper(props) {
  return (
    <div>
      <Header />
      <div className="app">
        <SideBar />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Warpper;
