import React from "react"
// import { Link } from "gatsby"
import styles from "./layout.module.css"

// const ListLink = props => (
//   <li className={styles.navItem}>
//     <Link className={styles.link} to={props.to}>{props.children}</Link>
//   </li>
// )

const navList = [
  {id: 'involvement', title: 'Involvement'},
  {id: 'projects', title: 'Projects'},
]

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <ul className={styles.navList}>
          {navList.map(link => {
            return (
              <li className={styles.navItem}>
                <a href={`#${link.id}`} className={styles.link}>{link.title}</a>
              </li>
            )
          })}
        </ul>
      </header>
      {children}
    </div>
  )
}