import { Datagrid, List, ReferenceField, TextField } from "react-admin"

export const TopicList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title" />
                <TextField source="content" />
                <ReferenceField 
                source="courseId"
                reference="courses" />
                <TextField source="order" />
            </Datagrid>
        </List>
    )
}