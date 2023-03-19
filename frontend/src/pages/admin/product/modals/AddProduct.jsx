import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  InputNumber,
  Select,
  Upload,
  Modal,
  Input,
  Row,
  Col,
} from "antd";
import { useGetCategoryQuery } from "../../../../store/services/categoryServices";
import { useGetSubCategoryQuery } from "../../../../store/services/subCategoryServices";
import { getUserId } from "../../../../helper/helper";
import { useUserProfileQuery } from "../../../../store/services/profileServices";
import { useCreateProductMutation } from "../../../../store/services/productServices";
const { Option } = Select;

const AddProduct = ({ open, setOpen }) => {
  const formRef = React.useRef(null);

  // get auth profile
  const userId = getUserId();
  const profile = useUserProfileQuery(userId);
  const adminId = profile.data.adminId;

  // get Category
  const categoryResponse = useGetCategoryQuery();
  const categories = categoryResponse.data;

  // get sub category
  const subCategoryResponse = useGetSubCategoryQuery();
  const subCategories = subCategoryResponse.data;

  // product create api import
  const [createProduct, productResponse] = useCreateProductMutation();

  // set category id
  const [categoryId, setCategoryId] = useState("");

  // form reset handler
  const onReset = () => {
    formRef.current?.resetFields();
  };

  // image normal handler
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // form submit handler
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const sendingData = {
      adminId,
      title: values.title,
      description: values.description,
      category: values.category,
      subCategory: values.subCategory,
      price: values.price,
      stock: values.stock,
      images: values.dragger,
    };
    console.log(sendingData);
    createProduct(sendingData);
  };
  return (
    <Modal
      title="Add Product"
      centered
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
    >
      <Form
        name="validate_other"
        layout="vertical"
        onFinish={onFinish}
        ref={formRef}
      >
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name="description" rules={[{ required: true }]}>
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item name="category" hasFeedback rules={[{ required: true }]}>
          <Select placeholder="Category" onChange={(id) => setCategoryId(id)}>
            {categories &&
              categories.map((category) => (
                <Option value={category.name}>{category.name}</Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item name="subCategory" hasFeedback rules={[{ required: true }]}>
          <Select placeholder="Sub Category">
            {subCategories &&
              subCategories.map(
                (subCategory) =>
                  subCategory.categoryId === categoryId && (
                    <Option value={subCategory.name}>{subCategory.name}</Option>
                  )
              )}
          </Select>
        </Form.Item>

        <Form.Item name="price" rules={[{ required: true }]}>
          <InputNumber
            min={1}
            max={100000}
            style={{
              width: "100%",
            }}
            placeholder="Price"
          />
        </Form.Item>
        <Form.Item name="stock" rules={[{ required: true }]}>
          <InputNumber
            min={1}
            max={10000}
            style={{
              width: "100%",
            }}
            placeholder="Stock"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
            rules={[{ required: true }]}
          >
            <Upload.Dragger
              name="images"
              // action="/upload.do"
              multiple
              maxCount={5}
              listType="picture"
              accept=".jpg,.jpeg,.png"
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddProduct;
