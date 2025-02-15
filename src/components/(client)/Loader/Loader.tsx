"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Loader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 200); // 1 секунда анимации

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return <div className={styles.loader} />;
};

export default Loader;
