import React, {useState} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)

    const toggleItems = () => setActive(!active)

    const onItemCLick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    return (
        <div className={styles.select}>
            <h3 className={styles.main} onClick={ toggleItems }>{selectedItem && selectedItem.title}</h3>
            {
                active &&
                <div className={styles.items}>
                    {props.items.map(i => <div onClick={ () => onItemCLick(i.value) } key={i.value}>{i.title}</div>
                    )}
                </div>
            }
        </div>
    )
}