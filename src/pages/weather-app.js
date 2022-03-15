import React from "react"
import ContentLayout from "../components/ContentLayout";

function WeatherApp(props) {
  return (
    <div>
      <ContentLayout
        title="Weather App"
        period="August 2019"
        description="Weather App is a web application that allows users to
        view the current and past weather at their location."
        tech={['HTML5', 'CSS3', 'JavaScript']}
        pageLink="https://jeffreytram.github.io/Weather-App/"
        githubRepo="https://github.com/jeffreytram/Weather-App"
        snapshot="weather-app"
        bgIcon="weather-app-icon"
      >
      </ContentLayout>
    </div>
  )
}
export default WeatherApp;