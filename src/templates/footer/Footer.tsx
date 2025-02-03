import React from 'react'
import styles from "./styles.module.css"

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
        Footer
    </footer>
  )
}

export default Footer