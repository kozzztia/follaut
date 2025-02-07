import React from 'react'
import styles from "./styles.module.css"
import CustonButton from '@/components/Button/CustonButton'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1 className={styles.title}>Header</h1>

      
      <CustonButton className={styles.button} type="big" title="button"/>
    </header>
  )
}



export default Header