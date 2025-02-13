import React from 'react';

type PageProps = {
    params: { login: string };
};

const getUser = async (login: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?login=${login}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Пользователь не найден');
    return res.json();
};

const Page = async ({ params }: PageProps) => {
    const { login } = params;

    if (!login) {
        return <h2>⚠️ Пользователь не найден</h2>;
    }

    const user = await getUser(login);

    return (
        <div>
            <h2>👤 Пользователь: {user.name}</h2>
            <p>🔑 Логин: {user.login}</p>
            <p>🆔 ID: {user.id}</p>
            <p> Role{user.role}</p>
        </div>
    );
};

export default Page;
