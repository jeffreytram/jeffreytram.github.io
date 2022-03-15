import React from "react"
import ContentLayout from "../components/ContentLayout";

function MLT(props) {
  return (
    <div>
      <ContentLayout
        title="UniDrive"
        period="January 2020 - November 2020"
        description="UniDrive is a web application our team of six built
        for our client at Sandia National Labs to provide Google Drive
        users a central file organizational structure for all of their
        Google Drive accounts."
        tech={['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'AWS']}
        githubRepo="https://github.com/jeffreytram/UniDrive"
        snapshot="unidrive"
        bgIcon="unidrive-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default MLT;