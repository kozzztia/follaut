import React from 'react'

type Message = {
    id: number;
    author: string;
    message: string;
}

const getMessages = async (): Promise<Message[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch messages");
    return res.json();
}

const Messager = async() => {
    const messages = await getMessages();

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