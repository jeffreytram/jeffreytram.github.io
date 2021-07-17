import React from "react"
import styles from "./projectlist.module.css"

const Project = props => {
  const { title, description, github, livePage, mainImage } = props;
  return (
    <div className={styles.project}>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectInfo}>
          <h2 style={{ fontSize: "var(--text-size-m-h)" }}>{title}</h2>
          <div style={{ fontSize: "var(--text-size-sm-p)" }}>
            <p>{description}</p>
            <button className="button" href={livePage}>Live Page</button>
            <button className="button" href={github}>GitHub</button>
            <p><a href="">Learn more...</a></p>
          </div>
        </div>
      </div>
      <img className={styles.mainImage} src={mainImage} />
    </div>
  )
};

export default function Projects() {
  return (
    <div className={styles.projectList}>
      <Project
        title="UniDrive"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        livePage=""
        github="https://github.com/jeffreytram/UniDrive"
        mainImage={require('../../static/unidrive-logo.png')}
      />
      <Project
        title="Chicken Traders"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        livePage="https://jeffreytram.pythonanywhere.com/"
        github="https://github.com/jeffreytram/Chicken-Traders"
        mainImage={require('../../static/chicken-traders-logo.png')}
      />
    </div>
  )
}