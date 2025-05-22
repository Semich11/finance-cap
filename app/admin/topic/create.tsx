import { Create, NumberInput, ReferenceInput, required, SimpleForm, TextInput } from "react-admin"

export const TopicCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Title" />
                <TextInput source="content" validate={[required()]} label="Content" />
                <ReferenceInput 
                    source="courseId"
                    reference="courses"
                />
                <NumberInput 
                    source="order"
                    validate={[required()]}  
                    label="Order"
                />
            </SimpleForm>
        </Create>
    )
}