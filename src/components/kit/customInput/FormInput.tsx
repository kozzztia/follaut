'use client'
import React, { FC } from 'react'
import styles from "./styles.module.css"

type Props = {
    type: "text" | "password";
    title: string;
    inputHandler: ()=>void;
}

const FormInput: FC<Props> = ({ type, title, inputHandler}) => {
  return (
    <label className={styles.formInput}> 
        <input type={type} name={title} onChange={inputHandler} />
    </label>
  )
}

export default FormInput