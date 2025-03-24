import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from "react-admin"
import dataProvider from "./dataProvider";//+

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="events"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="tickets"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="reservations"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
