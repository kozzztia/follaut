'use client'
import React, { FC } from 'react'
import styles from "./styles.module.css"
import Navigation from '@/templates/navigation/Navigation';



const ToggleButton: FC<{className?: string}> = ({className}) => {
  const [isOpen, setIsOpen] = React.useState(false)


  const toggleHandler = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <label className={`${styles.toggleWrapper} ${className}`}>
      <button
        className={styles.button}
        onClick={toggleHandler}>
      </button>
      <Navigation active={isOpen}/>
    </label>
  )
}

export default ToggleButton