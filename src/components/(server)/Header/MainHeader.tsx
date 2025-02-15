import React from 'react'
import styles from './styles.module.css'
import HeaderNavigation from './HeaderNavigation'




type Props = {
    className?: string
}

const MainHeader: React.FC<Props> = (props) => {
    const { className } = props
  return (
    <header className={`${className} ${styles.mainHeader}`}>
        <h1>Header</h1>
        <HeaderNavigation />
    </header>
  )
}

export default MainHeader