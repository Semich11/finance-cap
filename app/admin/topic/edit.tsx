import { Edit, NumberInput, required, SimpleForm, TextInput } from "react-admin"

export const TopicEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]} label="Id" />
                <TextInput source="title" validate={[required()]} label="Title" />
                <TextInput source="content" validate={[required()]} label="Content" />
            </SimpleForm>
        </Edit>
    )
}