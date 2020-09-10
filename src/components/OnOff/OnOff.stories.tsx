import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff onChange={action("On or Off changed")} on={true}/>
export const OffMode = () => <OnOff onChange={action("On or Off changed")} on={false}/>

export const ModeChanging = () => {
    let [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn} />
}

