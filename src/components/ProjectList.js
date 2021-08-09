import React from "react"
import styles from "./projectlist.module.css"

const Project = props => {
  const { title, icon, description, github, livePage, mainImage, learnMore } = props;
  return (
    <div className={`${styles.project} + card`}>
      <h2 className={styles.projectTitle}><img className="icon" src={icon} alt={`${title} icon`}></img> {title}</h2>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectInfo}>
          <p>{description}</p>
          {(livePage) && (
            <a href={livePage}>
              <button className="button">Live Page</button>
            </a>
          )}
          {(github) && (
              <a href={github}>
                <button className="button">GitHub</button>
              </a>
          )}
          {(learnMore) && (
            <a href={learnMore}>
              <span className={styles.learnMore}>Learn more...</span>
            </a>
          )}
        </div>
        <img className={styles.mainImage} src={mainImage} alt={`${title} banner`}/>
      </div>
    </div>
  )
};

export default function Projects() {
  return (
    <div className={styles.projectList}>
      <Project
        title="Music Listening Times"
        icon={require('../../static/icons/mlt-icon.png')}
        description="Visualizing over 2 years of personal listening data with searching, filtering, and interacting capabilties"
        livePage="https://music-listening-times.web.app/"
        github="https://github.com/jeffreytram/Music-Listening-Times"
        mainImage={require('../../static/banners/mlt-screenshot.png')}
        learnMore="https://jeffreytram.github.io/portfolio-v1/mlt.html"
      />
      <Project
        title="UniDrive"
        icon={require('../../static/icons/unidrive-icon.png')}
        description="Providing Google Drive users a single interface to interact with multiple different drives"
        github="https://github.com/jeffreytram/UniDrive"
        mainImage={require('../../static/banners/unidrive-screenshot.png')}
        learnMore="https://jeffreytram.github.io/portfolio-v1/unidrive.html"
      />
    </div>
  )
}