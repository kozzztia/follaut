import React from 'react'
import styles from "./styles.module.css"
import Logo from '@/components/Logo/Logo'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <Logo />
    </header>
  )
}



export default Header