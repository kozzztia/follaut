"use client";
import React, { useRef, useTransition } from "react";
import styles from "./styles.module.css";
import CustomButton from "./CustomButton";

const MessageForm = () => {
    const [pending, startTransition] = useTransition();
    const messageRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
      const newMessage = formData.get("message");
        startTransition(async () => {
          console.log(newMessage);
          messageRef.current?.reset();
        });
    };

    return (
        <form action={handleSubmit} className={styles.messageForm} ref={messageRef}>
          <textarea name="message" className={styles.textarea}></textarea>
          <CustomButton disabled={pending} title="Send" className={styles.sendButton}/>
        </form>
    );
};

export default MessageForm;
