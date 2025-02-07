'use client'

import { FC } from "react";
import { usePathname } from "next/navigation";

const Custom404: FC = () => {
    const name = usePathname();
    return (
        <div>
                <h1>404</h1>
                <h2>Page not found</h2>
                <h3>{name}</h3>
        </div>
    );
};

export default Custom404;