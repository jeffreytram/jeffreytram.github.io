import React from "react";
import Layout from "../components/layout";
import InvolvementList from "../components/InvolvementList";
import ProjectList from "../components/ProjectList";
import AllProjectList from "../components/AllProjectList";
import styles from "./index.module.css";

const HomeSection = props => {
  const { title, content } = props;
  return (
    <div className={styles.section}>
      <h3 style={{ textAlign: "center", marginBlockEnd: "0", fontSize: "var(--text-size-subtitle)" }}>{title}</h3>
      <hr style={{ width: "30%", marginBottom: "5vw" }} />
      {content}
    </div>
  )
};

export default function Home() {
  return (
    <Layout>
      <div className={styles.titleText}>
        <div style={{ margin: "25vh 0" }}>
          <h1 style={{ marginBlockEnd: "5px", fontSize: "var(--text-size-title)" }}>Hello! I'm Jeffrey,</h1>
          <h3 style={{ marginBlockStart: "5px", fontSize: "var(--text-size-m-h)" }}>a Georgia Tech computer science graduate</h3>
        </div>
        <div style={{ margin: "20vh 0", fontSize: "var(--text-size-sm-h)" }}>
          <p>
            <span style={{ color: "var(--blue)", fontWeight: "bold" }}>frontend developer </span>
            +
            <span style={{ color: "var(--green)", fontWeight: "bold" }}> data visualization</span>
          </p>
          <div className={styles.linksContainer}>
            <a href="https://github.com/jeffreytram" className={styles.logo}>
              <img src={require('../../static/GitHub-Mark-32px.png')}/>
              <img style={{ height: "32px" }} src={require('../../static/GitHub_Logo.png')}/>
            </a>
            <button className="button">Resume</button>
          </div>
        </div>
      </div>
      <HomeSection title="Involvement" content={<InvolvementList/>}/>
      <HomeSection title="Featured Projects" content={<ProjectList/>}/>
      <HomeSection title="All Projects" content={<AllProjectList/>}/>
      <HomeSection title="Experience"/>
    </Layout>
  )
}
