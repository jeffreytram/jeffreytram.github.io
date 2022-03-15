import React from "react";
import { Link } from "gatsby";
import { projectList } from "../content";
import styles from "./projectlist.module.css";

const projectNames = projectList.map(proj => proj.title);

const projectIndex1 = projectNames.indexOf('Music Listening Times 2.0');
const project1 = projectList[projectIndex1];

const projectIndex2 = projectNames.indexOf('UniDrive');
const project2 = projectList[projectIndex2];

const Project = props => {
  const { title, icon, shortDescription, githubRepo, pageLink, snapshot, page } = props.project;
  return (
    <div className={`${styles.project} + card`}>
      <h2 className={styles.projectTitle}>
        <img className="icon" src={require(`../../static/icons/${icon}`)} alt={`${title} icon`}></img> {title}
      </h2>
      <div className={styles.projectInfoContainer}>
        <div className={styles.projectInfo}>
          <p>{shortDescription}</p>
          {(pageLink) && (
            <a href={pageLink}>
              <button className="button">Live Page</button>
            </a>
          )}
          {(githubRepo) && (
            <a href={githubRepo}>
              <button className="button">GitHub</button>
            </a>
          )}
          {(page) && (
            <Link className={styles.learnMore} to={`/${page}`}>Learn more...</Link>
          )}
        </div>
        <img className={styles.mainImage} src={require(`../../static/snapshots/${snapshot}`)} alt={`${title} banner`} />
      </div>
    </div>
  )
};

export default function Projects() {
  return (
    <div className={styles.projectList}>
      <Project project={project1} />
      <Project project={project2} />
    </div>
  )
}