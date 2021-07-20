import React from "react"
import styles from "./allprojectlist.module.css"

const Project = props => {
  const { title, mainImage } = props;
  return (
    <div className={`${styles.project} + card`}>
      <a href="">
        <img className={styles.mainImage} src={mainImage} />
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
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
        <Project
          title="Chicken Traders"
          mainImage={require('../../static/chicken-traders-logo.png')}
        />
      </div>
    </div>
  )
}