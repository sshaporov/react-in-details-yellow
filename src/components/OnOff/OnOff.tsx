import React, {useState} from "react";
import styles from "./OnOff.module.css"

type PropsType = {
    onChange: (value: boolean) => void
    on: boolean
}
export function OnOff(props: PropsType) {

    return (
        <div className={styles.onoff_wrapper}>
            <div onClick={ () => props.onChange(true) }
                 className={`${styles.switcherOn} ${props.on && styles.green}`}>ON
            </div>
            <div onClick={ () => props.onChange(false) }
                 className={`${styles.switcherOff} ${!props.on && styles.red}`}>OFF
            </div>
            <div className={`${styles.circle} ${props.on && styles.green} ${!props.on && styles.red}`}></div>
        </div>
    )
}
