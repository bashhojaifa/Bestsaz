import React, { useState } from "react";
// import ant table
import { Button, Card, Table } from "antd";
import AddCustomers from "./modal/AddCustomers";

const Customers = () => {
  // modal open state
  const [open, setOpen] = useState(false);

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
    <>
      {/* start order table section */}
      <div className="site-card-border-less-wrapper">
        <Card
          title="Customers"
          extra={
            <Button type="primary" onClick={() => setOpen(true)}>
              Add Customer
            </Button>
          }
        >
          <div className="customerTable">
            <Table columns={tableColumns} dataSource={tableData} />
          </div>
        </Card>
      </div>
      {/* end order table section */}

      {/* start modal section */}
      <AddCustomers open={open} setOpen={setOpen} />
      {/* end modal section */}
    </>
  );
};

export default Customers;
