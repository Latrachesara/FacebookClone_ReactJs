import React, { useState } from "react";
import "./../../Style/Register.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./../../Redux/actions/AuthActions";
function Register() {
  const inistialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };
  const [data, setData] = useState(inistialData);
  const HandleChange = (value, name) => {
    setData({ ...data, [name]: value });
  };

  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);
  const HandleSubmit = () => {
    dispatch(register(data));
  };
  return (
    <div className=" register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt=""
          />
          <h3>Welcome</h3>
          <p>FACEBOOK</p>

          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading">Sign In to FACEBOOK </h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name *"
                      name="firstName"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name *"
                      name="lastName"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password *"
                      name="password"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password *"
                      name="passwordVerif"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  {alert.type === "REGISTER" && alert.error === true ? (
                    <div className="alert alert-danger topDefault">
                      {alert.msg}
                    </div>
                  ) : alert.error === false ? (
                    <div className="alert alert-success topDefault">
                      {alert.msg}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email *"
                      name="email"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder="Your Phone *"
                      name="phoneNumber"
                      onChange={(e) => {
                        HandleChange(e.target.value, e.target.name);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option className="hidden" selected disabled>
                        select your gendre
                      </option>
                      <option value="men">Men</option>
                      <option value="women">women</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Answer *"
                      value=""
                    />
                  </div>

                  <input
                    type="button"
                    className="btnRegister"
                    value="Register"
                    onClick={() => {
                      HandleSubmit();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
