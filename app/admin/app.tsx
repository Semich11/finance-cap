"use client";

import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { TopicCreate } from "./topic/create";
import { TopicList } from "./topic/list";
import { TopicEdit } from "./topic/edit";

const dataProvider = simpleRestProvider("/api")
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation="title"
      />
      <Resource
        name="topics"
        list={TopicList}
        create={TopicCreate}
        edit={TopicEdit}
        recordRepresentation="title"
      />
    </Admin>
  ) 
}

export default App; 
