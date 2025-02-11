import React from 'react'

const getUser = async () => {
  const URL = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${URL}/users`, {
    cache: 'no-cache',
  });
  return res.json();
}

type User = {
  id: number;
  name: string;
  role: string;
  login: string;
  password: string;
}


const page = async () => {
  const users = await getUser();
  return (
    <div>
        {
          users.map((user: User) => {
            return (
              <div key={user.id}>
                {user.name} - {user.role}
              </div>
            )
          })
        }
    </div>
  )
}

export default page