import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
} from "react-admin";
import "../Styles/guessers.css";

export const ReservationsListGuesser = () => (
  <List exporter={false}>
    <Datagrid bulkActionButtons={false} className="dataGrid">
      <TextField source="id" sortable={false} />
      <ReferenceField source="user_id" reference="users" sortable={false} >
        <TextField source="first_name" />
      </ReferenceField>
      <ReferenceField source="event_id" reference="events" sortable={false} />
      <NumberField source="quantity" sortable={false} />
      <TextField source="status" sortable={false} />
      <DateField source="created_at" sortable={false} />
    </Datagrid>
  </List>
);
