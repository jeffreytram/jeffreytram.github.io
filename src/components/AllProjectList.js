import React from "react"
import { Link } from "gatsby";
import { projectList } from "../content";
import styles from "./allprojectlist.module.css"

const Project = props => {
  const { title, banner, page } = props;
  return (
    <div className={`${styles.project} + card`}>
      <Link to={`/${page}`}>
        <img className={styles.mainImage} src={banner} alt={`${title} banner`} />
      </Link>
    </div>
  )
};

export default function AllProjectList() {
  return (
    <div className={styles.allProjectListContainer}>
      <div className={styles.allProjectList}>
        {projectList.map(({ title, banner, page }) => {
          return (
            <Project
              title={title}
              banner={require(`../../static/banners/${banner}`)}
              page={page}
            />
          )
        })}
      </div>
    </div>
  )
}