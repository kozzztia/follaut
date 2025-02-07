import { navigation } from '@/constants/constants'
import styles from "./styles.module.css"
import React from 'react'
import NavigationButton from '@/components/Button/NavigationButton'

const Navigation: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <ul className={`${styles.nav} ${active? styles.open : ""}`}>
        {
            navigation.map((item, index) => (
              <NavigationButton key={index} path={item.href} title={item.name}/>
            ))
        }
    </ul>
  )
}

export default Navigation;

