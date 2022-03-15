import React from "react"
import ContentLayout from "../components/ContentLayout";

function MLT(props) {
  return (
    <div>
      <ContentLayout
        title="Music Listening Times"
        period="February 2020 - June 2020"
        description="Music Listening Times is an interactive data
        visualization of my personal monthly music listening habits
        over the past 2+ years and 50000+ songs!"
        tech={['HTML5', 'CSS3', 'JavaScript', 'D3js', 'Firebase']}
        pageLink="https://music-listening-times.web.app/"
        githubRepo="https://github.com/jeffreytram/Music-Listening-Times"
        snapshot="mlt"
        bgIcon="mlt-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default MLT;