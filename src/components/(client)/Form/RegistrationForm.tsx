"use client";
import React, { useRef, useState, useTransition } from "react";
import styles from "./styles.module.css";
import { registerUser } from "./serverActions";
import {registrationInputs } from "@/constants/constants";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const formRef = useRef<HTMLFormElement>(null);
    const pathname = useRouter();

    const handleSubmit = async (formData: FormData) => {
        startTransition(async () => {
            const result = await registerUser(formData);
            setMessage(result.message);   
            pathname.push("/chat");
        });
    };

    return (
        <form action={handleSubmit} className={styles.form} ref={formRef}>

            {
                registrationInputs.map((input) => (
                    <CustomInput key={input.id} {...input} disabled={pending} />
                ))
            }

            <CustomButton disabled={pending} />

            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
};

export default LoginForm;
