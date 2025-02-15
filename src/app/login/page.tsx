import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "login",
  description: "login description",
};


const page = () => {
  return (
    <>  
      <form>
        <label>
          <input type="text" id="login"  />
        </label>
        <label >
          <input type="password" id="password" autoComplete='off'/>
        </label>
        <button>login</button>
      </form>
    </>
  )
}

export default page