import React from 'react'
import styles from "./styles.module.css"
import Logo from '@/components/Logo/Logo'
import ToggleButton from '@/components/kit/toggleButton/ToggleButton'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <Logo />


      <ToggleButton />
    </header>
  )
}



export default Header