//External Lib Import
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//Internal Lib Import
import ForgetImg from "../../assets/images/forget.jpg";
import { useRegistrationMutation } from "../../redux/services/authService";

const ResetPassword = () => {
  const [registration, { isLoading, isSuccess }] = useRegistrationMutation();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const registerValidation = yup.object({
    otp: yup.string().required(t("Otp is required")),
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
      otp: "",
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
                <h4 className="section-title-login"> RESET PASSWORD </h4>

                <input
                  {...register("otp")}
                  className={`form-control section-sub-title m-2 ${
                    errors.otp ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Enter Your Pin Code"
                />
                {errors.otp && (
                  <Form.Text className="text-danger">
                    {errors.otp.message}
                  </Form.Text>
                )}

                <input
                  {...register("mobile")}
                  className={`form-control section-sub-title m-2 ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  type="test"
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
                  placeholder="Your New Password"
                />
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}

                <input
                  {...register("confirmPassword")}
                  className={`form-control section-sub-title m-2 ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  type="password"
                  placeholder="Confirm Your Password"
                />
                {errors.confirmPassword && (
                  <Form.Text className="text-danger">
                    {errors.confirmPassword.message}
                  </Form.Text>
                )}

                <Button
                  type="submit"
                  className="border-0 btn btn-block m-2 site-btn"
                >
                  Reset Password
                  {isLoading && "...."}
                </Button>
              </Form>
            </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
              <img className="onboardBanner" src={ForgetImg} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
