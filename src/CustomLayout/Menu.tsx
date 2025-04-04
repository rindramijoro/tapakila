import { Menu } from "react-admin";
import { FaChartLine } from "react-icons/fa";
import '../Styles/Menu.css'

export const MyMenu: React.FC = (props) => (
  <Menu {...props} className="sideNavBar">
    <Menu.ResourceItems />
    <Menu.Item
      to="/dashboardAdmin"
      primaryText="Admin Dashboard"
      leftIcon={<FaChartLine />}
    />
  </Menu>
);
