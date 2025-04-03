import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  List,
  Datagrid,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  DateInput,
} from "react-admin";

export const EventShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="location" />
      <TextField source="event_date" />
      <ReferenceField source="organizer_id" reference="users" label="Organizer">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="image_url" />
      <TextField source="category" />
      <TextField source="type" />
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="location" />
      <TextInput source="event_date" />
      <ReferenceInput source="organizer_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="image_url" />
      <TextInput source="category" />
      <TextInput source="type" />
    </SimpleForm>
  </Edit>
);

export const EventList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="location" />
      <TextField source="event_date" />
      <ReferenceField source="organizer_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="location" fullWidth />
      <DateInput
        source="event_date"
        label="Event Date & Time"
        options={{ format: "YYYY-MM-DD HH:mm" }}
      />
      <ReferenceInput source="organizer_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput
        source="image_url"
        label="Image URL"
        fullWidth
        placeholder="https://example.com/image.jpg"
      />
      <SelectInput
        source="category"
        choices={[
          { id: "Recent", name: "Recent" },
          { id: "Upcoming", name: "Upcoming" },
          { id: "Popular", name: "Popular" },
        ]}
      />
      <TextInput source="type" fullWidth />
    </SimpleForm>
  </Create>
);
