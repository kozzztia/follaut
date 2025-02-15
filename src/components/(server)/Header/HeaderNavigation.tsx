import { navigation } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

const HeaderNavigation = () => {
    return (
        <nav className={styles.mainNavigation}>
            {
                navigation.map(item => (
                    <Link key={item.id} href={item.href}>{item.name}</Link>
                ))
            }
        </nav>
    )
}

export default HeaderNavigation