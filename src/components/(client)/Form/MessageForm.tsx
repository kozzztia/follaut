"use client";
import React, { useRef, useTransition } from "react";
import styles from "./styles.module.css";
import CustomButton from "./CustomButton";
import { sendMessage } from "./serverActions";

const MessageForm = () => {
    const [pending, startTransition] = useTransition();
    const messageRef = useRef<HTMLFormElement>(null);


    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
          const newMessage = await sendMessage(formData);
          console.log(newMessage);
          messageRef.current?.reset();
        });
    };

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <form action={handleSubmit} className={styles.messageForm} ref={messageRef}>
          <input type="text" name="author" hidden value={user.name} readOnly/>
          <textarea name="message" className={styles.textarea}></textarea>
          <CustomButton disabled={pending} title="Send" className={styles.sendButton}/>
        </form>
    );
};

export default MessageForm;
