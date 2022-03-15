import React from "react"
import ContentLayout from "../components/ContentLayout";

function PortfolioV1(props) {
  return (
    <div>
      <ContentLayout
        title="Personal Website V1"
        period="June 2019 - July 2019"
        description="My personal website serves as a place to showcase
        my works and talk about myself."
        tech={['HTML5', 'CSS3', 'JavaScript']}
        pageLink="https://jeffreytram.github.io/portfolio-v1/index.html"
        githubRepo="https://github.com/jeffreytram/portfolio-v1"
        snapshot="portfolio-v1"
        bgIcon="portfolio-v1-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default PortfolioV1;