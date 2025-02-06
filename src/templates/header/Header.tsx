import React from 'react'
import styles from "./styles.module.css"
import Button from '@/kit/Button/CustonButton'
import getDictionary from '@/dictionary/dictionary'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>Header</h1>
      <Button className={styles.button} title={getDictionary('login')}/>
    </header>
  )
}



export default Header