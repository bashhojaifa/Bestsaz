import React, { useEffect } from "react";
import { Button, Form, Modal, Input, Row, Col, Select } from "antd";
import { useGetCategoryQuery } from "../../../../store/services/categoryServices";
import { getUserId } from "../../../../helper/helper";
import { useUserProfileQuery } from "../../../../store/services/profileServices";
import { useCreateSubCategoryMutation } from "../../../../store/services/subCategoryServices";

const AddSubCategory = ({ open, setOpen }) => {
  const formRef = React.useRef(null);
  const { Option } = Select;

  // get auth profile
  const userId = getUserId();
  const profile = useUserProfileQuery(userId);
  const adminId = profile.data.adminId;

  // get all categories
  const categoryResponse = useGetCategoryQuery();
  const categories = categoryResponse.data;

  // sub category api import
  const [createCategory, response] = useCreateSubCategoryMutation();

  // form reset handler
  const onReset = () => {
    formRef.current?.resetFields();
  };

  // submit handler
  const submitHandler = (values) => {
    const sendingData = {
      adminId,
      categoryId: values.category,
      name: values.subCategory,
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
      title="Add Sub Category"
      centered
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <Form
        name="validate_other"
        layout="vertical"
        onFinish={submitHandler}
        ref={formRef}
      >
        <Form.Item name="category" hasFeedback rules={[{ required: true }]}>
          <Select placeholder="Category Select">
            {categories &&
              categories.map((category) => (
                <Option value={category._id}>{category.name}</Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item name="subCategory" rules={[{ required: true }]}>
          <Input placeholder="Sub Category" />
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

export default AddSubCategory;
