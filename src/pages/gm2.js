import React from "react"
import ContentLayout from "../components/ContentLayout";
import { projectList } from "../content";

const projectNames = projectList.map(proj => proj.title);
const projectIndex = projectNames.indexOf('Grade Manager 2.0');
const project = projectList[projectIndex];

function GM2(props) {
  return (
    <div>
      <ContentLayout project={project}>
      </ContentLayout>
    </div>
  )
}
export default GM2;