import React from "react";
import { Link } from "gatsby";
import styles from "./projectlist.module.css";

const ListLink = props => (
  <li className={styles.navItem}>
    <Link className={styles.link} to={props.to}>{props.children}</Link>
  </li>
);

const Project = props => {
  const { title, icon, description, github, livePage, mainImage, page } = props;
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
          {(page) && (
              <Link className={styles.learnMore} to={`/${page}`}>Learn more...</Link>
          )}
        </div>
        <img className={styles.mainImage} src={mainImage} alt={`${title} banner`} />
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
        page="mlt"
      />
      <Project
        title="UniDrive"
        icon={require('../../static/icons/unidrive-icon.png')}
        description="Providing Google Drive users a single interface to interact with multiple different drives"
        github="https://github.com/jeffreytram/UniDrive"
        mainImage={require('../../static/banners/unidrive-screenshot.png')}
        page="unidrive"
      />
    </div>
  )
}