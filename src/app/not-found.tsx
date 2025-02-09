'use client'

import { FC } from "react";
import { usePathname } from "next/navigation";

const Custom404: FC = () => {
    const name = usePathname();
    return (
        <>
            <h1>404</h1>
            <h2>Page  {name} not found</h2>
        </>
    );
};

export default Custom404;