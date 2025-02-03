"use client"
import React from 'react'
import styles from "./styles.module.css"

const CustonButton: React.FC<{
    title: string,
    className?: string,

}> = ({ title, className }) => {
    const handler = () => console.log(title)
    return (
        <button
            onClick={handler}
            className={`${styles.button} ${className}`}
        >
            {title}
        </button>
    )
}

export default CustonButton