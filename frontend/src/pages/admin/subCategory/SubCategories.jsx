import React, { useState } from "react";
import moment from "moment";
import { Button, Card, Dropdown, Space, Table } from "antd";
import { BsThreeDots, BsPlus } from "react-icons/bs";
import AddSubCategory from "./operations/AddSubCategory";
import { useGetSubCategoryQuery } from "../../../store/services/subCategoryServices";
import { useGetCategoryQuery } from "../../../store/services/categoryServices";
import { Toaster } from "react-hot-toast";

const SubCategories = () => {
  // get sub category
  const subCategoryResponse = useGetSubCategoryQuery();
  const subCategory = subCategoryResponse.data;

  // get category
  const categoryResponse = useGetCategoryQuery();
  const categories = categoryResponse.data;

  // find category handler
  const findCategory = (categoryId) => {
    const category = categories.find((category) => category._id === categoryId);
    return category?.name;
  };

  // modal open state
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    console.log(e);
  };

  // sub category action
  const items = [
    {
      key: "1",
      label: <a rel="noopener noreferrer">Edit</a>,
    },
    {
      key: "2",
      label: <a rel="noopener noreferrer">Delete</a>,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  // start table data
  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Category",
      dataIndex: "categoryId",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (_, { categoryId }) => <span>{findCategory(categoryId)}</span>,
    },

    {
      title: "Create",
      dataIndex: "createdAt",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
      render: (_, { createdAt }) => (
        <span>{moment(createdAt).format("MMM DD YYYY")}</span>
      ),
    },

    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      render: () => (
        <Space size="middle">
          <Dropdown menu={menuProps}>
            <a>
              <BsThreeDots style={{ fontSize: "24px" }} />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <>
      {/* start order table section */}
      <div className="site-card-border-less-wrapper">
        <Card
          title="Sub Categories"
          extra={
            <Space wrap>
              <Button type="primary" ghost>
                {subCategory?.length}
              </Button>
              <Button type="primary" onClick={() => setOpen(true)}>
                <BsPlus style={{ fontSize: "24px" }} /> Add Sub Category
              </Button>
            </Space>
          }
        >
          <div className="customerTable">
            <Table columns={tableColumns} dataSource={subCategory} />
          </div>
        </Card>
      </div>
      {/* end order table section */}

      {/* start modal section */}
      <AddSubCategory open={open} setOpen={setOpen} />
      {/* end modal section */}

      <Toaster />
    </>
  );
};

export default SubCategories;
