//External Lib Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//Internal Lib Import
import LoginImg from "../../assets/images/login.png";
import { useLoginMutation } from "../../redux/services/authService";
import { setLogin } from "../../redux/slice/authReducer";

const Login = () => {
  const { userDetails } = useSelector((state) => state.authReducer);
  const [login, { data, isLoading }] = useLoginMutation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginValidation = yup.object({
    mobile: yup
      .string()
      .required(t("Mobile number is required"))
      .matches("^(?:\\+88|88)?(01[3-9]\\d{8})$", t("Invalid mobile number")),

    password: yup
      .string()
      .required(t("Password is required."))
      .min(8, t("Password must be 8 digits long")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      mobile: "01772703031",
      password: "pass1234",
    },
    resolver: yupResolver(loginValidation),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    login(values);
  };

  useEffect(() => {
    if (data) dispatch(setLogin(data?.token));
  }, [data]);

  if (userDetails) navigate("/");

  return (
    <Container className="TopSection onboardMargin">
      <Row className="p-2">
        <Col
          className="shadow-sm bg-white mt-2"
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Row className="text-center">
            <Col
              className="d-flex justify-content-center"
              md={6}
              lg={6}
              sm={12}
              xs={12}
            >
              <Form
                className="onboardForm"
                onReset={reset}
                onSubmit={handleSubmit(submitForm)}
              >
                <h4 className="section-title-login"> USER SING IN </h4>
                <input
                  {...register("mobile")}
                  className={`form-control section-sub-title m-2 ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Enter Your Mobile"
                />
                {errors.mobile && (
                  <Form.Text className="text-danger">
                    {errors.mobile.message}
                  </Form.Text>
                )}
                <input
                  {...register("password")}
                  className={`form-control section-sub-title m-2 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  type="password"
                  placeholder="Enter Your Password"
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
                <Button
                  id="sendBtn"
                  type="submit"
                  className="border-0 btn btn-block m-2 site-btn"
                >
                  Login
                  {isLoading && "...."}
                </Button>
                <br></br> <br></br>
                <hr />
                <p>
                  <b> Forget My Password? </b>
                  <Link to="/forget">
                    <b> Froget Password </b>
                  </Link>
                </p>
                <p>
                  <b> Don't Have An Account ? </b>
                  <Link to="/register">
                    <b> Register </b>
                  </Link>
                </p>
              </Form>
            </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
              <img className="onboardBanner" src={LoginImg} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
