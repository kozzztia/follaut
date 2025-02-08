"use client"

import React from 'react'
import FormInput from '../customInput/FormInput'
import styles from "./styles.module.css"

const LoginForm = () => {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <FormInput type="text" title="login" inputHandler={() => { }} />
        <FormInput type="password" title="password" inputHandler={() => { }} />
      </form>
    </div>
  )
}

export default LoginForm


