//External Lib Import
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

//Internal Lib Import
import { useContactCreateMutation } from "../../redux/services/contactService";
import { useSiteInfoListQuery } from "../../redux/services/siteInfoService";

const Contact = () => {
  const { t } = useTranslation();
  const [contactCreate, { isLoading, isSuccess }] = useContactCreateMutation();
  const { data: siteInfo } = useSiteInfoListQuery();

  const contactValidation = yup.object({
    name: yup
      .string()
      .required(t("Name is required"))
      .max(50, t("Name maximum 50 characters")),
    mobile: yup
      .string()
      .required(t("Mobile number is required"))
      .matches("^(?:\\+88|88)?(01[3-9]\\d{8})$", t("Invalid mobile number")),
    message: yup
      .string()
      .required(t("Message is required"))
      .max(250, t("Message maximum 250 characters")),
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
      message: "",
    },
    resolver: yupResolver(contactValidation),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    contactCreate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess]);

  return (
    <Container className="TopSection onboardMargin">
      <Row className="p-2">
        <Col
          className="shadow-sm bg-white mt-2"
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <Row className="text-center">
            <Col
              className="d-flex justify-content-center"
              lg={6}
              md={6}
              xs={12}
              sm={12}
            >
              <Form
                id="contactForm"
                onReset={reset}
                onSubmit={handleSubmit(submitForm)}
                className="onboardForm"
              >
                <h4 className="section-title ">SEND MESSAGE</h4>
                <h6 className="section-sub-title mb-5">
                  Please Enter Your Message
                </h6>

                <input
                  {...register("name")}
                  className={`form-control section-sub-title m-2 ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  {...register("mobile")}
                  className={`form-control section-sub-title m-2 ${
                    errors.mobile ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Your Mobile"
                />
                <textarea
                  {...register("message")}
                  className={`form-control section-sub-title m-2 ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  type="text"
                  placeholder="Your Message"
                />
                <Button
                  id="sendBtn"
                  type="submit"
                  className="border-0 btn btn-block m-2 site-btn"
                >
                  Send
                  {isLoading && "...."}
                </Button>
              </Form>
            </Col>
            <Col className="m-0 p-0 Desktop" md={6} lg={6} sm={12} xs={12}>
              <iframe
                src={siteInfo?.mapLink}
                frameBorder="0"
                allowFullScreen=""
                width="100%"
                height="100%"
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
