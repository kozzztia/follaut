import NavigationButton from '@/components/Button/NavigationButton'
import LoginForm from '@/templates/form/loginForm'
import React from 'react'

const page = () => {
  return (
    <>
    <LoginForm />
    <NavigationButton path={'login/registration'} title={'Registration'} />
    </>
  )
}

export default page