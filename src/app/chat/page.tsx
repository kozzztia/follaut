import Messager from '@/components/(client)/Messager/Messager';
import Chat from '@/components/(server)/Chat/Chat';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "chat",
    description: "chat description",
  };
  

import React from 'react'

const page = () => {
    return (
        <>
            <Chat />
            <Messager />
        </>
    )
}

export default page