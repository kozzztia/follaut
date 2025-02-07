'use client'
import { FC } from "react"
import { useRouter, usePathname } from "next/navigation"
import styles from "./styles.module.css"


const CustomButton: FC<{path: string, active: boolean}> = ({path}) => {
    const router = useRouter()
    const pathname = usePathname()
    const active = pathname === path

    const handler = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push(path)
    }

    return (
        <button
            onClick={handler}
            className={`${styles.button} ${active ? styles.active : ''}`}>
        </button>
    )
}

export default CustomButton


