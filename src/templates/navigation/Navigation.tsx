import { navigation } from '@/constants/constants'
import styles from "./styles.module.css"
import React from 'react'
import Link from 'next/link'

const Navigation: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ul className={`${styles.nav} ${className}`}>
        {
            navigation.map((item, index) => (
              <NavigationLink key={index} href={item.href} title={item.name} />
            ))
        }
        
    </ul>
  )
}

export default Navigation;

const NavigationLink: React.FC<{ href: string, title: string }> = ({ href, title }) => {
  return (
    <li >
        <Link href={href}>{title}</Link>
    </li>
  )
}


