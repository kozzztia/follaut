import React from 'react'

const getUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

type User = {
    id: number;
    name: string;
    role: string;
}

const page = async() => {
    const users = await getUsers();
    return (
        <>
            {
                users.map((user: User) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.role}</p>
                    </div>
                ))
            }
        </>
    )
}

export default page