import React from "react"
import styles from "./allprojectlist.module.css"

const Project = props => {
  const { title, mainImage, link } = props;
  return (
    <div className={`${styles.project} + card`}>
      <a href={link}>
        <img className={styles.mainImage} src={mainImage} alt={`${title} + banner`}/>
      </a>
    </div>
  )
};

export default function AllProjectList() {
  return (
    <div className={styles.allProjectListContainer}>
      <div className={styles.allProjectList}>
        <Project
          title="UniDrive"
          mainImage={require('../../static/unidrive-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/unidrive.html"
        />
        <Project
          title="Music Listening Times"
          mainImage={require('../../static/MLT-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/mlt.html"
        />
        <Project
          title="Love Machine Learning"
          mainImage={require('../../static/LML-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/lml.html"
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/chicken-traders.html"
        />
        <Project
          title="Weather App"
          mainImage={require('../../static/weather-app-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/weatherapp.html"
        />
        <Project
          title="Personal Portfolio v1"
          mainImage={require('../../static/website-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/website.html"
        />
        <Project
          title="Personal Portfolio v1"
          mainImage={require('../../static/gm-logo.png')}
          link="https://jeffreytram.github.io/portfolio-v1/gm.html"
        />
      </div>
    </div>
  )
}