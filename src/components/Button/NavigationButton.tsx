import React, { FC } from 'react'
import styles from "./styles.module.css"
import CustomButton from '../kit/customButton/CustomButton'
import CustomTitle from '../kit/title/CustomTitle'

type Props = {
    path: string,  
    title: string,
}

const NavigationButton: FC<Props> = ({ path, title}) => {
        return (
            <label className={styles.buttonWrapper}>
                <CustomTitle title={title} />
                <CustomButton path={path} className={styles.button}/>
                <div className={styles.dirt}></div>
            </label>
        )
    }


export default NavigationButton

