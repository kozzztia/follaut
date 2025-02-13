'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

type FullUser = {
    id: number;
    name: string;
    login: string;
    role: string;
    password: string;

};



const Page = () => {
    const login = usePathname().split("/")[2];
    const [user, setUser] = useState<FullUser | null>(null);

    React.useLayoutEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`/api/users?login=${login}`);
            const data = await response.json();
            setUser(data);
        };
        fetchUser();
    }, [login]);
    if(!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2>👤 Пользователь: {user?.name}</h2>
            <p>🔑 Логин: {user?.login}</p>
            <p>🆔 ID: {user?.id}</p>
            <p> Role: {user?.role}</p>
        </div>
    );
};

export default Page;
