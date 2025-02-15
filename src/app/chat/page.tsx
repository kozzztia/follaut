import Messager from '@/components/(server)/Messager/Messager';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "chat",
    description: "chat description",
  };
  

import React from 'react'

const page = () => {
    return (
        <>
            <Messager />
        </>
    )
}

export default page