import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("Accordion mode change event fired")

export const CollapsedMode = () => <Accordion titleValue='Menu Collapsed' onClick={callback} collapsed={true}/>
export const ExpandedMode = () => <Accordion titleValue='Menu Expanded' onClick={callback} collapsed={false}/>

export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(false)
    return <Accordion titleValue='Expanded' onClick={() => setValue(!value)} collapsed={value}/>
}