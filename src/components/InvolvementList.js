import React from "react"
import styles from "./involvementlist.module.css"

const Involvement = props => {
  const { title, org, bannerImage, description, link } = props;
  return (
    <div className="card">
      <h2 className={styles.involvementHeading}>{title}</h2>
      <h4 className={styles.orgHeading}>{org}</h4>
      <p>{description}</p>
      <img className={styles.involvementBanner} src={bannerImage} />
      <div className={styles.involvementLinks}>
        <button className="button">Link 1</button>
        <button className="button">Link 2</button>
      </div>
    </div>
  )
};

export default function Involvements() {
  return (
    <div className={styles.involvementListContainer}>
      <div className={styles.involvementList}>
        <Involvement
          title="Solar Forecasting"
          org="Big Data Big Impact Club"
          bannerImage={require('../../static/banner-template.jpg')}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link=""
        />
        <Involvement
          title="BuzzBook"
          org="Student Government Association: IT Board"
          bannerImage={require('../../static/banner-template.jpg')}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link=""
        />
      </div>
    </div>
  )
}