import React from 'react'
import styles from "./styles.module.css"
import Button from '@/kit/Button/CustonButton'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>Header</h1>
      <Button className={styles.button} title="Button" />
    </header>
  )
}



export default Header