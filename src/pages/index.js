import React from "react";
import Layout from "../components/layout";
import InvolvementList from "../components/InvolvementList";
import ProjectList from "../components/ProjectList";
import styles from "./index.module.css";

const HomeSection = props => {
  const { title } = props;
  return (
    <>
      <h3 style={{ textAlign: "center", marginBlockEnd: "0", fontSize: "var(--text-size-subtitle)" }}>{title}</h3>
      <hr style={{ width: "30%", marginBottom: "5vw" }} />
    </>
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
        <p style={{ margin: "20vh 0", fontSize: "var(--text-size-sm-h)" }}>
          <span style={{ color: "#2d9cdb", fontWeight: "bold" }}>frontend developer </span>
          +
          <span style={{ color: "#219653", fontWeight: "bold" }}> data visualization</span>
        </p>
      </div>
      {/*Projects*/}
      <HomeSection title="Involvement"/>
      <InvolvementList/>
      <HomeSection title="Featured Projects"/>
      <ProjectList/>
      <HomeSection title="Experience"/>
    </Layout>
  )
}
