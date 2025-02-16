"use client";
import React, { useRef, useState, useTransition } from "react";
import styles from "./styles.module.css";
import CustomButton from "./CustomButton";
import { sendMessage } from "./serverActions";

const MessageForm = () => {
    const [pending, startTransition] = useTransition();
    const messageRef = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState<string | null>(null);


    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
          const result = await sendMessage(formData);
          setMessage(result.message.message);
          messageRef.current?.reset();
        });
    };

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <form action={handleSubmit} className={styles.messageForm} ref={messageRef}>
          <input type="text" name="author" hidden value={user.name} readOnly/>
          <textarea name="message" className={styles.textarea} placeholder={`${message?message: 'empty now'}`}></textarea>
          <CustomButton disabled={pending} title="Send" className={styles.sendButton}/>
        </form>
    );
};

export default MessageForm;
