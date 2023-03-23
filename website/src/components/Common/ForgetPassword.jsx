//External Lib Import
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//Internal Lib Import
import ForgetImg from "../../assets/images/forget.jpg";
import { useRegistrationMutation } from "../../redux/services/authService";

const ForgetPassword = () => {
  const [registration, { isLoading, isSuccess }] = useRegistrationMutation();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const registerValidation = yup.object({
    mobile: yup
      .string()
      .required(t("Mobile number is required"))
      .matches("^(?:\\+88|88)?(01[3-9]\\d{8})$", t("Invalid mobile number")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      mobile: "",
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
                <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
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
                <Button
                  type="submit"
                  className="border-0 btn btn-block m-2 site-btn"
                >
                  Reset Password
                  {isLoading && "...."}
                </Button>
                <br></br> <br></br>
                <hr />
                <p>
                  <b> Already Have An Account ? </b>
                  <Link to="/login">
                    <b> Login </b>
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
              <img className="onboardBanner" src={ForgetImg} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPassword;
