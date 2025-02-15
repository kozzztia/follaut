import React from "react";

type FullUser = {
    id: number;
    name: string;
    login: string;
    role: string;
    password: string;
};

type PageProps = {
    params: Promise<{ user: string }>;
};

const getUser = async (login: string): Promise<FullUser> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?login=${login}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
};

const Page = async ({ params }: PageProps) => {
    const resolvedParams = await params; // дожидаемся выполнения params
    const { user } = resolvedParams;
    const userData = await getUser(user);

    return (
        <div>
            <h2>👤 Имя: {userData.name}</h2>
            <p>🔑 Логин: {userData.login}</p>
            <p>🛠️ Роль: {userData.role}</p>
        </div>
    );
};

export default Page;

