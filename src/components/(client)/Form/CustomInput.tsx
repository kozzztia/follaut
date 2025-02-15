import React from 'react'
import styles from './styles.module.css'
import { InputType } from './type'

const LoginInput: React.FC<InputType & { disabled?: boolean, className?: string }> = ({ label, type, name, disabled, className }) => {
    return (
        <label className={`${className} ${styles.label}`}>
            <span className={styles.title}>{label}</span>
            <input
                className={styles.input}
                type={type}
                name={name}
                autoComplete='off'
                required
                disabled={disabled} />
        </label>
    )
}

export default LoginInput