import React from "react";
// import ant table
import { Table } from "antd";

const Orders = () => {
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
  return (
    <div>
      {/* start order table section */}
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div className="orderTable">
          <Table columns={tableColumns} dataSource={tableData} />
        </div>
      </div>
      {/* end order table section */}
    </div>
  );
};

export default Orders;
