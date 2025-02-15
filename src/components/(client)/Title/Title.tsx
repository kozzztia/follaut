'use client';
import React, { useEffect, useState } from 'react';

const Title = () => {
    const [userName, setUserName] = useState<string>('Guest');

    useEffect(() => {
        const updateUserName = () => {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            setUserName(user.name || 'Guest');
        };

        // Инициализация при монтировании
        updateUserName();

        // Подписка на событие обновления
        const handleCustomChange = () => updateUserName();
        window.addEventListener('user-update', handleCustomChange);

        return () => window.removeEventListener('user-update', handleCustomChange);
    }, []);

    return <p className="title">{userName}</p>;
};

export default Title;
