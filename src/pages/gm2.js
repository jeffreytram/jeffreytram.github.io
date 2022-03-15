import React from "react"
import ContentLayout from "../components/ContentLayout";

function GM2(props) {
  return (
    <div>
      <ContentLayout
        title="Grade Manager 2.0"
        period="July 2020 - September 2020"
        description="Track your progress in all of your classes as the semester rolls!"
        tech={['HTML5', 'CSS3', 'JavaScript', 'ReactJS']}
        pageLink="https://jeffreytram.github.io/Grade-Manager/"
        githubRepo="https://github.com/jeffreytram/Grade-Manager"
        snapshot="gm2"
        bgIcon="gm2-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default GM2;