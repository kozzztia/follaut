import { Metadata } from "next";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const user = await getUser((await params).user);
    return {
        title: `${user.id}: ${user.name}`,
        description: `${user.login}`,
    };
}

const getUser = async (login: string): Promise<FullUser> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?login=${login}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
};


const Page = async ({ params }: PageProps) => {
    const resolvedParams = await params; 
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

