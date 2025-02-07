"use client"
import React, { FC } from 'react'
import styles from "./styles.module.css"



const CustonButton: FC<{type: "big" | "small" | "link", className?: string, title?: string}>  = ({type, title, className }) => {

    return (
        <ButtonWrapper type={type} className={className} title={title}>
            <Button/>
        </ButtonWrapper>
    )
}


export default CustonButton



const Button: FC = () => {
const handler = () => {
        console.log("type")
    }
    return (
        <button
            onClick={handler}
            className={styles.button}
        >
        </button>
    )
}


const ButtonWrapper: FC<{type: "big" | "small" | "link", children: React.ReactNode, title?: string, className?: string , }> = ({type, children, className, title}) => {
    if(type === "big"){
        return (
            <label className={`${styles.bigWrapper} ${className}`}>
                {title && <ButtonTitle title={title}/>}
                {children}
            </label>
        )
    }
    if(type === "small"){
        return ( 
            <label className={`${styles.smallWrapper} ${className}`}>
                {children}
            </label>
        )
    }

};

const ButtonTitle : FC<{title: string}> = ({title}) => {
    return (
        <span className={styles.title}>
            {title}
        </span>
    )
}