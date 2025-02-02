import React from 'react'
import styles from "./styles.module.css"
import { navigation } from '@/constants/constants'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Header</h1>
      <menu className={styles.menu}>
        {
          navigation.map((item) => (
            <li key={item.name} >
              <a href={item.href}>{item.name}</a>
            </li>
          ))
        }
      </menu>
      <button className={styles.button}>Button</button>
    </header>
  )
}

export default Header