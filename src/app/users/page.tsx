import React from 'react';

type User = {
    id: number;
    name: string;
    login: string;
};

const getUsers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
};

const Page = async () => {
    const users: User[] = await getUsers();

    return (
        <div>
            <h1>📋 Список пользователей</h1>
            {users?.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <a href={`/users/${user.login}`}>🔗 Профиль {user.login}</a>
                </div>
            ))}
        </div>
    );
};

export default Page;
