import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from "react-admin"
import dataProvider from "./dataProvider";
import {
  FaCalendar,
  FaUser,
  FaTicketAlt,
  FaClipboardList,
} from "react-icons/fa";

export const App = () => (
  <Admin dataProvider={dataProvider}>
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
  </Admin>
);
