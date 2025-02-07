'use client'
import React, { FC } from 'react'
import styles from "./styles.module.css"
import Navigation from '@/templates/navigation/Navigation';



const ToggleButton: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)


  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <label className={`${styles.toggleWrapper}`}>
      <button
        className={`${styles.button} ${isOpen?styles.active: ""}`}
        onClick={toggleHandler}>
      </button>
      <Navigation active={isOpen}/>
    </label>
  )
}

export default ToggleButton