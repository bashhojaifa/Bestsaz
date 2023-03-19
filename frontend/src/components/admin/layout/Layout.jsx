import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AiOutlineBgColors,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBloggerB, FaClipboardList } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">BS</span>
            <span className="lg-logo">BestSaz</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-5" />,
              label: "Dashboard",
            },
            {
              key: "products",
              icon: <AiOutlineShoppingCart className="fs-5" />,
              label: "Products",
            },

            {
              key: "category",
              icon: <BiCategoryAlt className="fs-5" />,
              label: "Category",
            },
            {
              key: "sub-category",
              icon: <MdOutlineCategory className="fs-5" />,
              label: "Sub Category",
            },
            // {
            //   key: "catalog",
            //   icon: <AiOutlineShoppingCart className="fs-5" />,
            //   label: "Catalog",
            //   children: [
            // {
            //   key: "product",
            //   icon: <AiOutlineShoppingCart className="fs-5" />,
            //   label: "Product",
            // },
            //     {
            //       key: "brand",
            //       icon: <SiBrandfolder className="fs-5" />,
            //       label: "Brand",
            //     },
            //     {
            //       key: "brand-list",
            //       icon: <SiBrandfolder className="fs-5" />,
            //       label: "Brand List",
            //     },
            //     {
            //       key: "category",
            //       icon: <BiCategoryAlt className="fs-5" />,
            //       label: "Category",
            //     },
            //     {
            //       key: "list-category",
            //       icon: <BiCategoryAlt className="fs-5" />,
            //       label: "Category List",
            //     },
            //     {
            //       key: "color",
            //       icon: <AiOutlineBgColors className="fs-5" />,
            //       label: "Color",
            //     },
            //     {
            //       key: "color-list",
            //       icon: <AiOutlineBgColors className="fs-5" />,
            //       label: "Color List",
            //     },
            //   ],
            // },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-5" />,
              label: "Orders",
            },
            {
              key: "customers",
              icon: <BsFillPersonLinesFill className="fs-5" />,
              label: "Customers",
            },
            // {
            //   key: "blog",
            //   icon: <FaBloggerB className="fs-5" />,
            //   label: "Blogs",
            //   children: [
            //     {
            //       key: "add-blog",
            //       icon: <ImBlog className="fs-5" />,
            //       label: "Add Blog",
            //     },
            //     {
            //       key: "blog-list",
            //       icon: <FaBloggerB className="fs-5" />,
            //       label: "Blog List",
            //     },
            //     {
            //       key: "blog-category",
            //       icon: <ImBlog className="fs-5" />,
            //       label: "Add Blog Category",
            //     },
            //     {
            //       key: "blog-category-list",
            //       icon: <FaBloggerB className="fs-5" />,
            //       label: "Blog Category List",
            //     },
            //   ],
            // },
            // {
            //   key: "enquires",
            //   icon: <FaClipboardList className="fs-5" />,
            //   label: "Enquires",
            // },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div>
                <h5 className="mb-0">Bashar</h5>
                <p className="mb-0">bashar@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
