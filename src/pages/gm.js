import React from "react"
import ContentLayout from "../components/ContentLayout";

function GM(props) {
  return (
    <div>
      <ContentLayout
        title="Grade Manager"
        period="June 2019 - July 2019"
        description="Grade Manager allows you to manage your grades in all
        of your classes as the semester progresses. Calculate your current
        grades, or calculate if it's still even possible to earn that
        &lsquo;&lsquo;A.&rsqup;&rsquo; Comeback anytime to update your
        grades."
        tech={['HTML5', 'CSS3', 'JavaScript']}
        githubRepo="https://github.com/jeffreytram/Grade-Manager"
        snapshot="gm"
      >
      </ContentLayout>
    </div>
  )
}
export default GM;