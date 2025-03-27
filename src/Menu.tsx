import React from "react";
import { Menu } from "react-admin";
import { FaAccessibleIcon } from "react-icons/fa";

export const MyMenu: React.FC = (props) => (
  <Menu {...props}>
    <Menu.ResourceItems />
    <Menu.Item
      to="/dashboardAdmin"
      primaryText="Admin Dashboard"
      leftIcon={<FaAccessibleIcon />}
    />
  </Menu>
);