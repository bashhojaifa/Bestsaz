import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Select, Upload, Modal, Input, Row, Col } from "antd";
const { Option } = Select;

const AddCustomers = ({ open, setOpen }) => {
  const formRef = React.useRef(null);

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Modal
      title="Add Customer"
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
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            addonBefore={"+88"}
            style={{ width: "100%" }}
            placeholder="Phone Number"
          />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item>
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              name="images"
              action="/upload.do"
              rules={[{ required: true }]}
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

export default AddCustomers;
