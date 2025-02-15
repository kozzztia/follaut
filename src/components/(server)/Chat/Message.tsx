import React from 'react'
import styles from './styles.module.css'
import { MessageType } from './type'


const Message: React.FC<MessageType> = ({ message, author }) => {

    return (
        <div className={styles.message}>
            <span>{author}</span>
            :
            <p>{message}</p>
        </div>
    )
}

export default Message