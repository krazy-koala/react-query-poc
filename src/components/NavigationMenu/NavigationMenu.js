import React from "react";
import { Menu } from "antd";
import { BorderOutlined, DashboardOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    key: "dashboard",
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: "about",
    label: <Link to="/about">About</Link>,
    icon: <BorderOutlined />,
  }
];

const NavigationMenu = () => {
  const { pathname } = useLocation();
  return (
    <Menu
      defaultSelectedKeys={[pathname.slice(1)]}
      mode="inline"
      items={items}
      theme="dark"
    />
  );
}

export default NavigationMenu;