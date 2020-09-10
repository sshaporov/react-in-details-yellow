import React, {useState} from "react";
import styles from "../OnOff/OnOff.module.css"

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onClicked = () => {
        setOn(true)
        props.onChange(true);
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false);
    }

    return (
        <div className={styles.onoff_wrapper}>
            <div onClick={ onClicked }
                 className={`${styles.switcherOn} ${on && styles.green}`}>ON
            </div>
            <div onClick={ offClicked }
                 className={`${styles.switcherOff} ${!on && styles.red}`}>OFF
            </div>
            <div className={`${styles.circle} ${on && styles.green} ${!on && styles.red}`}></div>
        </div>
    )
}
