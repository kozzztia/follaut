import React from "react";
import styles from "./styles.module.css";

type Props = { title: "Login" | "Logout" | "Register" | "Send", disabled: boolean, className?: string };

const LoginButton: React.FC<Props> = ({ title, disabled, className}) => {
    if(title === "Logout") {
        return (
            <button type="button" className={`${styles.button} ${className}`} 
                onClick={() => localStorage.removeItem("user")}
            >
                {disabled ? "⏳ Loading..." : `🗑️ Logout`}
            </button>
        )
    }
    if(title === "Login" || title === "Register" || title === "Send") {
        return (
            <button type="submit" disabled={disabled} className={`${styles.button} ${className}`} >
                {disabled ? "⏳ Loading..." : `🚀 ${title}`}
            </button>
        )
    }
};

export default LoginButton;
