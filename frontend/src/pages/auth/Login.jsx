import React, { Fragment, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthLoginMutation } from "../../store/services/authService";
import Layout from "../view/layout/Layout";

const Login = () => {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({ email: "", password: "" });

  // login handler
  const loginInputHandler = (event) => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value });
  };

  const [login, response] = useAuthLoginMutation();

  const loginHandler = (event) => {
    event.preventDefault();
    login(loginState);
  };

  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem("bestSaz-token", response?.data?.token);
      navigate("/dashboard");
    }
  }, [response.isSuccess]);

  return (
    <Fragment>
      <Layout>
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <div className="login-register-tab-list">
                    <h4> login </h4>
                  </div>
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form onSubmit={loginHandler} method="post">
                        <input
                          type="email"
                          name="email"
                          placeholder="Username"
                          value={loginState.email}
                          onChange={loginInputHandler}
                        />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={loginState.password}
                          onChange={loginInputHandler}
                        />
                        <div className="button-box">
                          <button type="submit">
                            {response?.isLoading ? "loading.." : "SIGNIN"}
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
      <Toaster />
    </Fragment>
  );
};

export default Login;
