import {Admin, EditGuesser, ListGuesser, Resource, ShowGuesser} from "react-admin"
import {dataProvider} from "./dataProvider";

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="events"
            list={ListGuesser}
            edit={EditGuesser}
            show={ShowGuesser}
        />
    </Admin>
);
