import React from "react"
import styles from "./involvementlist.module.css"

const Involvement = props => {
  const { title, org, bannerImage, description, githubLink } = props;
  return (
    <div className="card">
      <h2 className={styles.involvementHeading}>{title}</h2>
      <h4 className={styles.orgHeading}>{org}</h4>
      <p>{description}</p>
      <img className={styles.involvementBanner} src={bannerImage} alt={`${title} banner`}/>
      <div className={styles.involvementLinks}>
        {(githubLink) && (
          <a href={githubLink}>
            <button className="button">View GitHub Repository</button>
          </a>
        )}
      </div>
    </div>
  )
};

export default function Involvements() {
  return (
    <div className={styles.involvementListContainer}>
      <div className={styles.involvementList}>
        <Involvement
          title="Solar Forecasting"
          org="Big Data Big Impact Club"
          bannerImage={require('../../static/solarforecasting-banner-transparent.png')}
          description="Visualizing the solar irradiance in Georgia to improve the electric grid efficiency from the predicted solar forecasting data"
          githubLink="https://github.com/gt-big-data/solar-forecasting"
        />
        <Involvement
          title="BuzzBook"
          org="IT Board"
          bannerImage={require('../../static/buzzbook-banner.png')}
          description="A one-stop course planning platform for students featuring a course catalog, grade distribution, and enrollment timeline"
        />
      </div>
    </div>
  )
}