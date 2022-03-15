import React from "react"
import ContentLayout from "../components/ContentLayout";
import { projectList } from "../content";

const projectNames = projectList.map(proj => proj.title);
const projectIndex = projectNames.indexOf('Personal Website v1');
const project = projectList[projectIndex];

function PortfolioV1(props) {
  return (
    <div>
      <ContentLayout project={project}>
      </ContentLayout>
    </div>
  )
}
export default PortfolioV1;