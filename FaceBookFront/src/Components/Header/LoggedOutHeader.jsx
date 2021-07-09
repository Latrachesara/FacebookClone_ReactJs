import React from "react";
import "./../../Style/header.css";
import { Button } from "@material-ui/core";
function LoggedOutHeader() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook_logo"
        />
        <h1 className="facebook_logo">FaceBook</h1>
      </div>

      <div className="header_mid"></div>

      <div className="header_right">
        <div className="header_info">
          <div className="header_input">
            <input placeholder="UserName" type="text" />
          </div>
          <div className="header_input">
            {" "}
            <input placeholder="Password" type="password" />
          </div>

          <Button>Login </Button>
        </div>
      </div>
    </div>
  );
}

export default LoggedOutHeader;
