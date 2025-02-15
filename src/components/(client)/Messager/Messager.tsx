"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { FullUser } from './type'
import MessageForm from '../Form/MessageForm'
import Link from 'next/link'

const Messager = () => {
  const [user, setUser] = useState<FullUser | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    fetchUser();
  }, []);

  return (
    <div className={styles.messager}>
        {
            user ? (
                <>
                    <p>{user.name}</p>
                    <MessageForm />
                </>
            ) : (
                <Link href="/login">Login</Link>
            )
        }
    </div>
  )
}

export default Messager