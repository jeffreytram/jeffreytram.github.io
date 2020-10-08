import React from "react";
import Layout from "../components/layout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.titleText}>
        <div style={{margin: "25vh 0"}}>
          <h1 style={{marginBlockEnd: "5px", fontSize: "var(--text-size4)"}}>Hello! I'm Jeffrey,</h1>
          <h3 style={{marginBlockStart: "5px", fontSize: "var(--text-size2)"}}>a senior CS sudent at Georgia Tech</h3>
        </div>
        <p style={{margin: "20vh 0", fontSize: "var(--text-size1)"}}>
          <span style={{color: "#2d9cdb", fontWeight: "bold"}}>frontend developer </span> 
          +
          <span style={{color: "#219653", fontWeight: "bold"}}> data visualization</span>
        </p>
      </div>
      {/*Projects*/}
      <div>
        <h3 style={{textAlign:"center", fontSize: "var(--text-size2)"}}>Projects</h3>
      </div>
    </Layout>
  )
}
