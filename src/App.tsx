import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import dataProvider from "./dataProvider";
import {
  FaCalendar,
  FaUser,
  FaTicketAlt,
  FaClipboardList,
} from "react-icons/fa";
import  DashboardAdmin  from "./dashboardAdmin.tsx";
import UserProfile from "./userProfile";
import { Route } from "react-router-dom";
import { MyLayout } from "./Layout";


export const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource
      name="events"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaCalendar}
    />
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaUser}
    />
    <Resource
      name="tickets"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaTicketAlt}
    />
    <Resource
      name="reservations"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaClipboardList}
    />
    <CustomRoutes>
      <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
    </CustomRoutes>
    <CustomRoutes>
      <Route path="/userProfile" element = {<UserProfile/>}/>
    </CustomRoutes>
  </Admin>
);
