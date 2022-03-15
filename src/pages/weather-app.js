import React from "react"
import ContentLayout from "../components/ContentLayout";
import { projectList } from "../content";

const projectNames = projectList.map(proj => proj.title);
const projectIndex = projectNames.indexOf('Weather App');
const project = projectList[projectIndex];

function WeatherApp(props) {
  return (
    <div>
      <ContentLayout project={project}>
      </ContentLayout>
    </div>
  )
}
export default WeatherApp;