import React from "react";
import Layout from "./layout";
import styles from "./contentlayout.module.css"

export default function ContentLayout(props) {
  const { title, period, description, tech, snapshot,
    pageLink, githubRepo, bgIcon, children } = props;
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
      </div>
    </Layout>
  )
}