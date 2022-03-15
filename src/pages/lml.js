import React from "react"
import ContentLayout from "../components/ContentLayout";
import { projectList } from "../content";

const projectNames = projectList.map(proj => proj.title);
const projectIndex = projectNames.indexOf('Love Machine Learning');
const project = projectList[projectIndex];

function LML(props) {
  return (
    <div>
      <ContentLayout project={project}>
      </ContentLayout>
    </div>
  )
}
export default LML;