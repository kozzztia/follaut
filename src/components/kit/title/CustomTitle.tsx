'use client'
import { FC } from "react"
import styles from "./styles.module.css"

const CustomTitle: FC<{ title: string }> = ({ title }) => {
    return (
        <span className={styles.title}>
            {title}
        </span>
    )
}

export default CustomTitle