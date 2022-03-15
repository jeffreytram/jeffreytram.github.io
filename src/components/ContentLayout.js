import React from "react";
import { Link } from "gatsby";
import { projectList } from "./AllProjectList";
import Layout from "./layout";
import styles from "./contentlayout.module.css"

export default function ContentLayout(props) {
  const { title, period, description, tech, snapshot,
    pageLink, githubRepo, bgIcon, children } = props;

  const projectNameList = projectList.map(project => project.title);
  const projectIndex = projectNameList.indexOf(title);

  const hasPrev = projectIndex > 0;
  const hasNext = projectIndex < projectNameList.length - 1;

  const prevProj = (hasPrev) ? projectList[projectIndex - 1] : {};
  const nextProj = (hasNext) ? projectList[projectIndex + 1] : {};

  return (
    <Layout>
      <div className={styles.page}>
        <i>{period}</i>
        <h1>{title}</h1>
        <p>{description}</p>
        {tech.map((icon) => {
          return <img
            src={require(`../../static/icons/${icon}.png`)}
            className={`${styles[icon]} ${styles.techIcon}`}
            alt={`${icon} icon`}
          >
          </img>
        })}
        <div className={styles.otherLinks}>
          {bgIcon && (
            <img src={require(`../../static/icons/${bgIcon}.png`)} className={styles.bgIcon} alt={`${title} icon`}></img>
          )}
          {pageLink && (
            <a href={pageLink}>
              <button className="button">Live Page</button>
            </a>
          )}
          {githubRepo && (
            <a href={githubRepo}>
              <button className="button">Github Repo</button>
            </a>
          )}
        </div>
        <img src={require(`../../static/snapshots/${snapshot}-snapshot.png`)} className={styles.snapshot} alt={`${title} snapshot`}></img>

        {children}

        <footer className={styles.footer}>
          {hasPrev && (
            <Link to={`/${prevProj.page}`}>&lt;&lt; {prevProj.title}</Link>
          )}
          {hasNext && (
            <Link style={{ float: 'right' }} to={`/${nextProj.page}`}>{nextProj.title} &gt;&gt;</Link>
          )}
        </footer>
      </div>
    </Layout>
  )
}