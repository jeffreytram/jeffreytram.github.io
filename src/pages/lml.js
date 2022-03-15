import React from "react"
import ContentLayout from "../components/ContentLayout";

function LML(props) {
  return (
    <div>
      <ContentLayout
        title="Love Machine Learning"
        period="February 2020 - April 2020"
        description="Love Machine Learning is a matchmaking service for
        Georgia Tech students that matched students with their soulmates
        by looking at their responses to questions about their personality,
        beliefs, values, and desires in a partner. Our team visualized the
        data from the students' responses."
        tech={['HTML5', 'CSS3', 'JavaScript', 'D3js']}
        snapshot="lml"
        bgIcon="lml-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default LML;