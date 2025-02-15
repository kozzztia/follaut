'use client'
import React, { useLayoutEffect } from 'react'

type Message = {
    id: number;
    author: string;
    message: string;
}

const Messager = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [messages, setmessages] = React.useState<Message[]>([])

    useLayoutEffect(() => {
        fetch(`${API_URL}/messages`)
        .then(res => res.json())
        .then(data => setmessages(data))
    }, [API_URL])
    if(messages.length === 0){
        return <p>loading...</p>
    }

  return (
    <>
        {
            messages?.map((message: Message) => (
                <div key={message.id}>
                    <h2>{message.author}</h2>
                    <p>{message.message}</p>
                </div>
            ))
        }
    </>
  )
}

export default Messager