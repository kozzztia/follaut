import { navigation } from '@/constants/constants'
import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'



type Props = {
    className?: string
}

const MainHeader: React.FC<Props> = (props) => {
    const { className } = props
  return (
    <header className={`${className} ${styles.mainHeader}`}>
        <h1>Header</h1>
        <nav className={styles.mainNavigation}>
            {
                navigation.map(item => (
                    <Link key={item.id} href={item.href}>{item.name}</Link>
                ))
            }
        </nav>
    </header>
  )
}

export default MainHeader