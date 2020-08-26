import React from "react";
import styles from "./OnOff.module.css"

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {

    console.log(props.on && true)
    return (
        <div className={styles.onoff_wrapper}>
            <div className={`${styles.switcherOn} ${props.on && styles.green}`}>ON</div>
            <div className={`${styles.switcherOff} ${!props.on && styles.red}`}>OFF</div>
            <div className={`${styles.circle} ${props.on && styles.green} ${!props.on && styles.red}`}></div>
        </div>
    )

    // if (props.on === true) {
    //     return (
    //         <div className={styles.onoff_wrapper}>
    //             <div className={styles.switcherOn + ' ' + styles.green}>ON</div>
    //             <div className={styles.switcherOff}>OFF</div>
    //             <div className={styles.circle  + ' ' + styles.green}></div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className={styles.onoff_wrapper}>
    //             <div className={styles.switcherOn}>ON</div>
    //             <div className={styles.switcherOff  + ' ' + styles.red}>OFF</div>
    //             <div className={styles.circle  + ' ' + styles.red}></div>
    //         </div>
    //     )
    // }

}