import React from "react";
import styles from "./styles.module.css";

type Props = { disabled?: boolean };

const LoginButton: React.FC<Props> = ({ disabled }) => {
    return (
        <button type="submit" disabled={disabled} className={styles.button}>
            {disabled ? "⏳ Loading..." : "🚀 Login"}
        </button>
    );
};

export default LoginButton;
