import { Metadata } from 'next';
import React from 'react'
import LoginForm from '@/components/(client)/Form/LoginForm';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "login",
  description: "login description",
};


const page = () => {
  return (
    <>
      <LoginForm />
      <Link href="/login/registration">🔗 Регистрация</Link>
    </>
  )
}

export default page