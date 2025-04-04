import {
  Admin,
  EditGuesser,
  Resource,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import dataProvider from "./Provider/dataProvider.ts";
import {
  FaCalendar,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";
import  DashboardAdmin  from "./dashboardAdmin.tsx";
import { Route } from "react-router-dom";
import { MyLayout } from "./Layout";
import { EventList, EventShow, EventEdit ,EventCreate} from "./Guessers/EventGuesser.tsx";
import authProvider from "./Provider/authProvider.ts";
import { LoginPage } from "./Login.tsx";
import { UserListGuesser } from "./Guessers/UserListGuesser.tsx";
import { ReservationsListGuesser } from "./Guessers/ReservationsListGuesser.tsx";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    authProvider={authProvider}
    loginPage={LoginPage}
    requireAuth
    darkTheme={null}
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
      list={UserListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaUser}
    />
    <Resource
      name="reservations"
      list={ReservationsListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={FaClipboardList}
    />
    <CustomRoutes>
      <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
    </CustomRoutes>
  </Admin>
);
