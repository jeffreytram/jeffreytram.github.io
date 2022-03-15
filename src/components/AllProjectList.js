import React from "react"
import { Link } from "gatsby";
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
export const projectList = [
  { title: "Music Listening Times 2.0", banner: 'mlt2-logo.png', page: 'mlt2' },
  { title: 'UniDrive', banner: 'unidrive-logo.png', page: 'unidrive' },
  { title: 'Music Listening Times', banner: 'MLT-logo.png', page: 'mlt' },
  { title: 'Grade Manager 2.0', banner: 'gm2-logo.png', page: 'gm2' },
  { title: 'Love Machine Learning', banner: 'LML-logo.png', page: 'lml' },
  { title: 'Chicken Traders', banner: 'chicken-traders-logo.png', page: 'chicken-traders' },
  { title: 'Weather App', banner: 'weather-app-logo.png', page: 'weather-app' },
  { title: 'Personal Website v1', banner: 'website-logo.png', page: 'portfolio-v1' },
  { title: 'Grade Manager', banner: 'gm-logo.png', page: 'gm' },
];

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