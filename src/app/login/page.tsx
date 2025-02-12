
import React from 'react'

const page = () => {
  return (
    <>  
      <form>
        <label>
          <input type="text" id="login" />
        </label>
        <label >
          <input type="password" id="password" />
        </label>
        <button>login</button>
      </form>
    </>
  )
}

export default page