import React, {useState} from "react";
import styles from "./OnOff.module.css"

function OnOff() {

    const [on, setOn] = useState(false)

    return (
        <div className={styles.onoff_wrapper}>
            <div onClick={ () => { setOn(true) } }
                 className={`${styles.switcherOn} ${on && styles.green}`}>ON
            </div>
            <div onClick={ () => { setOn(false) } }
                 className={`${styles.switcherOff} ${!on && styles.red}`}>OFF
            </div>
            <div className={`${styles.circle} ${on && styles.green} ${!on && styles.red}`}></div>
        </div>
    )
}

export default OnOff;