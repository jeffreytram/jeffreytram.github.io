import React from "react"
import styles from "./projectlist.module.css"

const Project = props => {
  const { title, description, github, livePage, mainImage, subImage1, subImage2, subImage3 } = props;
  return (
    <div className={styles.project}>
      <div className={styles.projectInfo}>
        <h2 style={{ marginBlockStart: "0", fontSize: "var(--text-size-m-h)" }}>{title}</h2>
        <div style={{ fontSize: "var(--text-size-sm-p)" }}>
          <p>{description}</p>
          <a className={styles.button} href={livePage}>Live Page</a>
          <a className={styles.button} href={github}>GitHub</a>
        </div>
      </div>
      <img className={styles.mainImage} src={mainImage} />
      <div className={styles.subImageFlexContainer}>
        <img className={styles.subImage1} src={subImage1} />
        <img className={styles.subImage2} src={subImage2} />
        <img className={styles.subImage3} src={subImage3} />
      </div>
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
        subImage1={require('../../static/unidrive-preview.png')}
        subImage2={require('../../static/unidrive-preview.png')}
        subImage3={require('../../static/unidrive-preview.png')}
      />
      <Project
        title="Chicken Traders"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        livePage="https://jeffreytram.pythonanywhere.com/"
        github="https://github.com/jeffreytram/Chicken-Traders"
        mainImage={require('../../static/chicken-traders-logo.png')}
        subImage1={require('../../static/chicken-traders-preview.png')}
        subImage2={require('../../static/chicken-traders-preview.png')}
        subImage3={require('../../static/chicken-traders-preview.png')}
      />
    </div>
  )
}