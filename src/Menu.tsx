import React from "react";
import { Menu } from "react-admin";
import { FaChartLine } from "react-icons/fa";

export const MyMenu: React.FC = (props) => (
  <Menu {...props}>
    <Menu.ResourceItems />
    <Menu.Item
      to="/dashboardAdmin"
      primaryText="Admin Dashboard"
      leftIcon={<FaChartLine />}
    />
  </Menu>
);
