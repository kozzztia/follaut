import RegistrationForm from '@/components/(client)/Form/RegistrationForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "registration",
  description: "registration description",
};


const page = () => {
  return (
    <RegistrationForm />
  )
}

export default page