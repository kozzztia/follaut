import React, { FC } from 'react'
import styles from "./styles.module.css"
import CustomButton from '../kit/customButton/CustomButton'
import CustomTitle from '../kit/title/CustomTitle'

// Основной компонент кнопки
const NavigationButton: FC<{ path: string,  title: string, className?: string,}> = ({ path, title}) => {
        return (
            <label className={styles.buttonWrapper}>
                <CustomTitle title={title} />
                <CustomButton path={path} className={styles.button}/>
                <div className={styles.dirty}></div>
            </label>
        )
    }


export default NavigationButton

