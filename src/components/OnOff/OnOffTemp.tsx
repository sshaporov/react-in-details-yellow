import React, {useState} from "react";
import styles from "./OnOff.module.css"


type PropsType = {
    onClick: (value: boolean) => void
    on: boolean
}
function OnOffTemp(props: PropsType) {

    const switchFn = (value: boolean) => {
        props.onClick(value)
    }

    return (
        <div className={styles.onoff_wrapper}>
            <div onClick={ () => switchFn(true) }
                 className={`${styles.switcherOn} ${props.on && styles.green}`}>ON
            </div>
            <div onClick={ () => switchFn(false) }
                 className={`${styles.switcherOff} ${!props.on && styles.red}`}>OFF
            </div>
            <div className={`${styles.circle} ${props.on && styles.green} ${!props.on && styles.red}`}></div>
        </div>
    )
}

export default OnOffTemp;