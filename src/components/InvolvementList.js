import React from "react"
import styles from "./involvementlist.module.css"

const Involvement = props => {
  const { title, org, bannerImage, description, link } = props;
  return (
    <div>
      <h2 className={styles.involvementHeading}>{title}</h2>
      <h4 className={styles.orgHeading}>{org}</h4>
      <p>{description}</p>
      <img src={bannerImage} />
    </div>
  )
};

export default function Involvements() {
  return (
    <div className={styles.involvementList}>
      <Involvement
        title="Solar Forecasting"
        org="Big Data Big Impact Club"
        // bannerImage={}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link=""
      />
      <Involvement
        title="BuzzBook"
        org="Student Government Association: IT Board"
        // bannerImage={}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link=""
      />
    </div>
  )
}