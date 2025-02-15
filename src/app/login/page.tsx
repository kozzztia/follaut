import { Metadata } from 'next';
import React from 'react'
import styles from './styles.module.css'
import LoginForm from '@/components/(client)/Form/LoginForm';


export const metadata: Metadata = {
  title: "login",
  description: "login description",
};


const page = () => {
  return (
    <div className={styles.loginWrapper}>  
        <LoginForm />
    </div>
  )
}

export default page