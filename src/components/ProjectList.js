import React from "react"
import styles from "./projectlist.module.css"

const Project = props => {
  const { title, description, github, livePage, mainImage, learnMore } = props;
  return (
    <div className={`${styles.project} + card`}>
      <h2 className={styles.projectTitle}>{title}</h2>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectInfo}>
          <div style={{ fontSize: "var(--text-size-sm-p)" }}>
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
              <p><a href={learnMore}>Learn more...</a></p>
            )}
          </div>
        </div>
      </div>
      <img className={styles.mainImage} src={mainImage} alt={`${title} banner`}/>
    </div>
  )
};

export default function Projects() {
  return (
    <div className={styles.projectList}>
      <Project
        title="Music Listening Times"
        description="Visualizing over 2 yeras of personal listening data with searching, filtering, and interacting capabilties"
        livePage="https://music-listening-times.web.app/"
        github="https://github.com/jeffreytram/Music-Listening-Times"
        mainImage={require('../../static/MLT-logo.png')}
        learnMore="https://jeffreytram.github.io/mlt.html"
      />
      <Project
        title="UniDrive"
        description="Providing Google Drive users a single interface to interact with multiple different drives."
        github="https://github.com/jeffreytram/UniDrive"
        mainImage={require('../../static/unidrive-logo.png')}
        learnMore="https://jeffreytram.github.io/unidrive.html"
      />
    </div>
  )
}