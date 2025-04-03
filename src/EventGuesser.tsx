import React from "react";
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
  TimeInput,
  NumberInput,
  NumberField,
} from "react-admin";

import { format,parseISO } from "date-fns";

export const EventShow: React.FC = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="location" />
      <TextField source="date" />
      <TextField source="time" />
      <ReferenceField source="organizer_id" reference="users">
        <TextField source="first_name" />
      </ReferenceField>
      <NumberField source="standard_price" />
      <NumberField source="standard_quantity" />
      <NumberField source="vip_price" />
      <NumberField source="early_bird_price" />
      <NumberField source="early_bird_quantity" />
      <NumberField source="vip_quantity" />
      <TextField source="image_url" />
      <TextField source="category" />
      <TextField source="type" />
      <TextField source="created_at" />
    </SimpleShowLayout>
  </Show>
);

export const EventEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="location" />
      <DateInput
        source="date"
        label="Event Date"
        options={{ format: "YYYY-MM-DD" }}
      />
      <TimeInput
        source="time"
        label="Event Time"
        options={{ format: "HH:mm:ss" }}
      />
      <NumberInput source="standard_price" />
      <NumberInput source="standard_quantity" />
      <NumberInput source="vip_price" />
      <NumberInput source="early_bird_price" />
      <NumberInput source="early_bird_quantity" />
      <NumberInput source="vip_quantity" />
      <TextInput
        source="image_url"
        label="Image URL"
        fullWidth
        placeholder="https://example.com/image.jpg"
      />
      <TextField source="type" />
    </SimpleForm>
  </Edit>
);

export const EventList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="location" />
      <TextField source="date" />
      <TextField source="time" />
      <ReferenceField source="organizer_id" reference="users">
        <TextField source="first_name" />
      </ReferenceField>
      <NumberField source="standard_price" />
      <NumberField source="standard_quantity" />
      <NumberField source="vip_price" />
      <NumberField source="early_bird_price" />
      <NumberField source="early_bird_quantity" />
      <NumberField source="vip_quantity" />
      <TextField source="image_url" />
      <TextField source="category" />
      <TextField source="type" />
      <TextField source="created_at" />
    </Datagrid>
  </List>
);
export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="description" fullWidth />
      <TextInput source="location" fullWidth />
      <DateInput
        source="date"
        label="Event Date"
        parse={(value) => format(new Date(value), "yyyy-MM-dd")}
      />
      <TimeInput
        source="time"
        label="Event Time"
        parse={(value) => value || ""} 
      />
      <ReferenceInput
        source="organizer_id"
        reference="users"
        label="Organizer"
        filter={{ first_name_not: null }}
      >
        <SelectInput optionText="first_name" />
      </ReferenceInput>
      <NumberInput source="standard_price" />
      <NumberInput source="standard_quantity" />
      <NumberInput source="vip_price" />
      <NumberInput source="early_bird_price" />
      <NumberInput source="early_bird_quantity" />
      <NumberInput source="vip_quantity" />
      <TextInput
        source="image_url"
        label="Image URL"
        fullWidth
        placeholder="https://example.com/image.jpg"
      />
      <TextInput source="type" fullWidth />
    </SimpleForm>
  </Create>
);
