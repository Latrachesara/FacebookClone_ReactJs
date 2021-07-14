import React, { useState } from "react";
import "./../../Style/LoginHeader.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./../../Redux/actions/AuthActions";
function LoggedOutHeader() {
  const inistialData = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(inistialData);
  const HandleChange = (value, name) => {
    setData({ ...data, [name]: value });
  };
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const HandleLogin = () => {
    console.log("click");
    dispatch(Login(data));
  };
  return (
    <div className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebook_logo"
        />
        <h1 className="facebook_logo ">FaceBook</h1>
      </div>

      <div className="header_right">
        <div className="header_info row">
          {" "}
          {alert.type === "LOGIN" && alert.error === true ? (
            <div className="aler alert-danger alert-danger-login col-md">
              {" "}
              {alert.msg}
            </div>
          ) : (
            <div />
          )}
          <div className="header_input col-md">
            <input
              placeholder="UserName"
              type="text"
              name="email"
              onChange={(e) => {
                HandleChange(e.target.value, e.target.name);
              }}
            />
          </div>
          <div className="header_input col-md">
            {" "}
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => {
                HandleChange(e.target.value, e.target.name);
              }}
            />
          </div>
          <Button
            type="button"
            className="col-md login-button"
            onClick={() => {
              HandleLogin();
            }}
          >
            Login{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoggedOutHeader;
