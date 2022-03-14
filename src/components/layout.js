import React from "react"
import styles from "./layout.module.css"

const navList = [
  { href: '/', title: 'Home' },
  { href: '/#involvement', title: 'Involvement' },
  { href: '/#projects', title: 'Projects' },
];

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <ul className={styles.navList}>
          {navList.map(link => {
            return (
              <li className={styles.navItem}>
                <a href={link.href} className={styles.link}>{link.title}</a>
              </li>
            )
          })}
        </ul>
      </header>
      {children}
    </div>
  )
}