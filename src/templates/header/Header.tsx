import React from 'react'
import styles from "./styles.module.css"

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>Header</h1>

    </header>
  )
}



export default Header