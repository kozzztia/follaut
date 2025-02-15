import React from 'react'
import styles from './styles.module.css'
import { FullMessageType } from './type';
import Message from './Message';



const getMessages = async (): Promise<FullMessageType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch messages");
    return res.json();
}

const Messager = async() => {
    const messages = await getMessages();

  return (
    <div className={styles.chat}>
        {
            messages?.map((message: FullMessageType) => (
                <Message key={message.id} message={message.message} author={message.author}/>
            ))
        }
    </div>
  )
}

export default Messager