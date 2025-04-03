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
import { Route } from "react-router-dom";
import { MyLayout } from "./Layout";
import { EventList, EventShow, EventEdit ,EventCreate} from "./EventGuesser.tsx";
import authProvider from "./authProvider.ts";
import { LoginPage } from "./Login.tsx";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    authProvider={authProvider}
    loginPage={LoginPage}
    requireAuth
  >
    <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      show={EventShow}
      create={EventCreate}
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
  </Admin>
);
