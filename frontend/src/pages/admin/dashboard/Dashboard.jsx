import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Toaster } from "react-hot-toast";

// import ant chart
import { Column } from "@ant-design/plots";

// import ant table
import { Table } from "antd";

const Dashboard = () => {
  // start table data
  const tableColumns = [
    {
      title: "No.",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Product",
      dataIndex: "product",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const tableData = [];
  for (let i = 0; i < 46; i++) {
    tableData.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }
  // end table data

  // start charts data
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 30,
    },
    {
      type: "July",
      sales: 48,
    },
    {
      type: "Aug",
      sales: 50,
    },
    {
      type: "Sep",
      sales: 55,
    },
    {
      type: "Oct",
      sales: 60,
    },
    {
      type: "Nov",
      sales: 65,
    },
    {
      type: "Dec",
      sales: 76,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  // end charts data

  return (
    <div>
      {/* card section start */}
      {/* card section end */}
      <h3 className="mb-4">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p> <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="text-success">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compare To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p> <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="text-danger">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compare To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p>Total</p> <h4 className="mb-0">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="text-success">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0">Compare To April 2022</p>
          </div>
        </div>
      </div>

      {/* start charts section */}
      <div className="mt-4">
        <h3 className="mb-4">Income Statics</h3>
        <div className="charts">
          <Column {...config} />
        </div>
      </div>
      {/* end charts section */}

      {/* start order table section */}
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div className="orderTable">
          <Table columns={tableColumns} dataSource={tableData} />
        </div>
      </div>
      {/* end order table section */}

      <Toaster />
    </div>
  );
};

export default Dashboard;
