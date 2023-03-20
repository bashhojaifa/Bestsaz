import React, { Fragment } from "react";
import { useState } from "react";
import {
  useAuthLoginMutation,
  useRegisterMutation,
} from "../../store/services/authService";
import Layout from "../view/layout/Layout";

const Register = () => {
  const [image, setImage] = useState();
  const [registerData, setRegisterData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
  });

  const registerInputHandler = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const [register, response] = useRegisterMutation();

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  const registerHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set("name", registerData.name);
    formData.set("mobile", registerData.mobile);
    formData.set("email", registerData.email);
    formData.set("address", registerData.address);
    formData.set("password", registerData.password);
    formData.set("avatar", image);
    console.log(formData);

    register(formData);

    console.log({ formData });
  };
  return (
    <Fragment>
      <Layout>
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <div className="login-register-tab-list nav">
                    <h4> register </h4>
                  </div>

                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={registerHandler} method="post">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={registerData.name}
                          onChange={registerInputHandler}
                        />
                        <input
                          type="number"
                          name="mobile"
                          placeholder="Mobile"
                          value={registerData.mobile}
                          onChange={registerInputHandler}
                        />
                        <input
                          name="email"
                          placeholder="Email"
                          type="email"
                          value={registerData.email}
                          onChange={registerInputHandler}
                        />
                        <input
                          type="text"
                          name="address"
                          placeholder="address"
                          value={registerData.address}
                          onChange={registerInputHandler}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={registerData.password}
                          onChange={registerInputHandler}
                        />
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                        />
                        <div class="mb-3">
                          <input
                            class="form-control"
                            name="avatar"
                            type="file"
                            onChange={handleImage}
                          />
                        </div>
                        <div className="button-box">
                          <button type="submit">
                            <span>Register</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Register;
