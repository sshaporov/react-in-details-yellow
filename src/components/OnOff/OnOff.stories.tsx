import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action("On or Off changed")

export const OnMode = () => <OnOff onChange={callback} on={true}/>
export const OffMode = () => <OnOff onChange={callback} on={false}/>

export const ModeChanging = () => {
    let [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn} />
}

