import React from "react";
import Layout from "../components/layout";
import InvolvementList from "../components/InvolvementList";
import ProjectList from "../components/ProjectList";
import AllProjectList from "../components/AllProjectList";
import styles from "./index.module.css";

const HomeSection = props => {
  const { id, title, content } = props;
  return (
    <div id={id} className={styles.section}>
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
              <img src={require('../../static/GitHub-Mark-32px.png')} alt="GitHub logo"/>
              <img style={{ height: "32px" }} src={require('../../static/GitHub_Logo.png')} alt="GitHub logo text"/>
            </a>
            <a href={require('../../static/Resume-Jeffrey-Tram.pdf')} target="_blank" rel="noreferrer">
              <button className="button" href={require('../../static/Resume-Jeffrey-Tram.pdf')} >Resume</button>
            </a>
          </div>
        </div>
      </div>
      <HomeSection id="involvement" title="Involvement" content={<InvolvementList/>}/>
      <HomeSection id="projects" title="Featured Projects" content={<ProjectList/>}/>
      <HomeSection title="All Projects" content={<AllProjectList/>}/>
    </Layout>
  )
}
