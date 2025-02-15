"use client";
import React, {useRef, useState, useTransition } from "react";
import styles from "./styles.module.css";
import { loginUser } from "./serverActions";
import { loginInputs } from "@/constants/constants";
import CustomInput from "./LoginInput";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await loginUser(formData);
            if (result.user) {
                router.push(`/chat`);
                localStorage.setItem("user", JSON.stringify(result.user));
                formRef.current?.reset();
            }
            setMessage(result.message);
        });
    };

    return (
        <form action={handleSubmit} className={styles.form} ref={formRef}>
            {loginInputs.map((input) => (
                <CustomInput key={input.id} {...input} disabled={pending} />
            ))}

            <CustomButton disabled={pending} title="Login" />

            <CustomButton disabled={pending} title="Logout" />

            <Link href="/login/registration" className={styles.link}>🔗 Регистрация</Link>

            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
};

export default LoginForm;
