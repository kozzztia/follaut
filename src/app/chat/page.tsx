import Messager from '@/components/Messager/Messager';
import { env } from 'process';
import React from 'react'

const getMessages = async () => {
    try {
        const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/messages`, {
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

type Message = {
    id: number;
    author: string;
    message: string;
}

const page = async() => {
    const message = await getMessages();
    if(!message) {
        return (
            <>
                <h2>Messages not found</h2>
            </>
        )
    }
    return (
        <>
            {
                message.map((message: Message) => (
                    <div key={message.id}>
                        <h2>{message.author}</h2>
                        <p>{message.message}</p>
                    </div>
                ))
            }
            <Messager />
        </>
    )
}

export default page