import React from 'react'

const getPerson = async () => {
  const res = await fetch('http://localhost:3000/api/person', {
    cache: 'no-cache',
  });
  return res.json();
}

type User = {
  id: number;
  name: string;
}


const page = async () => {
  const users = await getPerson();
  return (
    <div>
        {
          users.map((user: User) => {
            return (
              <div key={user.id}>
                {user.name}
              </div>
            )
          })
        }
    </div>
  )
}

export default page