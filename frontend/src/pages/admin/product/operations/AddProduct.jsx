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

  const [images, setImages] = useState();
  console.log(images);

  // form reset handler
  const onReset = () => {
    formRef.current?.resetFields();
  };

  // image normal handler
  const normFile = (e) => {
    console.log(e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleImages = (event) => {
    setImages(event.target.files);
  };

  // form submit handler
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const { title, description, category, subCategory, price, stock, dragger } =
      values;

    const findCategory =
      category && categories.find((item) => item._id === category);

    const formData = new FormData();
    formData.append("adminId", adminId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", findCategory.name);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("images", images);

    // const sendingData = {
    //   adminId,
    //   title: values.title,
    //   description: values.description,
    //   category: category.name,
    //   subCategory: values.subCategory,
    //   price: values.price,
    //   stock: values.stock,
    //   images: values.dragger,
    // };
    console.log(formData);
    createProduct(formData);
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
                <Option value={category._id}>{category.name}</Option>
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

        {/* <Form.Item>
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
        </Form.Item> */}

        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Multiple files input example
          </label>
          <input
            name={images}
            onChange={handleImages}
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>

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
