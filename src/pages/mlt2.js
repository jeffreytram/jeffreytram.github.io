import React from "react"
import ContentLayout from "../components/ContentLayout";

function MLT2(props) {
  return (
    <div>
      <ContentLayout
        title="Music Listening Times 2.0"
        period="August 2021 - Present"
        description="Music Listening Times provides LastFM users the ability
        to visualize their personal music listening habits. Users can further
        filter and search their data to discover interesting trends."
        tech={['HTML5', 'CSS3', 'JavaScript', 'D3js', 'ReactJS', 'Firebase']}
        pageLink="https://music-listening-times-2.web.app/"
        githubRepo="https://github.com/jeffreytram/Music-Listening-Times-v2.0"
        snapshot="mlt2"
        bgIcon="mlt2-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default MLT2;