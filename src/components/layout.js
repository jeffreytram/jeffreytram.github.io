import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

const ListLink = props => (
  <li className={styles.navItem}>
    <Link className={styles.link} to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <ul className={styles.navList}>
          <ListLink to="/">Involvement</ListLink>
          <ListLink to="/">Projects</ListLink>
          <ListLink to="">Experience</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}