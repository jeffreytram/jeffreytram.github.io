import React from "react"
import ContentLayout from "../components/ContentLayout";
import { projectList } from "../content";

const projectNames = projectList.map(proj => proj.title);
const projectIndex = projectNames.indexOf('Grade Manager');
const project = projectList[projectIndex];

function GM(props) {
  return (
    <div>
      <ContentLayout project={project}>
      </ContentLayout>
    </div>
  )
}
export default GM;