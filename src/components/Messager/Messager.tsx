'use client'
import { env } from 'process';
import React, { useEffect } from 'react'

type Message = {
    id: number;
    author: string;
    message: string;
}

const Messager = () => {
    const [messages, setmessages] = React.useState<Message[]>([])

    useEffect(() => {
        fetch(`${env.NEXT_PUBLIC_API_URL}/messages`)
        .then(res => res.json())
        .then(data => setmessages(data))
    })
  return (
    <div>
        {
            messages.map((message: Message) => (
                <div key={message.id}>
                    <h2>{message.author}</h2>
                    <p>{message.message}</p>
                </div>
            ))
        }


    </div>
  )
}

export default Messager