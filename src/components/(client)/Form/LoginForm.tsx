"use client";
import React, { useRef, useState, useTransition } from "react";
import styles from "./styles.module.css";
import { loginUser } from "./serverActions";
import { loginInput } from "@/constants/constants";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

const LoginForm = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await loginUser(formData);
            if (result.user) {
                console.log("🟢 Пользователь найден:", result.user);
                formRef.current?.reset();
            }
            setMessage(result.message);
        });
    };

    return (
        <form action={handleSubmit} className={styles.form} ref={formRef}>

            {
                loginInput.map((input) => (
                    <LoginInput key={input.id} {...input} disabled={pending} />
                ))
            }

            <LoginButton disabled={pending} />

            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
};

export default LoginForm;
