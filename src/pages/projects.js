import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import styles from "./projects.module.css"

console.log(styles)

const Project = props => (
  <div>
    <img src={props.card} />
    <img src={props.screenshot} />
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  </div>
)

export default function Projects() {
  return (
    <Layout>
      <Header
        headerText="Projects"
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Project
        card="https://source.unsplash.com/random/200x200"
        screenshot="https://source.unsplash.com/random/200x200"
        title="Project 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Project
        card="https://source.unsplash.com/random/200x200"
        screenshot="https://source.unsplash.com/random/200x200"
        title="Project 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Layout>
  )
}