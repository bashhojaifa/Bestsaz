//External Lib Import
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//Internal Lib Import
import LoginImg from "../../assets/images/login.png";
import { useRegistrationMutation } from "../../redux/services/authService";

const Register = () => {
  const [registration, { isLoading, isSuccess }] = useRegistrationMutation();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const registerValidation = yup.object({
    name: yup.string().required(t("Name is required")),
    mobile: yup
      .string()
      .required(t("Mobile number is required"))
      .matches("^(?:\\+88|88)?(01[3-9]\\d{8})$", t("Invalid mobile number")),
    password: yup
      .string()
      .required(t("Password is required."))
      .min(8, t("Password must be 8 digits long")),
    confirmPassword: yup
      .string()
      .required(t("Confirm password is required"))
      .oneOf(
        [yup.ref("password"), null],
        t("Password and confirm password must match")
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerValidation),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    const { confirmPassword, ...postBody } = values;
    registration(postBody);
  };

  useEffect(() => {
    if (isSuccess) navigate("/login");
  }, [isSuccess]);

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
                <h4 className="section-title-login"> USER REGISTER </h4>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  className={`form-control section-sub-title m-2 ${
                    errors.name ? "is-invalid" : ""
                  }`}
                />
                {errors.name && (
                  <Form.Text className="text-danger">
                    {errors.name.message}
                  </Form.Text>
                )}
                <input
                  type="text"
                  placeholder="Enter Your Mobile"
                  {...register("mobile")}
                  className={`form-control section-sub-title m-2 ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                />
                {errors.mobile && (
                  <Form.Text className="text-danger">
                    {errors.mobile.message}
                  </Form.Text>
                )}
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  {...register("password")}
                  className={`form-control section-sub-title m-2 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  {...register("confirmPassword")}
                  className={`form-control section-sub-title m-2 ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <Form.Text className="text-danger">
                    {errors.confirmPassword.message}
                  </Form.Text>
                )}
                <Button
                  type="submit"
                  className="site-btn btn btn-block m-2 site-btn-login"
                >
                  Sing Up
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
                  <b> Already Have An Account ? </b>
                  <Link to="/login">
                    <b> Login </b>
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

export default Register;
