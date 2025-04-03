import { Menu } from "react-admin";
import { FaChartLine } from "react-icons/fa";

export const MyMenu: React.FC = (props) => (
  <Menu
    {...props}
    sx={{
      "& .RaMenuItemLink-root": {
        color: "#1e2939", 
      },
    }}
  >
    <Menu.ResourceItems />
    <Menu.Item
      to="/dashboardAdmin"
      primaryText="Admin Dashboard"
      leftIcon={<FaChartLine />}
    />
  </Menu>
);
