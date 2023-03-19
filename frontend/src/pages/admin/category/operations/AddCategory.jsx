import React from "react";
import { Button, Form, Modal, Input, Row, Col } from "antd";
import { getUserId } from "../../../../helper/helper";
import { useUserProfileQuery } from "../../../../store/services/profileServices";
import { useCreateCategoryMutation } from "../../../../store/services/categoryServices";
import { useEffect } from "react";

const AddCategory = ({ open, setOpen }) => {
  const formRef = React.useRef(null);

  // get auth profile
  const userId = getUserId();
  const profile = useUserProfileQuery(userId);
  const adminId = profile.data.adminId;

  // categories api call
  const [createCategory, response] = useCreateCategoryMutation();

  // for reset handler
  const onReset = () => {
    formRef.current?.resetFields();
  };

  // category submit handler
  const onSubmit = (values) => {
    const sendingData = {
      adminId: adminId,
      name: values.category,
    };

    createCategory(sendingData);
  };

  useEffect(() => {
    if (response.isSuccess) {
      setOpen(false);
    }
  }, [response.isSuccess]);

  return (
    <Modal
      title="Add Category"
      centered
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <Form
        name="validate_other"
        layout="vertical"
        onFinish={onSubmit}
        ref={formRef}
      >
        <Form.Item name="category" rules={[{ required: true }]}>
          <Input placeholder="Category" />
        </Form.Item>

        <Row>
          <Col
            span={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={onReset}
            >
              Reset
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={response.isLoading}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddCategory;
