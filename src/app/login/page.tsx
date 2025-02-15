import { Metadata } from 'next';
import React from 'react'
import LoginForm from '@/components/(client)/Form/LoginForm';


export const metadata: Metadata = {
  title: "login",
  description: "login description",
};


const page = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default page