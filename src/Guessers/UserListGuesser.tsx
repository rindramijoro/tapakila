import { List, Datagrid, TextField } from "react-admin";
import "../Styles/guessers.css"

export const UserListGuesser = () => (
  <List exporter={false}>
    <Datagrid bulkActionButtons={false} className="dataGrid">
      <TextField source="id" sortable={false} />
      <TextField source="first_name" sortable={false} />
      <TextField source="last_name" sortable={false} />
      <TextField source="email" sortable={false} />
    </Datagrid>
  </List>
);
