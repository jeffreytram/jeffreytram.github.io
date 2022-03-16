import React from "react";
import { Link } from "gatsby";
import { projectList } from "../content";
import Layout from "./layout";
import styles from "./contentlayout.module.css"

export default function ContentLayout({ project, children }) {
  const { title, period, description, tech, snapshot,
    pageLink, githubRepo, icon } = project;

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
        {tech.map((lang) => {
          return <img
            src={require(`../../static/icons/${lang}.png`)}
            className={`${styles[lang]} ${styles.techIcon}`}
            alt={`${lang} icon`}
          >
          </img>
        })}
        <div className={styles.otherLinks}>
          {icon && (
            <img src={require(`../../static/icons/${icon}`)} className={styles.bgIcon} alt={`${title} icon`}></img>
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
        <img src={require(`../../static/snapshots/${snapshot}`)} className={styles.snapshot} alt={`${title} snapshot`}></img>

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