import React, { useRef, useState } from "react";
// import ant table
import { Button, Card, Dropdown, Modal, Popconfirm, Space, Table } from "antd";
import { ExclamationCircleFilled, DeleteOutlined } from "@ant-design/icons";
import AddCategory from "./operations/AddCategory";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../store/services/categoryServices";
import moment from "moment";
import { Toaster } from "react-hot-toast";
const { confirm } = Modal;

const Categories = () => {
  const categoryResponse = useGetCategoryQuery();
  const category = categoryResponse.data;

  const [deleteCategory, response] = useDeleteCategoryMutation();

  // delete confirm modal
  // const showDeleteConfirm = (id) => {
  //   confirm({
  //     title: "Are you sure delete this task?",
  //     icon: <ExclamationCircleFilled />,
  //     content: "Some descriptions",
  //     okText: "Yes",
  //     okType: "danger",
  //     cancelText: "No",
  //     onCancel() {},
  //   });
  // };

  // modal open state
  const [open, setOpen] = useState(false);

  // start table data
  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Create",
      dataIndex: "createdAt",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (_, { createdAt }) => (
        <span>{moment(createdAt).format("lll")}</span>
      ),
    },

    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => (
        <Button
          type="primary"
          danger
          ghost
          icon={<DeleteOutlined />}
          // onClick={() => showDeleteConfirm(record._id)}
        />
      ),

      // <p onClick={()=>showDeleteConfirm(record._id)}>delete</p>,
    },
  ];

  // const handleOk = () => {
  //   // setModalText("The modal will be closed after two seconds");
  //   // setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     // setConfirmLoading(false);
  //   }, 2000);
  // };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      {/* <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
      </Modal> */}

      {/* start order table section */}
      <div className="site-card-border-less-wrapper">
        <Card
          title="Category"
          extra={
            <Space wrap>
              <Button type="primary" ghost>
                {category?.length}
              </Button>
              <Button type="primary" onClick={() => setOpen(true)}>
                Add Category
              </Button>
            </Space>
          }
        >
          <div className="orderTable">
            <Table columns={tableColumns} dataSource={category} />
          </div>
        </Card>
      </div>
      {/* end order table section */}

      {/* start modal section */}
      <AddCategory open={open} setOpen={setOpen} />
      {/* end modal section */}

      <Toaster />
    </>
  );
};

export default Categories;
